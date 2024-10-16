import { Injectable } from '@nestjs/common';
import { UsuariosRepository } from '../repository/usuarios.repository';
import {
  UsuarioCargoResponse,
  UsuarioPorCargoRequest,
} from '../model/request/usuariosReques';

@Injectable()
export class UsuariosService {
  constructor(private readonly usuariosRepository: UsuariosRepository) {}

  public async getUsuariosPorCargo(
    request: UsuarioPorCargoRequest,
  ): Promise<UsuarioCargoResponse[]> {
    const datosCatalogo =
      await this.usuariosRepository.getUsuariosPorCargo(request);

    return datosCatalogo;
  }
}
