
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import  {SECRET_KEY} from '../config/config';
import  {PROD} from '../config/config';
import { CustomResponseError } from '../util/response';
import { MENSAJES } from '../util/constantes';

export const authMiddelware = (req: Request, res: Response, next: NextFunction) => {

  if(PROD){
    const token = req.headers['authorization']?.split(' ')[1] || '';
  
    if (!token) {
      CustomResponseError(res, req, MENSAJES.TOKEN_VACIO, 401);
    }
  
    jwt.verify(token, SECRET_KEY!, (err, decoded) => {
      if (err) {
         CustomResponseError(res, req, MENSAJES.TOKEN_INVALIDO, 401);
      }
      
      next();
    });
  } else {
    next();
  }
};