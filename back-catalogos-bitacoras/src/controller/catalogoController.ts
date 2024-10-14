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