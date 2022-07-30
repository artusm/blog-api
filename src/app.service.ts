import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  ping(): { ok: boolean } {
    return { ok: true };
  }
}
