import { Request, Response } from "express";
import { catalogoServicio } from "../service/catalogoService";
import { CustomResponse, CustomResponseError } from "../util/response";
import { MENSAJES } from "../util/constantes";
import {
  CatalogoDocumentosRequest,
  CatalogoRequest,
  RegActCatalogoRequest,
} from "../model/request/request";
import { mapToInterfaceobject } from "../util/util";

export const getCatalogoModuloAplicativo = async (
  req: Request,
  res: Response
) => {
  try {
    const objetoBody: CatalogoRequest = mapToInterfaceobject<CatalogoRequest>(
      req.body
    );

    const respuesta = await catalogoServicio.getCatalogoModuloAplicativo(
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

export const RegActCatalogoModuloAplicativo = async (
  req: Request,
  res: Response
) => {
  try {
    const objetoBody: RegActCatalogoRequest =
      mapToInterfaceobject<RegActCatalogoRequest>(req.body);

    const respuesta = await catalogoServicio.RegActCatalogoModuloAplicativo(
      objetoBody
    );

    const mensaje =
      objetoBody.id != null
        ? respuesta[0].correcto
          ? MENSAJES.ACTUALIZADO_CORRECTO
          : MENSAJES.ACTUALIZADO_INCORRECTO
        : respuesta[0].correcto
        ? MENSAJES.GUARDADO_CORRECTO
        : MENSAJES.GUARDADO_INCORRECTO;
        
    CustomResponse(res, mensaje, respuesta[0].id, respuesta[0].correcto);
  } catch (error) {
    const mensaje = (error as Error).stack + "";
    CustomResponseError(res, req, mensaje);
  }
};

export const getCatalogoAreas = async (req: Request, res: Response) => {
  try {
    const objetoBody: CatalogoRequest = mapToInterfaceobject<CatalogoRequest>(
      req.body
    );

    const respuesta = await catalogoServicio.getCatalogoAreas(objetoBody);

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

export const getCatalogoConsultoras = async (req: Request, res: Response) => {
  try {
    const objetoBody: CatalogoRequest = mapToInterfaceobject<CatalogoRequest>(
      req.body
    );

    const respuesta = await catalogoServicio.getCatalogoConsultoras(objetoBody);

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

export const getCatalogoEstatus = async (req: Request, res: Response) => {
  try {
    const objetoBody: CatalogoRequest = mapToInterfaceobject<CatalogoRequest>(
      req.body
    );

    const respuesta = await catalogoServicio.getCatalogoEstatus(objetoBody);

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

export const getCatalogoFormaPago = async (req: Request, res: Response) => {
  try {
    const objetoBody: CatalogoRequest = mapToInterfaceobject<CatalogoRequest>(
      req.body
    );

    const respuesta = await catalogoServicio.getCatalogoFormaPago(objetoBody);

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

export const getCatalogoProyecto = async (req: Request, res: Response) => {
  try {
    const objetoBody: CatalogoRequest = mapToInterfaceobject<CatalogoRequest>(
      req.body
    );

    const respuesta = await catalogoServicio.getCatalogoProyecto(objetoBody);

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

export const getCatalogoTipoContrato = async (req: Request, res: Response) => {
  try {
    const objetoBody: CatalogoRequest = mapToInterfaceobject<CatalogoRequest>(
      req.body
    );

    const respuesta = await catalogoServicio.getCatalogoTipoContrato(
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

export const getCatalogoPerfilConsultor = async (
  req: Request,
  res: Response
) => {
  try {
    const objetoBody: CatalogoRequest = mapToInterfaceobject<CatalogoRequest>(
      req.body
    );

    const respuesta = await catalogoServicio.getCatalogoPerfilConsultor(
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

export const getCatalogoDocumento = async (req: Request, res: Response) => {
  try {
    const objetoBody: CatalogoDocumentosRequest =
      mapToInterfaceobject<CatalogoDocumentosRequest>(req.body);

    const respuesta = await catalogoServicio.getCatalogoDocumento(objetoBody);

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

export const getCatalogoExtencion = async (req: Request, res: Response) => {
  try {
    const objetoBody: CatalogoRequest = mapToInterfaceobject<CatalogoRequest>(
      req.body
    );

    const respuesta = await catalogoServicio.getCatalogoExtencion(objetoBody);

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

export const getCatalogoCargo = async (req: Request, res: Response) => {
  try {
    const objetoBody: CatalogoRequest = mapToInterfaceobject<CatalogoRequest>(
      req.body
    );

    const respuesta = await catalogoServicio.getCatalogoCargo(objetoBody);

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



export const getCatalogoTipoAccion = async (req: Request, res: Response) => {
  try {
    const objetoBody: CatalogoRequest = mapToInterfaceobject<CatalogoRequest>(
      req.body
    );

    const respuesta = await catalogoServicio.getCatalogoTipoAccion(objetoBody);

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



export const getCatalogoPorCargo = async (req: Request, res: Response) => {
  try {
    const objetoBody: CatalogoRequest = mapToInterfaceobject<CatalogoRequest>(
      req.body
    );

    const respuesta = await catalogoServicio.getCatalogoPorCargo(objetoBody);

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

