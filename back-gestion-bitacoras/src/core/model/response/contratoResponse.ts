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
  no_consultores?: number;
  id_gerente?: number;
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

export declare class ActualizaRegistraPerfilResponse {
  data: ActualizaRegistraPerfilContratoResponse;
  correcto: boolean;
  mensaje: string;
}

export declare class ActualizaRegistraPerfilContratoResponse {
  id_perfil_contrato: number | null;
}

export declare class PerfilContratoResponse {
  no_registro?: number;
  id_perfil_contrato?: number;
  id_perfil?: number;
  id_contrato?: number;
  fh_registro?: string;
  fh_baja?: string;
  cantidad?: number;
  nombre?: string;
  descripcion?: string;
  monto?: number;

  //Valores comunes  paginador
  pagina_actual?: number;
  total_registros?: number;
  total_paginas?: number;
}
