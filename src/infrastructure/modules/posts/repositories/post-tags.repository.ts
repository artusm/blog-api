import { Injectable } from '@nestjs/common';
import { IPostTagsRepository } from '../../../../domain/modules/posts/interfaces/post-tags.repository.interface';
import { PrismaService } from '../../../common/prisma/prisma.service';

@Injectable()
export class PostTagsRepository implements IPostTagsRepository {
  constructor(private readonly client: PrismaService) {}

  public async findAll() {
    return this.client.postTags.findMany();
  }
}
