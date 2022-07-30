import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class NonBlockingJwtAuthGuard
  extends AuthGuard(['authenticatorJwt'])
  implements CanActivate
{
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      await super.canActivate(context);
    } finally {
      return true;
    }
  }
}
