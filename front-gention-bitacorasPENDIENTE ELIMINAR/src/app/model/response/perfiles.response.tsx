export class Perfil {
    perfil: string;
    monto: string;
    cantidad: string;
    descripcion: string;
}


export class DatosPerfiles{
    no_registro: number;
    id_perfiles: number;
    perfil: string;
    monto: number;
    cantidad: number;
    descripcion: string;
  
    //Valores comunes  paginador
    pagina_actual: number;
    total_registros: number;
    total_paginas: number;
}

export class DatosPerfilesContratos{
    no_registro: number;
    id_perfil_contrato: number;
    id_perfil: number;
    id_contrato: number;
    fh_registro: string;
    fh_baja: string;
    cantidad: number;
    nombre: string;
    descripcion: string;
    monto: number;
    //Valores comunes  paginador
    pagina_actual: number;
    total_registros: number;
    total_paginas: number;
  }


export class RespuestaPerfilesContrato {
    codigoEstatus: number;
    mensaje: string;
    data: DatosPerfilesContratos[];
}