export interface CatalogoRequest {
    nombre: string;
    activo: boolean | null;
}

export interface CatalogoDocumentosRequest {
    nombre: string;
    activo: boolean | null;
    grupo: string;
}

export interface RegActCatalogoRequest {
    id: number | null;
    nombre: string | null;
    desc: string | null;
    activo: boolean | null;
    id_usuario?: number;
    ip?: string;
}
