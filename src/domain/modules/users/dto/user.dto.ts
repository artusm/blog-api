import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { DtoBase } from '../../../common/base/dto.base';
import { Role } from '../enums/role.enum';

export class UserDto extends DtoBase {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty({ required: false })
  image?: string;

  @IsString()
  @ApiProperty()
  email: string;

  @IsEnum(Role)
  @ApiProperty({ enum: Role })
  role: Role;

  @IsString()
  @ApiProperty({ required: false })
  github?: string;
}
