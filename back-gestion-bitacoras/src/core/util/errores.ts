import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomException extends HttpException {
  constructor(message: string, codigoError: string, data: any = null) {
    super(
      {
        success: 0,
        message: message + (codigoError ? ' Error: ' + codigoError : ''),
        data: data,
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}
