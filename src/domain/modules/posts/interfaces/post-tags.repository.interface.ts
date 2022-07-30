import { FindAllEntity } from '../../../common/base/repository.base';
import { PostTagDto } from '../dto/post-tag.dto';

export interface IPostTagsRepository extends FindAllEntity<PostTagDto> {}
