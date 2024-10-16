export class UsuarioPorCargoRequest {
  cargo: string;
  activo: boolean | null;
}

export declare class UsuarioCargoResponse {
  nombre: string;
  primer_apellido: string;
  segundo_apellido: string;
  cargo: string;
}
