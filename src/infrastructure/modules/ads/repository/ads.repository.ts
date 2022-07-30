import { Injectable } from '@nestjs/common';
import { AdContentDto } from 'src/domain/modules/ads/dto/ad-content.dto';
import { CreateAdContentDto } from 'src/domain/modules/ads/dto/create-ad-content.dto';
import { PrismaService } from '../../../common/prisma/prisma.service';

@Injectable()
export class AdsRepository {
  constructor(private readonly client: PrismaService) {}

  public async create(
    createAdContentDto: CreateAdContentDto,
  ): Promise<AdContentDto> {
    return this.client.adContents.create({
      data: {
        ...createAdContentDto,
      },
    });
  }

  public async findAll(): Promise<AdContentDto[]> {
    return this.client.adContents.findMany();
  }

  public async delete(id: number): Promise<void> {
    await this.client.adContents.delete({
      where: {
        id,
      },
    });
  }
}
