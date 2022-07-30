import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Rest Api documentation.')
  .setVersion('1.0')
  .addBearerAuth()
  .setDescription(
    '',
  )
  .build();
