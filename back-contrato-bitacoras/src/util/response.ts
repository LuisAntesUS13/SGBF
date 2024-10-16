
import { Request, Response} from 'express';
import { loggerError } from './log/errorLog';

export function CustomResponse(res: Response, message: string, data?: any, success: boolean = true) {
  // Formato de la respuesta
  const response = {
    success: success,
    message: message,
    data: data || null, // Si no hay datos, se envía null
  };

  // Enviar la respuesta con el status code 200
  return res.status(200).json(response);
}

export function CustomResponseError(res: Response, req: Request, message: string, code: number = 400) {

  let formattedMessage = message + '\n' + '[' + req.method +  ' :: ' +  req.originalUrl + ' :: ' + req.ip + ']';
  loggerError.error(formattedMessage);

  // Formato de la respuesta
  const response = {
    success: false,
    message: message,
    data: null, 
  };

  // Enviar la respuesta con el status code 400
  return res.status(code).json(response);
}