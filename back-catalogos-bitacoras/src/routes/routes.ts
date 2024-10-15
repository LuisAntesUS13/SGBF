
import { getCatalogoModuloAplicativo } from "../controller/catalogoController";
import { RUTA_BASE } from "../util/constantes";
import { Router } from "express";

const rutas = Router();

rutas.post(`${RUTA_BASE}/modulo_aplicativo`, getCatalogoModuloAplicativo);


export default rutas;
