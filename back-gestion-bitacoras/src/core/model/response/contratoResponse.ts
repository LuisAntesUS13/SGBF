export declare class ContratoResponse {
  no_registro?: number;
  id_contrato?: number;
  no_contrato?: string;
  fh_inicio?: string;
  fh_fin?: string;
  monto_variable?: number;
  monto_fijo?: number;
  monto_total?: number;
  id_forma_pago?: number;
  forma_pago?: string;
  id_tipo_contrato?: number;
  tipo_contrato?: string;
  id_consultora?: number;
  consultora?: string;
  id_archivo?: number;
  activo?: boolean;
  fh_registro?: string;
  fh_actualizacion?: string;
  id_area?: number;
  area?: string;
  nombre?: string;
  primer_apellido?: string;
  segundo_apellido?: string;

  //Valores comunes  paginador
  pagina_actual?: number;
  total_registros?: number;
  total_paginas?: number;
}

export declare class ActualizaRegistraBaseResponse {
  correcto: boolean;
  mensaje: string;
  data: ActualizaRegistraResponse;
}

export declare class ActualizaRegistraResponse {
  id_contrato: number | null;
  id_archivo: number | null;
}
