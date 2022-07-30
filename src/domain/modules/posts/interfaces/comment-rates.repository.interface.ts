import {
  CreateEntity,
  FindAllEntity,
  UpdateEntity,
} from '../../../common/base/repository.base';
import { CommentRateDto } from '../dto/comment-rate.dto';
import { CreateCommentRateDto } from '../dto/create-comment-rate.dto';
import { UpdateCommentRateDto } from '../dto/update-comment-rate.dto';

export interface ICommentRatesRepository
  extends CreateEntity<CommentRateDto, CreateCommentRateDto>,
    UpdateEntity<CommentRateDto, UpdateCommentRateDto>,
    FindAllEntity<CommentRateDto, Partial<CommentRateDto>> {}
