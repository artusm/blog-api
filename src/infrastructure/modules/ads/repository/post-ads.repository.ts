import { Injectable } from '@nestjs/common';
import { CreatePostAdDto } from '../../../../domain/modules/ads/dto/create-post-ad.dto';
import { PostAdDto } from '../../../../domain/modules/ads/dto/post-ad.dto';
import { PrismaService } from '../../../common/prisma/prisma.service';

@Injectable()
export class PostAdsRepository {
  constructor(private readonly client: PrismaService) {}

  public async create(createPostAdDto: CreatePostAdDto): Promise<PostAdDto> {
    return this.client.postAds.create({
      data: {
        ...createPostAdDto,
      },
    });
  }

  public async findAll(data: Partial<PostAdDto>): Promise<PostAdDto[]> {
    return this.client.postAds.findMany({
      where: {
        ...data,
      },
    });
  }

  public async delete(id: number): Promise<void> {
    await this.client.postAds.delete({
      where: {
        id,
      },
    });
  }
}
