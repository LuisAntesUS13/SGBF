
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import  {SECRET_KEY} from '../config/config';
import  {PROD} from '../config/config';
import { CustomResponseError } from '../util/response';
import { MENSAJES } from '../util/constantes';
import { loggerReq } from '../util/log/requestLog';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

  if(PROD){
    const token = req.headers['authorization']?.split(' ')[1] || '';
  
    if (!token) {
      CustomResponseError(res, req, MENSAJES.TOKEN_VACIO, 401);
    }
  
    jwt.verify(token, SECRET_KEY!, (err, decoded) => {
      if (err) {
         CustomResponseError(res, req, MENSAJES.TOKEN_INVALIDO, 401);
      }

      let datos = "";
      if (typeof decoded !== 'string' && decoded) {
        // Accede a los valores incluidos en el token
        const { id_usuario, id_rol, rol } = decoded;
        datos =  '[' + id_usuario +  ' :: ' +  id_rol + ' :: ' + rol + ']';
        req.body.ip = req.ip;
        req.body.id_usuario = id_usuario; 
      }

  
      const bodyString = JSON.stringify(req.body);
      const message =  '[' + req.method +  ' :: ' +  req.originalUrl + ' :: ' + req.ip + ']'+ '\n' + datos + '\n' + bodyString  ;
      loggerReq.info(message);
      
      next();
    });
  } else {

    req.body.ip = req.ip;
    req.body.id_usuario = "5"; 
    const bodyString = JSON.stringify(req.body);
    const message =  '[' + req.method +  ' :: ' +  req.originalUrl + ' :: ' + req.ip + ']' + '\n' + bodyString  ;
    loggerReq.info(message);
    next();
    
  }
};