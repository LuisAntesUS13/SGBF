import {
  ConsultaConsultor,
  ConsultaContratos,
  ConsultaLiderTecnico,
} from "../model/response/equiposDeTrabajo.response.tsx";
import { GenericReponse } from "../model/response/respuestasGenerica.response.tsx";
import { API_ROUTES } from "../shared/rutasApi.tsx";

export async function getContratos() {
  try {
    const response = await fetch(
      `${API_ROUTES.equiposDeTrabajo}/getContratos`,
      {
        method: "POST", // Especifica que es un POST
        headers: {
          "Content-Type": "application/json", // Indica que el cuerpo de la solicitud es JSON
        }, // Reemplaza esto con los datos que quieres enviar
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: GenericReponse<ConsultaContratos[]> = await response.json();
    return data; // Retorna los datos obtenidos
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error; // Retorna el error para manejarlo externamente
  }
}

export async function getLideresTecnicos() {
  try {
    const response = await fetch(
      `${API_ROUTES.equiposDeTrabajo}/getLiderTecnico`,
      {
        method: "POST", // Especifica que es un POST
        headers: {
          "Content-Type": "application/json", // Indica que el cuerpo de la solicitud es JSON
        }, // Reemplaza esto con los datos que quieres enviar
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: GenericReponse<ConsultaLiderTecnico[]> = await response.json();
    return data; // Retorna los datos obtenidos
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error; // Retorna el error para manejarlo externamente
  }
}

export async function getConsultores() {
  try {
    const response = await fetch(
      `${API_ROUTES.equiposDeTrabajo}/getConsultor`,
      {
        method: "POST", // Especifica que es un POST
        headers: {
          "Content-Type": "application/json", // Indica que el cuerpo de la solicitud es JSON
        }, // Reemplaza esto con los datos que quieres enviar
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: GenericReponse<ConsultaConsultor[]> = await response.json();
    return data; // Retorna los datos obtenidos
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error; // Retorna el error para manejarlo externamente
  }
}
