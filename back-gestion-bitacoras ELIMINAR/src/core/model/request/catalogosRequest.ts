export class CatalogoPeriodoRequest {
  consultor: string;
}

export class CatalogoRequest {
  nombre: string;
  activo: boolean | null;
}

export class CatalogoDocumentosRequest {
  nombre: string;
  activo: boolean | null;
  grupo: string;
}

export class CatalogoAddUpdatePerfilContratoRequest {
  id_perfil_contrato: number | null;
  id_contrato: number | null;
  id_perfil: number | null;
  perfil: string;
  descripcion: string | null;
  monto: number;
  cantidad: number;
  activo: boolean;
  ip?: string;
  id_usuario?: number | null;
}

export class CatalogoAddUpdatePerfilRequest {
  id_perfil: number | null;
  perfil: string;
  descripcion: string | null;
  monto: number;
  activo: boolean;
  ip?: string;
  id_usuario?: number | null;
}
