import { Module } from '@nestjs/common';
import { AdsController } from './controllers/ads.controller';
import { PostAdsController } from './controllers/post-ad.controller';
import { AdsRepository } from './repository/ads.repository';
import { PostAdsRepository } from './repository/post-ads.repository';
import { AdsService } from './services/ads.service';
import { PostAdsService } from './services/post-ads.service';

@Module({
  controllers: [AdsController, PostAdsController],
  providers: [AdsService, AdsRepository, PostAdsService, PostAdsRepository],
})
export class AdsModule {}
