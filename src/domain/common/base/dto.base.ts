import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber } from 'class-validator';

export class DtoBase {
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsDate()
  @ApiProperty()
  createdAt: Date;

  @IsDate()
  @ApiProperty()
  updatedAt: Date;
}
