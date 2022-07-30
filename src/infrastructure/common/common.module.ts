import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConfig } from '../configs/jwt.config';
import { PrismaService } from './prisma/prisma.service';
import { AuthenticatorJwtStrategy } from './strategies/jwt.strategy';

@Global()
@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConfig.secret,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [PrismaService, AuthenticatorJwtStrategy],
  exports: [PrismaService, JwtModule],
})
export class CommonModule {}
