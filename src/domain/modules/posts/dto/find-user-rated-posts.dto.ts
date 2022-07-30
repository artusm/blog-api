import { PickType } from '@nestjs/swagger';
import { FindPostByQueryDto } from './find-post-by-query.dto';

export class FindUserRatedPostsDto extends PickType(FindPostByQueryDto, [
  'rateValue',
  'userId',
]) {}
