import { getContratos } from "../controller/ContratoControllet";
import { RUTA_BASE } from "../util/constantes";
import { Router } from "express";

const rutas = Router();

rutas.post(`${RUTA_BASE}/getContratos`, getContratos);

export default rutas;
