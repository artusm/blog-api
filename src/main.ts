import 'dotenv/config';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { validationPripeConfig } from './infrastructure/configs/validation-pipe.config';
import { swaggerConfig } from './infrastructure/configs/swagger.config';
import { apiConfig } from './infrastructure/configs/api.config';
import { LoggingInterceptor } from './infrastructure/common/interceptors/logger.interceptor';
import { Logger as PinoLogger } from 'nestjs-pino';
import { AllExceptionFilter } from './infrastructure/common/filters/exceptions-logger.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  app.useLogger(app.get(PinoLogger));
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe(validationPripeConfig));
  app.useGlobalInterceptors(new LoggingInterceptor(app.get(PinoLogger)));
  app.useGlobalFilters(
    new AllExceptionFilter(app.get(PinoLogger), app.get(HttpAdapterHost)),
  );
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);
  await app.listen(apiConfig.port);
}

bootstrap();
