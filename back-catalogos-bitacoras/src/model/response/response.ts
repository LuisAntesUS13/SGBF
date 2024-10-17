export interface CatalogoResponse {
  id: number;
  nombre: string;
  descripcion: string;
  activo: boolean;
}

export interface CatalogoPerfilConsultorResponse {
  id: number;
  nombre: string;
  descripcion: string;
  activo: boolean;
  monto: number;
}

export interface CatalogoDocumentoResponse {
  id: number;
  nombre: string;
  descripcion: string;
  activo: boolean;
  grupo: string;
}

export interface CatalogoExtArchivoResponse {
  id: number;
  nombre: string;
  descripcion: string;
  activo: boolean;
  tamano_maximo: number;
}

export interface ActRegCatalogoResponse {
  correcto: boolean;
  mensaje: string;
  id?: number | null;
}
