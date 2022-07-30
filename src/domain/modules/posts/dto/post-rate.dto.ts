import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class PostRateDto {
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsNumber()
  @ApiProperty()
  value: number;

  @IsNumber()
  @ApiProperty()
  postId: number;

  @IsNumber()
  @ApiProperty()
  userId: number;
}
