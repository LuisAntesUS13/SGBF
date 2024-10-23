import {
  ActRegContrato,
  ActRegPerfilContrato,
  ActRegPeriodosContrato,
  getContratos,
  getPerfilesContratos,
  getPeriodosContrato,
} from "../controller/ContratoControllet";
import { RUTA_BASE } from "../util/constantes";
import { Router } from "express";

const rutas = Router();

rutas.post(`${RUTA_BASE}/getContratos`, getContratos);

rutas.post(`${RUTA_BASE}/addUpdateContrato`, ActRegContrato);

rutas.post(`${RUTA_BASE}/getPerfilesContratos`, getPerfilesContratos);

rutas.post(`${RUTA_BASE}/addUpdatePerfilContrato`, ActRegPerfilContrato);

rutas.post(`${RUTA_BASE}/getPeriodosContratos`, getPeriodosContrato);

rutas.post(`${RUTA_BASE}/addUpdatePeriodosContrato`, ActRegPeriodosContrato);


export default rutas;
