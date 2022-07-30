import { PickType } from '@nestjs/swagger';
import { PostAcessDto } from './post-acess.dto';

export class CreatePostAccessDto extends PickType(PostAcessDto, [
  'postSlug',
  'userId',
]) {}
