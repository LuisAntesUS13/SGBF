-- DROP SCHEMA dbo;

CREATE SCHEMA dbo;
-- GestionBitacora.dbo.cat_aplicativo_modulo definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.cat_aplicativo_modulo;

CREATE TABLE cat_aplicativo_modulo (
	id_modulo_aplicativo int IDENTITY(1,1) NOT NULL,
	nombre varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	descripcion varchar(500) COLLATE Modern_Spanish_CI_AS NULL,
	activo bit NOT NULL,
	CONSTRAINT PK_catAplicativoModulo PRIMARY KEY (id_modulo_aplicativo)
);


-- GestionBitacora.dbo.cat_areas definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.cat_areas;

CREATE TABLE cat_areas (
	id_area int IDENTITY(1,1) NOT NULL,
	nombre varchar(100) COLLATE Modern_Spanish_CI_AS NULL,
	descripcion varchar(500) COLLATE Modern_Spanish_CI_AS NULL,
	activo bit NULL,
	CONSTRAINT cat_areas_pk PRIMARY KEY (id_area)
);


-- GestionBitacora.dbo.cat_cargo definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.cat_cargo;

CREATE TABLE cat_cargo (
	id_cargo int IDENTITY(1,1) NOT NULL,
	nombre varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	descripcion varchar(500) COLLATE Modern_Spanish_CI_AS NULL,
	activo bit NOT NULL,
	CONSTRAINT cat_cargo_pk PRIMARY KEY (id_cargo)
);


-- GestionBitacora.dbo.cat_documento definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.cat_documento;

CREATE TABLE cat_documento (
	id_documento int IDENTITY(1,1) NOT NULL,
	nombre varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	descripcion varchar(500) COLLATE Modern_Spanish_CI_AS NULL,
	activo bit NOT NULL,
	grupo varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	CONSTRAINT PK_cat_documento PRIMARY KEY (id_documento)
);


-- GestionBitacora.dbo.cat_estatus definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.cat_estatus;

CREATE TABLE cat_estatus (
	id_estatus int NOT NULL,
	nombre varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	descripcion varchar(500) COLLATE Modern_Spanish_CI_AS NULL,
	activo bit NOT NULL,
	CONSTRAINT PK_catalogoEstatus PRIMARY KEY (id_estatus)
);


-- GestionBitacora.dbo.cat_extencion_archivo definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.cat_extencion_archivo;

CREATE TABLE cat_extencion_archivo (
	id_extencion int IDENTITY(1,1) NOT NULL,
	nombre varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	descripcion varchar(500) COLLATE Modern_Spanish_CI_AS NULL,
	tamano_maximo int NOT NULL,
	activo bit NOT NULL,
	CONSTRAINT PK_catExtencionArchivos PRIMARY KEY (id_extencion)
);


-- GestionBitacora.dbo.cat_forma_pago definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.cat_forma_pago;

CREATE TABLE cat_forma_pago (
	id_forma_pago int IDENTITY(1,1) NOT NULL,
	nombre varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	descripcion varchar(500) COLLATE Modern_Spanish_CI_AS NULL,
	activo bit NOT NULL,
	CONSTRAINT PK_cat_forma_pago PRIMARY KEY (id_forma_pago)
);


-- GestionBitacora.dbo.cat_nivel_perfil definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.cat_nivel_perfil;

CREATE TABLE cat_nivel_perfil (
	id_nivel int IDENTITY(1,1) NOT NULL,
	nombre varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	descripcion varchar(500) COLLATE Modern_Spanish_CI_AS NULL,
	activo bit NOT NULL,
	CONSTRAINT cat_nivel_perfil_pk PRIMARY KEY (id_nivel)
);


-- GestionBitacora.dbo.cat_perfil_consultor definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.cat_perfil_consultor;

CREATE TABLE cat_perfil_consultor (
	id_perfil int IDENTITY(1,1) NOT NULL,
	nombre varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	descripcion varchar(1000) COLLATE Modern_Spanish_CI_AS NULL,
	monto decimal(10,5) NOT NULL,
	activo bit NOT NULL,
	CONSTRAINT PK_catPerfilConsultor PRIMARY KEY (id_perfil)
);


-- GestionBitacora.dbo.cat_proveedor definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.cat_proveedor;

CREATE TABLE cat_proveedor (
	id_proveedor int IDENTITY(1,1) NOT NULL,
	nombre varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	descripocion varchar(500) COLLATE Modern_Spanish_CI_AS NULL,
	activo bit NOT NULL,
	CONSTRAINT PK_catConsultoras PRIMARY KEY (id_proveedor)
);


-- GestionBitacora.dbo.cat_proyecto definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.cat_proyecto;

CREATE TABLE cat_proyecto (
	id_proyecto int NOT NULL,
	nombe varchar(100) COLLATE Modern_Spanish_CI_AS NULL,
	descripcion varchar(500) COLLATE Modern_Spanish_CI_AS NULL,
	activo bit NULL,
	CONSTRAINT cat_proyecto_pk PRIMARY KEY (id_proyecto)
);


-- GestionBitacora.dbo.cat_tipo_accion definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.cat_tipo_accion;

CREATE TABLE cat_tipo_accion (
	id_tipo_accion int IDENTITY(1,1) NOT NULL,
	nombre varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	descripcion varchar(500) COLLATE Modern_Spanish_CI_AS NULL,
	activo bit NOT NULL,
	CONSTRAINT PK_catTipoAccion PRIMARY KEY (id_tipo_accion)
);


-- GestionBitacora.dbo.cat_tipo_contrato definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.cat_tipo_contrato;

CREATE TABLE cat_tipo_contrato (
	id_tipo_contrato int IDENTITY(1,1) NOT NULL,
	nombre varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	descripcion varchar(500) COLLATE Modern_Spanish_CI_AS NULL,
	activo bit NOT NULL,
	CONSTRAINT PK_catTipoContrato PRIMARY KEY (id_tipo_contrato)
);


-- GestionBitacora.dbo.configuracion definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.configuracion;

CREATE TABLE configuracion (
	id_config int IDENTITY(1,1) NOT NULL,
	config varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	valor varchar(500) COLLATE Modern_Spanish_CI_AS NOT NULL,
	CONSTRAINT PK_config PRIMARY KEY (id_config)
);


-- GestionBitacora.dbo.menus definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.menus;

CREATE TABLE menus (
	id_menu int NOT NULL,
	menu varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	descripcion varchar(500) COLLATE Modern_Spanish_CI_AS NULL,
	activo bit NOT NULL,
	CONSTRAINT PK_menus PRIMARY KEY (id_menu)
);


-- GestionBitacora.dbo.roles definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.roles;

CREATE TABLE roles (
	id_rol int IDENTITY(1,1) NOT NULL,
	rol varchar(50) COLLATE Modern_Spanish_CI_AS NOT NULL,
	descipcion varchar(500) COLLATE Modern_Spanish_CI_AS NOT NULL,
	grupo int NOT NULL,
	activo bit NOT NULL,
	CONSTRAINT PK_roles PRIMARY KEY (id_rol)
);


-- GestionBitacora.dbo.sysdiagrams definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.sysdiagrams;

CREATE TABLE sysdiagrams (
	name sysname COLLATE Modern_Spanish_CI_AS NOT NULL,
	principal_id int NOT NULL,
	diagram_id int IDENTITY(1,1) NOT NULL,
	version int NULL,
	definition varbinary(MAX) NULL,
	CONSTRAINT PK__sysdiagr__C2B05B6191605DB0 PRIMARY KEY (diagram_id),
	CONSTRAINT UK_principal_name UNIQUE (principal_id,name)
);


-- GestionBitacora.dbo.archivos definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.archivos;

CREATE TABLE archivos (
	id_archivo int IDENTITY(1,1) NOT NULL,
	nombre varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	id_extencion int NOT NULL,
	ruta varchar(300) COLLATE Modern_Spanish_CI_AS NOT NULL,
	fh_registro date NOT NULL,
	CONSTRAINT PK_archivos PRIMARY KEY (id_archivo),
	CONSTRAINT FK_archivos_catExtencionArchivos FOREIGN KEY (id_extencion) REFERENCES cat_extencion_archivo(id_extencion)
);


-- GestionBitacora.dbo.permisos definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.permisos;

CREATE TABLE permisos (
	id_permiso int IDENTITY(1,1) NOT NULL,
	id_rol int NOT NULL,
	id_menu int NOT NULL,
	ver bit NOT NULL,
	alta bit NOT NULL,
	baja bit NOT NULL,
	cambio bit NOT NULL,
	descarga bit NOT NULL,
	activo bit NOT NULL,
	CONSTRAINT PK_permisos PRIMARY KEY (id_permiso),
	CONSTRAINT FK_permisos_menus FOREIGN KEY (id_menu) REFERENCES menus(id_menu),
	CONSTRAINT FK_permisos_roles FOREIGN KEY (id_rol) REFERENCES roles(id_rol)
);


-- GestionBitacora.dbo.usuarios definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.usuarios;

CREATE TABLE usuarios (
	id_usuario int IDENTITY(1,1) NOT NULL,
	nombre varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	primer_apellido varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	segundo_apellido varchar(100) COLLATE Modern_Spanish_CI_AS NULL,
	usuario varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	contra varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	correo varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	curp varchar(19) COLLATE Modern_Spanish_CI_AS NULL,
	rfc varchar(13) COLLATE Modern_Spanish_CI_AS NULL,
	activo bit NOT NULL,
	conectado bit NOT NULL,
	fh_registro date NULL,
	fh_baja date NULL,
	id_cargo int NULL,
	CONSTRAINT PK_usuarios PRIMARY KEY (id_usuario),
	CONSTRAINT FK_usuarios_cat_cargo FOREIGN KEY (id_cargo) REFERENCES cat_cargo(id_cargo)
);


-- GestionBitacora.dbo.bitacora definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.bitacora;

CREATE TABLE bitacora (
	id_bitacora int IDENTITY(1,1) NOT NULL,
	id_usuario int NULL,
	tabla varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	ip varchar(20) COLLATE Modern_Spanish_CI_AS NOT NULL,
	identificador int NULL,
	accion varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	descripcion varchar(5000) COLLATE Modern_Spanish_CI_AS NOT NULL,
	fh_registro datetime NOT NULL,
	fh_actualizacion datetime NOT NULL,
	CONSTRAINT PK_bitacora PRIMARY KEY (id_bitacora),
	CONSTRAINT FK_bitacora_usuarios FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);


-- GestionBitacora.dbo.contratos definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.contratos;

CREATE TABLE contratos (
	id_contrato int IDENTITY(1,1) NOT NULL,
	no_contrato varchar(50) COLLATE Modern_Spanish_CI_AS NOT NULL,
	fh_inicio date NOT NULL,
	fh_fin date NOT NULL,
	monto_variable decimal(10,5) NOT NULL,
	monto_fijo decimal(10,5) NOT NULL,
	monto_total decimal(10,5) NOT NULL,
	id_forma_pago int NOT NULL,
	id_tipo_contrato int NOT NULL,
	id_proveedor int NOT NULL,
	id_archivo int NULL,
	activo bit NOT NULL,
	no_consultores int NOT NULL,
	fh_registro datetime NOT NULL,
	fh_actualizacion datetime NOT NULL,
	id_area int NULL,
	id_gerente int NULL,
	fh_inicio_periodo date NULL,
	fh_fin_periodo date NULL,
	no_periodos int NULL,
	id_convenio int NULL,
	CONSTRAINT PK_contratos PRIMARY KEY (id_contrato),
	CONSTRAINT contratos_unique UNIQUE (no_contrato),
	CONSTRAINT FK_contratos_archivos FOREIGN KEY (id_archivo) REFERENCES archivos(id_archivo),
	CONSTRAINT FK_contratos_cat_areas FOREIGN KEY (id_area) REFERENCES cat_areas(id_area),
	CONSTRAINT FK_contratos_cat_forma_pago FOREIGN KEY (id_forma_pago) REFERENCES cat_forma_pago(id_forma_pago),
	CONSTRAINT FK_contratos_cat_proveedor FOREIGN KEY (id_proveedor) REFERENCES cat_proveedor(id_proveedor),
	CONSTRAINT FK_contratos_cat_tipo_contrato FOREIGN KEY (id_tipo_contrato) REFERENCES cat_tipo_contrato(id_tipo_contrato),
	CONSTRAINT FK_contratos_contratos FOREIGN KEY (id_convenio) REFERENCES contratos(id_contrato),
	CONSTRAINT FK_contratos_usuarios FOREIGN KEY (id_gerente) REFERENCES usuarios(id_usuario)
);


-- GestionBitacora.dbo.expediente definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.expediente;

CREATE TABLE expediente (
	id_expediente int IDENTITY(1,1) NOT NULL,
	id_usuario int NOT NULL,
	descripcion varchar(500) COLLATE Modern_Spanish_CI_AS NULL,
	id_documento int NOT NULL,
	id_achivo int NOT NULL,
	fh_registro date NOT NULL,
	fh_actualizacion date NOT NULL,
	activo bit NOT NULL,
	CONSTRAINT PK_expediente PRIMARY KEY (id_expediente),
	CONSTRAINT FK_expediente_archivos FOREIGN KEY (id_achivo) REFERENCES archivos(id_archivo),
	CONSTRAINT FK_expediente_cat_documento FOREIGN KEY (id_documento) REFERENCES cat_documento(id_documento),
	CONSTRAINT FK_expediente_usuarios1 FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);


-- GestionBitacora.dbo.lideres definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.lideres;

CREATE TABLE lideres (
	id_lider int IDENTITY(1,1) NOT NULL,
	id_anterior_usuario_lider int NOT NULL,
	id_nuevo_usuario_lider int NOT NULL,
	observacion varchar(1000) COLLATE Modern_Spanish_CI_AS NOT NULL,
	fh_registro date NOT NULL,
	fh_actualizacion date NOT NULL,
	CONSTRAINT lideres_pk PRIMARY KEY (id_lider),
	CONSTRAINT FK_lideres_usuarios FOREIGN KEY (id_anterior_usuario_lider) REFERENCES usuarios(id_usuario),
	CONSTRAINT FK_lideres_usuarios1 FOREIGN KEY (id_nuevo_usuario_lider) REFERENCES usuarios(id_usuario)
);


-- GestionBitacora.dbo.perfiles_contrato definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.perfiles_contrato;

CREATE TABLE perfiles_contrato (
	id_perfil_contrato int IDENTITY(1,1) NOT NULL,
	id_contrato int NOT NULL,
	fh_registro date NOT NULL,
	fh_baja date NULL,
	id_perfil int NOT NULL,
	id_nivel int NOT NULL,
	CONSTRAINT perfiles_contrato_pk PRIMARY KEY (id_perfil_contrato),
	CONSTRAINT FK_perfiles_contrato_cat_nivel_perfil FOREIGN KEY (id_nivel) REFERENCES cat_nivel_perfil(id_nivel),
	CONSTRAINT FK_perfiles_contrato_cat_perfil_consultor FOREIGN KEY (id_perfil) REFERENCES cat_perfil_consultor(id_perfil),
	CONSTRAINT FK_perfiles_contrato_contratos FOREIGN KEY (id_contrato) REFERENCES contratos(id_contrato)
);


-- GestionBitacora.dbo.periodos_contrato definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.periodos_contrato;

CREATE TABLE periodos_contrato (
	id_periodo_contrato int IDENTITY(1,1) NOT NULL,
	id_contrato int NOT NULL,
	no_periodo int NOT NULL,
	fh_inicio date NOT NULL,
	fh_fin date NOT NULL,
	CONSTRAINT perdiodos_contrato_pk PRIMARY KEY (id_periodo_contrato),
	CONSTRAINT FK_periodos_contrato_contratos FOREIGN KEY (id_contrato) REFERENCES contratos(id_contrato)
);


-- GestionBitacora.dbo.responsable_lider definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.responsable_lider;

CREATE TABLE responsable_lider (
	id_reponsable_lider int IDENTITY(1,1) NOT NULL,
	id_usuario_lider int NOT NULL,
	id_usuario_responsable int NOT NULL,
	CONSTRAINT responsable_lider_pk PRIMARY KEY (id_reponsable_lider),
	CONSTRAINT FK_responsable_lider_usuarios FOREIGN KEY (id_usuario_lider) REFERENCES usuarios(id_usuario),
	CONSTRAINT FK_responsable_lider_usuarios1 FOREIGN KEY (id_usuario_responsable) REFERENCES usuarios(id_usuario)
);


-- GestionBitacora.dbo.usuario_role definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.usuario_role;

CREATE TABLE usuario_role (
	id_usuario int NOT NULL,
	id_rol int NOT NULL,
	fh_registro date NULL,
	fh_baja date NULL,
	CONSTRAINT PK_usuariosRoles PRIMARY KEY (id_usuario,id_rol),
	CONSTRAINT FK_usuariosRoles_roles FOREIGN KEY (id_rol) REFERENCES roles(id_rol),
	CONSTRAINT FK_usuariosRoles_usuarios FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);


-- GestionBitacora.dbo.consultor_perfil definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.consultor_perfil;

CREATE TABLE consultor_perfil (
	id_consultor_perfil int IDENTITY(1,1) NOT NULL,
	id_usuario int NOT NULL,
	id_perfil_contrato int NOT NULL,
	fh_registro date NOT NULL,
	fh_baja date NOT NULL,
	fh_inicio_actividad date NOT NULL,
	fh_fin_actividad date NULL,
	CONSTRAINT consultor_perfil_pk PRIMARY KEY (id_consultor_perfil),
	CONSTRAINT FK_consultor_perfil_perfiles_contrato FOREIGN KEY (id_perfil_contrato) REFERENCES perfiles_contrato(id_perfil_contrato),
	CONSTRAINT FK_consultor_perfil_usuarios FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);


-- GestionBitacora.dbo.excepciones_asistencia definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.excepciones_asistencia;

CREATE TABLE excepciones_asistencia (
	id_excepcion int IDENTITY(1,1) NOT NULL,
	id_consultor_perfil int NOT NULL,
	fh_inicio date NOT NULL,
	fh_termino date NOT NULL,
	fh_registro date NOT NULL,
	CONSTRAINT excepciones_asistencia_pk PRIMARY KEY (id_excepcion),
	CONSTRAINT FK_excepciones_asistencia_consultor_perfil FOREIGN KEY (id_consultor_perfil) REFERENCES consultor_perfil(id_consultor_perfil)
);


-- GestionBitacora.dbo.miembros_equipos definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.miembros_equipos;

CREATE TABLE miembros_equipos (
	id_miembro_equipo int IDENTITY(1,1) NOT NULL,
	id_usuario_lider int NOT NULL,
	id_consultor_perfil int NOT NULL,
	fh_inicio date NOT NULL,
	fh_termino date NULL,
	fh_registro date NOT NULL,
	fh_baja date NULL,
	CONSTRAINT consultores_lider_pk PRIMARY KEY (id_miembro_equipo),
	CONSTRAINT FK_miembros_equipos_consultor_perfil FOREIGN KEY (id_consultor_perfil) REFERENCES consultor_perfil(id_consultor_perfil),
	CONSTRAINT FK_miembros_equipos_usuarios FOREIGN KEY (id_usuario_lider) REFERENCES usuarios(id_usuario)
);


-- GestionBitacora.dbo.obs_globales definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.obs_globales;

CREATE TABLE obs_globales (
	id_obs_global int IDENTITY(1,1) NOT NULL,
	observacion varchar(500) COLLATE Modern_Spanish_CI_AS NOT NULL,
	fh_registro date NOT NULL,
	fh_actualizacion date NOT NULL,
	id_periodo int NOT NULL,
	id_miembro_equipo int NOT NULL,
	activo bit NOT NULL,
	CONSTRAINT obs_globales_pk PRIMARY KEY (id_obs_global),
	CONSTRAINT FK_obs_globales_miembros_equipos FOREIGN KEY (id_miembro_equipo) REFERENCES miembros_equipos(id_miembro_equipo),
	CONSTRAINT FK_obs_globales_periodos_contrato FOREIGN KEY (id_periodo) REFERENCES periodos_contrato(id_periodo_contrato)
);


-- GestionBitacora.dbo.solicitud_servicio definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.solicitud_servicio;

CREATE TABLE solicitud_servicio (
	id_sol_servicio int NOT NULL,
	id_reponsable_lider int NOT NULL,
	identificador varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	nombre_corto varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	actividad_asignada varchar(500) COLLATE Modern_Spanish_CI_AS NOT NULL,
	id_area_solicitante int NOT NULL,
	id_tipo_accion int NOT NULL,
	id_modulo_aplicativo int NOT NULL,
	fh_reghistro date NOT NULL,
	fh_actualizacion date NOT NULL,
	fh_inicio date NOT NULL,
	fh_termino date NULL,
	id_proyecto int NULL,
	id_miembro_equipo int NOT NULL,
	activo bit NULL,
	CONSTRAINT PK_Proyectos PRIMARY KEY (id_sol_servicio),
	CONSTRAINT FK_Proyectos_catAplicativoModulo FOREIGN KEY (id_modulo_aplicativo) REFERENCES cat_aplicativo_modulo(id_modulo_aplicativo),
	CONSTRAINT FK_Proyectos_catTipoAccion FOREIGN KEY (id_tipo_accion) REFERENCES cat_tipo_accion(id_tipo_accion),
	CONSTRAINT FK_solicitud_servicio_cat_areas FOREIGN KEY (id_area_solicitante) REFERENCES cat_areas(id_area),
	CONSTRAINT FK_solicitud_servicio_cat_proyecto FOREIGN KEY (id_proyecto) REFERENCES cat_proyecto(id_proyecto),
	CONSTRAINT FK_solicitud_servicio_miembros_equipos FOREIGN KEY (id_miembro_equipo) REFERENCES miembros_equipos(id_miembro_equipo),
	CONSTRAINT FK_solicitud_servicio_responsable_lider FOREIGN KEY (id_reponsable_lider) REFERENCES responsable_lider(id_reponsable_lider)
);


-- GestionBitacora.dbo.asistencias definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.asistencias;

CREATE TABLE asistencias (
	id_asistencia int IDENTITY(1,1) NOT NULL,
	id_consultor int NOT NULL,
	fecha date NOT NULL,
	inicio datetime NULL,
	inicio_comida datetime NULL,
	regreso_comida datetime NULL,
	termino datetime NULL,
	permiti_extemporaneo bit NOT NULL,
	CONSTRAINT PK_asistencia PRIMARY KEY (id_asistencia),
	CONSTRAINT FK_asistencias_consultor_perfil FOREIGN KEY (id_consultor) REFERENCES consultor_perfil(id_consultor_perfil)
);


-- GestionBitacora.dbo.bitacora_actividades definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.bitacora_actividades;

CREATE TABLE bitacora_actividades (
	id_bitacora_actividades int IDENTITY(1,1) NOT NULL,
	id_sol_servicio int NOT NULL,
	fecha date NOT NULL,
	actividad_realizada varchar(5000) COLLATE Modern_Spanish_CI_AS NOT NULL,
	horas decimal(10,5) NOT NULL,
	id_estatus int NOT NULL,
	fh_registro datetime NOT NULL,
	fh_actualizacion datetime NOT NULL,
	id_periodo int NOT NULL,
	CONSTRAINT PK_bitacoraProyecto PRIMARY KEY (id_bitacora_actividades),
	CONSTRAINT FK_bitacoraActividades_catEstatus FOREIGN KEY (id_estatus) REFERENCES cat_estatus(id_estatus),
	CONSTRAINT FK_bitacora_actividades_periodos_contrato FOREIGN KEY (id_periodo) REFERENCES periodos_contrato(id_periodo_contrato),
	CONSTRAINT FK_bitacora_actividades_solicitud_servicio FOREIGN KEY (id_sol_servicio) REFERENCES solicitud_servicio(id_sol_servicio)
);


-- GestionBitacora.dbo.bitacora_observa definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.bitacora_observa;

CREATE TABLE bitacora_observa (
	id_bitacora_observa int IDENTITY(1,1) NOT NULL,
	id_bitacora_actividades int NOT NULL,
	id_usuario_observa int NOT NULL,
	observacion varchar(500) COLLATE Modern_Spanish_CI_AS NOT NULL,
	activo bit NOT NULL,
	fh_regisro varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	fh_actualizacion varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	CONSTRAINT bitacora_observa_pk PRIMARY KEY (id_bitacora_observa),
	CONSTRAINT FK_bitacora_observa_bitacora_actividades FOREIGN KEY (id_bitacora_actividades) REFERENCES bitacora_actividades(id_bitacora_actividades),
	CONSTRAINT FK_bitacora_observa_usuarios FOREIGN KEY (id_usuario_observa) REFERENCES usuarios(id_usuario)
);


-- GestionBitacora.dbo.archivos_bitacora_actividades definition

-- Drop table

-- DROP TABLE GestionBitacora.dbo.archivos_bitacora_actividades;

CREATE TABLE archivos_bitacora_actividades (
	id_archivo_bitacora int IDENTITY(1,1) NOT NULL,
	id_bitacora_actividades int NOT NULL,
	descripcion varchar(500) COLLATE Modern_Spanish_CI_AS NOT NULL,
	id_documento int NOT NULL,
	id_archivo int NOT NULL,
	activo bit NOT NULL,
	CONSTRAINT PK_archivosBitacoraProyecto PRIMARY KEY (id_archivo_bitacora),
	CONSTRAINT FK_archivosBitacoraProyecto_archivos FOREIGN KEY (id_archivo) REFERENCES archivos(id_archivo),
	CONSTRAINT FK_archivosBitacoraProyecto_bitacoraProyecto FOREIGN KEY (id_bitacora_actividades) REFERENCES bitacora_actividades(id_bitacora_actividades),
	CONSTRAINT FK_archivos_bitacora_actividades_cat_documento FOREIGN KEY (id_documento) REFERENCES cat_documento(id_documento)
);