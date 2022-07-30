import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

interface IError {
  message: string;
  code_error: string;
}

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  constructor(
    private readonly logger: Logger,
    private readonly httpAdapterHost: HttpAdapterHost,
  ) {}

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request: any = ctx.getRequest();
    const { httpAdapter } = this.httpAdapterHost;

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? (exception.getResponse() as IError)
        : { message: (exception as Error).message, code_error: null };

    const responseBody = {
      ...{
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
      },
      ...message,
    };

    this.logMessage(request, message, status, exception);

    httpAdapter.reply(ctx.getResponse(), responseBody, status);
  }

  private logMessage(
    request: any,
    message: IError,
    status: number,
    exception: any,
  ) {
    if (status === 500) {
      this.logger.error(
        `method=${request.method} status=${status} code_error=${
          message.code_error ? message.code_error : null
        } message=${message.message ? message.message : null}`,
        status >= 500 ? exception.stack : '',
        `${request.method} ${request.path}`,
      );
    } else {
      this.logger.warn(
        `method=${request.method} status=${status} code_error=${
          message.code_error ? message.code_error : null
        } message=${message.message ? message.message : null}`,
        `${request.method} ${request.path}`,
      );
    }
  }
}
