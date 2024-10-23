ALTER TABLE archivos ALTER COLUMN ruta varchar(1000) COLLATE Modern_Spanish_CI_AS NOT NULL;
ALTER TABLE archivos DROP CONSTRAINT FK_archivos_catExtencionArchivos;
ALTER TABLE archivos DROP COLUMN id_extencion;


EXEC GestionBitacora.sys.sp_rename N'GestionBitacora.dbo.cat_proveedor.descripocion' , N'descripcion', 'COLUMN';
EXEC GestionBitacora.sys.sp_rename N'GestionBitacora.dbo.cat_proyecto.nombe' , N'nombre', 'COLUMN';


ALTER TABLE cat_perfil_consultor ADD CONSTRAINT cat_perfil_consultor_unique UNIQUE (nombre);
ALTER TABLE cat_aplicativo_modulo ADD CONSTRAINT cat_aplicativo_modulo_unique UNIQUE (nombre);
ALTER TABLE cat_areas ADD CONSTRAINT cat_areas_unique UNIQUE (nombre);
ALTER TABLE cat_cargo ADD CONSTRAINT cat_cargo_unique UNIQUE (nombre);
ALTER TABLE cat_documento ADD CONSTRAINT cat_documento_unique UNIQUE (nombre);
ALTER TABLE cat_estatus ADD CONSTRAINT cat_estatus_unique UNIQUE (nombre);
ALTER TABLE cat_extencion_archivo ADD CONSTRAINT cat_extencion_unique UNIQUE (nombre);
ALTER TABLE cat_forma_pago ADD CONSTRAINT cat_forma_pago_unique UNIQUE (nombre);
ALTER TABLE cat_nivel_perfil ADD CONSTRAINT cat_nivel_perfil_unique UNIQUE (nombre);
ALTER TABLE cat_proveedor ADD CONSTRAINT cat_proveedor_unique UNIQUE (nombre);
ALTER TABLE cat_proyecto ADD CONSTRAINT cat_proyecto_unique UNIQUE (nombre);
ALTER TABLE cat_tipo_accion ADD CONSTRAINT cat_tipo_accion_unique UNIQUE (nombre);
ALTER TABLE cat_tipo_contrato ADD CONSTRAINT cat_tipo_contrato_unique UNIQUE (nombre);


ALTER TABLE perfiles_contrato ADD CONSTRAINT perfiles_contrato_unique UNIQUE (id_contrato,id_perfil,id_nivel);


