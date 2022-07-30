import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConfig } from 'src/infrastructure/configs/jwt.config';

export type AuthenticatorDecodedToken = {
  appId?: string;
  sub?: string;
  name: string;
  email: string;
  phone?: string;
};

@Injectable()
export class AuthenticatorJwtStrategy extends PassportStrategy(
  Strategy,
  'authenticatorJwt',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConfig.secret,
    });
  }

  async validate(payload: AuthenticatorDecodedToken) {
    return payload;
  }
}
