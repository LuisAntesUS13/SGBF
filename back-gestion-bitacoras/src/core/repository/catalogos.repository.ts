import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { CustomException } from '../util/errores';
import { DataSource } from 'typeorm';
import DBConfig from '../config/db-config';
import {
  CatalogoDocumentosRequest,
  CatalogoRequest,
} from '../model/request/catalogosRequest';
import {
  CatalogoDocumentoResponse,
  CatalogoExtArchivoResponse,
  CatalogoPerfilConsultorResponse,
  CatalogoResponse,
} from '../model/response/catalogoResponse';

@Injectable()
export class CatalogoRepository {
  constructor(
    @InjectDataSource(DBConfig.getDBNombre())
    private readonly dataSource: DataSource,
  ) {}

  async getCatalogoModuloAplicativo(
    catalogoRequest: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    try {
      let condicion = 'WHERE 1 = 1'; // Siempre comenzamos con una condición que es verdadera
      const parametros: any[] = [];

      // Condición para el nombre
      if (catalogoRequest.nombre != '') {
        condicion +=
          ' AND UPPER(TRIM(nombre)) LIKE UPPER(TRIM(@' +
          parametros.length +
          '))';
        parametros.push(`%${catalogoRequest.nombre}%`);
      }

      // Condición para el campo 'activo'
      if (catalogoRequest.activo != null) {
        condicion += ' AND activo = @' + parametros.length;
        parametros.push(catalogoRequest.activo);
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
    catalogoRequest: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    try {
      let condicion = 'WHERE 1 = 1'; // Siempre comenzamos con una condición que es verdadera
      const parametros: any[] = [];

      // Condición para el nombre
      if (catalogoRequest.nombre != '') {
        condicion +=
          ' AND UPPER(TRIM(nombre)) LIKE UPPER(TRIM(@' +
          parametros.length +
          '))';
        parametros.push(`%${catalogoRequest.nombre}%`);
      }

      // Condición para el campo 'activo'
      if (catalogoRequest.activo != null) {
        condicion += ' AND activo = @' + parametros.length;
        parametros.push(catalogoRequest.activo);
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
    catalogoRequest: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    try {
      let condicion = 'WHERE 1 = 1'; // Siempre comenzamos con una condición que es verdadera
      const parametros: any[] = [];

      // Condición para el nombre
      if (catalogoRequest.nombre != '') {
        condicion +=
          ' AND UPPER(TRIM(nombre)) LIKE UPPER(TRIM(@' +
          parametros.length +
          '))';
        parametros.push(`%${catalogoRequest.nombre}%`);
      }

      // Condición para el campo 'activo'
      if (catalogoRequest.activo != null) {
        condicion += ' AND activo = @' + parametros.length;
        parametros.push(catalogoRequest.activo);
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
    catalogoRequest: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    try {
      let condicion = 'WHERE 1 = 1'; // Siempre comenzamos con una condición que es verdadera
      const parametros: any[] = [];

      // Condición para el nombre
      if (catalogoRequest.nombre != '') {
        condicion +=
          ' AND UPPER(TRIM(nombre)) LIKE UPPER(TRIM(@' +
          parametros.length +
          '))';
        parametros.push(`%${catalogoRequest.nombre}%`);
      }

      // Condición para el campo 'activo'
      if (catalogoRequest.activo != null) {
        condicion += ' AND activo = @' + parametros.length;
        parametros.push(catalogoRequest.activo);
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
    catalogoRequest: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    try {
      let condicion = 'WHERE 1 = 1'; // Siempre comenzamos con una condición que es verdadera
      const parametros: any[] = [];

      // Condición para el nombre
      if (catalogoRequest.nombre != '') {
        condicion +=
          ' AND UPPER(TRIM(nombre)) LIKE UPPER(TRIM(@' +
          parametros.length +
          '))';
        parametros.push(`%${catalogoRequest.nombre}%`);
      }

      // Condición para el campo 'activo'
      if (catalogoRequest.activo != null) {
        condicion += ' AND activo = @' + parametros.length;
        parametros.push(catalogoRequest.activo);
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
    catalogoRequest: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    try {
      let condicion = 'WHERE 1 = 1'; // Siempre comenzamos con una condición que es verdadera
      const parametros: any[] = [];

      // Condición para el nombre
      if (catalogoRequest.nombre != '') {
        condicion +=
          ' AND UPPER(TRIM(nombre)) LIKE UPPER(TRIM(@' +
          parametros.length +
          '))';
        parametros.push(`%${catalogoRequest.nombre}%`);
      }

      // Condición para el campo 'activo'
      if (catalogoRequest.activo != null) {
        condicion += ' AND activo = @' + parametros.length;
        parametros.push(catalogoRequest.activo);
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
    catalogoRequest: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    try {
      let condicion = 'WHERE 1 = 1'; // Siempre comenzamos con una condición que es verdadera
      const parametros: any[] = [];

      // Condición para el nombre
      if (catalogoRequest.nombre != '') {
        condicion +=
          ' AND UPPER(TRIM(nombre)) LIKE UPPER(TRIM(@' +
          parametros.length +
          '))';
        parametros.push(`%${catalogoRequest.nombre}%`);
      }

      // Condición para el campo 'activo'
      if (catalogoRequest.activo != null) {
        condicion += ' AND activo = @' + parametros.length;
        parametros.push(catalogoRequest.activo);
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
    catalogoRequest: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    try {
      let condicion = 'WHERE 1 = 1'; // Siempre comenzamos con una condición que es verdadera
      const parametros: any[] = [];

      // Condición para el nombre
      if (catalogoRequest.nombre != '') {
        condicion +=
          ' AND UPPER(TRIM(nombre)) LIKE UPPER(TRIM(@' +
          parametros.length +
          '))';
        parametros.push(`%${catalogoRequest.nombre}%`);
      }

      // Condición para el campo 'activo'
      if (catalogoRequest.activo != null) {
        condicion += ' AND activo = @' + parametros.length;
        parametros.push(catalogoRequest.activo);
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
    catalogoRequest: CatalogoRequest,
  ): Promise<CatalogoPerfilConsultorResponse[]> {
    try {
      let condicion = 'WHERE 1 = 1'; // Siempre comenzamos con una condición que es verdadera
      const parametros: any[] = [];

      // Condición para el nombre
      if (catalogoRequest.nombre != '') {
        condicion +=
          ' AND UPPER(TRIM(nombre)) LIKE UPPER(TRIM(@' +
          parametros.length +
          '))';
        parametros.push(`%${catalogoRequest.nombre}%`);
      }

      // Condición para el campo 'activo'
      if (catalogoRequest.activo != null) {
        condicion += ' AND activo = @' + parametros.length;
        parametros.push(catalogoRequest.activo);
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

  async getCatalogoDocumento(
    catalogoRequest: CatalogoDocumentosRequest,
  ): Promise<CatalogoDocumentoResponse[]> {
    try {
      let condicion = 'WHERE 1 = 1'; // Siempre comenzamos con una condición que es verdadera
      const parametros: any[] = [];

      // Condición para el nombre
      if (catalogoRequest.nombre != '') {
        condicion +=
          ' AND UPPER(TRIM(nombre)) LIKE UPPER(TRIM(@' +
          parametros.length +
          '))';
        parametros.push(`%${catalogoRequest.nombre}%`);
      }

      // Condición para el campo 'activo'
      if (catalogoRequest.activo != null) {
        condicion += ' AND activo = @' + parametros.length;
        parametros.push(catalogoRequest.activo);
      }

      if (catalogoRequest.grupo != '') {
        condicion += ' AND grupo = @' + parametros.length;
        parametros.push(catalogoRequest.grupo);
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
    catalogoRequest: CatalogoRequest,
  ): Promise<CatalogoExtArchivoResponse[]> {
    try {
      let condicion = 'WHERE 1 = 1'; // Siempre comenzamos con una condición que es verdadera
      const parametros: any[] = [];

      // Condición para el nombre
      if (catalogoRequest.nombre != '') {
        condicion +=
          ' AND UPPER(TRIM(nombre)) LIKE UPPER(TRIM(@' +
          parametros.length +
          '))';
        parametros.push(`%${catalogoRequest.nombre}%`);
      }

      // Condición para el campo 'activo'
      if (catalogoRequest.activo != null) {
        condicion += ' AND activo = @' + parametros.length;
        parametros.push(catalogoRequest.activo);
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
}
