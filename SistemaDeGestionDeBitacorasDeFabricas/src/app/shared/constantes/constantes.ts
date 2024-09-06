export const EXPRECIONES_REGULARES = {
  EXP_CORREO: /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/,
  EXP_TEXTO_GENERAL: /^[^<>$]*$/,
  EXP_TELEFONO_O_VACIO: /^(?:\d{8,13}|)$/,
  EXP_NUMEROS: /^[0-9]+$/,
  EXP_NUMEROS_PUNTO: /^[0-9]+(\.[0-9]+)?$/,
  EXP_NUMEROS_O_VACIO: /^$|^\d+$/,
  EXP_CURP: /^[A-Z]{4}\d{6}[H,M][A-Z]{5}[0-9,A-Z]\d$/,
  EXP_RFC:
    /^[A-ZÑ&]{3,4}\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])[A-Z\d]{2}[A\d]$/,
  EXP_RFC_FISICA: /^[A-ZÑ&]{4}\d{6}[A-Z0-9]{3}$/,
  EXP_CONTRA: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,16}$/,
  EXP_CODIGO_POSTAL: /^\d{5}$|^$/,
};

export const PAGINACION = {
  pagina_inicial: 1,
  registros_por_pagina: 10,
};