import { Request, Response } from "express";
import { CustomResponse, CustomResponseError } from "../util/response";
import { MENSAJES } from "../util/constantes";
import { ConsultaContratosRequest, ConsultaPerfilesContratosRequest, ConsultaPeriodosContratosRequest, RegistraActualizaContratoRequest, RegistraActualizaPerfilContratoRequest, RegistraActualizaPeriodosContratoRequest } from "../model/request/request";
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
      const mensaje = (error as Error).message;
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

      let mensaje = "";
      if(respuesta[0].correcto){
        mensaje = objetoBody.id_contrato != null ? MENSAJES.ACTUALIZADO_CORRECTO : MENSAJES.GUARDADO_CORRECTO;
      } else {
        throw new Error(respuesta[0].mensaje);
      }
        
      CustomResponse(res, mensaje, respuesta[0].id, respuesta[0].correcto);
    } catch (error) {
      const mensaje = (error as Error).message;
      CustomResponseError(res, req, mensaje);
    }
};


export const getPerfilesContratos = async (
  req: Request,
  res: Response
) => {
  try {
    const objetoBody: ConsultaPerfilesContratosRequest = mapToInterfaceobject<ConsultaPerfilesContratosRequest>(
      req.body
    );

    const respuesta = await ContratoServicio.getPerfilesContratos(
      objetoBody
    );

    if (respuesta.length > 0) {
      CustomResponse(res, MENSAJES.DATOS_OBTENIDOS, respuesta, true);
    } else {
      CustomResponse(res, MENSAJES.SIN_INFORMACION, respuesta, false);
    }
  } catch (error) {
    const mensaje = (error as Error).message;
    CustomResponseError(res, req, mensaje);
  }
};


export const ActRegPerfilContrato = async (
  req: Request,
  res: Response
) => {
  try {
    const objetoBody: RegistraActualizaPerfilContratoRequest = mapToInterfaceobject<RegistraActualizaPerfilContratoRequest>(
      req.body
    );

    const respuesta = await ContratoServicio.ActRegPerfilContrato(
      objetoBody
    );

    let mensaje = "";
    if(respuesta[0].correcto){
      mensaje = objetoBody.id_contrato != null ? MENSAJES.ACTUALIZADO_CORRECTO : MENSAJES.GUARDADO_CORRECTO;
    } else {
      throw new Error(respuesta[0].mensaje);
    }
      
    CustomResponse(res, mensaje, respuesta[0].id, respuesta[0].correcto);
  } catch (error) {
    const mensaje = (error as Error).message;
    CustomResponseError(res, req, mensaje);
  }
};



export const ActRegPeriodosContrato = async (
  req: Request,
  res: Response
) => {
  try {
    const objetoBody: RegistraActualizaPeriodosContratoRequest = mapToInterfaceobject<RegistraActualizaPeriodosContratoRequest>(
      req.body
    );

    const respuesta = await ContratoServicio.ActRegPeriodosContrato(
      objetoBody
    );

    let mensaje = "";
    if(respuesta[0].correcto){
      mensaje = objetoBody.id_contrato != null ? MENSAJES.ACTUALIZADO_CORRECTO : MENSAJES.GUARDADO_CORRECTO;
    } else {
      throw new Error(respuesta[0].mensaje);
    }
      
    CustomResponse(res, mensaje, respuesta[0].id, respuesta[0].correcto);
  } catch (error) {
    const mensaje = (error as Error).message;
    CustomResponseError(res, req, mensaje);
  }
};


export const getPeriodosContrato = async (
  req: Request,
  res: Response
) => {
  try {
    const objetoBody: ConsultaPeriodosContratosRequest = mapToInterfaceobject<ConsultaPeriodosContratosRequest>(
      req.body
    );

    console.log(objetoBody);
    const respuesta = await ContratoServicio.getPeriodosContrato(
      objetoBody
    );

    if (respuesta.length > 0) {
      CustomResponse(res, MENSAJES.DATOS_OBTENIDOS, respuesta, true);
    } else {
      CustomResponse(res, MENSAJES.SIN_INFORMACION, respuesta, false);
    }
  } catch (error) {

    console.log(error);
    const mensaje = (error as Error).message;
    CustomResponseError(res, req, mensaje);
  }
};









