import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { CustomException } from '../util/errores';
import { DataSource } from 'typeorm';
import DBConfig from '../config/db-config';
import {
  UsuarioCargoResponse,
  UsuarioPorCargoRequest,
} from '../model/request/usuariosReques';

@Injectable()
export class UsuariosRepository {
  constructor(
    @InjectDataSource(DBConfig.getDBNombre())
    private readonly dataSource: DataSource,
  ) {}

  async getUsuariosPorCargo(
    request: UsuarioPorCargoRequest,
  ): Promise<UsuarioCargoResponse[]> {
    try {
      let condicion = 'WHERE 1 = 1'; // Siempre comenzamos con una condición que es verdadera
      const parametros: any[] = [];

      // Condición para el nombre
      if (request.cargo != '') {
        condicion +=
          ' AND UPPER(TRIM(cc.nombre)) LIKE UPPER(TRIM(@' +
          parametros.length +
          '))';
        parametros.push(`%${request.cargo}%`);
      }

      // Condición para el campo 'activo'
      if (request.activo != null) {
        condicion += ' AND u.activo = @' + parametros.length;
        parametros.push(request.activo);
      }

      const result = await this.dataSource.query(
        'SELECT u.nombre, u.primer_apellido, u.segundo_apellido, cc.nombre as  cargo FROM usuarios u ' +
          ' inner join cat_cargo cc on cc.id_cargo = u.id_cargo' +
          condicion,
        parametros,
      );
      return result;
    } catch (error) {
      throw new CustomException(error, '393ccefb-2da3-426e-bf85-eb63989be189');
    }
  }
}
