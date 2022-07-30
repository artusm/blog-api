import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { DtoBase } from '../../../common/base/dto.base';
import { UserDto } from '../../users/dto/user.dto';
import { CommentDto } from './comment.dto';
import { PostCandidatureDto } from './post-candidature.dto';
import { PostRateDto } from './post-rate.dto';
import { PostTagDto } from './post-tag.dto';

export class PostDto extends DtoBase {
  @IsString()
  @ApiProperty()
  slug: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  image?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  link?: string;

  @IsString()
  @ApiProperty()
  title: string;

  @IsString()
  @ApiProperty()
  content: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  description?: string;

  @IsNumber()
  @ApiProperty()
  userId: number;

  // Relations
  @IsOptional()
  @ApiProperty({ type: UserDto })
  user?: UserDto;

  @IsOptional()
  @ApiProperty({ type: [CommentDto] })
  comments?: CommentDto[] = [];

  @IsOptional()
  @ApiProperty({ type: [PostRateDto] })
  rates?: PostRateDto[] = [];

  @IsOptional()
  @ApiProperty({ type: [PostCandidatureDto] })
  candidatures?: PostCandidatureDto[] = [];

  @IsOptional()
  @ApiProperty({ type: [PostTagDto] })
  tags?: PostTagDto[] = [];
}
