import { Controller, Get, Post, Body, Query, UseGuards } from '@nestjs/common';
import { CreatePostRateDto } from '../../../../domain/modules/posts/dto/create-post-rate.dto';
import { PostRateDto } from '../../../../domain/modules/posts/dto/post-rate.dto';
import { CreateCommentRateDto } from '../../../../domain/modules/posts/dto/create-comment-rate.dto';
import { CommentRateDto } from '../../../../domain/modules/posts/dto/comment-rate.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostRatesService } from '../services/post-rates.service';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';

@ApiTags('rates')
@Controller('/posts')
export class PostRatesController {
  constructor(private readonly postRatesService: PostRatesService) {}

  @Post('/rates')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiResponse({ type: PostRateDto })
  public async create(
    @Body() createPostRateDto: CreatePostRateDto,
  ): Promise<PostRateDto> {
    return this.postRatesService.create(createPostRateDto);
  }

  @Get('/rates')
  @ApiResponse({ type: [PostRateDto] })
  async findAll(@Query('postId') postId: string) {
    console.log(postId);
    return this.postRatesService.findAll(+postId);
  }

  @Post('/comments/rates')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiResponse({ type: CommentRateDto })
  public async createCommentRate(
    @Body() createCommentRateDto: CreateCommentRateDto,
  ): Promise<CommentRateDto> {
    return this.postRatesService.createCommentRate(createCommentRateDto);
  }

  @Get('/comments/rates')
  @ApiResponse({ type: [CommentRateDto] })
  public async findAllCommentRate(@Query('commentId') commentId: string) {
    return this.postRatesService.findAllCommentRate(+commentId);
  }
}
