import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { CustomException } from '../util/errores';
import { DataSource } from 'typeorm';
import DBConfig from '../config/db-config';

@Injectable()
export class AccionRepository {
  constructor(
    @InjectDataSource(DBConfig.getDBNombre())
    private readonly dataSource: DataSource,
  ) {}

  async executeStoredProcedure(): Promise<any> {
    try {
      const result = await this.dataSource.query('EXEC ConsultaCatalogo', []);
      console.log(result);
      return result;
    } catch (error) {
      throw new CustomException(
        'Error en executeStoredProcedure',
        error,
        '2fb67f0a-4af5-42e5-a8a3-a814ebe6cb88',
      );
    }
  }
}
