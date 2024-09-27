

import { ConsultaContrato, GuardaContrato } from "../model/request/contratos.request.tsx";
import { RespuestaContrato, RespuestaGuardaContrato } from "../model/response/contratos.response.tsx";
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
            throw new Error(`HTTP error! status: ${response.status}`);
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
          method: 'POST', // Especifica que es un POST
          headers: {
            'Content-Type': 'application/json', // Indica que el cuerpo de la solicitud es JSON
          },
          body: JSON.stringify(guardaContrato), // Reemplaza esto con los datos que quieres enviar
        });
        
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: RespuestaGuardaContrato = await response.json();
      return data; // Retorna los datos obtenidos
  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw error; // Retorna el error para manejarlo externamente
  }
}