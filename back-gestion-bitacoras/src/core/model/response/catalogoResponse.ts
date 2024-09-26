export class CatalogoResponse {
  id: number;
  nombre: string;
  descripcion: string;
  activo: boolean;
}

export class CatalogoDocumentoResponse {
  id: number;
  nombre: string;
  descripcion: string;
  activo: boolean;
  grupo: string;
}

export class CatalogoExtArchivoResponse {
  id: number;
  nombre: string;
  descripcion: string;
  activo: boolean;
  tamano_maximo: number;
}

export class CatalogoPerfilConsultorResponse {
  id: number;
  nombre: string;
  descripcion: string;
  activo: boolean;
  monto: number;
}
