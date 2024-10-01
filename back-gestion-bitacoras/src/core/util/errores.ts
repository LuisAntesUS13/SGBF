import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomException extends HttpException {
  constructor(message: string, codeError: string) {
    super(
      {
        message,
        codeError,
        error: '',
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}
