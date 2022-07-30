import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiTags('ping')
  @Get()
  ping(): { ok: boolean } {
    return this.appService.ping();
  }
}
