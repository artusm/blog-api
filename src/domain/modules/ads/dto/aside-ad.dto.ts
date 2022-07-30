import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsObject } from 'class-validator';
import { DtoBase } from '../../../../domain/common/base/dto.base';
import { AdContentDto } from './ad-content.dto';

export class AsideAdDto extends DtoBase {
  @IsNumber()
  @ApiProperty()
  adContentId: number;

  @IsBoolean()
  @ApiProperty()
  isAvailable = true;

  @IsNumber()
  @ApiProperty({ description: 'Campaign time in milliseconds' })
  campaignTime: number;

  @IsObject()
  @ApiProperty({ type: AdContentDto })
  adContent: AdContentDto;
}
