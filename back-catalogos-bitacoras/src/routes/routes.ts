import {
  getCatalogoAreas,
  getCatalogoCargo,
  getCatalogoConsultoras,
  getCatalogoDocumento,
  getCatalogoEstatus,
  getCatalogoExtencion,
  getCatalogoFormaPago,
  getCatalogoModuloAplicativo,
  getCatalogoNivelPerfil,
  getCatalogoPerfilConsultor,
  getCatalogoPorCargo,
  getCatalogoProyecto,
  getCatalogoTipoAccion,
  getCatalogoTipoContrato,
  RegActCatalogoModuloAplicativo,
} from "../controller/catalogoController";
import { RUTA_BASE } from "../util/constantes";
import { Router } from "express";

const rutas = Router();

rutas.post(`${RUTA_BASE}/modulo_aplicativo`, getCatalogoModuloAplicativo);
rutas.post(`${RUTA_BASE}/reg_act_modulo_aplicativo`, RegActCatalogoModuloAplicativo);

rutas.post(`${RUTA_BASE}/areas`, getCatalogoAreas);
rutas.post(`${RUTA_BASE}/consultores`, getCatalogoConsultoras);
rutas.post(`${RUTA_BASE}/estatus`, getCatalogoEstatus);
rutas.post(`${RUTA_BASE}/forma_pago`, getCatalogoFormaPago);
rutas.post(`${RUTA_BASE}/proyecto`, getCatalogoProyecto);
rutas.post(`${RUTA_BASE}/tipo_contrato`, getCatalogoTipoContrato);
rutas.post(`${RUTA_BASE}/perfil_consultor`, getCatalogoPerfilConsultor);
rutas.post(`${RUTA_BASE}/documentos`, getCatalogoDocumento);
rutas.post(`${RUTA_BASE}/extencion`, getCatalogoExtencion);
rutas.post(`${RUTA_BASE}/cargo`, getCatalogoCargo);
rutas.post(`${RUTA_BASE}/tipo_accion`, getCatalogoTipoAccion);
rutas.post(`${RUTA_BASE}/nivel_perfil`, getCatalogoNivelPerfil);

rutas.post(`${RUTA_BASE}/usuario_por_cargo`, getCatalogoPorCargo);

export default rutas;
