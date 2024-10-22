import {
  getCatalogoAreas,
  getCatalogoCargo,
  getCatalogoConsultoras,
  getCatalogoDocumento,
  getCatalogoEstatus,
  getCatalogoExtencion,
  getCatalogoFormaPago,
  getCatalogoModuloAplicativo,
  getCatalogoPerfilConsultor,
  getCatalogoProyecto,
  getCatalogoTipoContrato,
  RegActCatalogoModuloAplicativo,
} from "../controller/catalogoController";
import {
  getConsultor,
  getContrato,
  getLiderTecnico,
} from "../controller/equipoDeTrabajo.controller";
import { RUTA_BASE } from "../util/constantes";
import { Router } from "express";

const rutas = Router();

rutas.post(`${RUTA_BASE}/modulo_aplicativo`, getCatalogoModuloAplicativo);
rutas.post(
  `${RUTA_BASE}/reg_act_modulo_aplicativo`,
  RegActCatalogoModuloAplicativo
);
rutas.post(`${RUTA_BASE}/areas`, getCatalogoAreas);
rutas.post(`${RUTA_BASE}/consultoras`, getCatalogoConsultoras);
rutas.post(`${RUTA_BASE}/estatus`, getCatalogoEstatus);
rutas.post(`${RUTA_BASE}/forma_pago`, getCatalogoFormaPago);
rutas.post(`${RUTA_BASE}/proyecto`, getCatalogoProyecto);
rutas.post(`${RUTA_BASE}/tipo_contrato`, getCatalogoTipoContrato);
rutas.post(`${RUTA_BASE}/perfil_consultor`, getCatalogoPerfilConsultor);
rutas.post(`${RUTA_BASE}/documento`, getCatalogoDocumento);
rutas.post(`${RUTA_BASE}/extencion`, getCatalogoExtencion);
rutas.post(`${RUTA_BASE}/cargo`, getCatalogoCargo);
rutas.post(`${RUTA_BASE}/bitacora/equiposDeTrabajo/contratos`, getContrato);
rutas.post(
  `${RUTA_BASE}/bitacora/equiposDeTrabajo/lideresTecnicos`,
  getLiderTecnico
);
rutas.post(`${RUTA_BASE}/bitacora/equiposDeTrabajo/consultores`, getConsultor);

export default rutas;
