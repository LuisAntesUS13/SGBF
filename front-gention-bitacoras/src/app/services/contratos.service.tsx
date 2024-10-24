/* eslint-disable no-unreachable */


import { ConsultaContrato, ConsultaPeriodosContrato, GuardaContrato, GuardaPeriodosContrato } from "../model/request/contratos.request.tsx";
import { RespuestaContrato, RespuestaGuardaContrato, RespuestaPeriodosContrato } from "../model/response/contratos.response.tsx";
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
        correcto: errorData.success,
        mensaje: errorData.message,
        data: null,
      } as ErrorPersonalizado
    }
    const respuesta = await response.json();

    const data: RespuestaContrato = {
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
        correcto: errorData.success,
        mensaje: errorData.message,
        data: null,
      } as ErrorPersonalizado
    }

    const respuesta = await response.json();

    const data: RespuestaGuardaContrato = {
      correcto: respuesta.success,
      mensaje: respuesta.message,
      data: respuesta.data
    }
    return data; // Retorna los datos obtenidos
  } catch (error) {
    console.error(error);
    throw error; // Maneja el error externamente si es necesario
  }
}

export async function consultaPeriodosContrato(consultaPeriodosContrato: ConsultaPeriodosContrato) {
  try {
    const response = await fetch(`${API_ROUTES.contratos}/getPeriodosContratos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(consultaPeriodosContrato),
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

    const data: RespuestaPeriodosContrato = {
      correcto: respuesta.success,
      mensaje: respuesta.message,
      data: respuesta.data
    }
    return data; // Retorna los datos obtenidos
  } catch (error) {
    console.error(error);
    throw error; // Maneja el error externamente si es necesario
  }
}



export async function guardaActualizaPeriodosContrato(guardaPeriodosContrato: GuardaPeriodosContrato) {
  try {
    const response = await fetch(`${API_ROUTES.contratos}/addUpdatePeriodosContrato`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(guardaPeriodosContrato),
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

    const data: RespuestaGuardaContrato = {
      correcto: respuesta.success,
      mensaje: respuesta.message,
      data: respuesta.data
    }
    return data; // Retorna los datos obtenidos
  } catch (error) {
    console.error(error);
    throw error; // Maneja el error externamente si es necesario
  }
}



