export interface ConsultaContratosRequest {
    contrato: string | null;
    consultora: string | null;
    pagina_actual?: number;
    registros_por_pagina?: number;
}

export interface RegistraActualizaContratoRequest {
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
    id_usuario?: number | null;
    ip?: string | null;
  }

 export interface RegistraActualizaPerfilContratoRequest {
    id_perfil_contrato: number | null;
    id_contrato: number;
    id_perfil: number;
    id_nivel: number;
    perfil:string;
    descripcion: string | null;
    monto: string;
    activo: number;
    id_usuario?: number | null;
    ip?: string | null;
}

export interface ConsultaPerfilesContratosRequest {
    id_contrato: string;
    pagina_actual?: number;
    registros_por_pagina?: number;
}
