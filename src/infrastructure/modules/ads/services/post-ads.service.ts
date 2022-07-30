import { Injectable } from '@nestjs/common';
import { CreatePostAdDto } from '../../../../domain/modules/ads/dto/create-post-ad.dto';
import { PostAdDto } from '../../../../domain/modules/ads/dto/post-ad.dto';
import { PostAdsRepository } from '../repository/post-ads.repository';

@Injectable()
export class PostAdsService {
  constructor(private readonly postAdsRepository: PostAdsRepository) {}

  public async create(createPostAdDto: CreatePostAdDto): Promise<PostAdDto> {
    return this.postAdsRepository.create(createPostAdDto);
  }

  public async findAllPostAd(postId: number): Promise<PostAdDto[]> {
    return this.postAdsRepository.findAll({
      postId,
    });
  }

  public async delete(id: number): Promise<void> {
    return this.postAdsRepository.delete(id);
  }
}
