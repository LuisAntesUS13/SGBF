import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { CustomException } from '../util/errores';
import { DataSource } from 'typeorm';
import DBConfig from '../config/db-config';
import { ConsultaContratoRequest } from '../model/request/contratoRequest';
import { ContratoResponse } from '../model/response/contratoResponse';

@Injectable()
export class ContratosRepository {
  constructor(
    @InjectDataSource(DBConfig.getDBNombre())
    private readonly dataSource: DataSource,
  ) {}

  async getContratos(
    consultaContratoRequest: ConsultaContratoRequest,
  ): Promise<ContratoResponse> {
    try {
      const result = await this.dataSource.query(
        'EXEC sp_consultaContratos @0, @1, @2, @3',
        [
          consultaContratoRequest.contrato,
          consultaContratoRequest.consultora,
          consultaContratoRequest.pagina_actual,
          consultaContratoRequest.registros_por_pagina,
        ],
      );
      return result;
    } catch (error) {
      throw new CustomException(error, '2fb67f0a-4af5-42e5-a8a3-a814ebe6cb88');
    }
  }
}
