import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserDto } from '../../../../domain/modules/users/dto/user.dto';
import { CommentDto } from '../../../../domain/modules/posts/dto/comment.dto';
import { CreateCommentDto } from '../../../../domain/modules/posts/dto/create-comment.dto';
import { UpdateCommentDto } from '../../../../domain/modules/posts/dto/update-comment.dto';
import { CommentsRepository } from '../repositories/comments.repository';
import { Role } from '../../../../domain/modules/users/enums/role.enum';

@Injectable()
export class PostCommentsService {
  constructor(private readonly commentsRepository: CommentsRepository) {}

  async findAll(postId: number) {
    return this.commentsRepository.findAll({ postId });
  }

  public async delete(commentId: number, user: UserDto): Promise<CommentDto> {
    if (user.role !== Role.ADMIN) {
      const [comment] = await this.commentsRepository.findAll({
        userId: user.id,
        id: commentId,
      });

      if (!comment)
        throw new ForbiddenException(
          'You are only allowed to delete your own comments!',
        );
    }

    return this.commentsRepository.delete(commentId);
  }

  public async create(createCommentDto: CreateCommentDto): Promise<CommentDto> {
    return this.commentsRepository.create(createCommentDto);
  }

  public async update(
    commentId: number,
    updateCommentDto: UpdateCommentDto,
  ): Promise<CommentDto> {
    return this.commentsRepository.update(commentId, updateCommentDto);
  }
}
