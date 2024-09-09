import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { CustomException } from '../util/errores';
import { DataSource } from 'typeorm';
import DBConfig from '../config/db-config';
import { datosSpLoginView } from '../model/view/datos_sp_login';

@Injectable()
export class PermisosRepository {
  constructor(
    @InjectDataSource(DBConfig.getDBNombre())
    private readonly dataSource: DataSource,
  ) {}

  async login(usuario: string): Promise<datosSpLoginView> {
    try {
      const result = await this.dataSource.query('EXEC sp_login @0', [usuario]);
      return result[0];
    } catch (error) {
      throw new CustomException(error, '2fb67f0a-4af5-42e5-a8a3-a814ebe6cb88');
    }
  }
}
