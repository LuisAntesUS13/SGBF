import { respuestaPuebaController } from '../controller/controller';
import {RUTA_BASE} from '../util/constantes';
import { Router } from 'express';

const rutas = Router();

rutas.get(`${RUTA_BASE}/prueba` , respuestaPuebaController);

export default rutas;