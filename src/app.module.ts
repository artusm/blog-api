import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './infrastructure/modules/users/users.module';
import { PostsModule } from './infrastructure/modules/posts/posts.module';
import { AdsModule } from './infrastructure/modules/ads/ads.module';
import { LoggerModule } from 'nestjs-pino';
import { CommonModule } from './infrastructure/common/common.module';
import { pinoConfig } from './infrastructure/configs/pino.config';

@Module({
  imports: [
    CommonModule,
    UsersModule,
    PostsModule,
    AdsModule,
    LoggerModule.forRoot(pinoConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
