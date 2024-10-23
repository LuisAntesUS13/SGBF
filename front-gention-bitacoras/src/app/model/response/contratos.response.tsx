export class DatosContratos{
    no_registro: number;
    id_contrato: number;
    no_contrato: string;
    fh_inicio: string;
    fh_fin: string;
    monto_variable: number;
    monto_fijo: number;
    monto_total: number;
    id_forma_pago: number;
    forma_pago: string;
    id_tipo_contrato: number;
    tipo_contrato: string;
    id_proveedor: number;
    consultora: string;
    id_archivo	: number;
    activo: boolean;
    fh_registro: string;
    fh_actualizacion: string;
    id_area: number;
    no_consultores: number;
    id_gerente: number;
    area: string;
    id_usuario: number;
    nombre: string;
    primer_apellido: string;
    segundo_apellido: string;
    fh_inicio_periodo: string;
    fh_fin_periodo: string;
    no_periodos: number;
    id_convenio: number;
    pagina_actual: number;
    total_registros: number;
    total_paginas: number;
  }


export class RespuestaContrato {
    correcto: boolean;
    mensaje: string;
    data: DatosContratos[];
}

export class RespuestaGuardaContrato {
    correcto: string;
    mensaje: string;
    data: number;
}

export class RespuestaPeriodosContrato {
    correcto: boolean;
    mensaje: string;
    data: PeriodosContrato[];
}

export class PeriodosContrato {
    no_registro: number;
    id_contrato: number;
    no_periodo: number;
    fh_inicio: string;
    fh_fin: string;
    pagina_actual: number;
    total_registros: number;
    total_paginas: number;
}
  