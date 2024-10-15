export interface CatalogoRequest {
    nombre: string;
    activo: boolean | null;
}

export interface CatalogoDocumentosRequest {
    nombre: string;
    activo: boolean | null;
    grupo: string;
  }