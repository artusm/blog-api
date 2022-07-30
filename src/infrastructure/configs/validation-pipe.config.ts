import { ValidationPipeOptions } from '@nestjs/common';

export const validationPripeConfig = {
  transform: true,
  whitelist: true,
  // whitelist: true,
  transformOptions: {
    enableImplicitConversion: true,
  },
} as ValidationPipeOptions;
