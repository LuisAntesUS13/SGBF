import { connection } from "../database/connection";

import { mapToInterface } from "../util/util";
import {
  ConsultarConsultorResponse,
  ConsultarContratosResponse,
  ConsultarLiderTecnicoResponse,
} from "../model/response/equipoDeTrabajoResponse";

export const equiposDeTrabajoService = {
  // throw new Error("Error generado a propósito en la ruta");  Ejemplo de  error
  async getContrato(): Promise<ConsultarContratosResponse[]> {
    // Ejecuta tu consulta
    const pool = await connection(); // Asegúrate de obtener la conexión correctamente

    // Crear la consulta con la condición dinámica
    const query = " SELECT id_contrato, no_contrato FROM contratos";
    // Crear el request y asignar los parámetros
    let req = pool.request();

    // Ejecutar la consulta
    const result = await req.query(query);

    // Mapeamos los valores
    const respuesta: ConsultarContratosResponse[] =
      mapToInterface<ConsultarContratosResponse>(result.recordset);

    return respuesta;
  },

  async getLiderTecnico(): Promise<ConsultarLiderTecnicoResponse[]> {
    // Ejecuta tu consulta
    const pool = await connection(); // Asegúrate de obtener la conexión correctamente
    const innerJoin =
      " INNER JOIN usuario_role on usuarios.id_usuario = usuario_role.id_usuario";
    const where = " WHERE usuario_role.id_rol = 1";
    // Crear la consulta con la condición dinámica
    const query =
      "SELECT usuarios.id_usuario, CONCAT(nombre, ' ', primer_apellido, ' ', segundo_apellido) AS nombre_completo FROM usuarios" +
      innerJoin +
      where;
    // Crear el request y asignar los parámetros
    let req = pool.request();

    // Ejecutar la consulta
    const result = await req.query(query);

    // Mapeamos los valores
    const respuesta: ConsultarLiderTecnicoResponse[] =
      mapToInterface<ConsultarLiderTecnicoResponse>(result.recordset);

    return respuesta;
  },

  async getConsultor(): Promise<ConsultarConsultorResponse[]> {
    // Ejecuta tu consulta
    const pool = await connection(); // Asegúrate de obtener la conexión correctamente
    const leftJoin =
      " LEFT JOIN usuario_role ur ON u.id_usuario = ur.id_usuario";
    const where = " WHERE ur.id_rol IS NULL";
    // Crear la consulta con la condición dinámica
    const query =
      "SELECT u.id_usuario, CONCAT(u.nombre,' ', primer_apellido,' ', segundo_apellido) AS nombre_completo FROM usuarios u " +
      leftJoin +
      where;
    // Crear el request y asignar los parámetros
    let req = pool.request();

    // Ejecutar la consulta
    const result = await req.query(query);

    // Mapeamos los valores
    const respuesta: ConsultarConsultorResponse[] =
      mapToInterface<ConsultarConsultorResponse>(result.recordset);

    return respuesta;
  },
};
