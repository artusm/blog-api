import { Injectable } from '@nestjs/common';
import { CreatePostAccessDto } from '../../../../domain/modules/posts/dto/create-post-access.dto';
import { PostAcessDto } from '../../../../domain/modules/posts/dto/post-acess.dto';
import { IPostAccessRepository } from '../../../../domain/modules/posts/interfaces/post-access.repository.interface';
import { PrismaService } from '../../../common/prisma/prisma.service';

@Injectable()
export class PostAccessRepository implements IPostAccessRepository {
  constructor(private readonly client: PrismaService) {}

  public async create({
    postSlug,
    userId,
  }: CreatePostAccessDto): Promise<PostAcessDto> {
    return this.client.postAccess.create({
      data: {
        postSlug,
        userId,
      },
    });
  }

  public async findAll(data: Partial<PostAcessDto>): Promise<PostAcessDto[]> {
    return this.client.postAccess.findMany({
      where: {
        ...data,
      },
    });
  }
}
