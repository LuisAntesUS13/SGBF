import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import DBConfig from '../config/db-config';

import { GeneralRepository } from './general.repository';
import {
  ConsultarConsultorResponse,
  ConsultarContratosResponse,
  ConsultarLiderTecnicoResponse,
} from '../model/response/equipoDeTrabajoResponse';
import { CustomException } from '../util/errores';

@Injectable()
export class EquiposDeTrabajoRepository {
  constructor(
    @InjectDataSource(DBConfig.getDBNombre())
    private readonly dataSource: DataSource,
    private readonly generalRepository: GeneralRepository,
  ) {}

  async getContratos(): Promise<ConsultarContratosResponse[]> {
    try {
      const result = await this.dataSource.query(
        'SELECT id_contrato, no_contrato FROM contratos',
      );
      return result;
    } catch (error) {
      throw new CustomException(error, '2fb67f0a-4af5-42e5-a8a3-a814ebe6cb89');
    }
  }

  async getLiderTecnico(): Promise<ConsultarLiderTecnicoResponse[]> {
    try {
      const innerJoin =
        ' INNER JOIN usuario_role on usuarios.id_usuario = usuario_role.id_usuario';
      const where = ' WHERE usuario_role.id_rol = 4';
      const result = await this.dataSource.query(
        " SELECT usuarios.id_usuario, CONCAT(nombre, ' ', primer_apellido, ' ', segundo_apellido) AS nombre_completo FROM usuarios" +
          innerJoin +
          where,
      );
      return result;
    } catch (error) {
      throw new CustomException(error, '2fb67f0a-4af5-42e5-a8a3-a814ebe6cb89');
    }
  }

  async getConsultor(): Promise<ConsultarConsultorResponse[]> {
    try {
      const innerJoin =
        ' INNER JOIN consultor_perfil on usuarios.id_usuario = consultor_perfil.id_usuario';
      const result = await this.dataSource.query(
        "SELECT usuarios.id_usuario, CONCAT(nombre, ' ', primer_apellido, ' ', segundo_apellido) AS nombre_completo FROM usuarios" +
          innerJoin,
      );
      return result;
    } catch (error) {
      throw new CustomException(error, '2fb67f0a-4af5-42e5-a8a3-a814ebe6cb89');
    }
  }
}
