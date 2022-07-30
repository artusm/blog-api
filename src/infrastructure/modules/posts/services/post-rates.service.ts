import { Injectable } from '@nestjs/common';
import { CommentRateDto } from '../../../../domain/modules/posts/dto/comment-rate.dto';
import { CreateCommentRateDto } from '../../../../domain/modules/posts/dto/create-comment-rate.dto';
import { CreatePostRateDto } from '../../../../domain/modules/posts/dto/create-post-rate.dto';
import { PostRateDto } from '../../../../domain/modules/posts/dto/post-rate.dto';
import { CommentRatesRepository } from '../repositories/comment-rates.repository';
import { PostRatesRepository } from '../repositories/post-rates.repository';

@Injectable()
export class PostRatesService {
  constructor(
    private readonly postRatesRepository: PostRatesRepository,
    private readonly commentRatesRepository: CommentRatesRepository,
  ) {}

  async findAll(postId: number) {
    return this.postRatesRepository.findAll({ postId });
  }

  public async create({
    postId,
    userId,
    value,
  }: CreatePostRateDto): Promise<PostRateDto> {
    const [postRate] = await this.postRatesRepository.findAll({
      userId,
      postId,
    });

    const postDto = { postId, userId, value };

    if (!postRate) return this.postRatesRepository.create(postDto);

    return this.postRatesRepository.update(postRate.id, postDto);
  }

  public async findAllCommentRate(commentId: number) {
    return this.commentRatesRepository.findAll({ commentId });
  }

  public async createCommentRate(
    data: CreateCommentRateDto,
  ): Promise<CommentRateDto> {
    const { commentId, userId } = data;

    const [commentRate] = await this.commentRatesRepository.findAll({
      commentId,
      userId,
    });

    if (!commentRate) return this.commentRatesRepository.create(data);

    return this.commentRatesRepository.update(commentRate.id, data);
  }
}
