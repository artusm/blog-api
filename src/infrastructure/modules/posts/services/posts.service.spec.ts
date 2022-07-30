import { Test, TestingModule } from '@nestjs/testing';
import { PostAccessRepository } from '../repositories/post-access.repository';
import { PostRatesRepository } from '../repositories/post-rates.repository';
import { PostTagsRepository } from '../repositories/post-tags.repository';
import { PostsRepository } from '../repositories/posts.repository';
import { PostsService } from './posts.service';

describe('PostsService', () => {
  let service: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostsService,
        {
          provide: PostsRepository,
          useValue: {},
        },
        {
          provide: PostRatesRepository,
          useValue: {},
        },
        {
          provide: PostTagsRepository,
          useValue: {},
        },
        {
          provide: PostAccessRepository,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
