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
  monto_variable: number;
  monto_fijo: number;
  monto_total: number;
  id_forma_pago: number;
  id_tipo_contrato: number;
  id_consultora: number;
  id_area: number | null;
  id_gerente: number | null;
  activo: boolean;
  id_archivo: number | null;
  nombre: string | null;
  ruta: string | null;
  id_contrato_convenio: number | null;

}  