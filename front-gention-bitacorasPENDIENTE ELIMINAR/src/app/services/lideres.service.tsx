/* eslint-disable no-unreachable */
import { ConsultaReasignarLider } from "../model/request/reasignacionLider.tsx";
import { ErrorPersonalizado } from "../model/response/error.response.tsx";
import { RespuestaLider } from "../model/response/reasignacionLider.response.tsx";
import { API_ROUTES } from "../shared/rutasApi.tsx";

export async function getLideresData(consultaReasignarLider: ConsultaReasignarLider) {
    try {
        const response = await fetch(`${API_ROUTES.contratos}/getContratos`, { // CAMBIAR ESTO
            method: 'POST', // Especifica que es un POST
            headers: {
              'Content-Type': 'application/json', // Indica que el cuerpo de la solicitud es JSON
            },
            body: JSON.stringify(consultaReasignarLider), // Reemplaza esto con los datos que quieres enviar
          });

        if (!response.ok) {
          const errorData = await response.json();
          // eslint-disable-next-line no-throw-literal
          throw {
            mensaje: errorData.mensaje + (errorData.error? " | " + errorData.error: ""),
            correcto: errorData.correcto,
            codigoError: errorData.codeError? errorData.codeError : "",
            data: null
          }  as ErrorPersonalizado
        }
        const respuesta =  await response.json();
        
        const data: RespuestaLider = {
          codigoEstatus: respuesta.statusCode,
          mensaje: respuesta.message,
          data: respuesta.data,
        }
        
        return data; // Retorna los datos obtenidos
    } catch (error) {
      console.error('Error al obtener datos:', error);
      throw error; // Retorna el error para manejarlo externamente
    }
 }

