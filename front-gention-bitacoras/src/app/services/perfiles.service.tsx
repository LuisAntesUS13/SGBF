import { ConsultaPerfilesContratos, GuardaPerfil } from "../model/request/perfiles.request.tsx";
import { ErrorPersonalizado } from "../model/response/error.response.tsx";
import { RespuestaPerfilContrato } from "../model/response/perfiles.response.tsx";
import { API_ROUTES } from "../shared/rutasApi.tsx";


export async function guardaActualizaPerfilesContrato(guardaContrato: GuardaPerfil) {
    try {
        const response = await fetch(`${API_ROUTES.contratos}/addUpdatePerfilContrato`, {
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
              mensaje: errorData.message	+ (errorData.error? " | " + errorData.error: ""),
              correcto: errorData.success,
              data: errorData.data
            }  as ErrorPersonalizado
          }
          
          const respuesta =  await response.json();
          
        const data: any = {
          correcto: respuesta.success,
          mensaje: respuesta.message,
          data: {id_perfil_contrato: respuesta.data.id_perfil_contrato ?? null}
        }
        return data; // Retorna los datos obtenidos
    } catch (error) {
      console.error(error);
      throw error; // Maneja el error externamente si es necesario
    }
}

export async function getPerfilesContratosData(consultaPerfilesContratos: ConsultaPerfilesContratos) {
  try {
    const response = await fetch(`${API_ROUTES.contratos}/getPerfilesContratos`, {
      method: 'POST', // Especifica que es un POST
      headers: {
        'Content-Type': 'application/json', // Indica que el cuerpo de la solicitud es JSON
      },
      body: JSON.stringify(consultaPerfilesContratos), // Reemplaza esto con los datos que quieres enviar
    });

    if (!response.ok) {
      const errorData = await response.json();
      // eslint-disable-next-line no-throw-literal
      throw {
        correcto: errorData.success,
        mensaje: errorData.message,
        data: null,
      } as ErrorPersonalizado
    }
    const respuesta = await response.json();

    const data: RespuestaPerfilContrato = {
      correcto: respuesta.success,
      mensaje: respuesta.message,
      data: respuesta.data,
    }

    return data; // Retorna los datos obtenidos
  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw error; // Retorna el error para manejarlo externamente
  }
}