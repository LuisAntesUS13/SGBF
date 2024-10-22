export class RespuestaCatalogo {
    correcto: boolean;
    mensaje: string;
    data: Catalogo[];
}

export class Catalogo {
    id: number;
    nombre: string;
    descripcion: string;
    activo: boolean;
}

export class RespuestaCatalogoDocumentos {
    correcto: boolean;
    mensaje: string;
    data: CatalogoDocumento[];
}
  
export class CatalogoDocumento {
    id: number;
    nombre: string;
    descripcion: string;
    activo: boolean;
    grupo: string;
}

export class RespuestaCatalogoExtArchivo {
    statusCode: number;
    message: string;
    data: CatalogoExtArchivo[];
}
  
export class CatalogoExtArchivo {
    id: number;
    nombre: string;
    descripcion: string;
    activo: boolean;
    tamano_maximo: number;
}
  
export class RespuestaCatalogoPerfilConsultor{
    statusCode: number;
    message: string;
    data: CatalogoPerfilConsultor[];
}
  
export class CatalogoPerfilConsultor {
    id: number;
    nombre: string;
    descripcion: string;
    activo: boolean;
    monto: number;
}
  