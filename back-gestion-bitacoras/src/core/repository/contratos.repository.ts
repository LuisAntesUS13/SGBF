import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { CustomException } from '../util/errores';
import { DataSource } from 'typeorm';
import DBConfig from '../config/db-config';
import {
  ConsultaContratoRequest,
  RegistraActualizaContratoRequest,
} from '../model/request/contratoRequest';
import { ContratoResponse } from '../model/response/contratoResponse';
import { GeneralRepository } from './general.repository';
import { ActualizaRegistraView } from '../model/view/contrato.vew';

@Injectable()
export class ContratosRepository {
  constructor(
    @InjectDataSource(DBConfig.getDBNombre())
    private readonly dataSource: DataSource,
    private readonly generalRepository: GeneralRepository,
  ) {}

  async getContratos(
    consultaContratoRequest: ConsultaContratoRequest,
  ): Promise<ContratoResponse[]> {
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
      throw new CustomException(error, '2fb67f0a-4af5-42e5-a8a3-a814ebe6cb89');
    }
  }

  async validaNumeroContrato(
    no_contrato: string,
    id_contrato: number | null,
  ): Promise<boolean> {
    try {
      const result = await this.dataSource.query(
        'SELECT id_contrato FROM contratos where no_contrato = @0 AND id_contrato = @1',
        [no_contrato, id_contrato],
      );
      return result.length > 0 ? false : true;
    } catch (error) {
      throw new CustomException(error, '2fb67f0a-4af5-42e5-a8a3-a814ebe6cb19');
    }
  }

  async addUpdateContratos(
    registraActualizaContratoRequest: RegistraActualizaContratoRequest,
  ): Promise<ActualizaRegistraView> {
    try {
      console.log(registraActualizaContratoRequest);

      const result = await this.dataSource.query(
        'EXEC sp_registraActualizaContrato @0, @1, @2, @3, @4, @5, @6, @7, @8, @9, @10, @11, @12, @13, @14, @15, @16, @17, @18',
        [
          registraActualizaContratoRequest.id_contrato,
          registraActualizaContratoRequest.no_contrato,
          registraActualizaContratoRequest.fh_inicio,
          // await this.generalRepository.StringStrinFechaSql(
          //   registraActualizaContratoRequest.fh_inicio,
          // ),
          registraActualizaContratoRequest.fh_termino,
          // await this.generalRepository.StringStrinFechaSql(
          //   registraActualizaContratoRequest.fh_termino,
          // ),
          registraActualizaContratoRequest.monto_variable,
          registraActualizaContratoRequest.monto_fijo,
          registraActualizaContratoRequest.monto_total,
          registraActualizaContratoRequest.id_forma_pago,
          registraActualizaContratoRequest.id_tipo_contrato,
          registraActualizaContratoRequest.id_consultora,
          registraActualizaContratoRequest.id_area,
          registraActualizaContratoRequest.id_gerente,
          registraActualizaContratoRequest.activo,
          registraActualizaContratoRequest.id_archivo,
          registraActualizaContratoRequest.nombre_archivo,
          registraActualizaContratoRequest.id_extencion,
          registraActualizaContratoRequest.ruta,
          registraActualizaContratoRequest.id_usuario,
          registraActualizaContratoRequest.ip,
        ],
      );

      console.log(result);
      return result[0];
    } catch (error) {
      throw new CustomException(error, '2fb67f0a-4af5-42e5-a8a3-a814ebe6c100');
    }
  }
}
