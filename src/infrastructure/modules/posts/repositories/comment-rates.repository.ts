import { Injectable } from '@nestjs/common';
import { ICommentRatesRepository } from '../../../../domain/modules/posts/interfaces/comment-rates.repository.interface';
import { PrismaService } from '../../../common/prisma/prisma.service';
import { CommentRateDto } from '../../../../domain/modules/posts/dto/comment-rate.dto';
import { CreateCommentRateDto } from '../../../../domain/modules/posts/dto/create-comment-rate.dto';
import { UpdateCommentRateDto } from '../../../../domain/modules/posts/dto/update-comment-rate.dto';

@Injectable()
export class CommentRatesRepository implements ICommentRatesRepository {
  constructor(private readonly client: PrismaService) {}

  public async create(createCommentRateDto: CreateCommentRateDto) {
    return this.client.commentRates.create({
      data: createCommentRateDto,
    });
  }

  public async update(id: number, data: UpdateCommentRateDto) {
    return this.client.commentRates.update({
      where: { id },
      data,
    });
  }

  public async findAll(data: Partial<CommentRateDto>) {
    return this.client.commentRates.findMany({
      where: {
        ...data,
      },
    });
  }
}
