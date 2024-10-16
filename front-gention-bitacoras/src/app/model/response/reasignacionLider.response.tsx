export class DatosLider{
    no_registro: number;
    id_contrato: number;
    no_contrato: string;
    id_consultora: number;
    consultora: string;
    id_area: number;
    area: string;
    no_consultores: number;
    estatus: boolean;
  
    //Valores comunes  paginador
    pagina_actual: number;
    total_registros: number;
    total_paginas: number;
  }

export class RespuestaLider {
    codigoEstatus: number;
    mensaje: string;
    data: DatosLider[];
}