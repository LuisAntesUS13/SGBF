import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomException extends HttpException {
  constructor(message: string, error: string, code: string) {
    super(
      {
        message,
        error,
        code,
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}
