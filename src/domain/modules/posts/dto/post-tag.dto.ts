import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { DtoBase } from '../../../common/base/dto.base';

export class PostTagDto extends DtoBase {
  @IsString()
  @ApiProperty()
  name: string;

  @IsNumber()
  @ApiProperty()
  postId: number;
}
