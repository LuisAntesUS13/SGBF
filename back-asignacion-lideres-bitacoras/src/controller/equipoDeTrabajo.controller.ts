import { Request, Response } from "express";
import { CustomResponse, CustomResponseError } from "../util/response";
import { MENSAJES } from "../util/constantes";
import { equiposDeTrabajoService } from "../service/equipoDeTrabajo";

export const getContrato = async (req: Request, res: Response) => {
  try {
    const datos = await equiposDeTrabajoService.getContrato(); // Llama al servicio para obtener los contratos

    if (datos.length > 0) {
      CustomResponse(res, MENSAJES.DATOS_OBTENIDOS, datos, true);
    } else {
      CustomResponse(res, MENSAJES.SIN_INFORMACION, datos, false);
    }
  } catch (error) {
    const mensaje = (error as Error).stack || "Error inesperado";
    CustomResponseError(res, req, mensaje);
  }
};

export const getLiderTecnico = async (req: Request, res: Response) => {
  try {
    const datos = await equiposDeTrabajoService.getLiderTecnico(); // Llama al servicio para obtener los lideresTecnicos

    if (datos.length > 0) {
      CustomResponse(res, MENSAJES.DATOS_OBTENIDOS, datos, true);
    } else {
      CustomResponse(res, MENSAJES.SIN_INFORMACION, datos, false);
    }
  } catch (error) {
    const mensaje = (error as Error).stack || "Error inesperado";
    CustomResponseError(res, req, mensaje);
  }
};

export const getConsultor = async (req: Request, res: Response) => {
  try {
    const datos = await equiposDeTrabajoService.getConsultor(); // Llama al servicio para obtener los Consultores

    if (datos.length > 0) {
      CustomResponse(res, MENSAJES.DATOS_OBTENIDOS, datos, true);
    } else {
      CustomResponse(res, MENSAJES.SIN_INFORMACION, datos, false);
    }
  } catch (error) {
    const mensaje = (error as Error).stack || "Error inesperado";
    CustomResponseError(res, req, mensaje);
  }
};
