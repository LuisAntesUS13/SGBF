import { connection } from "../database/connection";
import mssql from "mssql";
import { mapToInterface } from "../util/util";
import { ConsultaContratosRequest, RegistraActualizaContratoRequest } from "../model/request/request";
import { ActRegResponse, ConsultaContratosResponse } from "../model/response/response";

export const ContratoServicio = {
    async getContratos(
        request: ConsultaContratosRequest
    ): Promise<ConsultaContratosResponse[]> {
        // Ejecuta tu consulta
        const pool = await connection(); // Asegúrate de obtener la conexión correctamente

        let result = await pool.request()
        .input('contrato', mssql.VarChar, request.contrato) // Puedes añadir más parámetros según sea necesario
        .input('consultora', mssql.VarChar, request.consultora)
        .input('pagina_actual', mssql.Int, request.pagina_actual)
        .input('registros_por_pagina', mssql.Int, request.registros_por_pagina)
        .execute('sp_consultaContratos'); // Reemplaza con el nombre de tu procedimiento almacenado

        // Mapeamos los valores
        const respuesta: ConsultaContratosResponse[] = mapToInterface<ConsultaContratosResponse>(
            result.recordset
        );

        return respuesta;
    },

    async ActRegContrato(
        request: RegistraActualizaContratoRequest
    ): Promise<ActRegResponse[]> {
        // Ejecuta tu consulta
        const pool = await connection(); // Asegúrate de obtener la conexión correctamente
    
        let result = await pool.request()
        .input('id_contrato', mssql.Int, request.id_contrato) // Puedes añadir más parámetros según sea necesario
        .input('no_contrato', mssql.VarChar, request.no_contrato)
        .input('fh_inicio', mssql.VarChar, request.fh_inicio)
        .input('fh_termino', mssql.VarChar, request.fh_termino)
        .input('monto_variable', mssql.Decimal, request.monto_variable)
        .input('monto_fijo', mssql.Decimal, request.monto_fijo)
        .input('monto_total', mssql.Decimal, request.monto_total)
        .input('id_forma_pago', mssql.Int, request.id_forma_pago)
        .input('id_tipo_contrato', mssql.Int, request.id_tipo_contrato)
        .input('id_consultora', mssql.Int, request.id_consultora)
        .input('id_area', mssql.Int, request.id_area)
        .input('id_gerente', mssql.Int, request.id_gerente)
        .input('activo', mssql.VarChar, request.activo)

        .input('id_archivo', mssql.Int, request.id_archivo)
        .input('nombre', mssql.VarChar, request.nombre)
        .input('ruta', mssql.VarChar, request.ruta)

        .input('id_contrato_convenio', mssql.Int, request.id_contrato_convenio)
        
        .input('id_usuario', mssql.Int, request.id_usuario)
        .input('ip', mssql.VarChar, request.ip)
        .execute('sp_registraActualizaContrato'); // Reemplaza con el nombre de tu procedimiento almacenado

        // Mapeamos los valores
        const respuesta: ActRegResponse[] = mapToInterface<ActRegResponse>(
            result.recordset
        );

        return respuesta;
    },

}