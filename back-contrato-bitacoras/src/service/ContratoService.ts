import { connection } from "../database/connection";
import mssql from "mssql";
import { mapToInterface, StringComaToFloat, StringFecha } from "../util/util";
import {
  ConsultaContratosRequest,
  ConsultaPerfilesContratosRequest,
  ConsultaPeriodosContratosRequest,
  RegistraActualizaContratoRequest,
  RegistraActualizaPerfilContratoRequest,
  RegistraActualizaPeriodosContratoRequest,
} from "../model/request/request";
import {
  ActRegResponse,
  ConsultaContratosResponse,
  ConsultaPerfilContratosResponse,
  ConsultaPeriodosContratosResponse,
} from "../model/response/response";

export const ContratoServicio = {
  async getContratos(
    request: ConsultaContratosRequest
  ): Promise<ConsultaContratosResponse[]> {
    // Ejecuta tu consulta
    const pool = await connection(); // Asegúrate de obtener la conexión correctamente

    let result = await pool
      .request()
      .input("contrato", mssql.VarChar, request.contrato) // Puedes añadir más parámetros según sea necesario
      .input("consultora", mssql.VarChar, request.consultora)
      .input("pagina_actual", mssql.Int, request.pagina_actual)
      .input("registros_por_pagina", mssql.Int, request.registros_por_pagina)
      .execute("sp_consultaContratos"); // Reemplaza con el nombre de tu procedimiento almacenado

    // Mapeamos los valores
    const respuesta: ConsultaContratosResponse[] =
      mapToInterface<ConsultaContratosResponse>(result.recordset);

    return respuesta;
  },

  async ActRegContrato(
    request: RegistraActualizaContratoRequest
  ): Promise<ActRegResponse[]> {
    // Ejecuta tu consulta
    const pool = await connection(); // Asegúrate de obtener la conexión correctamente

    let result = await pool
      .request()
      .input("id_contrato", mssql.Int, request.id_contrato) // Puedes añadir más parámetros según sea necesario
      .input("no_contrato", mssql.VarChar, request.no_contrato)
      .input("fh_inicio", mssql.Date, StringFecha(request.fh_inicio))
      .input("fh_termino", mssql.Date, StringFecha(request.fh_termino))
      .input(
        "monto_variable",
        mssql.Decimal,
        StringComaToFloat(request.monto_variable)
      )
      .input(
        "monto_fijo",
        mssql.Decimal(15, 5),
        StringComaToFloat(request.monto_fijo)
      )
      .input(
        "monto_total",
        mssql.Decimal(15, 5),
        StringComaToFloat(request.monto_total)
      )
      .input("id_forma_pago", mssql.Int, request.id_forma_pago)
      .input("id_tipo_contrato", mssql.Int, request.id_tipo_contrato)
      .input("id_proveedor", mssql.Int, request.id_proveedor)
      .input("id_area", mssql.Int, request.id_area)
      .input("id_gerente", mssql.Int, request.id_gerente)
      .input("no_consultores", mssql.Int, request.no_consultores)
      .input("activo", mssql.Bit, request.activo)
      .input("id_archivo", mssql.Int, request.id_archivo)
      .input("nombre", mssql.VarChar, request.nombre)
      .input("ruta", mssql.VarChar, request.ruta)
      .input("id_contrato_convenio", mssql.Int, request.id_contrato_convenio)
      .input("id_usuario", mssql.Int, request.id_usuario)
      .input("ip", mssql.VarChar, request.ip)
      .execute("sp_registraActualizaContrato"); // Reemplaza con el nombre de tu procedimiento almacenado

    // Mapeamos los valores
    const respuesta: ActRegResponse[] = mapToInterface<ActRegResponse>(
      result.recordset
    );
    return respuesta;
  },

  async getPerfilesContratos(
    request: ConsultaPerfilesContratosRequest
  ): Promise<ConsultaPerfilContratosResponse[]> {
    // Ejecuta tu consulta
    const pool = await connection(); // Asegúrate de obtener la conexión correctamente

    let result = await pool
      .request()
      .input("id_contrato", mssql.Int, request.id_contrato)
      .input("pagina_actual", mssql.Int, request.pagina_actual)
      .input("registros_por_pagina", mssql.Int, request.registros_por_pagina)
      .execute("sp_consultaPerfilesContrato"); // Reemplaza con el nombre de tu procedimiento almacenado

    // Mapeamos los valores
    const respuesta: ConsultaPerfilContratosResponse[] =
      mapToInterface<ConsultaPerfilContratosResponse>(result.recordset);

    return respuesta;
  },

  async ActRegPerfilContrato(
    request: RegistraActualizaPerfilContratoRequest
  ): Promise<ActRegResponse[]> {
    // Ejecuta tu consulta
    const pool = await connection(); // Asegúrate de obtener la conexión correctamente
    let result = await pool
      .request()
      .input("id_perfil_contrato", mssql.Int, request.id_perfil_contrato)
      .input("id_contrato", mssql.Int, request.id_contrato)
      .input("id_perfil", mssql.Int, request.id_perfil)
      .input("perfil", mssql.VarChar, request.perfil)
      .input("descripcion", mssql.VarChar, request.descripcion)
      .input("monto", mssql.Decimal(15, 5), StringComaToFloat(request.monto))
      .input("id_nivel", mssql.Int, request.id_nivel)
      .input("activo", mssql.Bit, request.activo)
      .input("id_usuario", mssql.Int, request.id_usuario)
      .input("ip", mssql.VarChar, request.ip)
      .execute("sp_registraActualizaPerfilesContrato"); // Reemplaza con el nombre de tu procedimiento almacenado

    // Mapeamos los valores
    const respuesta: ActRegResponse[] = mapToInterface<ActRegResponse>(
      result.recordset
    );

    return respuesta;
  },

  async ActRegPeriodosContrato(
    request: RegistraActualizaPeriodosContratoRequest
  ): Promise<ActRegResponse[]> {
    // Ejecuta tu consulta
    const pool = await connection(); // Asegúrate de obtener la conexión correctamente
    let result = await pool
      .request()
      .input("id_contrato", mssql.Int, request.id_contrato)
      .input("fh_inicio", mssql.Date, StringFecha(request.fh_inicio))
      .input("fh_final", mssql.Date, StringFecha(request.fh_final))
      .input("no_periodos", mssql.Int, request.no_periodos)
      .input("id_usuario", mssql.Int, request.id_usuario)
      .input("ip", mssql.VarChar, request.ip)
      .execute("sp_registraContratoPeriodos"); // Reemplaza con el nombre de tu procedimiento almacenado

    // Mapeamos los valores
    const respuesta: ActRegResponse[] = mapToInterface<ActRegResponse>(
      result.recordset
    );

    return respuesta;
  },

  async getPeriodosContrato(
    request: ConsultaPeriodosContratosRequest
  ): Promise<ConsultaPeriodosContratosResponse[]> {
    // Ejecuta tu consulta
    const pool = await connection(); // Asegúrate de obtener la conexión correctamente
    let result = await pool
      .request()
      .input("id_contrato", mssql.Int, request.id_contrato)
      .input("pagina_actual", mssql.Int, request.pagina_actual)
      .input("registros_por_pagina", mssql.Int, request.registros_por_pagina)
      .execute("sp_consultaPeriodosContrato"); // Reemplaza con el nombre de tu procedimiento almacenado

    // Mapeamos los valores
    const respuesta: ConsultaPeriodosContratosResponse[] =
      mapToInterface<ConsultaPeriodosContratosResponse>(result.recordset);

    return respuesta;
  },
};
