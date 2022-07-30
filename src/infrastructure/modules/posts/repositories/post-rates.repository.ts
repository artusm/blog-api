import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../common/prisma/prisma.service';
import { CreatePostRateDto } from '../../../../domain/modules/posts/dto/create-post-rate.dto';
import { PostRateDto } from '../../../../domain/modules/posts/dto/post-rate.dto';
import { UpdatePostRateDto } from '../../../../domain/modules/posts/dto/update-post-rate.dto';
import { FindUserRatedPostsDto } from '../../../../domain/modules/posts/dto/find-user-rated-posts.dto';
import { IPostRatesRepository } from '../../../../domain/modules/posts/interfaces/post-rates.repository.interface';
import { UserRatedPostDto } from '../../../../domain/modules/posts/dto/user-rated-post.dto';

@Injectable()
export class PostRatesRepository implements IPostRatesRepository {
  constructor(private readonly client: PrismaService) {}

  public async create(
    createPostRateDto: CreatePostRateDto,
  ): Promise<PostRateDto> {
    return this.client.postRates.create({
      data: createPostRateDto,
    });
  }

  public async findUserRatedPosts({
    rateValue,
    userId,
  }: FindUserRatedPostsDto): Promise<UserRatedPostDto[]> {
    return this.client.postRates.findMany({
      where: {
        userId,
        value: rateValue,
      },
      select: {
        post: {
          include: {
            tags: true,
            rates: true,
            comments: true,
            user: true,
            candidatures: true,
          },
        },
      },
      orderBy: {
        postId: 'desc',
      },
    }) as Promise<UserRatedPostDto[]>;
  }

  public async update(
    id: number,
    data: UpdatePostRateDto,
  ): Promise<PostRateDto> {
    return this.client.postRates.update({
      where: { id },
      data,
    });
  }

  public async findAll(data: Partial<PostRateDto>): Promise<PostRateDto[]> {
    return this.client.postRates.findMany({
      where: {
        ...data,
      },
    });
  }
}
