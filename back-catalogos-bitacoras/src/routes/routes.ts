
import { getCatalogoAreas, getCatalogoCargo, getCatalogoConsultoras, getCatalogoDocumento, getCatalogoEstatus, getCatalogoExtencion, getCatalogoFormaPago, getCatalogoModuloAplicativo, getCatalogoPerfilConsultor, getCatalogoProyecto, getCatalogoTipoContrato } from "../controller/catalogoController";
import { RUTA_BASE } from "../util/constantes";
import { Router } from "express";

const rutas = Router();

rutas.post(`${RUTA_BASE}/modulo_aplicativo`, getCatalogoModuloAplicativo);
rutas.post(`${RUTA_BASE}/areas`, getCatalogoAreas);
rutas.post(`${RUTA_BASE}/consultores`, getCatalogoConsultoras);
rutas.post(`${RUTA_BASE}/estatus`, getCatalogoEstatus);
rutas.post(`${RUTA_BASE}/forma_pago`, getCatalogoFormaPago);
rutas.post(`${RUTA_BASE}/proyecto`, getCatalogoProyecto);
rutas.post(`${RUTA_BASE}/tipo_contrato`, getCatalogoTipoContrato);
rutas.post(`${RUTA_BASE}/perfil_consultor`, getCatalogoPerfilConsultor);
rutas.post(`${RUTA_BASE}/documento`, getCatalogoDocumento);
rutas.post(`${RUTA_BASE}/extencion`, getCatalogoExtencion);
rutas.post(`${RUTA_BASE}/cargo`, getCatalogoCargo);



export default rutas;
