import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { DtoBase } from '../../../common/base/dto.base';

export class AdContentDto extends DtoBase {
  @IsString()
  @ApiProperty()
  title: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  description?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  image?: string;

  @IsString()
  @ApiProperty()
  link: string;
}
