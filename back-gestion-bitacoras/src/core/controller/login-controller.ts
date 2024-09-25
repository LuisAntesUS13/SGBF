import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { LoginService } from '../services/login.service';
import { BaseResponse } from '../model/response/baseResponse';
import { LoginRequest } from '../model/request/loginRequest';
import { LoginResponse } from '../model/response/loginResponse';

@Controller('/sesion')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/login')
  async ExecuteStoredProcedure(
    @Body() loginRequest: LoginRequest,
  ): Promise<BaseResponse<LoginResponse>> {
    const datos = await this.loginService.login(loginRequest);

    const resultado = {
      message: 'Inicio de secion correcto',
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }
}
