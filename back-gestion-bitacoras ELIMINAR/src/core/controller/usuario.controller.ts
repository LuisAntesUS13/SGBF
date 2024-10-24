import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { UsuariosService } from '../services/usuarios.service';
import {
  UsuarioCargoResponse,
  UsuarioPorCargoRequest,
} from '../model/request/usuariosReques';
import { BaseResponse } from '../model/response/baseResponse';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('/porCargo')
  async getUsuariosPorCargo(
    @Body() request: UsuarioPorCargoRequest,
  ): Promise<BaseResponse<UsuarioCargoResponse[]>> {
    const datos = await this.usuariosService.getUsuariosPorCargo(request);

    const resultado = {
      success: true,
      message: 'Se consultaron correctamente los usuarios',
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }
}
