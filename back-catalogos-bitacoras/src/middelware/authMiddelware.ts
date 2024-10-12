
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import  {SECRET_KEY} from '../config/config';
import  {VALIDA_TOKEN} from '../config/config';

export const authMiddelware = (req: Request, res: Response, next: NextFunction) => {
  if(VALIDA_TOKEN){
    const token = req.headers['authorization']?.split(' ')[1] || '';
  
    if (!token) {
      res.status(401).send('Token no proporcionado');
    }
  
    jwt.verify(token, SECRET_KEY!, (err, decoded) => {
      if (err) {
         res.status(401).send('Token inválido');
      }
      
      next();
    });
  } else {
    next();
  }
};