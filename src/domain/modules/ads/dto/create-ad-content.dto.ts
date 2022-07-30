import { OmitType } from '@nestjs/swagger';
import { AdContentDto } from './ad-content.dto';

export class CreateAdContentDto extends OmitType(AdContentDto, [
  'id',
  'createdAt',
  'updatedAt',
]) {}
