import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { CustomException } from '../util/errores';
import { DataSource } from 'typeorm';
import DBConfig from '../config/db-config';
import {
  CatalogoAddUpdatePerfilRequest,
  CatalogoDocumentosRequest,
  CatalogoPeriodoRequest,
  CatalogoRequest,
} from '../model/request/catalogosRequest';
import {
  CatalogoAddUpdateResponse,
  CatalogoDocumentoResponse,
  CatalogoExtArchivoResponse,
  CatalogoPerfilConsultorResponse,
  CatalogoPeriodosResponse,
  CatalogoResponse,
} from '../model/response/catalogoResponse';

@Injectable()
export class CatalogoRepository {
  constructor(
    @InjectDataSource(DBConfig.getDBNombre())
    private readonly dataSource: DataSource,
  ) {}

  async getCatalogoModuloAplicativo(
    request: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    try {
      let condicion = 'WHERE 1 = 1'; // Siempre comenzamos con una condición que es verdadera
      const parametros: any[] = [];

      // Condición para el nombre
      if (request.nombre != '') {
        condicion +=
          ' AND UPPER(TRIM(nombre)) LIKE UPPER(TRIM(@' +
          parametros.length +
          '))';
        parametros.push(`%${request.nombre}%`);
      }

      // Condición para el campo 'activo'
      if (request.activo != null) {
        condicion += ' AND activo = @' + parametros.length;
        parametros.push(request.activo);
      }

      const result = await this.dataSource.query(
        'SELECT id_modulo_aplicativo as id, nombre, descripcion, activo FROM cat_aplicativo_modulo ' +
          condicion,
        parametros,
      );
      return result;
    } catch (error) {
      throw new CustomException(error, '393ccefb-2da3-426e-bf85-eb63989be980');
    }
  }

  async getCatalogoAreas(
    request: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    try {
      let condicion = 'WHERE 1 = 1'; // Siempre comenzamos con una condición que es verdadera
      const parametros: any[] = [];

      // Condición para el nombre
      if (request.nombre != '') {
        condicion +=
          ' AND UPPER(TRIM(nombre)) LIKE UPPER(TRIM(@' +
          parametros.length +
          '))';
        parametros.push(`%${request.nombre}%`);
      }

      // Condición para el campo 'activo'
      if (request.activo != null) {
        condicion += ' AND activo = @' + parametros.length;
        parametros.push(request.activo);
      }

      const result = await this.dataSource.query(
        'SELECT id_area as id, nombre, descripcion, activo FROM cat_areas ' +
          condicion,
        parametros,
      );
      return result;
    } catch (error) {
      throw new CustomException(error, '393ccefb-2da3-426e-bf85-eb63989be880');
    }
  }

  async getCatalogoConsultoras(
    request: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    try {
      let condicion = 'WHERE 1 = 1'; // Siempre comenzamos con una condición que es verdadera
      const parametros: any[] = [];

      // Condición para el nombre
      if (request.nombre != '') {
        condicion +=
          ' AND UPPER(TRIM(nombre)) LIKE UPPER(TRIM(@' +
          parametros.length +
          '))';
        parametros.push(`%${request.nombre}%`);
      }

      // Condición para el campo 'activo'
      if (request.activo != null) {
        condicion += ' AND activo = @' + parametros.length;
        parametros.push(request.activo);
      }

      const result = await this.dataSource.query(
        'SELECT id_consultora as id, nombre, descripocion, activo  FROM cat_consultoras ' +
          condicion,
        parametros,
      );
      return result;
    } catch (error) {
      throw new CustomException(error, '393ccefb-2da3-426e-bf85-eb63989be780');
    }
  }

  async getCatalogoEstatus(
    request: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    try {
      let condicion = 'WHERE 1 = 1'; // Siempre comenzamos con una condición que es verdadera
      const parametros: any[] = [];

      // Condición para el nombre
      if (request.nombre != '') {
        condicion +=
          ' AND UPPER(TRIM(nombre)) LIKE UPPER(TRIM(@' +
          parametros.length +
          '))';
        parametros.push(`%${request.nombre}%`);
      }

      // Condición para el campo 'activo'
      if (request.activo != null) {
        condicion += ' AND activo = @' + parametros.length;
        parametros.push(request.activo);
      }

      const result = await this.dataSource.query(
        'SELECT id_estatus as id, nombre, descripcion, activo  FROM cat_estatus ' +
          condicion,
        parametros,
      );
      return result;
    } catch (error) {
      throw new CustomException(error, '393ccefb-2da3-426e-bf85-eb63989be680');
    }
  }

  async getCatalogoFormaPago(
    request: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    try {
      let condicion = 'WHERE 1 = 1'; // Siempre comenzamos con una condición que es verdadera
      const parametros: any[] = [];

      // Condición para el nombre
      if (request.nombre != '') {
        condicion +=
          ' AND UPPER(TRIM(nombre)) LIKE UPPER(TRIM(@' +
          parametros.length +
          '))';
        parametros.push(`%${request.nombre}%`);
      }

      // Condición para el campo 'activo'
      if (request.activo != null) {
        condicion += ' AND activo = @' + parametros.length;
        parametros.push(request.activo);
      }

      const result = await this.dataSource.query(
        'SELECT id_forma_pago as id, nombre, descripcion, activo FROM cat_forma_pago ' +
          condicion,
        parametros,
      );
      return result;
    } catch (error) {
      throw new CustomException(error, '393ccefb-2da3-426e-bf85-eb63989be580');
    }
  }

  async getCatalogoProyecto(
    request: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    try {
      let condicion = 'WHERE 1 = 1'; // Siempre comenzamos con una condición que es verdadera
      const parametros: any[] = [];

      // Condición para el nombre
      if (request.nombre != '') {
        condicion +=
          ' AND UPPER(TRIM(nombre)) LIKE UPPER(TRIM(@' +
          parametros.length +
          '))';
        parametros.push(`%${request.nombre}%`);
      }

      // Condición para el campo 'activo'
      if (request.activo != null) {
        condicion += ' AND activo = @' + parametros.length;
        parametros.push(request.activo);
      }

      const result = await this.dataSource.query(
        'SELECT id_proyecto as id, nombe, descripcion, activo  FROM cat_proyecto ' +
          condicion,
        parametros,
      );
      return result;
    } catch (error) {
      throw new CustomException(error, '393ccefb-2da3-426e-bf85-eb63989be480');
    }
  }

  async getCatalogoTipoAccion(
    request: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    try {
      let condicion = 'WHERE 1 = 1'; // Siempre comenzamos con una condición que es verdadera
      const parametros: any[] = [];

      // Condición para el nombre
      if (request.nombre != '') {
        condicion +=
          ' AND UPPER(TRIM(nombre)) LIKE UPPER(TRIM(@' +
          parametros.length +
          '))';
        parametros.push(`%${request.nombre}%`);
      }

      // Condición para el campo 'activo'
      if (request.activo != null) {
        condicion += ' AND activo = @' + parametros.length;
        parametros.push(request.activo);
      }

      const result = await this.dataSource.query(
        'SELECT id_tipo_accion as id, nombre, descripcion, activo FROM cat_tipo_accion ' +
          condicion,
        parametros,
      );
      return result;
    } catch (error) {
      throw new CustomException(error, '393ccefb-2da3-426e-bf85-eb63989be380');
    }
  }

  async getCatalogoTipoContrato(
    request: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    try {
      let condicion = 'WHERE 1 = 1'; // Siempre comenzamos con una condición que es verdadera
      const parametros: any[] = [];

      // Condición para el nombre
      if (request.nombre != '') {
        condicion +=
          ' AND UPPER(TRIM(nombre)) LIKE UPPER(TRIM(@' +
          parametros.length +
          '))';
        parametros.push(`%${request.nombre}%`);
      }

      // Condición para el campo 'activo'
      if (request.activo != null) {
        condicion += ' AND activo = @' + parametros.length;
        parametros.push(request.activo);
      }

      const result = await this.dataSource.query(
        'SELECT id_tipo_contrato as id, nombre, descripcion, activo FROM cat_tipo_contrato ' +
          condicion,
        parametros,
      );
      return result;
    } catch (error) {
      throw new CustomException(error, '393ccefb-2da3-426e-bf85-eb63989be280');
    }
  }

  async getCatalogoPerfilConsultor(
    request: CatalogoRequest,
  ): Promise<CatalogoPerfilConsultorResponse[]> {
    try {
      let condicion = 'WHERE 1 = 1'; // Siempre comenzamos con una condición que es verdadera
      const parametros: any[] = [];

      // Condición para el nombre
      if (request.nombre != '') {
        condicion +=
          ' AND UPPER(TRIM(nombre)) LIKE UPPER(TRIM(@' +
          parametros.length +
          '))';
        parametros.push(`%${request.nombre}%`);
      }

      // Condición para el campo 'activo'
      if (request.activo != null) {
        condicion += ' AND activo = @' + parametros.length;
        parametros.push(request.activo);
      }

      const result = await this.dataSource.query(
        'SELECT id_perfil as id, nombre, descripcion, monto, activo FROM cat_perfil_consultor ' +
          condicion,
        parametros,
      );
      return result;
    } catch (error) {
      throw new CustomException(error, '393ccefb-2da3-426e-bf85-eb63989be180');
    }
  }

  async addUpdatePerfilConsultor(
    request: CatalogoAddUpdatePerfilRequest,
  ): Promise<CatalogoAddUpdateResponse> {
    try {
      const result = await this.dataSource.query(
        'EXEC sp_registraActualizaPerfil @0, @1, @2, @3, @4, @5, @6',
        [
          request.id_perfil,
          request.perfil,
          request.descripcion,
          request.monto.toString(),
          request.activo,
          request.id_usuario,
          request.ip,
        ],
      );
      return result[0];
    } catch (error) {
      throw new CustomException(error, '2fb67f0a-4af5-42e5-a8a3-a814ebe6c999');
    }
  }

  async getCatalogoDocumento(
    request: CatalogoDocumentosRequest,
  ): Promise<CatalogoDocumentoResponse[]> {
    try {
      let condicion = 'WHERE 1 = 1'; // Siempre comenzamos con una condición que es verdadera
      const parametros: any[] = [];

      // Condición para el nombre
      if (request.nombre != '') {
        condicion +=
          ' AND UPPER(TRIM(nombre)) LIKE UPPER(TRIM(@' +
          parametros.length +
          '))';
        parametros.push(`%${request.nombre}%`);
      }

      // Condición para el campo 'activo'
      if (request.activo != null) {
        condicion += ' AND activo = @' + parametros.length;
        parametros.push(request.activo);
      }

      if (request.grupo != '') {
        condicion += ' AND grupo = @' + parametros.length;
        parametros.push(request.grupo);
      }

      const result = await this.dataSource.query(
        '  SELECT id_documento as id, nombre, descripcion, activo, grupo FROM cat_documento ' +
          condicion,
        parametros,
      );
      return result;
    } catch (error) {
      throw new CustomException(error, '393ccefb-2da3-426e-bf85-eb63989be080');
    }
  }

  async getCatalogoExtencion(
    request: CatalogoRequest,
  ): Promise<CatalogoExtArchivoResponse[]> {
    try {
      let condicion = 'WHERE 1 = 1'; // Siempre comenzamos con una condición que es verdadera
      const parametros: any[] = [];

      // Condición para el nombre
      if (request.nombre != '') {
        condicion +=
          ' AND UPPER(TRIM(nombre)) LIKE UPPER(TRIM(@' +
          parametros.length +
          '))';
        parametros.push(`%${request.nombre}%`);
      }

      // Condición para el campo 'activo'
      if (request.activo != null) {
        condicion += ' AND activo = @' + parametros.length;
        parametros.push(request.activo);
      }

      const result = await this.dataSource.query(
        'SELECT id_extencion as id, nombre, descripcion, tamano_maximo, activo FROM cat_extencion_archivo' +
          condicion,
        parametros,
      );
      return result;
    } catch (error) {
      throw new CustomException(error, '393ccefb-2da3-426e-bf85-eb63989be180');
    }
  }

  async getCatalogoPeriodos(
    request: CatalogoPeriodoRequest,
  ): Promise<CatalogoPeriodosResponse[]> {
    try {
      const result = await this.dataSource.query(
        'EXEC sp_obtenerPeriodosConsultor @0',
        [request.consultor],
      );
      return result;
    } catch (error) {
      throw new CustomException(error, '393ccefb-2da3-426e-bf85-eb63989be180');
    }
  }
  async getCatalogoCargo(
    request: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    try {
      let condicion = 'WHERE 1 = 1'; // Siempre comenzamos con una condición que es verdadera
      const parametros: any[] = [];

      // Condición para el nombre
      if (request.nombre != '') {
        condicion +=
          ' AND UPPER(TRIM(nombre)) LIKE UPPER(TRIM(@' +
          parametros.length +
          '))';
        parametros.push(`%${request.nombre}%`);
      }

      // Condición para el campo 'activo'
      if (request.activo != null) {
        condicion += ' AND activo = @' + parametros.length;
        parametros.push(request.activo);
      }

      const result = await this.dataSource.query(
        'SELECT id_cargo as id, nombre, descripcion, tamano_maximo, activo FROM cat_cargo' +
          condicion,
        parametros,
      );
      return result;
    } catch (error) {
      throw new CustomException(error, '393ccefb-2da3-426e-bf85-eb63989be189');
    }
  }
}
