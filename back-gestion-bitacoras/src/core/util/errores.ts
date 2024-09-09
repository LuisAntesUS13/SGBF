import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomException extends HttpException {
  constructor(mensaje: string, codeError: string) {
    super(
      {
        mensaje,
        codeError,
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}
