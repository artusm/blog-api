import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: Logger) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest();
    const ip = this.getIP(request);
    const data = request.method === 'GET' ? request.query : request.body;
    const headers = request.headers;
    const message = { ip, data, headers };

    this.logger.log(message, `${request.method} ${request.path}`);

    return next.handle().pipe(
      tap(() => {
        this.logger.log(
          `End Request: method= ip=${ip} duration=${Date.now() - now}ms`,
          `${request.method} ${request.path}`,
        );
      }),
    );
  }

  private getIP(request: any): string {
    let ip: string;
    const ipAddr = request.headers['x-forwarded-for'];
    if (ipAddr) {
      const list = ipAddr.split(',');
      ip = list[list.length - 1];
    } else {
      ip = request.connection.remoteAddress;
    }
    return ip.replace('::ffff:', '');
  }
}
