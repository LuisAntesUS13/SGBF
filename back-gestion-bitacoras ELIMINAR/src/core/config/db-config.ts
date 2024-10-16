import { DBEnum } from '../util/db-enum';
import { CustomException } from '../util/errores';

export default class DBConfig {
  public static getDBNombre(): string {
    return process.env.SGBD_DB_NAME || DBEnum.SGBD_DB_NAME;
  }

  public static getTipoBaseDatos(): string {
    return process.env.DB_TIPO || DBEnum.DB_TIPO;
  }

  public static getHost(): string {
    if (process.env.SGBD_DB_HOST === undefined) {
      throw new CustomException(
        'La variable SGBD_DB_HOST no está asignada',
        '2fb67f0a-4af5-42e5-a8a3-a814ebe6cb88',
      );
    }
    return process.env.SGBD_DB_HOST;
  }

  public static getPuertoComunicacion(): string {
    return process.env.SGBD_DB_PORT || DBEnum.SGBD_DB_PORT;
  }

  public static getNombreUsuario(): string {
    if (process.env.SGBD_DB_USER === undefined) {
      throw new CustomException(
        'La variable SGBD_DB_USER no está asignada',
        '2fb67f0a-4af5-42e5-a8a3-a814ebe6cb89',
      );
    }
    return process.env.SGBD_DB_USER;
  }

  public static getContrasenia(): string {
    if (process.env.SGBD_DB_CRED === undefined) {
      throw new CustomException(
        'La variable SGBD_DB_CRED no está asignada',
        '2fb67f0a-4af5-42e5-a8a3-a814ebe6cb90',
      );
    }
    return process.env.SGBD_DB_CRED;
  }

  public static getIsSSL(): boolean {
    if (process.env.SGBD_DB_SSL === undefined) {
      throw new CustomException(
        'La variable SGBD_DB_SSL no está asignada',
        '2fb67f0a-4af5-42e5-a8a3-a814ebe6cb91',
      );
    }
    return JSON.parse(process.env.SGBD_DB_SSL);
  }
}
