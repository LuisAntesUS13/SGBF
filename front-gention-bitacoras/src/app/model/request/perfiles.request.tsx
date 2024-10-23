export class GuardaPerfil {
    id_perfil_contrato: number | null;
    id_contrato: number | null;
    id_perfil: number | null;
    perfil: string;
    descripcion: string;
    monto: string;
    id_nivel: number;
    activo: boolean;
  }  

  export class ConsultaPerfilesContratos{
    id_contrato: number;
    pagina_actual: number;
    registros_por_pagina: number;
  }
  
