import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { CustomException } from '../util/errores';
import { DataSource } from 'typeorm';
import DBConfig from '../config/db-config';
import { ArchivoRequest } from '../model/request/archivoRequest';
import { ArchivoResponse } from '../model/response/archivoResponse';

@Injectable()
export class ArchivoRepository {
  constructor(
    @InjectDataSource(DBConfig.getDBNombre())
    private readonly dataSource: DataSource,
  ) {}

  async addUpdateArchivo(
    archivoRequest: ArchivoRequest,
  ): Promise<ArchivoResponse> {
    try {
      const result = await this.dataSource.query(
        'EXEC sp_registraActualizaArchivos @0, @1, @2, @3, @4, @5',
        [
          archivoRequest.id_archivo,
          archivoRequest.nombre,
          archivoRequest.id_extencion,
          archivoRequest.ruta,
          archivoRequest.id_usuario,
          archivoRequest.ip,
        ],
      );
      return result[0];
    } catch (error) {
      throw new CustomException(error, '2fb67f0a-4af5-42e5-a8a3-a814ebe6c990');
    }
  }
}
