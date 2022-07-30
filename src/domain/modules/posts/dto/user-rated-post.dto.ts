import { ApiProperty } from '@nestjs/swagger';
import { PostDto } from './post.dto';

export class UserRatedPostDto {
  @ApiProperty()
  post: PostDto;
}
