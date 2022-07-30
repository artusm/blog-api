import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AdContentDto } from 'src/domain/modules/ads/dto/ad-content.dto';
import { CreateAdContentDto } from 'src/domain/modules/ads/dto/create-ad-content.dto';
import { Role } from '../../../../domain/modules/users/enums/role.enum';
import { RequireRole } from '../../../common/decorators/require-role.decorator';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../../common/guards/roles.guard';
import { AdsService } from '../services/ads.service';

@ApiTags('ads')
@Controller('ads')
export class AdsController {
  constructor(private readonly adsService: AdsService) {}

  @Post()
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @RequireRole(Role.ADMIN)
  @ApiBearerAuth()
  @ApiResponse({ type: AdContentDto })
  create(
    @Body() createAdContentDto: CreateAdContentDto,
  ): Promise<AdContentDto> {
    return this.adsService.create(createAdContentDto);
  }

  @Get()
  @ApiResponse({ type: [AdContentDto] })
  findAll(): Promise<AdContentDto[]> {
    return this.adsService.findAll();
  }

  @Delete(':id')
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @RequireRole(Role.ADMIN)
  @ApiBearerAuth()
  @ApiResponse({ type: null })
  update(@Param('id') id: string): Promise<void> {
    return this.adsService.delete(+id);
  }
}
