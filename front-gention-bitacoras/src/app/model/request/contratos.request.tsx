export class ConsultaContrato {
    contrato: string;
    consultora: string;
    pagina_actual: number;
    registros_por_pagina: number;

}

export class GuardaContrato {
  id_contrato: number | null;
  no_contrato: string;
  fh_inicio: string;
  fh_termino: string;
  monto_variable: string;
  monto_fijo: string;
  monto_total: string;
  id_forma_pago: number;
  id_tipo_contrato: number;
  id_proveedor: number;
  id_area: number | null;
  id_gerente: number | null;
  no_consultores: number | null;
  activo: number;
  id_archivo: number | null;
  nombre: string | null;
  ruta: string | null;
  id_contrato_convenio: number | null;

}  

export class GuardaPeriodosContrato {
  id_contrato: number;
  fh_inicio: string;
  fh_final: string;
  no_periodos: number
}  


export class ConsultaPeriodosContrato {
  id_contrato: number;
  pagina_actual: number;
  registros_por_pagina: number;
} 