import {
  ActRegContrato,
  ActRegPerfilContrato,
  getContratos,
  getPerfilesContratos,
} from "../controller/ContratoControllet";
import { RUTA_BASE } from "../util/constantes";
import { Router } from "express";

const rutas = Router();

rutas.post(`${RUTA_BASE}/getContratos`, getContratos);

rutas.post(`${RUTA_BASE}/addUpdateContrato`, ActRegContrato);

rutas.post(`${RUTA_BASE}/getPerfilesContratos`, getPerfilesContratos);

rutas.post(`${RUTA_BASE}/addUpdatePerfilContrato`, ActRegPerfilContrato);

export default rutas;
