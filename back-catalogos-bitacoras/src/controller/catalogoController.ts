import { Request, Response } from 'express';
import { catalogoServicio }  from '../service/catalogoService'
import { CustomResponse, CustomResponseError } from '../util/response';
import { MENSAJES } from '../util/constantes';

export const getCatalogoModuloAplicativo = async (req: Request, res: Response) => {
    try {
      const respuesta = await catalogoServicio.getCatalogoModuloAplicativo(req.body);

      if(respuesta.length > 0){
        CustomResponse(res, MENSAJES.DATOS_OBTENIDOS,respuesta, true);
      } else {
        CustomResponse(res, MENSAJES.SIN_INFORMACION,respuesta, false);
      }

    } catch (error) {
      const mensaje = (error as Error).stack+"";
      CustomResponseError(res, req, mensaje);
    }
};



export const getCatalogoAreas = async (req: Request, res: Response) => {
  try {
    const respuesta = await catalogoServicio.getCatalogoAreas(req.body);

    if(respuesta.length > 0){
      CustomResponse(res, MENSAJES.DATOS_OBTENIDOS,respuesta, true);
    } else {
      CustomResponse(res, MENSAJES.SIN_INFORMACION,respuesta, false);
    }

  } catch (error) {
    const mensaje = (error as Error).stack+"";
    CustomResponseError(res, req, mensaje);
  }
};

export const getCatalogoConsultoras = async (req: Request, res: Response) => {
  try {
    const respuesta = await catalogoServicio.getCatalogoConsultoras(req.body);

    if(respuesta.length > 0){
      CustomResponse(res, MENSAJES.DATOS_OBTENIDOS,respuesta, true);
    } else {
      CustomResponse(res, MENSAJES.SIN_INFORMACION,respuesta, false);
    }

  } catch (error) {
    const mensaje = (error as Error).stack+"";
    CustomResponseError(res, req, mensaje);
  }
};


export const getCatalogoEstatus = async (req: Request, res: Response) => {
  try {
    const respuesta = await catalogoServicio.getCatalogoEstatus(req.body);

    if(respuesta.length > 0){
      CustomResponse(res, MENSAJES.DATOS_OBTENIDOS,respuesta, true);
    } else {
      CustomResponse(res, MENSAJES.SIN_INFORMACION,respuesta, false);
    }

  } catch (error) {
    const mensaje = (error as Error).stack+"";
    CustomResponseError(res, req, mensaje);
  }
};


export const getCatalogoFormaPago = async (req: Request, res: Response) => {
  try {
    const respuesta = await catalogoServicio.getCatalogoFormaPago(req.body);

    if(respuesta.length > 0){
      CustomResponse(res, MENSAJES.DATOS_OBTENIDOS,respuesta, true);
    } else {
      CustomResponse(res, MENSAJES.SIN_INFORMACION,respuesta, false);
    }

  } catch (error) {
    const mensaje = (error as Error).stack+"";
    CustomResponseError(res, req, mensaje);
  }
};


export const getCatalogoProyecto = async (req: Request, res: Response) => {
  try {
    const respuesta = await catalogoServicio.getCatalogoProyecto(req.body);

    if(respuesta.length > 0){
      CustomResponse(res, MENSAJES.DATOS_OBTENIDOS,respuesta, true);
    } else {
      CustomResponse(res, MENSAJES.SIN_INFORMACION,respuesta, false);
    }

  } catch (error) {
    const mensaje = (error as Error).stack+"";
    CustomResponseError(res, req, mensaje);
  }
};


export const getCatalogoTipoContrato = async (req: Request, res: Response) => {
  try {
    const respuesta = await catalogoServicio.getCatalogoTipoContrato(req.body);

    if(respuesta.length > 0){
      CustomResponse(res, MENSAJES.DATOS_OBTENIDOS,respuesta, true);
    } else {
      CustomResponse(res, MENSAJES.SIN_INFORMACION,respuesta, false);
    }

  } catch (error) {
    const mensaje = (error as Error).stack+"";
    CustomResponseError(res, req, mensaje);
  }
};


export const getCatalogoPerfilConsultor = async (req: Request, res: Response) => {
  try {
    const respuesta = await catalogoServicio.getCatalogoPerfilConsultor(req.body);

    if(respuesta.length > 0){
      CustomResponse(res, MENSAJES.DATOS_OBTENIDOS,respuesta, true);
    } else {
      CustomResponse(res, MENSAJES.SIN_INFORMACION,respuesta, false);
    }

  } catch (error) {
    const mensaje = (error as Error).stack+"";
    CustomResponseError(res, req, mensaje);
  }
};


export const getCatalogoDocumento = async (req: Request, res: Response) => {
  try {
    const respuesta = await catalogoServicio.getCatalogoDocumento(req.body);

    if(respuesta.length > 0){
      CustomResponse(res, MENSAJES.DATOS_OBTENIDOS,respuesta, true);
    } else {
      CustomResponse(res, MENSAJES.SIN_INFORMACION,respuesta, false);
    }

  } catch (error) {
    const mensaje = (error as Error).stack+"";
    CustomResponseError(res, req, mensaje);
  }
};

export const getCatalogoExtencion = async (req: Request, res: Response) => {
  try {
    const respuesta = await catalogoServicio.getCatalogoExtencion(req.body);

    if(respuesta.length > 0){
      CustomResponse(res, MENSAJES.DATOS_OBTENIDOS,respuesta, true);
    } else {
      CustomResponse(res, MENSAJES.SIN_INFORMACION,respuesta, false);
    }

  } catch (error) {
    const mensaje = (error as Error).stack+"";
    CustomResponseError(res, req, mensaje);
  }
};



export const getCatalogoCargo = async (req: Request, res: Response) => {
  try {
    const respuesta = await catalogoServicio.getCatalogoCargo(req.body);

    if(respuesta.length > 0){
      CustomResponse(res, MENSAJES.DATOS_OBTENIDOS,respuesta, true);
    } else {
      CustomResponse(res, MENSAJES.SIN_INFORMACION,respuesta, false);
    }

  } catch (error) {
    const mensaje = (error as Error).stack+"";
    CustomResponseError(res, req, mensaje);
  }
};