import { DBEnum } from '../util/db-enum';
import { CustomException } from '../util/errores';

export default class DBConfig {
  /**
   * Genera a partir de variable de entorno o
   *     nombre de base de datos por defecto
   *     el nombre de la base de datos.
   *
   * @returns Entrega el nombre de la base de datos.
   */
  public static getDBNombre(): string {
    return process.env.SGBD_DB_NAME || DBEnum.SGBD_DB_NAME;
  }

  /**
   * Genera a partir de variable de entorno o
   *     tipo de base de datos por defecto
   *     el tipo de base de datos.
   *
   * @returns Entrega el tipo de base de datos.
   */
  public static getTipoBaseDatos(): string {
    return process.env.DB_TIPO || DBEnum.DB_TIPO;
  }

  /**
   * Genera a partir de variable de entorno
   *     el host de la base de datos.
   *
   * @returns Entrega el host de base de datos.
   */
  public static getHost(): string {
    if (process.env.SGBD_DB_HOST === undefined) {
      throw new CustomException(
        'La variable SGBD_DB_HOST no está asignada',
        'a variable SGBD_DB_HOST',
        '2fb67f0a-4af5-42e5-a8a3-a814ebe6cb88',
      );
    }
    return process.env.SGBD_DB_HOST;
  }

  /**
   * Genera a partir de variable de entorno o
   *     puerto de base de datos por defecto
   *     el puerto de base de datos.
   *
   * @returns Entrega el tipo de base de datos.
   */
  public static getPuertoComunicacion(): string {
    return process.env.SGBD_DB_PORT || DBEnum.SGBD_DB_PORT;
  }

  /**
   * Genera a partir de variable de entorno
   *     el usuario de base de datos.
   *
   * @returns Entrega el usuario de base de datos.
   */
  public static getNombreUsuario(): string {
    if (process.env.SGBD_DB_USER === undefined) {
      throw new CustomException(
        'La variable SGBD_DB_USER no está asignada',
        'La variable SGBD_DB_USER',
        '2fb67f0a-4af5-42e5-a8a3-a814ebe6cb89',
      );
    }
    return process.env.SGBD_DB_USER;
  }

  /**
   * Genera a partir de variable de entorno
   *     el contrasenia de base de datos.
   *
   * @returns Entrega la contrasenia de base de datos.
   */
  public static getContrasenia(): string {
    if (process.env.SGBD_DB_CRED === undefined) {
      throw new CustomException(
        'La variable SGBD_DB_CRED no está asignada',
        'La variable SGBD_DB_CRED',
        '2fb67f0a-4af5-42e5-a8a3-a814ebe6cb90',
      );
    }
    return process.env.SGBD_DB_CRED;
  }

  /**
   * Variable de entorno SGBD_DB_SSL
   *
   * @returns {boolean} Entrega variable de entorno.
   */
  public static getIsSSL(): boolean {
    if (process.env.SGBD_DB_SSL === undefined) {
      throw new CustomException(
        'La variable SGBD_DB_SSL no está asignada',
        'La variable SGBD_DB_SSL',
        '2fb67f0a-4af5-42e5-a8a3-a814ebe6cb91',
      );
    }
    return JSON.parse(process.env.SGBD_DB_SSL);
  }
}
