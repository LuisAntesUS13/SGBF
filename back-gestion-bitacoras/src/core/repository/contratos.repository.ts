import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { CustomException } from '../util/errores';
import { DataSource } from 'typeorm';
import DBConfig from '../config/db-config';
import {
  ConsultaContratoRequest,
  ConsultaPErfilesContratoRequest,
  RegistraActualizaContratoRequest,
} from '../model/request/contratoRequest';
import {
  ContratoResponse,
  PerfilContratoResponse,
} from '../model/response/contratoResponse';
import { GeneralRepository } from './general.repository';
import {
  ActualizaRegistraPerfilView,
  ActualizaRegistraView,
} from '../model/view/contrato.vew';
import { CatalogoAddUpdatePerfilContratoRequest } from '../model/request/catalogosRequest';

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
    request: RegistraActualizaContratoRequest,
  ): Promise<ActualizaRegistraView> {
    try {
      console.log(request);

      const result = await this.dataSource.query(
        'EXEC sp_registraActualizaContrato @0, @1, @2, @3, @4, @5, @6, @7, @8, @9, @10, @11, @12, @13, @14, @15, @16, @17, @18',
        [
          request.id_contrato,
          request.no_contrato,
          request.fh_inicio,
          // await this.generalRepository.StringStrinFechaSql(
          //   request.fh_inicio,
          // ),
          request.fh_termino,
          // await this.generalRepository.StringStrinFechaSql(
          //   request.fh_termino,
          // ),
          request.monto_variable,
          request.monto_fijo,
          request.monto_total,
          request.id_forma_pago,
          request.id_tipo_contrato,
          request.id_consultora,
          request.id_area,
          request.id_gerente,
          request.activo,
          request.id_archivo,
          request.nombre_archivo,
          request.id_extencion,
          request.ruta,
          request.id_usuario,
          request.ip,
        ],
      );

      return result[0];
    } catch (error) {
      throw new CustomException(error, '2fb67f0a-4af5-42e5-a8a3-a814ebe6c100');
    }
  }

  async addUpdatePerfilesContratos(
    request: CatalogoAddUpdatePerfilContratoRequest,
  ): Promise<ActualizaRegistraPerfilView> {
    try {
      const result = await this.dataSource.query(
        'EXEC sp_registraActualizaPerfilesContrato @0, @1, @2, @3, @4, @5, @6',
        [
          request.id_perfil_contrato,
          request.id_contrato,
          request.id_perfil,
          request.cantidad,
          request.activo,
          request.id_usuario,
          request.ip,
        ],
      );
      return result[0];
    } catch (error) {
      throw new CustomException(error, '2fb67f0a-4af5-50e5-a8a3-a814ebe6c99a');
    }
  }

  async getPerfilesContratos(
    request: ConsultaPErfilesContratoRequest,
  ): Promise<PerfilContratoResponse[]> {
    try {
      const result = await this.dataSource.query(
        'EXEC sp_consultaPerfilesContrato @0, @1, @2',
        [
          request.id_contrato,
          request.pagina_actual,
          request.registros_por_pagina,
        ],
      );
      return result;
    } catch (error) {
      throw new CustomException(error, '2fb67f0a-4af5-2024-a8a3-a814ebe6cb89');
    }
  }
}
