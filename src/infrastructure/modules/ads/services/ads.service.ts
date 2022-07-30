import { Injectable } from '@nestjs/common';
import { AdContentDto } from 'src/domain/modules/ads/dto/ad-content.dto';
import { CreateAdContentDto } from 'src/domain/modules/ads/dto/create-ad-content.dto';
import { AdsRepository } from '../repository/ads.repository';

@Injectable()
export class AdsService {
  constructor(private readonly adsRepository: AdsRepository) {}

  public async create(
    createAdContentDto: CreateAdContentDto,
  ): Promise<AdContentDto> {
    return this.adsRepository.create(createAdContentDto);
  }

  public async findAll(): Promise<AdContentDto[]> {
    return this.adsRepository.findAll();
  }

  public async delete(id: number): Promise<void> {
    return this.adsRepository.delete(id);
  }
}
