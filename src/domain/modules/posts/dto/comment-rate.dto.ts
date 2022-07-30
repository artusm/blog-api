import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CommentRateDto {
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsNumber()
  @ApiProperty()
  value: number;

  @IsNumber()
  @ApiProperty()
  commentId: number;

  @IsNumber()
  @ApiProperty()
  userId: number;
}
