import { Request, Response } from 'express';
import { catalogoServicio }  from '../service/catalogoService'

export const respuestaPuebaController = async (req: Request, res: Response) => {
  
    try {
      const respuesta = await catalogoServicio.respuestaPueba();
      res.status(200).json(respuesta);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el usuario' });
    }
};