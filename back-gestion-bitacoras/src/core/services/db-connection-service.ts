import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import DBConfig from '../config/db-config';

@Injectable()
export class DBConnectionService implements TypeOrmOptionsFactory {
  /**
   * Configura y entrega las opciones de typeorm module
   *
   * @returns Entrega el cuerpo de opciones para typeorm module
   */
  public createTypeOrmOptions(): TypeOrmModuleOptions {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let extra: any;
    let ssl: boolean = false;

    if (DBConfig.getIsSSL() === true) {
      extra = {
        ssl: {
          rejectUnauthorized: false,
        },
      };
      ssl = true;
    }

    return {
      type: DBConfig.getTipoBaseDatos(),
      host: DBConfig.getHost(),
      port: parseInt(DBConfig.getPuertoComunicacion()),
      database: DBConfig.getDBNombre(),
      username: DBConfig.getNombreUsuario(),
      password: DBConfig.getContrasenia(),
      autoLoadEntities: true,
      entities: [__dirname + '/model/entities/*entity.ts'],
      synchronize: false,
      logging: true,
      poolSize: 5,
      ssl,
      extra,
      options: {
        encrypt: process.env.SGBD_DB_SSL === 'true', // Para cifrado SSL
        enableArithAbort: true, // Recomendado para compatibilidad con cifrado
        trustServerCertificate: true, // Acepta certificados auto-firmados
      },
    } as unknown as TypeOrmModuleOptions;
  }
}
