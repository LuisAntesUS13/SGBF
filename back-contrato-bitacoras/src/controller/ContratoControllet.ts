import { Request, Response } from "express";
import { CustomResponse, CustomResponseError } from "../util/response";
import { MENSAJES } from "../util/constantes";
import { ConsultaContratosRequest, RegistraActualizaContratoRequest } from "../model/request/request";
import { mapToInterfaceobject } from "../util/util";
import { ContratoServicio } from "../service/ContratoService";


export const getContratos = async (
    req: Request,
    res: Response
  ) => {
    try {
      const objetoBody: ConsultaContratosRequest = mapToInterfaceobject<ConsultaContratosRequest>(
        req.body
      );
  
      const respuesta = await ContratoServicio.getContratos(
        objetoBody
      );
  
      if (respuesta.length > 0) {
        CustomResponse(res, MENSAJES.DATOS_OBTENIDOS, respuesta, true);
      } else {
        CustomResponse(res, MENSAJES.SIN_INFORMACION, respuesta, false);
      }
    } catch (error) {
      const mensaje = (error as Error).stack + "";
      CustomResponseError(res, req, mensaje);
    }
};


export const ActRegContrato = async (
    req: Request,
    res: Response
  ) => {
    try {
      const objetoBody: RegistraActualizaContratoRequest = mapToInterfaceobject<RegistraActualizaContratoRequest>(
        req.body
      );
  
      const respuesta = await ContratoServicio.ActRegContrato(
        objetoBody
      );
  
      if (respuesta.length > 0) {
        CustomResponse(res, MENSAJES.DATOS_OBTENIDOS, respuesta, true);
      } else {
        CustomResponse(res, MENSAJES.SIN_INFORMACION, respuesta, false);
      }
    } catch (error) {
      const mensaje = (error as Error).stack + "";
      CustomResponseError(res, req, mensaje);
    }
};
