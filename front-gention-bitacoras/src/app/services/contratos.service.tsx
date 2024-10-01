/* eslint-disable no-unreachable */


import { ConsultaContrato, GuardaContrato } from "../model/request/contratos.request.tsx";
import { RespuestaContrato, RespuestaGuardaContrato } from "../model/response/contratos.response.tsx";
import { ErrorPersonalizado } from "../model/response/error.response.tsx";
import { API_ROUTES } from "../shared/rutasApi.tsx";

export async function getContratosData(consultaContrato: ConsultaContrato) {
    try {
        const response = await fetch(`${API_ROUTES.contratos}/getContratos`, {
            method: 'POST', // Especifica que es un POST
            headers: {
              'Content-Type': 'application/json', // Indica que el cuerpo de la solicitud es JSON
            },
            body: JSON.stringify(consultaContrato), // Reemplaza esto con los datos que quieres enviar
          });
          
        if (!response.ok) {
          const errorData = await response.json();
          // eslint-disable-next-line no-throw-literal
          throw {
            mensaje: errorData.message + (errorData.error? " | " + errorData.error: ""),
            codigoEstatus: errorData.statusCode,
            codigoError: errorData.codeError? errorData.codeError : "",
          }  as ErrorPersonalizado
        }
        

        const data: RespuestaContrato = await response.json();
        return data; // Retorna los datos obtenidos
    } catch (error) {
      console.error('Error al obtener datos:', error);
      throw error; // Retorna el error para manejarlo externamente
    }
 }


 export async function guardaActualizaContratos(guardaContrato: GuardaContrato) {
  try {
      const response = await fetch(`${API_ROUTES.contratos}/addUpdateContrato`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify(guardaContrato), 
        });

        if (!response.ok) {
          const errorData = await response.json(); 
          // eslint-disable-next-line no-throw-literal
          throw {
            mensaje: errorData.message + (errorData.error? " | " + errorData.error: ""),
            codigoEstatus: errorData.statusCode,
            codigoError: errorData.codeError? errorData.codeError : "",
          }  as ErrorPersonalizado
        }
        
        const respuesta =  await response.json();
        
      const data: RespuestaGuardaContrato = {
        correcto: respuesta.data.correcto,
        mensaje: respuesta.data.mensaje,
        id_contrato: respuesta.data.id_contrato,
      }
      return data; // Retorna los datos obtenidos
  } catch (error) {
    console.error(error);
    throw error; // Maneja el error externamente si es necesario
  }
}