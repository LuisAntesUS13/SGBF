export  interface FieldContratoClases {
    id_contrato: string;
    contrato: string;
    fechaInicio: string;
    fechaTermino: string;
    formaPago: string;
    tipoContrato: string;
    consultora: string;
    consultores: string;
    montoVariable: string;
    montoFijo: string;
    montoTotal: string;
    id_archivo: string;
    archivoContrato: string;
    extencion: string;
    direccion: string;
    gerente: string;
}

export  interface FieldPerfilContratoClases {
    id_perfil_contrato: string;
    id_contrato: string;
    id_perfil: string;
    perfil: string;
    monto: string;
    descripcion:  string;
    cantidad:  string;
}