import { connection } from "../database/connection";
import {
  CatalogoDocumentosRequest,
  CatalogoRequest,
  RegActCatalogoRequest,
} from "../model/request/request";
import {
  ActRegCatalogoResponse,
  CatalogoDocumentoResponse,
  CatalogoExtArchivoResponse,
  CatalogoPerfilConsultorResponse,
  CatalogoResponse,
} from "../model/response/response";
import mssql from "mssql";
import { mapToInterface } from "../util/util";

export const catalogoServicio = {
  // throw new Error("Error generado a propósito en la ruta");  Ejemplo de  error
  async getCatalogoModuloAplicativo(
    request: CatalogoRequest
  ): Promise<CatalogoResponse[]> {
    // Ejecuta tu consulta
    const pool = await connection(); // Asegúrate de obtener la conexión correctamente

    let condicion = "WHERE 1 = 1"; // Condición base
    const parametros: any[] = [];
    // Condición para el nombre
    if (request.nombre && request.nombre.trim() !== "") {
      condicion += " AND UPPER(LTRIM(RTRIM(nombre))) LIKE @nombre";
      parametros.push({
        name: "nombre",
        value: `%${request.nombre}%`,
        type: mssql.VarChar,
      });
    }

    // Condición para el campo 'activo'
    if (request.activo != null) {
      condicion += " AND activo = @activo";
      parametros.push({
        name: "activo",
        value: request.activo,
        type: mssql.Bit,
      }); // Asumiendo que 'activo' es de tipo bit
    }

    // Crear la consulta con la condición dinámica
    const query = `SELECT id_modulo_aplicativo as id, nombre, descripcion, activo FROM cat_aplicativo_modulo ${condicion}`;

    // Crear el request y asignar los parámetros
    let req = pool.request();

    parametros.forEach((param) => {
      req = req.input(param.name, param.type, param.value); // Asignar los parámetros correctamente
    });

    // Ejecutar la consulta
    const result = await req.query(query);

    // Mapeamos los valores
    const respuesta: CatalogoResponse[] = mapToInterface<CatalogoResponse>(
      result.recordset
    );

    return respuesta;
  },

  async RegActCatalogoModuloAplicativo(
    request: RegActCatalogoRequest
  ): Promise<ActRegCatalogoResponse[]> {
    // Ejecuta tu consulta
    const pool = await connection(); // Asegúrate de obtener la conexión correctamente

    let result = await pool
      .request()
      .input("id", mssql.Int, request.id) // Puedes añadir más parámetros según sea necesario
      .input("nombre", mssql.VarChar, request.nombre)
      .input("desc", mssql.VarChar, request.desc)
      .input("activo", mssql.Bit, request.activo)
      .input("id_usuario", mssql.Int, request.id_usuario)
      .input("ip", mssql.VarChar, request.ip)
      .execute("sp_regActCatAplicativoModulo"); // Reemplaza con el nombre de tu procedimiento almacenado

    // Mapeamos los valores
    const respuesta: ActRegCatalogoResponse[] =
      mapToInterface<ActRegCatalogoResponse>(result.recordset);

    return respuesta;
  },

  async getCatalogoAreas(
    request: CatalogoRequest
  ): Promise<CatalogoResponse[]> {
    // Ejecuta tu consulta
    const pool = await connection(); // Asegúrate de obtener la conexión correctamente
    let condicion = "WHERE 1 = 1"; // Condición base
    const parametros: any[] = [];
    // Condición para el nombre
    if (request.nombre && request.nombre.trim() !== "") {
      condicion += " AND UPPER(LTRIM(RTRIM(nombre))) LIKE @nombre";
      parametros.push({
        name: "nombre",
        value: `%${request.nombre}%`,
        type: mssql.VarChar,
      });
    }

    // Condición para el campo 'activo'
    if (request.activo != null) {
      condicion += " AND activo = @activo";
      parametros.push({
        name: "activo",
        value: request.activo,
        type: mssql.Bit,
      }); // Asumiendo que 'activo' es de tipo bit
    }

    // Crear la consulta con la condición dinámica
    const query = `SELECT id_area as id, nombre, descripcion, activo FROM cat_areas ${condicion}`;

    // Crear el request y asignar los parámetros
    let req = pool.request();

    parametros.forEach((param) => {
      req = req.input(param.name, param.type, param.value); // Asignar los parámetros correctamente
    });

    // Ejecutar la consulta
    const result = await req.query(query);

    // Mapeamos los valores
    const respuesta: CatalogoResponse[] = mapToInterface<CatalogoResponse>(
      result.recordset
    );

    return respuesta;
  },

  async getCatalogoConsultoras(
    request: CatalogoRequest
  ): Promise<CatalogoResponse[]> {
    // Ejecuta tu consulta
    const pool = await connection(); // Asegúrate de obtener la conexión correctamente
    let condicion = "WHERE 1 = 1"; // Condición base
    const parametros: any[] = [];
    // Condición para el nombre
    if (request.nombre && request.nombre.trim() !== "") {
      condicion += " AND UPPER(LTRIM(RTRIM(nombre))) LIKE @nombre";
      parametros.push({
        name: "nombre",
        value: `%${request.nombre}%`,
        type: mssql.VarChar,
      });
    }

    // Condición para el campo 'activo'
    if (request.activo != null) {
      condicion += " AND activo = @activo";
      parametros.push({
        name: "activo",
        value: request.activo,
        type: mssql.Bit,
      }); // Asumiendo que 'activo' es de tipo bit
    }

    // Crear la consulta con la condición dinámica
    const query = `SELECT id_proveedor as id, nombre, descripcion, activo FROM cat_proveedor ${condicion}`;

    // Crear el request y asignar los parámetros
    let req = pool.request();

    parametros.forEach((param) => {
      req = req.input(param.name, param.type, param.value); // Asignar los parámetros correctamente
    });

    // Ejecutar la consulta
    const result = await req.query(query);

    // Mapeamos los valores
    const respuesta: CatalogoResponse[] = mapToInterface<CatalogoResponse>(
      result.recordset
    );

    return respuesta;
  },

  async getCatalogoEstatus(
    request: CatalogoRequest
  ): Promise<CatalogoResponse[]> {
    // Ejecuta tu consulta
    const pool = await connection(); // Asegúrate de obtener la conexión correctamente
    let condicion = "WHERE 1 = 1"; // Condición base
    const parametros: any[] = [];
    // Condición para el nombre
    if (request.nombre && request.nombre.trim() !== "") {
      condicion += " AND UPPER(LTRIM(RTRIM(nombre))) LIKE @nombre";
      parametros.push({
        name: "nombre",
        value: `%${request.nombre}%`,
        type: mssql.VarChar,
      });
    }

    // Condición para el campo 'activo'
    if (request.activo != null) {
      condicion += " AND activo = @activo";
      parametros.push({
        name: "activo",
        value: request.activo,
        type: mssql.Bit,
      }); // Asumiendo que 'activo' es de tipo bit
    }

    // Crear la consulta con la condición dinámica
    const query = `SELECT id_estatus as id, nombre, descripcion, activo FROM cat_estatus ${condicion}`;

    // Crear el request y asignar los parámetros
    let req = pool.request();

    parametros.forEach((param) => {
      req = req.input(param.name, param.type, param.value); // Asignar los parámetros correctamente
    });

    // Ejecutar la consulta
    const result = await req.query(query);

    // Mapeamos los valores
    const respuesta: CatalogoResponse[] = mapToInterface<CatalogoResponse>(
      result.recordset
    );

    return respuesta;
  },

  async getCatalogoFormaPago(
    request: CatalogoRequest
  ): Promise<CatalogoResponse[]> {
    // Ejecuta tu consulta
    const pool = await connection(); // Asegúrate de obtener la conexión correctamente
    let condicion = "WHERE 1 = 1"; // Condición base
    const parametros: any[] = [];
    // Condición para el nombre
    if (request.nombre && request.nombre.trim() !== "") {
      condicion += " AND UPPER(LTRIM(RTRIM(nombre))) LIKE @nombre";
      parametros.push({
        name: "nombre",
        value: `%${request.nombre}%`,
        type: mssql.VarChar,
      });
    }

    // Condición para el campo 'activo'
    if (request.activo != null) {
      condicion += " AND activo = @activo";
      parametros.push({
        name: "activo",
        value: request.activo,
        type: mssql.Bit,
      }); // Asumiendo que 'activo' es de tipo bit
    }

    // Crear la consulta con la condición dinámica
    const query = `SELECT id_forma_pago as id, nombre, descripcion, activo FROM cat_forma_pago ${condicion}`;

    // Crear el request y asignar los parámetros
    let req = pool.request();

    parametros.forEach((param) => {
      req = req.input(param.name, param.type, param.value); // Asignar los parámetros correctamente
    });

    // Ejecutar la consulta
    const result = await req.query(query);

    // Mapeamos los valores
    const respuesta: CatalogoResponse[] = mapToInterface<CatalogoResponse>(
      result.recordset
    );

    return respuesta;
  },

  async getCatalogoProyecto(
    request: CatalogoRequest
  ): Promise<CatalogoResponse[]> {
    // Ejecuta tu consulta
    const pool = await connection(); // Asegúrate de obtener la conexión correctamente
    let condicion = "WHERE 1 = 1"; // Condición base
    const parametros: any[] = [];
    // Condición para el nombre
    if (request.nombre && request.nombre.trim() !== "") {
      condicion += " AND UPPER(LTRIM(RTRIM(nombre))) LIKE @nombre";
      parametros.push({
        name: "nombre",
        value: `%${request.nombre}%`,
        type: mssql.VarChar,
      });
    }

    // Condición para el campo 'activo'
    if (request.activo != null) {
      condicion += " AND activo = @activo";
      parametros.push({
        name: "activo",
        value: request.activo,
        type: mssql.Bit,
      }); // Asumiendo que 'activo' es de tipo bit
    }

    // Crear la consulta con la condición dinámica
    const query = `SELECT id_proyecto as id, nombre, descripcion, activo FROM cat_proyecto ${condicion}`;

    // Crear el request y asignar los parámetros
    let req = pool.request();

    parametros.forEach((param) => {
      req = req.input(param.name, param.type, param.value); // Asignar los parámetros correctamente
    });

    // Ejecutar la consulta
    const result = await req.query(query);

    // Mapeamos los valores
    const respuesta: CatalogoResponse[] = mapToInterface<CatalogoResponse>(
      result.recordset
    );

    return respuesta;
  },

  async getCatalogoTipoContrato(
    request: CatalogoRequest
  ): Promise<CatalogoResponse[]> {
    // Ejecuta tu consulta
    const pool = await connection(); // Asegúrate de obtener la conexión correctamente
    let condicion = "WHERE 1 = 1"; // Condición base
    const parametros: any[] = [];
    // Condición para el nombre
    if (request.nombre && request.nombre.trim() !== "") {
      condicion += " AND UPPER(LTRIM(RTRIM(nombre))) LIKE @nombre";
      parametros.push({
        name: "nombre",
        value: `%${request.nombre}%`,
        type: mssql.VarChar,
      });
    }

    // Condición para el campo 'activo'
    if (request.activo != null) {
      condicion += " AND activo = @activo";
      parametros.push({
        name: "activo",
        value: request.activo,
        type: mssql.Bit,
      }); // Asumiendo que 'activo' es de tipo bit
    }

    // Crear la consulta con la condición dinámica
    const query = `SELECT id_tipo_contrato as id, nombre, descripcion, activo FROM cat_tipo_contrato ${condicion}`;

    // Crear el request y asignar los parámetros
    let req = pool.request();

    parametros.forEach((param) => {
      req = req.input(param.name, param.type, param.value); // Asignar los parámetros correctamente
    });

    // Ejecutar la consulta
    const result = await req.query(query);

    // Mapeamos los valores
    const respuesta: CatalogoResponse[] = mapToInterface<CatalogoResponse>(
      result.recordset
    );

    return respuesta;
  },

  async getCatalogoPerfilConsultor(
    request: CatalogoRequest
  ): Promise<CatalogoPerfilConsultorResponse[]> {
    // Ejecuta tu consulta
    const pool = await connection(); // Asegúrate de obtener la conexión correctamente
    let condicion = "WHERE 1 = 1"; // Condición base
    const parametros: any[] = [];
    // Condición para el nombre
    if (request.nombre && request.nombre.trim() !== "") {
      condicion += " AND UPPER(LTRIM(RTRIM(nombre))) LIKE @nombre";
      parametros.push({
        name: "nombre",
        value: `%${request.nombre}%`,
        type: mssql.VarChar,
      });
    }

    // Condición para el campo 'activo'
    if (request.activo != null) {
      condicion += " AND activo = @activo";
      parametros.push({
        name: "activo",
        value: request.activo,
        type: mssql.Bit,
      }); // Asumiendo que 'activo' es de tipo bit
    }

    // Crear la consulta con la condición dinámica
    const query = `SELECT id_perfil as id, nombre, descripcion, monto, activo FROM cat_perfil_consultor ${condicion}`;

    // Crear el request y asignar los parámetros
    let req = pool.request();

    parametros.forEach((param) => {
      req = req.input(param.name, param.type, param.value); // Asignar los parámetros correctamente
    });

    // Ejecutar la consulta
    const result = await req.query(query);

    // Mapeamos los valores
    const respuesta: CatalogoPerfilConsultorResponse[] =
      mapToInterface<CatalogoPerfilConsultorResponse>(result.recordset);

    return respuesta;
  },

  async getCatalogoDocumento(
    request: CatalogoDocumentosRequest
  ): Promise<CatalogoDocumentoResponse[]> {
    // Ejecuta tu consulta
    const pool = await connection(); // Asegúrate de obtener la conexión correctamente
    let condicion = "WHERE 1 = 1"; // Condición base
    const parametros: any[] = [];
    // Condición para el nombre
    if (request.nombre && request.nombre.trim() !== "") {
      condicion += " AND UPPER(LTRIM(RTRIM(nombre))) LIKE @nombre";
      parametros.push({
        name: "nombre",
        value: `%${request.nombre}%`,
        type: mssql.VarChar,
      });
    }

    // Condición para el campo 'activo'
    if (request.activo != null) {
      condicion += " AND activo = @activo";
      parametros.push({
        name: "activo",
        value: request.activo,
        type: mssql.Bit,
      }); // Asumiendo que 'activo' es de tipo bit
    }

    if (request.grupo != null) {
      condicion += " AND grupo = @grupo";
      parametros.push({
        name: "grupo",
        value: request.grupo,
        type: mssql.VarChar,
      }); // Asumiendo que 'grupo' es de tipo bit
    }

    // Crear la consulta con la condición dinámica
    const query = `SELECT id_documento as id, nombre, descripcion, activo, grupo FROM cat_documento ${condicion}`;

    // Crear el request y asignar los parámetros
    let req = pool.request();

    parametros.forEach((param) => {
      req = req.input(param.name, param.type, param.value); // Asignar los parámetros correctamente
    });

    // Ejecutar la consulta
    const result = await req.query(query);

    // Mapeamos los valores
    const respuesta: CatalogoDocumentoResponse[] =
      mapToInterface<CatalogoDocumentoResponse>(result.recordset);

    return respuesta;
  },

  async getCatalogoExtencion(
    request: CatalogoRequest
  ): Promise<CatalogoExtArchivoResponse[]> {
    // Ejecuta tu consulta
    const pool = await connection(); // Asegúrate de obtener la conexión correctamente
    let condicion = "WHERE 1 = 1"; // Condición base
    const parametros: any[] = [];
    // Condición para el nombre
    if (request.nombre && request.nombre.trim() !== "") {
      condicion += " AND UPPER(LTRIM(RTRIM(nombre))) LIKE @nombre";
      parametros.push({
        name: "nombre",
        value: `%${request.nombre}%`,
        type: mssql.VarChar,
      });
    }

    // Condición para el campo 'activo'
    if (request.activo != null) {
      condicion += " AND activo = @activo";
      parametros.push({
        name: "activo",
        value: request.activo,
        type: mssql.Bit,
      }); // Asumiendo que 'activo' es de tipo bit
    }

    // Crear la consulta con la condición dinámica
    const query = `SELECT id_extencion as id, nombre, descripcion, tamano_maximo, activo FROM cat_extencion_archivo ${condicion}`;

    // Crear el request y asignar los parámetros
    let req = pool.request();

    parametros.forEach((param) => {
      req = req.input(param.name, param.type, param.value); // Asignar los parámetros correctamente
    });

    // Ejecutar la consulta
    const result = await req.query(query);

    // Mapeamos los valores
    const respuesta: CatalogoExtArchivoResponse[] =
      mapToInterface<CatalogoExtArchivoResponse>(result.recordset);

    return respuesta;
  },

  async getCatalogoCargo(
    request: CatalogoRequest
  ): Promise<CatalogoResponse[]> {
    // Ejecuta tu consulta
    const pool = await connection(); // Asegúrate de obtener la conexión correctamente
    let condicion = "WHERE 1 = 1"; // Condición base
    const parametros: any[] = [];
    // Condición para el nombre
    if (request.nombre && request.nombre.trim() !== "") {
      condicion += " AND UPPER(LTRIM(RTRIM(nombre))) LIKE @nombre";
      parametros.push({
        name: "nombre",
        value: `%${request.nombre}%`,
        type: mssql.VarChar,
      });
    }

    // Condición para el campo 'activo'
    if (request.activo != null) {
      condicion += " AND activo = @activo";
      parametros.push({
        name: "activo",
        value: request.activo,
        type: mssql.Bit,
      }); // Asumiendo que 'activo' es de tipo bit
    }

    // Crear la consulta con la condición dinámica
    const query = `SELECT id_cargo as id, nombre, descripcion, activo FROM cat_cargo ${condicion}`;

    // Crear el request y asignar los parámetros
    let req = pool.request();

    parametros.forEach((param) => {
      req = req.input(param.name, param.type, param.value); // Asignar los parámetros correctamente
    });

    // Ejecutar la consulta
    const result = await req.query(query);

    // Mapeamos los valores
    const respuesta: CatalogoResponse[] = mapToInterface<CatalogoResponse>(
      result.recordset
    );

    return respuesta;
  },

  async getCatalogoTipoAccion(
    request: CatalogoRequest
  ): Promise<CatalogoResponse[]> {
    // Ejecuta tu consulta
    const pool = await connection(); // Asegúrate de obtener la conexión correctamente
    let condicion = "WHERE 1 = 1"; // Condición base
    const parametros: any[] = [];
    // Condición para el nombre
    if (request.nombre && request.nombre.trim() !== "") {
      condicion += " AND UPPER(LTRIM(RTRIM(nombre))) LIKE @nombre";
      parametros.push({
        name: "nombre",
        value: `%${request.nombre}%`,
        type: mssql.VarChar,
      });
    }

    // Condición para el campo 'activo'
    if (request.activo != null) {
      condicion += " AND activo = @activo";
      parametros.push({
        name: "activo",
        value: request.activo,
        type: mssql.Bit,
      }); // Asumiendo que 'activo' es de tipo bit
    }

    // Crear la consulta con la condición dinámica
    const query = `SELECT id_tipo_accion as id, nombre, descripcion, activo FROM cat_tipo_accion ${condicion}`;

    // Crear el request y asignar los parámetros
    let req = pool.request();

    parametros.forEach((param) => {
      req = req.input(param.name, param.type, param.value); // Asignar los parámetros correctamente
    });

    // Ejecutar la consulta
    const result = await req.query(query);

    // Mapeamos los valores
    const respuesta: CatalogoResponse[] = mapToInterface<CatalogoResponse>(
      result.recordset
    );

    return respuesta;
  },

  async getCatalogoPorCargo(
    request: CatalogoRequest
  ): Promise<CatalogoResponse[]> {
    // Ejecuta tu consulta
    const pool = await connection(); // Asegúrate de obtener la conexión correctamente
    let condicion = "WHERE 1 = 1"; // Condición base
    const parametros: any[] = [];
    // Condición para el nombre
    if (request.nombre && request.nombre.trim() !== "") {
      condicion += " AND UPPER(LTRIM(RTRIM(cc.nombre))) LIKE @nombre";
      parametros.push({
        name: "nombre",
        value: `%${request.nombre}%`,
        type: mssql.VarChar,
      });
    }

    // Condición para el campo 'activo'
    if (request.activo != null) {
      condicion += " AND u.activo = @activo";
      parametros.push({
        name: "activo",
        value: request.activo,
        type: mssql.Bit,
      }); // Asumiendo que 'activo' es de tipo bit
    }

    // Crear la consulta con la condición dinámica
    const query = `select   u.id_usuario as id, COALESCE(u.nombre, '') + ' ' +  COALESCE(u.primer_apellido, '') + ' ' +  COALESCE(u.segundo_apellido, '') AS nombre,
            '' as descripcion, 1 as acctivo  from usuarios u inner join cat_cargo cc on cc.id_cargo = u.id_cargo ${condicion}`;

    // Crear el request y asignar los parámetros
    let req = pool.request();

    parametros.forEach((param) => {
      req = req.input(param.name, param.type, param.value); // Asignar los parámetros correctamente
    });

    // Ejecutar la consulta
    const result = await req.query(query);

    // Mapeamos los valores
    const respuesta: CatalogoResponse[] = mapToInterface<CatalogoResponse>(
      result.recordset
    );

    return respuesta;
  },
};
