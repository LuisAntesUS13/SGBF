ALTER TABLE GestionBitacora.dbo.archivos ALTER COLUMN ruta varchar(1000) COLLATE Modern_Spanish_CI_AS NOT NULL;
ALTER TABLE GestionBitacora.dbo.archivos DROP CONSTRAINT FK_archivos_catExtencionArchivos;
ALTER TABLE GestionBitacora.dbo.archivos DROP COLUMN id_extencion;


EXEC GestionBitacora.sys.sp_rename N'GestionBitacora.dbo.cat_proveedor.descripocion' , N'descripcion', 'COLUMN';

