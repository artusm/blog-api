import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../common/prisma/prisma.service';
import { CreateCommentDto } from '../../../../domain/modules/posts/dto/create-comment.dto';
import { UpdateCommentDto } from '../../../../domain/modules/posts/dto/update-comment.dto';
import { CommentDto } from '../../../../domain/modules/posts/dto/comment.dto';
import { ICommentsRepository } from '../../../../domain/modules/posts/interfaces/comments.repository.interface';

@Injectable()
export class CommentsRepository implements ICommentsRepository {
  constructor(private readonly client: PrismaService) {}

  public async create(createCommentDto: CreateCommentDto): Promise<CommentDto> {
    return this.client.comments.create({
      data: createCommentDto,
    });
  }

  public async delete(id: number): Promise<CommentDto> {
    return this.client.comments.delete({
      where: {
        id,
      },
    });
  }

  public async update(id: number, data: UpdateCommentDto): Promise<CommentDto> {
    return this.client.comments.update({
      where: { id },
      data,
    });
  }

  public async findAll(
    data: Partial<Omit<CommentDto, 'user' | 'rates'>>,
  ): Promise<CommentDto[]> {
    return this.client.comments.findMany({
      where: {
        ...data,
      },
      include: {
        user: true,
      },
    }) as Promise<CommentDto[]>;
  }
}
