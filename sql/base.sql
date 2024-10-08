USE [GestionBitacora]
GO
EXEC sys.sp_dropextendedproperty @name=N'MS_Description' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'roles', @level2type=N'COLUMN',@level2name=N'grupo'
GO
EXEC sys.sp_dropextendedproperty @name=N'MS_Description' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'cat_extencion_archivo', @level2type=N'COLUMN',@level2name=N'tamano_maximo'
GO
/****** Object:  StoredProcedure [dbo].[sp_registraBitacora]    Script Date: 27/09/2024 11:33:23 a. m. ******/
DROP PROCEDURE [dbo].[sp_registraBitacora]
GO
/****** Object:  StoredProcedure [dbo].[sp_registraActualizaPerfilesContrato]    Script Date: 27/09/2024 11:33:23 a. m. ******/
DROP PROCEDURE [dbo].[sp_registraActualizaPerfilesContrato]
GO
/****** Object:  StoredProcedure [dbo].[sp_registraActualizaPerfil]    Script Date: 27/09/2024 11:33:23 a. m. ******/
DROP PROCEDURE [dbo].[sp_registraActualizaPerfil]
GO
/****** Object:  StoredProcedure [dbo].[sp_registraActualizaContrato]    Script Date: 27/09/2024 11:33:23 a. m. ******/
DROP PROCEDURE [dbo].[sp_registraActualizaContrato]
GO
/****** Object:  StoredProcedure [dbo].[sp_registraActualizaArchivos]    Script Date: 27/09/2024 11:33:23 a. m. ******/
DROP PROCEDURE [dbo].[sp_registraActualizaArchivos]
GO
/****** Object:  StoredProcedure [dbo].[sp_login]    Script Date: 27/09/2024 11:33:23 a. m. ******/
DROP PROCEDURE [dbo].[sp_login]
GO
/****** Object:  StoredProcedure [dbo].[sp_consultaPerfilesContrato]    Script Date: 27/09/2024 11:33:23 a. m. ******/
DROP PROCEDURE [dbo].[sp_consultaPerfilesContrato]
GO
/****** Object:  StoredProcedure [dbo].[sp_consultaContratos]    Script Date: 27/09/2024 11:33:23 a. m. ******/
DROP PROCEDURE [dbo].[sp_consultaContratos]
GO
ALTER TABLE [dbo].[usuario_role] DROP CONSTRAINT [FK_usuariosRoles_usuarios]
GO
ALTER TABLE [dbo].[usuario_role] DROP CONSTRAINT [FK_usuariosRoles_roles]
GO
ALTER TABLE [dbo].[usuario_perfil] DROP CONSTRAINT [FK_usuarioPerfil_usuarios]
GO
ALTER TABLE [dbo].[usuario_perfil] DROP CONSTRAINT [FK_usuarioPerfil_catPerfilConsultor]
GO
ALTER TABLE [dbo].[solicitud_servicio] DROP CONSTRAINT [FK_solicitud_servicio_cat_areas]
GO
ALTER TABLE [dbo].[solicitud_servicio] DROP CONSTRAINT [FK_requerimientos_usuarios1]
GO
ALTER TABLE [dbo].[solicitud_servicio] DROP CONSTRAINT [FK_Proyectos_contratos]
GO
ALTER TABLE [dbo].[solicitud_servicio] DROP CONSTRAINT [FK_Proyectos_catTipoAccion]
GO
ALTER TABLE [dbo].[solicitud_servicio] DROP CONSTRAINT [FK_Proyectos_catAplicativoModulo]
GO
ALTER TABLE [dbo].[rol_estatus_accion] DROP CONSTRAINT [FK_rolEstatusAccion_roles]
GO
ALTER TABLE [dbo].[rol_estatus_accion] DROP CONSTRAINT [FK_rolEstatusAccion_catalogoEstatus]
GO
ALTER TABLE [dbo].[rol_estatus_accion] DROP CONSTRAINT [FK_rolEstatusAccion_accionesFlujo]
GO
ALTER TABLE [dbo].[permisos] DROP CONSTRAINT [FK_permisos_menus]
GO
ALTER TABLE [dbo].[permiso_tipo_extencion] DROP CONSTRAINT [FK_permisoTipoExtencion_permisos]
GO
ALTER TABLE [dbo].[permiso_tipo_extencion] DROP CONSTRAINT [FK_permisoTipoExtencion_catExtencionArchivos]
GO
ALTER TABLE [dbo].[lideres] DROP CONSTRAINT [lideres_usuarios_FK]
GO
ALTER TABLE [dbo].[expediente] DROP CONSTRAINT [FK_expediente_usuarios1]
GO
ALTER TABLE [dbo].[expediente] DROP CONSTRAINT [FK_expediente_cat_documento]
GO
ALTER TABLE [dbo].[expediente] DROP CONSTRAINT [FK_expediente_archivos]
GO
ALTER TABLE [dbo].[detalle_consultores] DROP CONSTRAINT [FK_detalleConsultores_proyectos]
GO
ALTER TABLE [dbo].[detalle_consultores] DROP CONSTRAINT [FK_detalleConsultores_catPerfilConsultor]
GO
ALTER TABLE [dbo].[consultores_requerimiento] DROP CONSTRAINT [FK_consultoresProyecto_proyectos]
GO
ALTER TABLE [dbo].[consultores_requerimiento] DROP CONSTRAINT [FK_consultores_requerimiento_usuarios]
GO
ALTER TABLE [dbo].[bitacora_actividades] DROP CONSTRAINT [FK_bitacoraActividades_catEstatus]
GO
ALTER TABLE [dbo].[bitacora_actividades] DROP CONSTRAINT [FK_bitacora_actividades_consultores_requerimiento]
GO
ALTER TABLE [dbo].[bitacora] DROP CONSTRAINT [FK_bitacora_usuarios]
GO
ALTER TABLE [dbo].[asistencias] DROP CONSTRAINT [FK_asistencias_consultores_requerimiento]
GO
ALTER TABLE [dbo].[archivos_bitacora_actividades] DROP CONSTRAINT [FK_archivosBitacoraProyecto_bitacoraProyecto]
GO
ALTER TABLE [dbo].[archivos_bitacora_actividades] DROP CONSTRAINT [FK_archivosBitacoraProyecto_archivos]
GO
ALTER TABLE [dbo].[archivos_bitacora_actividades] DROP CONSTRAINT [FK_archivos_bitacora_actividades_cat_documento]
GO
ALTER TABLE [dbo].[archivos] DROP CONSTRAINT [FK_archivos_catExtencionArchivos]
GO
ALTER TABLE [dbo].[acciones_flujo] DROP CONSTRAINT [FK_accionesFlujo_catalogoEstatus]
GO
/****** Object:  Index [contratos_unique]    Script Date: 27/09/2024 11:33:23 a. m. ******/
ALTER TABLE [dbo].[contratos] DROP CONSTRAINT [contratos_unique]
GO
/****** Object:  Table [dbo].[usuarios]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usuarios]') AND type in (N'U'))
DROP TABLE [dbo].[usuarios]
GO
/****** Object:  Table [dbo].[usuario_role]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usuario_role]') AND type in (N'U'))
DROP TABLE [dbo].[usuario_role]
GO
/****** Object:  Table [dbo].[usuario_perfil]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usuario_perfil]') AND type in (N'U'))
DROP TABLE [dbo].[usuario_perfil]
GO
/****** Object:  Table [dbo].[solicitud_servicio]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[solicitud_servicio]') AND type in (N'U'))
DROP TABLE [dbo].[solicitud_servicio]
GO
/****** Object:  Table [dbo].[roles]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[roles]') AND type in (N'U'))
DROP TABLE [dbo].[roles]
GO
/****** Object:  Table [dbo].[rol_estatus_accion]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[rol_estatus_accion]') AND type in (N'U'))
DROP TABLE [dbo].[rol_estatus_accion]
GO
/****** Object:  Table [dbo].[permisos]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[permisos]') AND type in (N'U'))
DROP TABLE [dbo].[permisos]
GO
/****** Object:  Table [dbo].[permiso_tipo_extencion]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[permiso_tipo_extencion]') AND type in (N'U'))
DROP TABLE [dbo].[permiso_tipo_extencion]
GO
/****** Object:  Table [dbo].[perfiles_contrato]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[perfiles_contrato]') AND type in (N'U'))
DROP TABLE [dbo].[perfiles_contrato]
GO
/****** Object:  Table [dbo].[obs_globales]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[obs_globales]') AND type in (N'U'))
DROP TABLE [dbo].[obs_globales]
GO
/****** Object:  Table [dbo].[menus]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[menus]') AND type in (N'U'))
DROP TABLE [dbo].[menus]
GO
/****** Object:  Table [dbo].[lideres]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[lideres]') AND type in (N'U'))
DROP TABLE [dbo].[lideres]
GO
/****** Object:  Table [dbo].[expediente]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[expediente]') AND type in (N'U'))
DROP TABLE [dbo].[expediente]
GO
/****** Object:  Table [dbo].[detalle_consultores]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[detalle_consultores]') AND type in (N'U'))
DROP TABLE [dbo].[detalle_consultores]
GO
/****** Object:  Table [dbo].[contratos]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[contratos]') AND type in (N'U'))
DROP TABLE [dbo].[contratos]
GO
/****** Object:  Table [dbo].[consultores_requerimiento]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[consultores_requerimiento]') AND type in (N'U'))
DROP TABLE [dbo].[consultores_requerimiento]
GO
/****** Object:  Table [dbo].[consultores_lider]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[consultores_lider]') AND type in (N'U'))
DROP TABLE [dbo].[consultores_lider]
GO
/****** Object:  Table [dbo].[consultor_perfil]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[consultor_perfil]') AND type in (N'U'))
DROP TABLE [dbo].[consultor_perfil]
GO
/****** Object:  Table [dbo].[configuracion]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[configuracion]') AND type in (N'U'))
DROP TABLE [dbo].[configuracion]
GO
/****** Object:  Table [dbo].[cat_tipo_contrato]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_tipo_contrato]') AND type in (N'U'))
DROP TABLE [dbo].[cat_tipo_contrato]
GO
/****** Object:  Table [dbo].[cat_tipo_accion]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_tipo_accion]') AND type in (N'U'))
DROP TABLE [dbo].[cat_tipo_accion]
GO
/****** Object:  Table [dbo].[cat_proyecto]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_proyecto]') AND type in (N'U'))
DROP TABLE [dbo].[cat_proyecto]
GO
/****** Object:  Table [dbo].[cat_perfil_consultor]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_perfil_consultor]') AND type in (N'U'))
DROP TABLE [dbo].[cat_perfil_consultor]
GO
/****** Object:  Table [dbo].[cat_forma_pago]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_forma_pago]') AND type in (N'U'))
DROP TABLE [dbo].[cat_forma_pago]
GO
/****** Object:  Table [dbo].[cat_extencion_archivo]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_extencion_archivo]') AND type in (N'U'))
DROP TABLE [dbo].[cat_extencion_archivo]
GO
/****** Object:  Table [dbo].[cat_estatus]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_estatus]') AND type in (N'U'))
DROP TABLE [dbo].[cat_estatus]
GO
/****** Object:  Table [dbo].[cat_documento]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_documento]') AND type in (N'U'))
DROP TABLE [dbo].[cat_documento]
GO
/****** Object:  Table [dbo].[cat_consultoras]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_consultoras]') AND type in (N'U'))
DROP TABLE [dbo].[cat_consultoras]
GO
/****** Object:  Table [dbo].[cat_areas]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_areas]') AND type in (N'U'))
DROP TABLE [dbo].[cat_areas]
GO
/****** Object:  Table [dbo].[cat_aplicativo_modulo]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_aplicativo_modulo]') AND type in (N'U'))
DROP TABLE [dbo].[cat_aplicativo_modulo]
GO
/****** Object:  Table [dbo].[bitacora_observa]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[bitacora_observa]') AND type in (N'U'))
DROP TABLE [dbo].[bitacora_observa]
GO
/****** Object:  Table [dbo].[bitacora_actividades]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[bitacora_actividades]') AND type in (N'U'))
DROP TABLE [dbo].[bitacora_actividades]
GO
/****** Object:  Table [dbo].[bitacora]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[bitacora]') AND type in (N'U'))
DROP TABLE [dbo].[bitacora]
GO
/****** Object:  Table [dbo].[asistencias]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[asistencias]') AND type in (N'U'))
DROP TABLE [dbo].[asistencias]
GO
/****** Object:  Table [dbo].[archivos_bitacora_actividades]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[archivos_bitacora_actividades]') AND type in (N'U'))
DROP TABLE [dbo].[archivos_bitacora_actividades]
GO
/****** Object:  Table [dbo].[archivos]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[archivos]') AND type in (N'U'))
DROP TABLE [dbo].[archivos]
GO
/****** Object:  Table [dbo].[acciones_flujo]    Script Date: 27/09/2024 11:33:23 a. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[acciones_flujo]') AND type in (N'U'))
DROP TABLE [dbo].[acciones_flujo]
GO
/****** Object:  Table [dbo].[acciones_flujo]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[acciones_flujo](
	[id_accion] [int] NOT NULL,
	[descripcion] [varchar](500) NOT NULL,
	[icono] [varchar](250) NOT NULL,
	[tx_boton] [varchar](100) NOT NULL,
	[tx_mensaje] [varchar](500) NOT NULL,
	[id_estatus] [int] NOT NULL,
 CONSTRAINT [PK_accionesFlujo] PRIMARY KEY CLUSTERED 
(
	[id_accion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[archivos]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[archivos](
	[id_archivo] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](100) NOT NULL,
	[id_extencion] [int] NOT NULL,
	[ruta] [varchar](300) NOT NULL,
	[fh_registro] [date] NOT NULL,
 CONSTRAINT [PK_archivos] PRIMARY KEY CLUSTERED 
(
	[id_archivo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[archivos_bitacora_actividades]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[archivos_bitacora_actividades](
	[id_archivo_bitacora] [int] IDENTITY(1,1) NOT NULL,
	[id_bitacora_actividades] [int] NOT NULL,
	[descripcion] [varchar](500) NOT NULL,
	[id_documento] [int] NOT NULL,
	[id_archivo] [int] NOT NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_archivosBitacoraProyecto] PRIMARY KEY CLUSTERED 
(
	[id_archivo_bitacora] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[asistencias]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[asistencias](
	[id_asistencia] [int] IDENTITY(1,1) NOT NULL,
	[id_consultor_lider] [int] NOT NULL,
	[fecha] [date] NOT NULL,
	[inicio] [datetime] NULL,
	[inicio_comida] [datetime] NULL,
	[regreso_comida] [datetime] NULL,
	[termino] [datetime] NULL,
 CONSTRAINT [PK_asistencia] PRIMARY KEY CLUSTERED 
(
	[id_asistencia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[bitacora]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bitacora](
	[id_bitacora] [int] IDENTITY(1,1) NOT NULL,
	[id_usuario] [int] NULL,
	[tabla] [varchar](100) NOT NULL,
	[ip] [varchar](20) NOT NULL,
	[identificador] [int] NULL,
	[accion] [varchar](100) NOT NULL,
	[descripcion] [varchar](5000) NOT NULL,
	[fh_registro] [datetime] NOT NULL,
	[fh_actualizacion] [datetime] NOT NULL,
 CONSTRAINT [PK_bitacora] PRIMARY KEY CLUSTERED 
(
	[id_bitacora] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[bitacora_actividades]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bitacora_actividades](
	[id_bitacora_actividades] [int] IDENTITY(1,1) NOT NULL,
	[id_sol_servicio] [int] NOT NULL,
	[fecha] [date] NOT NULL,
	[actividad_realizada] [varchar](5000) NOT NULL,
	[horas] [decimal](10, 5) NOT NULL,
	[id_estatus] [int] NOT NULL,
	[permitir_modificar] [bit] NOT NULL,
	[activo] [bit] NOT NULL,
	[fh_registro] [datetime] NOT NULL,
	[fh_actualizacion] [datetime] NOT NULL,
 CONSTRAINT [PK_bitacoraProyecto] PRIMARY KEY CLUSTERED 
(
	[id_bitacora_actividades] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[bitacora_observa]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bitacora_observa](
	[id_bitacora_observa] [int] IDENTITY(1,1) NOT NULL,
	[id_bitacora_actividades] [int] NULL,
	[id_usuario_observa] [int] NULL,
	[observacion] [varchar](500) NULL,
	[activo] [bit] NULL,
	[fh_regisro] [varchar](100) NULL,
	[fh_actualizacion] [varchar](100) NULL,
 CONSTRAINT [bitacora_observa_pk] PRIMARY KEY CLUSTERED 
(
	[id_bitacora_observa] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cat_aplicativo_modulo]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cat_aplicativo_modulo](
	[id_modulo_aplicativo] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](100) NOT NULL,
	[descripcion] [varchar](500) NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_catAplicativoModulo] PRIMARY KEY CLUSTERED 
(
	[id_modulo_aplicativo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cat_areas]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cat_areas](
	[id_area] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](100) NULL,
	[descripcion] [varchar](500) NULL,
	[activo] [bit] NULL,
 CONSTRAINT [cat_areas_pk] PRIMARY KEY CLUSTERED 
(
	[id_area] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cat_consultoras]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cat_consultoras](
	[id_consultora] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](100) NOT NULL,
	[descripocion] [varchar](500) NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_catConsultoras] PRIMARY KEY CLUSTERED 
(
	[id_consultora] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cat_documento]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cat_documento](
	[id_documento] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](100) NOT NULL,
	[descripcion] [varchar](500) NULL,
	[activo] [bit] NOT NULL,
	[grupo] [varchar](100) NULL,
 CONSTRAINT [PK_cat_documento] PRIMARY KEY CLUSTERED 
(
	[id_documento] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cat_estatus]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cat_estatus](
	[id_estatus] [int] NOT NULL,
	[nombre] [varchar](100) NOT NULL,
	[descripcion] [varchar](500) NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_catalogoEstatus] PRIMARY KEY CLUSTERED 
(
	[id_estatus] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cat_extencion_archivo]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cat_extencion_archivo](
	[id_extencion] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](100) NOT NULL,
	[descripcion] [varchar](500) NULL,
	[tamano_maximo] [int] NOT NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_catExtencionArchivos] PRIMARY KEY CLUSTERED 
(
	[id_extencion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cat_forma_pago]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cat_forma_pago](
	[id_forma_pago] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](100) NOT NULL,
	[descripcion] [varchar](500) NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_cat_forma_pago] PRIMARY KEY CLUSTERED 
(
	[id_forma_pago] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cat_perfil_consultor]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cat_perfil_consultor](
	[id_perfil] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](100) NOT NULL,
	[descripcion] [varchar](1000) NULL,
	[monto] [decimal](10, 5) NOT NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_catPerfilConsultor] PRIMARY KEY CLUSTERED 
(
	[id_perfil] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cat_proyecto]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cat_proyecto](
	[id_proyecto] [int] NOT NULL,
	[nombe] [varchar](100) NULL,
	[descripcion] [varchar](500) NULL,
	[activo] [bit] NULL,
 CONSTRAINT [cat_proyecto_pk] PRIMARY KEY CLUSTERED 
(
	[id_proyecto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cat_tipo_accion]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cat_tipo_accion](
	[id_tipo_accion] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](100) NOT NULL,
	[descripcion] [varchar](500) NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_catTipoAccion] PRIMARY KEY CLUSTERED 
(
	[id_tipo_accion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cat_tipo_contrato]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cat_tipo_contrato](
	[id_tipo_contrato] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](100) NOT NULL,
	[descripcion] [varchar](500) NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_catTipoContrato] PRIMARY KEY CLUSTERED 
(
	[id_tipo_contrato] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[configuracion]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[configuracion](
	[id_config] [int] IDENTITY(1,1) NOT NULL,
	[config] [varchar](100) NOT NULL,
	[valor] [varchar](500) NULL,
 CONSTRAINT [PK_config] PRIMARY KEY CLUSTERED 
(
	[id_config] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[consultor_perfil]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[consultor_perfil](
	[id_consultor_perfil] [int] IDENTITY(1,1) NOT NULL,
	[id_usuario] [int] NULL,
	[id_perfil_contrato] [int] NULL,
	[fh_registro] [date] NULL,
	[fh_baja] [date] NULL,
 CONSTRAINT [consultor_perfil_pk] PRIMARY KEY CLUSTERED 
(
	[id_consultor_perfil] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[consultores_lider]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[consultores_lider](
	[id_consultor_lider] [int] IDENTITY(1,1) NOT NULL,
	[id_usuario_lider] [int] NULL,
	[id_consultor_perfil] [int] NULL,
	[fh_inicio] [date] NULL,
	[fh_termino] [date] NULL,
	[fh_registro] [date] NULL,
	[fh_baja] [date] NULL,
 CONSTRAINT [consultores_lider_pk] PRIMARY KEY CLUSTERED 
(
	[id_consultor_lider] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[consultores_requerimiento]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[consultores_requerimiento](
	[id_consultores_req] [int] IDENTITY(1,1) NOT NULL,
	[id_requerimiento] [int] NOT NULL,
	[id_usu_consultor] [int] NOT NULL,
	[id_perfil] [int] NOT NULL,
	[fh_inicio] [date] NOT NULL,
	[fh_fin] [date] NULL,
	[activo] [bit] NOT NULL,
	[fh_registo] [datetime] NOT NULL,
	[fh_actualizacion] [datetime] NOT NULL,
 CONSTRAINT [PK_adicionalProyecto] PRIMARY KEY CLUSTERED 
(
	[id_consultores_req] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[contratos]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[contratos](
	[id_contrato] [int] IDENTITY(1,1) NOT NULL,
	[no_contrato] [varchar](50) NOT NULL,
	[fh_inicio] [date] NOT NULL,
	[fh_fin] [date] NOT NULL,
	[monto_variable] [decimal](10, 5) NOT NULL,
	[monto_fijo] [decimal](10, 5) NOT NULL,
	[monto_total] [decimal](10, 5) NOT NULL,
	[id_forma_pago] [int] NULL,
	[id_tipo_contrato] [int] NOT NULL,
	[id_consultora] [int] NOT NULL,
	[id_archivo] [int] NULL,
	[activo] [bit] NOT NULL,
	[fh_registro] [datetime] NOT NULL,
	[fh_actualizacion] [datetime] NOT NULL,
	[id_area] [int] NULL,
	[id_gerente] [int] NULL,
 CONSTRAINT [PK_contratos] PRIMARY KEY CLUSTERED 
(
	[id_contrato] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[detalle_consultores]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[detalle_consultores](
	[id_detalle_cosultores] [int] IDENTITY(1,1) NOT NULL,
	[id_requerimiento] [int] NOT NULL,
	[id_perfil] [int] NOT NULL,
	[cantidad] [int] NOT NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_adicionalContrato] PRIMARY KEY CLUSTERED 
(
	[id_detalle_cosultores] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[expediente]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[expediente](
	[id_expediente] [int] IDENTITY(1,1) NOT NULL,
	[id_usuario] [int] NOT NULL,
	[descripcion] [varchar](500) NULL,
	[id_documento] [int] NOT NULL,
	[id_achivo] [int] NOT NULL,
	[fh_registro] [date] NOT NULL,
	[fh_actualizacion] [date] NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_expediente] PRIMARY KEY CLUSTERED 
(
	[id_expediente] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[lideres]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[lideres](
	[id_lider] [int] IDENTITY(1,1) NOT NULL,
	[id_usuario_lider] [int] NULL,
	[id_nuevo_usuario_lider] [int] NULL,
	[observacion] [varchar](1000) NULL,
	[fh_registro] [date] NULL,
	[fh_actualizacion] [date] NULL,
 CONSTRAINT [lideres_pk] PRIMARY KEY CLUSTERED 
(
	[id_lider] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[menus]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[menus](
	[id_menu] [int] NOT NULL,
	[menu] [varchar](100) NOT NULL,
	[descripcion] [varchar](500) NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_menus] PRIMARY KEY CLUSTERED 
(
	[id_menu] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[obs_globales]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[obs_globales](
	[id_obs_global] [int] IDENTITY(1,1) NOT NULL,
	[id_sol_servicio] [int] NULL,
	[observacion] [varchar](500) NULL,
	[fh_periodo] [date] NULL,
	[fh_registro] [date] NULL,
	[fh_actualizacion] [date] NULL,
 CONSTRAINT [obs_globales_pk] PRIMARY KEY CLUSTERED 
(
	[id_obs_global] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[perfiles_contrato]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[perfiles_contrato](
	[id_perfil_contrato] [int] IDENTITY(1,1) NOT NULL,
	[id_contrato] [int] NULL,
	[fh_registro] [date] NULL,
	[fh_baja] [date] NULL,
	[id_perfil] [int] NULL,
	[cantidad] [int] NULL,
 CONSTRAINT [perfiles_contrato_pk] PRIMARY KEY CLUSTERED 
(
	[id_perfil_contrato] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[permiso_tipo_extencion]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[permiso_tipo_extencion](
	[id_permiso] [int] NOT NULL,
	[id_extencion] [int] NOT NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_permisoTipoExtencion] PRIMARY KEY CLUSTERED 
(
	[id_permiso] ASC,
	[id_extencion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[permisos]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[permisos](
	[id_permiso] [int] IDENTITY(1,1) NOT NULL,
	[id_rol] [int] NOT NULL,
	[id_menu] [int] NOT NULL,
	[ver] [bit] NOT NULL,
	[alta] [bit] NOT NULL,
	[baja] [bit] NOT NULL,
	[cambio] [bit] NOT NULL,
	[descarga] [bit] NOT NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_permisos] PRIMARY KEY CLUSTERED 
(
	[id_permiso] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[rol_estatus_accion]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[rol_estatus_accion](
	[id_rol] [int] NOT NULL,
	[id_estatus] [int] NOT NULL,
	[id_accion] [int] NOT NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_rolEstatusAccion] PRIMARY KEY CLUSTERED 
(
	[id_rol] ASC,
	[id_estatus] ASC,
	[id_accion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[roles]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[roles](
	[id_rol] [int] IDENTITY(1,1) NOT NULL,
	[rol] [varchar](50) NOT NULL,
	[descipcion] [varchar](500) NOT NULL,
	[grupo] [int] NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_roles] PRIMARY KEY CLUSTERED 
(
	[id_rol] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[solicitud_servicio]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[solicitud_servicio](
	[id_sol_servicio] [int] NOT NULL,
	[id_consultor_lider] [int] NOT NULL,
	[identificador] [varchar](100) NOT NULL,
	[nombre_corto] [varchar](100) NOT NULL,
	[actividad_asignada] [varchar](500) NOT NULL,
	[id_usuario_responsable] [int] NOT NULL,
	[id_area_solicitante] [int] NOT NULL,
	[id_tipo_accion] [int] NOT NULL,
	[id_modulo_aplicativo] [int] NOT NULL,
	[id_proyecto] [int] NULL,
	[fh_reghistro] [date] NULL,
	[fh_actualizacion] [date] NULL,
	[fh_inicio] [date] NULL,
	[fh_termino] [date] NULL,
	[permitir_registrar_anteriores] [bit] NULL,
 CONSTRAINT [PK_Proyectos] PRIMARY KEY CLUSTERED 
(
	[id_sol_servicio] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[usuario_perfil]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[usuario_perfil](
	[id_usuario] [int] NOT NULL,
	[id_perfil] [int] NOT NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_usuarioPerfil] PRIMARY KEY CLUSTERED 
(
	[id_usuario] ASC,
	[id_perfil] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[usuario_role]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[usuario_role](
	[id_usuario] [int] NOT NULL,
	[id_rol] [int] NOT NULL,
	[fh_registro] [date] NULL,
	[fh_baja] [date] NULL,
 CONSTRAINT [PK_usuariosRoles] PRIMARY KEY CLUSTERED 
(
	[id_usuario] ASC,
	[id_rol] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[usuarios]    Script Date: 27/09/2024 11:33:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[usuarios](
	[id_usuario] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](100) NOT NULL,
	[primer_apellido] [varchar](100) NOT NULL,
	[segundo_apellido] [varchar](100) NULL,
	[usuario] [varchar](100) NOT NULL,
	[contra] [varchar](100) NOT NULL,
	[correo] [varchar](100) NOT NULL,
	[curp] [varchar](19) NULL,
	[rfc] [varchar](13) NULL,
	[activo] [bit] NOT NULL,
	[conectado] [bit] NOT NULL,
	[fh_registro] [date] NULL,
	[fh_baja] [date] NULL,
 CONSTRAINT [PK_usuarios] PRIMARY KEY CLUSTERED 
(
	[id_usuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[archivos] ON 

INSERT [dbo].[archivos] ([id_archivo], [nombre], [id_extencion], [ruta], [fh_registro]) VALUES (1, N'contrato_G_1520246_2024', 1, N'C:\gestionBitacoras\contratos\contrato_G_1520246_2024', CAST(N'2024-09-26' AS Date))
INSERT [dbo].[archivos] ([id_archivo], [nombre], [id_extencion], [ruta], [fh_registro]) VALUES (2, N'contrato_', 1, N'C:\gestionBitacoras\contratos\contrato_', CAST(N'2024-09-27' AS Date))
INSERT [dbo].[archivos] ([id_archivo], [nombre], [id_extencion], [ruta], [fh_registro]) VALUES (3, N'contrato_', 1, N'C:\gestionBitacoras\contratos\contrato_', CAST(N'2024-09-27' AS Date))
SET IDENTITY_INSERT [dbo].[archivos] OFF
GO
SET IDENTITY_INSERT [dbo].[bitacora] ON 

INSERT [dbo].[bitacora] ([id_bitacora], [id_usuario], [tabla], [ip], [identificador], [accion], [descripcion], [fh_registro], [fh_actualizacion]) VALUES (13, NULL, N'contratos', N'1207.25.258', NULL, N'INSERT', N'', CAST(N'2024-09-24T19:20:05.510' AS DateTime), CAST(N'2024-09-24T19:20:05.510' AS DateTime))
INSERT [dbo].[bitacora] ([id_bitacora], [id_usuario], [tabla], [ip], [identificador], [accion], [descripcion], [fh_registro], [fh_actualizacion]) VALUES (14, NULL, N'contratos', N'1207.25.258', NULL, N'INSERT', N'', CAST(N'2024-09-24T19:20:57.810' AS DateTime), CAST(N'2024-09-24T19:20:57.810' AS DateTime))
INSERT [dbo].[bitacora] ([id_bitacora], [id_usuario], [tabla], [ip], [identificador], [accion], [descripcion], [fh_registro], [fh_actualizacion]) VALUES (15, NULL, N'contratos', N'1207.25.258', NULL, N'INSERT', N'', CAST(N'2024-09-24T19:22:01.190' AS DateTime), CAST(N'2024-09-24T19:22:01.190' AS DateTime))
INSERT [dbo].[bitacora] ([id_bitacora], [id_usuario], [tabla], [ip], [identificador], [accion], [descripcion], [fh_registro], [fh_actualizacion]) VALUES (16, NULL, N'contratos', N'1207.25.258', NULL, N'INSERT', N'', CAST(N'2024-09-24T19:25:17.700' AS DateTime), CAST(N'2024-09-24T19:25:17.700' AS DateTime))
INSERT [dbo].[bitacora] ([id_bitacora], [id_usuario], [tabla], [ip], [identificador], [accion], [descripcion], [fh_registro], [fh_actualizacion]) VALUES (17, NULL, N'contratos', N'1207.25.258', NULL, N'INSERT', N'', CAST(N'2024-09-24T19:25:48.907' AS DateTime), CAST(N'2024-09-24T19:25:48.907' AS DateTime))
INSERT [dbo].[bitacora] ([id_bitacora], [id_usuario], [tabla], [ip], [identificador], [accion], [descripcion], [fh_registro], [fh_actualizacion]) VALUES (18, NULL, N'contratos', N'1207.25.258', NULL, N'INSERT', N'', CAST(N'2024-09-24T19:28:49.950' AS DateTime), CAST(N'2024-09-24T19:28:49.950' AS DateTime))
INSERT [dbo].[bitacora] ([id_bitacora], [id_usuario], [tabla], [ip], [identificador], [accion], [descripcion], [fh_registro], [fh_actualizacion]) VALUES (19, NULL, N'contratos', N'1207.25.258', NULL, N'INSERT', N'', CAST(N'2024-09-24T19:34:23.273' AS DateTime), CAST(N'2024-09-24T19:34:23.273' AS DateTime))
INSERT [dbo].[bitacora] ([id_bitacora], [id_usuario], [tabla], [ip], [identificador], [accion], [descripcion], [fh_registro], [fh_actualizacion]) VALUES (20, NULL, N'contratos', N'1207.25.258', NULL, N'INSERT', N'', CAST(N'2024-09-24T19:35:32.657' AS DateTime), CAST(N'2024-09-24T19:35:32.657' AS DateTime))
INSERT [dbo].[bitacora] ([id_bitacora], [id_usuario], [tabla], [ip], [identificador], [accion], [descripcion], [fh_registro], [fh_actualizacion]) VALUES (21, NULL, N'contratos', N'1207.25.258', 2, N'UPDATE', N'', CAST(N'2024-09-24T19:37:25.290' AS DateTime), CAST(N'2024-09-24T19:37:25.290' AS DateTime))
INSERT [dbo].[bitacora] ([id_bitacora], [id_usuario], [tabla], [ip], [identificador], [accion], [descripcion], [fh_registro], [fh_actualizacion]) VALUES (22, NULL, N'contratos', N'1207.25.258', 2, N'UPDATE', N'UPDATE contratos SET no_contrato = ''1'', fh_inicio = ''2024-05-05'', fh_fin = ''2024-05-05'', 
					monto_variable = 1.10000, monto_fijo = 0.00000, monto_total = 0.00000, 
					id_forma_pago = 1, id_tipo_contrato = 3, 
					id_consultora = 1, id_archivo = NULL, activo = 1,
					id_area = 1, id_gerente = 1, fh_actualizacion = CURRENT_TIMESTAMP 
					WHERE id_contrato = 2;', CAST(N'2024-09-24T19:38:03.140' AS DateTime), CAST(N'2024-09-24T19:38:03.140' AS DateTime))
INSERT [dbo].[bitacora] ([id_bitacora], [id_usuario], [tabla], [ip], [identificador], [accion], [descripcion], [fh_registro], [fh_actualizacion]) VALUES (23, NULL, N'contratos', N'1207.25.258', NULL, N'INSERT', N'INSERT INTO contratos (no_contrato, fh_inicio, fh_fin, monto_variable, monto_fijo, monto_total, id_forma_pago, id_tipo_contrato, 
						id_consultora, id_archivo, activo, fh_registro, fh_actualizacion, id_area, id_gerente)
						VALUES (1, ''2024-05-05'', ''2024-05-05'',
						1.10000, 0.00000, 0.00000,
						1, 3, 1,
						NULL, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP,
						1, 1);', CAST(N'2024-09-24T19:38:56.557' AS DateTime), CAST(N'2024-09-24T19:38:56.557' AS DateTime))
INSERT [dbo].[bitacora] ([id_bitacora], [id_usuario], [tabla], [ip], [identificador], [accion], [descripcion], [fh_registro], [fh_actualizacion]) VALUES (24, NULL, N'contratos', N'1207.25.258', 4, N'INSERT', N'INSERT INTO contratos (no_contrato, fh_inicio, fh_fin, monto_variable, monto_fijo, monto_total, id_forma_pago, id_tipo_contrato, 
						id_consultora, id_archivo, activo, fh_registro, fh_actualizacion, id_area, id_gerente)
						VALUES (1, ''2024-05-05'', ''2024-05-05'',
						1.10000, 0.00000, 0.00000,
						1, 3, 1,
						NULL, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP,
						1, 1);', CAST(N'2024-09-24T21:09:48.320' AS DateTime), CAST(N'2024-09-24T21:09:48.320' AS DateTime))
INSERT [dbo].[bitacora] ([id_bitacora], [id_usuario], [tabla], [ip], [identificador], [accion], [descripcion], [fh_registro], [fh_actualizacion]) VALUES (25, NULL, N'contratos', N'1207.25.258', 5, N'INSERT', N'INSERT INTO contratos (no_contrato, fh_inicio, fh_fin, monto_variable, monto_fijo, monto_total, id_forma_pago, id_tipo_contrato, 
						id_consultora, id_archivo, activo, fh_registro, fh_actualizacion, id_area, id_gerente)
						VALUES (1, ''2024-05-05'', ''2024-05-05'',
						1.10000, 0.00000, 0.00000,
						1, 3, 1,
						NULL, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP,
						1, 1);', CAST(N'2024-09-24T21:09:55.120' AS DateTime), CAST(N'2024-09-24T21:09:55.120' AS DateTime))
INSERT [dbo].[bitacora] ([id_bitacora], [id_usuario], [tabla], [ip], [identificador], [accion], [descripcion], [fh_registro], [fh_actualizacion]) VALUES (26, NULL, N'contratos', N'1207.25.258', 5, N'UPDATE', N'UPDATE contratos SET no_contrato = ''1'', fh_inicio = ''2024-05-05'', fh_fin = ''2024-05-05'',
					monto_variable = 1.10000, monto_fijo = 0.00000, monto_total = 0.00000,
					id_forma_pago = 1, id_tipo_contrato = 3,
					id_consultora = 1, id_archivo = NULL, activo = 1,
					id_area = 1, id_gerente = 1, fh_actualizacion = CURRENT_TIMESTAMP
					WHERE id_contrato = 5;', CAST(N'2024-09-24T21:10:03.437' AS DateTime), CAST(N'2024-09-24T21:10:03.437' AS DateTime))
SET IDENTITY_INSERT [dbo].[bitacora] OFF
GO
SET IDENTITY_INSERT [dbo].[cat_consultoras] ON 

INSERT [dbo].[cat_consultoras] ([id_consultora], [nombre], [descripocion], [activo]) VALUES (1, N'Ultrasis', N'Ultra', 1)
INSERT [dbo].[cat_consultoras] ([id_consultora], [nombre], [descripocion], [activo]) VALUES (5, N'Tecnologias', N'Tecno', 1)
INSERT [dbo].[cat_consultoras] ([id_consultora], [nombre], [descripocion], [activo]) VALUES (6, N'Informatica', N'Info', 1)
SET IDENTITY_INSERT [dbo].[cat_consultoras] OFF
GO
SET IDENTITY_INSERT [dbo].[cat_extencion_archivo] ON 

INSERT [dbo].[cat_extencion_archivo] ([id_extencion], [nombre], [descripcion], [tamano_maximo], [activo]) VALUES (1, N'pdf', N'Documentos pdf', 10, 1)
INSERT [dbo].[cat_extencion_archivo] ([id_extencion], [nombre], [descripcion], [tamano_maximo], [activo]) VALUES (2, N'png', N'Imagenes png', 10, 1)
INSERT [dbo].[cat_extencion_archivo] ([id_extencion], [nombre], [descripcion], [tamano_maximo], [activo]) VALUES (3, N'jpg', N'Imagenes jpg', 10, 1)
SET IDENTITY_INSERT [dbo].[cat_extencion_archivo] OFF
GO
SET IDENTITY_INSERT [dbo].[cat_forma_pago] ON 

INSERT [dbo].[cat_forma_pago] ([id_forma_pago], [nombre], [descripcion], [activo]) VALUES (1, N'pagoq', N'pago', 1)
SET IDENTITY_INSERT [dbo].[cat_forma_pago] OFF
GO
SET IDENTITY_INSERT [dbo].[cat_tipo_contrato] ON 

INSERT [dbo].[cat_tipo_contrato] ([id_tipo_contrato], [nombre], [descripcion], [activo]) VALUES (2, N'Continuidad 
Operativa', N'Contratos de continuidad operativa', 1)
INSERT [dbo].[cat_tipo_contrato] ([id_tipo_contrato], [nombre], [descripcion], [activo]) VALUES (3, N'Proyectos', N'Contratos por proyectos', 1)
SET IDENTITY_INSERT [dbo].[cat_tipo_contrato] OFF
GO
SET IDENTITY_INSERT [dbo].[contratos] ON 

INSERT [dbo].[contratos] ([id_contrato], [no_contrato], [fh_inicio], [fh_fin], [monto_variable], [monto_fijo], [monto_total], [id_forma_pago], [id_tipo_contrato], [id_consultora], [id_archivo], [activo], [fh_registro], [fh_actualizacion], [id_area], [id_gerente]) VALUES (2, N'G_15626_242000', CAST(N'2024-05-05' AS Date), CAST(N'2024-05-05' AS Date), CAST(1.10000 AS Decimal(10, 5)), CAST(0.00000 AS Decimal(10, 5)), CAST(0.00000 AS Decimal(10, 5)), 1, 3, 1, NULL, 1, CAST(N'2024-09-24T19:35:32.653' AS DateTime), CAST(N'2024-09-24T19:38:03.140' AS DateTime), 1, 1)
INSERT [dbo].[contratos] ([id_contrato], [no_contrato], [fh_inicio], [fh_fin], [monto_variable], [monto_fijo], [monto_total], [id_forma_pago], [id_tipo_contrato], [id_consultora], [id_archivo], [activo], [fh_registro], [fh_actualizacion], [id_area], [id_gerente]) VALUES (3, N'G_15626_242', CAST(N'2024-05-05' AS Date), CAST(N'2024-05-05' AS Date), CAST(1.10000 AS Decimal(10, 5)), CAST(0.00000 AS Decimal(10, 5)), CAST(0.00000 AS Decimal(10, 5)), 1, 3, 5, NULL, 1, CAST(N'2024-09-24T19:38:56.553' AS DateTime), CAST(N'2024-09-24T19:38:56.553' AS DateTime), 1, 1)
INSERT [dbo].[contratos] ([id_contrato], [no_contrato], [fh_inicio], [fh_fin], [monto_variable], [monto_fijo], [monto_total], [id_forma_pago], [id_tipo_contrato], [id_consultora], [id_archivo], [activo], [fh_registro], [fh_actualizacion], [id_area], [id_gerente]) VALUES (4, N'G_15626_2025', CAST(N'2024-05-05' AS Date), CAST(N'2024-05-05' AS Date), CAST(1.10000 AS Decimal(10, 5)), CAST(0.00000 AS Decimal(10, 5)), CAST(0.00000 AS Decimal(10, 5)), 1, 3, 1, NULL, 1, CAST(N'2024-09-24T21:09:48.320' AS DateTime), CAST(N'2024-09-24T21:09:48.320' AS DateTime), 1, 1)
INSERT [dbo].[contratos] ([id_contrato], [no_contrato], [fh_inicio], [fh_fin], [monto_variable], [monto_fijo], [monto_total], [id_forma_pago], [id_tipo_contrato], [id_consultora], [id_archivo], [activo], [fh_registro], [fh_actualizacion], [id_area], [id_gerente]) VALUES (5, N'G_15626_2004', CAST(N'2024-05-05' AS Date), CAST(N'2024-05-05' AS Date), CAST(1.10000 AS Decimal(10, 5)), CAST(0.00000 AS Decimal(10, 5)), CAST(0.00000 AS Decimal(10, 5)), 1, 3, 5, NULL, 1, CAST(N'2024-09-24T21:09:55.120' AS DateTime), CAST(N'2024-09-24T21:10:03.437' AS DateTime), 1, 1)
INSERT [dbo].[contratos] ([id_contrato], [no_contrato], [fh_inicio], [fh_fin], [monto_variable], [monto_fijo], [monto_total], [id_forma_pago], [id_tipo_contrato], [id_consultora], [id_archivo], [activo], [fh_registro], [fh_actualizacion], [id_area], [id_gerente]) VALUES (6, N'G_15626_24252', CAST(N'2024-01-01' AS Date), CAST(N'2025-01-01' AS Date), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), 1, 3, 1, NULL, 1, CAST(N'2024-09-26T18:05:24.253' AS DateTime), CAST(N'2024-09-26T18:05:24.253' AS DateTime), 1, 1)
INSERT [dbo].[contratos] ([id_contrato], [no_contrato], [fh_inicio], [fh_fin], [monto_variable], [monto_fijo], [monto_total], [id_forma_pago], [id_tipo_contrato], [id_consultora], [id_archivo], [activo], [fh_registro], [fh_actualizacion], [id_area], [id_gerente]) VALUES (8, N'G_15626_2425', CAST(N'2024-01-01' AS Date), CAST(N'2025-01-01' AS Date), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), 1, 3, 1, NULL, 1, CAST(N'2024-09-26T18:16:06.963' AS DateTime), CAST(N'2024-09-26T18:16:06.963' AS DateTime), 1, 1)
INSERT [dbo].[contratos] ([id_contrato], [no_contrato], [fh_inicio], [fh_fin], [monto_variable], [monto_fijo], [monto_total], [id_forma_pago], [id_tipo_contrato], [id_consultora], [id_archivo], [activo], [fh_registro], [fh_actualizacion], [id_area], [id_gerente]) VALUES (9, N'G_15626_2429', CAST(N'2024-01-01' AS Date), CAST(N'2025-01-01' AS Date), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), 1, 3, 6, NULL, 1, CAST(N'2024-09-26T18:17:40.650' AS DateTime), CAST(N'2024-09-26T18:17:40.650' AS DateTime), 1, 1)
INSERT [dbo].[contratos] ([id_contrato], [no_contrato], [fh_inicio], [fh_fin], [monto_variable], [monto_fijo], [monto_total], [id_forma_pago], [id_tipo_contrato], [id_consultora], [id_archivo], [activo], [fh_registro], [fh_actualizacion], [id_area], [id_gerente]) VALUES (11, N'G_15626_2428', CAST(N'2024-01-01' AS Date), CAST(N'2025-01-01' AS Date), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), 1, 3, 1, NULL, 1, CAST(N'2024-09-26T18:23:11.847' AS DateTime), CAST(N'2024-09-26T18:23:11.847' AS DateTime), 1, 1)
INSERT [dbo].[contratos] ([id_contrato], [no_contrato], [fh_inicio], [fh_fin], [monto_variable], [monto_fijo], [monto_total], [id_forma_pago], [id_tipo_contrato], [id_consultora], [id_archivo], [activo], [fh_registro], [fh_actualizacion], [id_area], [id_gerente]) VALUES (12, N'G_15626_2XAA', CAST(N'2024-01-01' AS Date), CAST(N'2025-01-01' AS Date), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), 1, 3, 6, NULL, 1, CAST(N'2024-09-26T18:23:56.140' AS DateTime), CAST(N'2024-09-26T18:23:56.140' AS DateTime), 1, 1)
INSERT [dbo].[contratos] ([id_contrato], [no_contrato], [fh_inicio], [fh_fin], [monto_variable], [monto_fijo], [monto_total], [id_forma_pago], [id_tipo_contrato], [id_consultora], [id_archivo], [activo], [fh_registro], [fh_actualizacion], [id_area], [id_gerente]) VALUES (13, N'G_1520246_2XAA', CAST(N'2024-01-01' AS Date), CAST(N'2025-01-01' AS Date), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), 1, 3, 6, NULL, 1, CAST(N'2024-09-26T18:25:46.583' AS DateTime), CAST(N'2024-09-26T18:25:46.583' AS DateTime), 1, 1)
INSERT [dbo].[contratos] ([id_contrato], [no_contrato], [fh_inicio], [fh_fin], [monto_variable], [monto_fijo], [monto_total], [id_forma_pago], [id_tipo_contrato], [id_consultora], [id_archivo], [activo], [fh_registro], [fh_actualizacion], [id_area], [id_gerente]) VALUES (14, N'G_1520246_2024', CAST(N'2024-01-01' AS Date), CAST(N'2025-01-01' AS Date), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), 1, 3, 1, 1, 1, CAST(N'2024-09-26T18:26:44.613' AS DateTime), CAST(N'2024-09-26T18:26:44.613' AS DateTime), 1, 1)
INSERT [dbo].[contratos] ([id_contrato], [no_contrato], [fh_inicio], [fh_fin], [monto_variable], [monto_fijo], [monto_total], [id_forma_pago], [id_tipo_contrato], [id_consultora], [id_archivo], [activo], [fh_registro], [fh_actualizacion], [id_area], [id_gerente]) VALUES (15, N'G_1520246_20241', CAST(N'2024-01-01' AS Date), CAST(N'2025-01-01' AS Date), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), 1, 3, 1, 1, 1, CAST(N'2024-09-26T18:26:44.613' AS DateTime), CAST(N'2024-09-26T18:26:44.613' AS DateTime), 1, 1)
INSERT [dbo].[contratos] ([id_contrato], [no_contrato], [fh_inicio], [fh_fin], [monto_variable], [monto_fijo], [monto_total], [id_forma_pago], [id_tipo_contrato], [id_consultora], [id_archivo], [activo], [fh_registro], [fh_actualizacion], [id_area], [id_gerente]) VALUES (16, N'G_1520246_20242', CAST(N'2024-01-01' AS Date), CAST(N'2025-01-01' AS Date), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), 1, 3, 1, 1, 1, CAST(N'2024-09-26T18:26:44.613' AS DateTime), CAST(N'2024-09-26T18:26:44.613' AS DateTime), 1, 1)
INSERT [dbo].[contratos] ([id_contrato], [no_contrato], [fh_inicio], [fh_fin], [monto_variable], [monto_fijo], [monto_total], [id_forma_pago], [id_tipo_contrato], [id_consultora], [id_archivo], [activo], [fh_registro], [fh_actualizacion], [id_area], [id_gerente]) VALUES (17, N'G_1520246_20243', CAST(N'2024-01-01' AS Date), CAST(N'2025-01-01' AS Date), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), 1, 3, 1, 1, 1, CAST(N'2024-09-26T18:26:44.613' AS DateTime), CAST(N'2024-09-26T18:26:44.613' AS DateTime), 1, 1)
INSERT [dbo].[contratos] ([id_contrato], [no_contrato], [fh_inicio], [fh_fin], [monto_variable], [monto_fijo], [monto_total], [id_forma_pago], [id_tipo_contrato], [id_consultora], [id_archivo], [activo], [fh_registro], [fh_actualizacion], [id_area], [id_gerente]) VALUES (18, N'G_1520246_20244', CAST(N'2024-01-01' AS Date), CAST(N'2025-01-01' AS Date), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), 1, 3, 1, 1, 1, CAST(N'2024-09-26T18:26:44.613' AS DateTime), CAST(N'2024-09-26T18:26:44.613' AS DateTime), 1, 1)
INSERT [dbo].[contratos] ([id_contrato], [no_contrato], [fh_inicio], [fh_fin], [monto_variable], [monto_fijo], [monto_total], [id_forma_pago], [id_tipo_contrato], [id_consultora], [id_archivo], [activo], [fh_registro], [fh_actualizacion], [id_area], [id_gerente]) VALUES (19, N'G_1520246_21', CAST(N'2024-01-01' AS Date), CAST(N'2025-01-01' AS Date), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), 1, 3, 1, 1, 1, CAST(N'2024-09-26T18:26:44.613' AS DateTime), CAST(N'2024-09-26T18:26:44.613' AS DateTime), 1, 1)
INSERT [dbo].[contratos] ([id_contrato], [no_contrato], [fh_inicio], [fh_fin], [monto_variable], [monto_fijo], [monto_total], [id_forma_pago], [id_tipo_contrato], [id_consultora], [id_archivo], [activo], [fh_registro], [fh_actualizacion], [id_area], [id_gerente]) VALUES (20, N'G_1520246_2021', CAST(N'2024-01-01' AS Date), CAST(N'2025-01-01' AS Date), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), 1, 3, 1, 1, 1, CAST(N'2024-09-26T18:26:44.613' AS DateTime), CAST(N'2024-09-26T18:26:44.613' AS DateTime), 1, 1)
INSERT [dbo].[contratos] ([id_contrato], [no_contrato], [fh_inicio], [fh_fin], [monto_variable], [monto_fijo], [monto_total], [id_forma_pago], [id_tipo_contrato], [id_consultora], [id_archivo], [activo], [fh_registro], [fh_actualizacion], [id_area], [id_gerente]) VALUES (21, N'G_1520246_201', CAST(N'2024-01-01' AS Date), CAST(N'2025-01-01' AS Date), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), 1, 3, 1, 1, 1, CAST(N'2024-09-26T18:26:44.613' AS DateTime), CAST(N'2024-09-26T18:26:44.613' AS DateTime), 1, 1)
INSERT [dbo].[contratos] ([id_contrato], [no_contrato], [fh_inicio], [fh_fin], [monto_variable], [monto_fijo], [monto_total], [id_forma_pago], [id_tipo_contrato], [id_consultora], [id_archivo], [activo], [fh_registro], [fh_actualizacion], [id_area], [id_gerente]) VALUES (22, N'G_1520246_21121', CAST(N'2024-01-01' AS Date), CAST(N'2025-01-01' AS Date), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), 1, 3, 1, 1, 1, CAST(N'2024-09-26T18:26:44.613' AS DateTime), CAST(N'2024-09-26T18:26:44.613' AS DateTime), 1, 1)
INSERT [dbo].[contratos] ([id_contrato], [no_contrato], [fh_inicio], [fh_fin], [monto_variable], [monto_fijo], [monto_total], [id_forma_pago], [id_tipo_contrato], [id_consultora], [id_archivo], [activo], [fh_registro], [fh_actualizacion], [id_area], [id_gerente]) VALUES (23, N'G_1520246_20200', CAST(N'2024-01-01' AS Date), CAST(N'2025-01-01' AS Date), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), 1, 3, 1, 1, 1, CAST(N'2024-09-26T18:26:44.613' AS DateTime), CAST(N'2024-09-26T18:26:44.613' AS DateTime), 1, 1)
INSERT [dbo].[contratos] ([id_contrato], [no_contrato], [fh_inicio], [fh_fin], [monto_variable], [monto_fijo], [monto_total], [id_forma_pago], [id_tipo_contrato], [id_consultora], [id_archivo], [activo], [fh_registro], [fh_actualizacion], [id_area], [id_gerente]) VALUES (24, N'G_1520246_20201', CAST(N'2024-01-01' AS Date), CAST(N'2025-01-01' AS Date), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), CAST(100.00000 AS Decimal(10, 5)), 1, 3, 1, 1, 1, CAST(N'2024-09-26T18:26:44.613' AS DateTime), CAST(N'2024-09-26T18:26:44.613' AS DateTime), 1, 1)
SET IDENTITY_INSERT [dbo].[contratos] OFF
GO
INSERT [dbo].[menus] ([id_menu], [menu], [descripcion], [activo]) VALUES (1, N'Usuarios', N'Menu de  usuarios', 1)
INSERT [dbo].[menus] ([id_menu], [menu], [descripcion], [activo]) VALUES (2, N'Contratos', N'Menu de contratos', 1)
INSERT [dbo].[menus] ([id_menu], [menu], [descripcion], [activo]) VALUES (3, N'Registro consultores', N'Menu de registro de  consultores', 1)
INSERT [dbo].[menus] ([id_menu], [menu], [descripcion], [activo]) VALUES (4, N'Asignacion recuros', N'Menu d asignacion de  registros', 1)
INSERT [dbo].[menus] ([id_menu], [menu], [descripcion], [activo]) VALUES (5, N'Asignacion actividades', N'Menu d asignacion de  actividades', 1)
INSERT [dbo].[menus] ([id_menu], [menu], [descripcion], [activo]) VALUES (6, N'Bitacora', N'Menu de bitacora', 1)
INSERT [dbo].[menus] ([id_menu], [menu], [descripcion], [activo]) VALUES (7, N'Asistencia', N'Menu de asistencia', 1)
INSERT [dbo].[menus] ([id_menu], [menu], [descripcion], [activo]) VALUES (8, N'Permisos', N'Menu de permisos', 1)
GO
SET IDENTITY_INSERT [dbo].[permisos] ON 

INSERT [dbo].[permisos] ([id_permiso], [id_rol], [id_menu], [ver], [alta], [baja], [cambio], [descarga], [activo]) VALUES (1, 1, 1, 1, 1, 1, 1, 1, 1)
INSERT [dbo].[permisos] ([id_permiso], [id_rol], [id_menu], [ver], [alta], [baja], [cambio], [descarga], [activo]) VALUES (2, 1, 2, 1, 1, 1, 1, 1, 1)
INSERT [dbo].[permisos] ([id_permiso], [id_rol], [id_menu], [ver], [alta], [baja], [cambio], [descarga], [activo]) VALUES (3, 1, 3, 1, 1, 1, 1, 1, 1)
INSERT [dbo].[permisos] ([id_permiso], [id_rol], [id_menu], [ver], [alta], [baja], [cambio], [descarga], [activo]) VALUES (4, 1, 4, 1, 1, 1, 1, 1, 1)
INSERT [dbo].[permisos] ([id_permiso], [id_rol], [id_menu], [ver], [alta], [baja], [cambio], [descarga], [activo]) VALUES (5, 1, 5, 1, 1, 1, 1, 1, 1)
INSERT [dbo].[permisos] ([id_permiso], [id_rol], [id_menu], [ver], [alta], [baja], [cambio], [descarga], [activo]) VALUES (6, 1, 6, 1, 1, 1, 1, 1, 1)
INSERT [dbo].[permisos] ([id_permiso], [id_rol], [id_menu], [ver], [alta], [baja], [cambio], [descarga], [activo]) VALUES (7, 1, 7, 1, 1, 1, 1, 1, 1)
INSERT [dbo].[permisos] ([id_permiso], [id_rol], [id_menu], [ver], [alta], [baja], [cambio], [descarga], [activo]) VALUES (8, 1, 8, 1, 1, 1, 1, 1, 1)
SET IDENTITY_INSERT [dbo].[permisos] OFF
GO
SET IDENTITY_INSERT [dbo].[roles] ON 

INSERT [dbo].[roles] ([id_rol], [rol], [descipcion], [grupo], [activo]) VALUES (1, N'Administrador', N'Administrador general', 1, 1)
INSERT [dbo].[roles] ([id_rol], [rol], [descipcion], [grupo], [activo]) VALUES (2, N'Gestor contrato', N'Gestor de los contratos', 1, 1)
INSERT [dbo].[roles] ([id_rol], [rol], [descipcion], [grupo], [activo]) VALUES (3, N'Responsable ejecucion', N'Responsable de  la ejecucion', 1, 1)
INSERT [dbo].[roles] ([id_rol], [rol], [descipcion], [grupo], [activo]) VALUES (4, N'Lider tecnico', N'lider tecnico', 1, 1)
INSERT [dbo].[roles] ([id_rol], [rol], [descipcion], [grupo], [activo]) VALUES (5, N'Responsable', N'Responsable  de consultores', 1, 1)
INSERT [dbo].[roles] ([id_rol], [rol], [descipcion], [grupo], [activo]) VALUES (6, N'Visualizador de  reportes', N'Ve  los reportes', 1, 1)
INSERT [dbo].[roles] ([id_rol], [rol], [descipcion], [grupo], [activo]) VALUES (7, N'Segurudad', N'Seguridad admin', 1, 1)
INSERT [dbo].[roles] ([id_rol], [rol], [descipcion], [grupo], [activo]) VALUES (8, N'Consultor', N'Consultor', 2, 1)
SET IDENTITY_INSERT [dbo].[roles] OFF
GO
INSERT [dbo].[usuario_role] ([id_usuario], [id_rol], [fh_registro], [fh_baja]) VALUES (5, 1, NULL, NULL)
GO
SET IDENTITY_INSERT [dbo].[usuarios] ON 

INSERT [dbo].[usuarios] ([id_usuario], [nombre], [primer_apellido], [segundo_apellido], [usuario], [contra], [correo], [curp], [rfc], [activo], [conectado], [fh_registro], [fh_baja]) VALUES (5, N'Admin', N'General', N'Sistema', N'admininfonavit.com', N'$2b$10$QCB6T1kzSLhNSp.Gp3n3.O4I8HagQ/euzSQ4ZgO4Z2iNj2mowWduq', N'admininfonavit.com', N'EISS910531DFSSSHG02', N'EISS910531DFS', 1, 0, NULL, NULL)
SET IDENTITY_INSERT [dbo].[usuarios] OFF
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [contratos_unique]    Script Date: 27/09/2024 11:33:24 a. m. ******/
ALTER TABLE [dbo].[contratos] ADD  CONSTRAINT [contratos_unique] UNIQUE NONCLUSTERED 
(
	[no_contrato] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[acciones_flujo]  WITH CHECK ADD  CONSTRAINT [FK_accionesFlujo_catalogoEstatus] FOREIGN KEY([id_estatus])
REFERENCES [dbo].[cat_estatus] ([id_estatus])
GO
ALTER TABLE [dbo].[acciones_flujo] CHECK CONSTRAINT [FK_accionesFlujo_catalogoEstatus]
GO
ALTER TABLE [dbo].[archivos]  WITH CHECK ADD  CONSTRAINT [FK_archivos_catExtencionArchivos] FOREIGN KEY([id_extencion])
REFERENCES [dbo].[cat_extencion_archivo] ([id_extencion])
GO
ALTER TABLE [dbo].[archivos] CHECK CONSTRAINT [FK_archivos_catExtencionArchivos]
GO
ALTER TABLE [dbo].[archivos_bitacora_actividades]  WITH CHECK ADD  CONSTRAINT [FK_archivos_bitacora_actividades_cat_documento] FOREIGN KEY([id_documento])
REFERENCES [dbo].[cat_documento] ([id_documento])
GO
ALTER TABLE [dbo].[archivos_bitacora_actividades] CHECK CONSTRAINT [FK_archivos_bitacora_actividades_cat_documento]
GO
ALTER TABLE [dbo].[archivos_bitacora_actividades]  WITH CHECK ADD  CONSTRAINT [FK_archivosBitacoraProyecto_archivos] FOREIGN KEY([id_archivo])
REFERENCES [dbo].[archivos] ([id_archivo])
GO
ALTER TABLE [dbo].[archivos_bitacora_actividades] CHECK CONSTRAINT [FK_archivosBitacoraProyecto_archivos]
GO
ALTER TABLE [dbo].[archivos_bitacora_actividades]  WITH CHECK ADD  CONSTRAINT [FK_archivosBitacoraProyecto_bitacoraProyecto] FOREIGN KEY([id_bitacora_actividades])
REFERENCES [dbo].[bitacora_actividades] ([id_bitacora_actividades])
GO
ALTER TABLE [dbo].[archivos_bitacora_actividades] CHECK CONSTRAINT [FK_archivosBitacoraProyecto_bitacoraProyecto]
GO
ALTER TABLE [dbo].[asistencias]  WITH CHECK ADD  CONSTRAINT [FK_asistencias_consultores_requerimiento] FOREIGN KEY([id_consultor_lider])
REFERENCES [dbo].[consultores_requerimiento] ([id_consultores_req])
GO
ALTER TABLE [dbo].[asistencias] CHECK CONSTRAINT [FK_asistencias_consultores_requerimiento]
GO
ALTER TABLE [dbo].[bitacora]  WITH CHECK ADD  CONSTRAINT [FK_bitacora_usuarios] FOREIGN KEY([id_usuario])
REFERENCES [dbo].[usuarios] ([id_usuario])
GO
ALTER TABLE [dbo].[bitacora] CHECK CONSTRAINT [FK_bitacora_usuarios]
GO
ALTER TABLE [dbo].[bitacora_actividades]  WITH CHECK ADD  CONSTRAINT [FK_bitacora_actividades_consultores_requerimiento] FOREIGN KEY([id_sol_servicio])
REFERENCES [dbo].[consultores_requerimiento] ([id_consultores_req])
GO
ALTER TABLE [dbo].[bitacora_actividades] CHECK CONSTRAINT [FK_bitacora_actividades_consultores_requerimiento]
GO
ALTER TABLE [dbo].[bitacora_actividades]  WITH CHECK ADD  CONSTRAINT [FK_bitacoraActividades_catEstatus] FOREIGN KEY([id_estatus])
REFERENCES [dbo].[cat_estatus] ([id_estatus])
GO
ALTER TABLE [dbo].[bitacora_actividades] CHECK CONSTRAINT [FK_bitacoraActividades_catEstatus]
GO
ALTER TABLE [dbo].[consultores_requerimiento]  WITH CHECK ADD  CONSTRAINT [FK_consultores_requerimiento_usuarios] FOREIGN KEY([id_usu_consultor])
REFERENCES [dbo].[usuarios] ([id_usuario])
GO
ALTER TABLE [dbo].[consultores_requerimiento] CHECK CONSTRAINT [FK_consultores_requerimiento_usuarios]
GO
ALTER TABLE [dbo].[consultores_requerimiento]  WITH CHECK ADD  CONSTRAINT [FK_consultoresProyecto_proyectos] FOREIGN KEY([id_requerimiento])
REFERENCES [dbo].[solicitud_servicio] ([id_sol_servicio])
GO
ALTER TABLE [dbo].[consultores_requerimiento] CHECK CONSTRAINT [FK_consultoresProyecto_proyectos]
GO
ALTER TABLE [dbo].[detalle_consultores]  WITH CHECK ADD  CONSTRAINT [FK_detalleConsultores_catPerfilConsultor] FOREIGN KEY([id_perfil])
REFERENCES [dbo].[cat_perfil_consultor] ([id_perfil])
GO
ALTER TABLE [dbo].[detalle_consultores] CHECK CONSTRAINT [FK_detalleConsultores_catPerfilConsultor]
GO
ALTER TABLE [dbo].[detalle_consultores]  WITH CHECK ADD  CONSTRAINT [FK_detalleConsultores_proyectos] FOREIGN KEY([id_requerimiento])
REFERENCES [dbo].[solicitud_servicio] ([id_sol_servicio])
GO
ALTER TABLE [dbo].[detalle_consultores] CHECK CONSTRAINT [FK_detalleConsultores_proyectos]
GO
ALTER TABLE [dbo].[expediente]  WITH CHECK ADD  CONSTRAINT [FK_expediente_archivos] FOREIGN KEY([id_achivo])
REFERENCES [dbo].[archivos] ([id_archivo])
GO
ALTER TABLE [dbo].[expediente] CHECK CONSTRAINT [FK_expediente_archivos]
GO
ALTER TABLE [dbo].[expediente]  WITH CHECK ADD  CONSTRAINT [FK_expediente_cat_documento] FOREIGN KEY([id_documento])
REFERENCES [dbo].[cat_documento] ([id_documento])
GO
ALTER TABLE [dbo].[expediente] CHECK CONSTRAINT [FK_expediente_cat_documento]
GO
ALTER TABLE [dbo].[expediente]  WITH CHECK ADD  CONSTRAINT [FK_expediente_usuarios1] FOREIGN KEY([id_usuario])
REFERENCES [dbo].[usuarios] ([id_usuario])
GO
ALTER TABLE [dbo].[expediente] CHECK CONSTRAINT [FK_expediente_usuarios1]
GO
ALTER TABLE [dbo].[lideres]  WITH CHECK ADD  CONSTRAINT [lideres_usuarios_FK] FOREIGN KEY([id_nuevo_usuario_lider])
REFERENCES [dbo].[usuarios] ([id_usuario])
GO
ALTER TABLE [dbo].[lideres] CHECK CONSTRAINT [lideres_usuarios_FK]
GO
ALTER TABLE [dbo].[permiso_tipo_extencion]  WITH CHECK ADD  CONSTRAINT [FK_permisoTipoExtencion_catExtencionArchivos] FOREIGN KEY([id_extencion])
REFERENCES [dbo].[cat_extencion_archivo] ([id_extencion])
GO
ALTER TABLE [dbo].[permiso_tipo_extencion] CHECK CONSTRAINT [FK_permisoTipoExtencion_catExtencionArchivos]
GO
ALTER TABLE [dbo].[permiso_tipo_extencion]  WITH CHECK ADD  CONSTRAINT [FK_permisoTipoExtencion_permisos] FOREIGN KEY([id_permiso])
REFERENCES [dbo].[permisos] ([id_permiso])
GO
ALTER TABLE [dbo].[permiso_tipo_extencion] CHECK CONSTRAINT [FK_permisoTipoExtencion_permisos]
GO
ALTER TABLE [dbo].[permisos]  WITH CHECK ADD  CONSTRAINT [FK_permisos_menus] FOREIGN KEY([id_menu])
REFERENCES [dbo].[menus] ([id_menu])
GO
ALTER TABLE [dbo].[permisos] CHECK CONSTRAINT [FK_permisos_menus]
GO
ALTER TABLE [dbo].[rol_estatus_accion]  WITH CHECK ADD  CONSTRAINT [FK_rolEstatusAccion_accionesFlujo] FOREIGN KEY([id_accion])
REFERENCES [dbo].[acciones_flujo] ([id_accion])
GO
ALTER TABLE [dbo].[rol_estatus_accion] CHECK CONSTRAINT [FK_rolEstatusAccion_accionesFlujo]
GO
ALTER TABLE [dbo].[rol_estatus_accion]  WITH CHECK ADD  CONSTRAINT [FK_rolEstatusAccion_catalogoEstatus] FOREIGN KEY([id_estatus])
REFERENCES [dbo].[cat_estatus] ([id_estatus])
GO
ALTER TABLE [dbo].[rol_estatus_accion] CHECK CONSTRAINT [FK_rolEstatusAccion_catalogoEstatus]
GO
ALTER TABLE [dbo].[rol_estatus_accion]  WITH CHECK ADD  CONSTRAINT [FK_rolEstatusAccion_roles] FOREIGN KEY([id_rol])
REFERENCES [dbo].[roles] ([id_rol])
GO
ALTER TABLE [dbo].[rol_estatus_accion] CHECK CONSTRAINT [FK_rolEstatusAccion_roles]
GO
ALTER TABLE [dbo].[solicitud_servicio]  WITH CHECK ADD  CONSTRAINT [FK_Proyectos_catAplicativoModulo] FOREIGN KEY([id_modulo_aplicativo])
REFERENCES [dbo].[cat_aplicativo_modulo] ([id_modulo_aplicativo])
GO
ALTER TABLE [dbo].[solicitud_servicio] CHECK CONSTRAINT [FK_Proyectos_catAplicativoModulo]
GO
ALTER TABLE [dbo].[solicitud_servicio]  WITH CHECK ADD  CONSTRAINT [FK_Proyectos_catTipoAccion] FOREIGN KEY([id_tipo_accion])
REFERENCES [dbo].[cat_tipo_accion] ([id_tipo_accion])
GO
ALTER TABLE [dbo].[solicitud_servicio] CHECK CONSTRAINT [FK_Proyectos_catTipoAccion]
GO
ALTER TABLE [dbo].[solicitud_servicio]  WITH CHECK ADD  CONSTRAINT [FK_Proyectos_contratos] FOREIGN KEY([id_consultor_lider])
REFERENCES [dbo].[contratos] ([id_contrato])
GO
ALTER TABLE [dbo].[solicitud_servicio] CHECK CONSTRAINT [FK_Proyectos_contratos]
GO
ALTER TABLE [dbo].[solicitud_servicio]  WITH CHECK ADD  CONSTRAINT [FK_requerimientos_usuarios1] FOREIGN KEY([id_usuario_responsable])
REFERENCES [dbo].[usuarios] ([id_usuario])
GO
ALTER TABLE [dbo].[solicitud_servicio] CHECK CONSTRAINT [FK_requerimientos_usuarios1]
GO
ALTER TABLE [dbo].[solicitud_servicio]  WITH CHECK ADD  CONSTRAINT [FK_solicitud_servicio_cat_areas] FOREIGN KEY([id_area_solicitante])
REFERENCES [dbo].[cat_areas] ([id_area])
GO
ALTER TABLE [dbo].[solicitud_servicio] CHECK CONSTRAINT [FK_solicitud_servicio_cat_areas]
GO
ALTER TABLE [dbo].[usuario_perfil]  WITH CHECK ADD  CONSTRAINT [FK_usuarioPerfil_catPerfilConsultor] FOREIGN KEY([id_perfil])
REFERENCES [dbo].[cat_perfil_consultor] ([id_perfil])
GO
ALTER TABLE [dbo].[usuario_perfil] CHECK CONSTRAINT [FK_usuarioPerfil_catPerfilConsultor]
GO
ALTER TABLE [dbo].[usuario_perfil]  WITH CHECK ADD  CONSTRAINT [FK_usuarioPerfil_usuarios] FOREIGN KEY([id_usuario])
REFERENCES [dbo].[usuarios] ([id_usuario])
GO
ALTER TABLE [dbo].[usuario_perfil] CHECK CONSTRAINT [FK_usuarioPerfil_usuarios]
GO
ALTER TABLE [dbo].[usuario_role]  WITH CHECK ADD  CONSTRAINT [FK_usuariosRoles_roles] FOREIGN KEY([id_rol])
REFERENCES [dbo].[roles] ([id_rol])
GO
ALTER TABLE [dbo].[usuario_role] CHECK CONSTRAINT [FK_usuariosRoles_roles]
GO
ALTER TABLE [dbo].[usuario_role]  WITH CHECK ADD  CONSTRAINT [FK_usuariosRoles_usuarios] FOREIGN KEY([id_usuario])
REFERENCES [dbo].[usuarios] ([id_usuario])
GO
ALTER TABLE [dbo].[usuario_role] CHECK CONSTRAINT [FK_usuariosRoles_usuarios]
GO
/****** Object:  StoredProcedure [dbo].[sp_consultaContratos]    Script Date: 27/09/2024 11:33:24 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_consultaContratos]
   @contrato varchar(100),
   @consultora varchar(100),
   @pagina_actual int,
   @registros_por_pagina int
AS
BEGIN
    DECLARE @filter AS varchar(max);
    SET @filter = '';

    IF (@contrato != '')
    BEGIN
        SET @filter += ' AND UPPER(TRIM(c.no_contrato)) LIKE UPPER(TRIM(''%' + CAST(@contrato AS varchar) + '%''))';
    END

    IF (@consultora != '')
    BEGIN
        SET @filter += ' AND UPPER(TRIM(cc.nombre)) LIKE UPPER(TRIM(''%' + CAST(@consultora AS varchar) + '%''))';
    END

    IF (@pagina_actual IS NULL)
    BEGIN
        SET @pagina_actual = 1;
    END

    IF (@registros_por_pagina IS NULL)
    BEGIN
        SET @registros_por_pagina = 10;
    END

    DECLARE @sql VARCHAR(max);
    SET @sql = '
        DECLARE @itemsPage INT;
        DECLARE @totalRows INT;
        DECLARE @totalPages INT;
        DECLARE @page INT;

        SET @itemsPage = ' + CAST(@registros_por_pagina AS varchar) + ';
        SET @page = ' + CAST(@pagina_actual AS varchar) + ' - 1;

        SELECT @totalRows = COUNT(*)
        FROM contratos c
            INNER JOIN cat_forma_pago cfp ON cfp.id_forma_pago = c.id_forma_pago
            INNER JOIN cat_tipo_contrato ctc ON ctc.id_tipo_contrato = c.id_tipo_contrato
            INNER JOIN cat_consultoras cc ON cc.id_consultora = c.id_consultora
            LEFT JOIN cat_areas ca ON ca.id_area = c.id_area
            LEFT JOIN usuarios u ON u.id_usuario = c.id_gerente
        WHERE 1 = 1 ' + @filter + ';

        SET @totalPages = (@totalRows + @itemsPage - 1) / @itemsPage; -- Ajuste del cálculo de totalPages

        SELECT TOP ' + CAST(@registros_por_pagina AS varchar) + ' *
        FROM (
            SELECT ROW_NUMBER() OVER(ORDER BY c.no_contrato ASC, cc.nombre ASC) AS no_registro,
                c.id_contrato, c.no_contrato, CONVERT(varchar(10), c.fh_inicio, 103) as fh_inicio, CONVERT(varchar(10), c.fh_inicio, 103) as fh_fin, 
				c.monto_variable, c.monto_fijo, c.monto_total, cfp.id_forma_pago, cfp.nombre AS forma_pago, ctc.id_tipo_contrato, 
				ctc.nombre AS tipo_contrato, cc.id_consultora, cc.nombre AS consultora, c.id_archivo, c.activo, FORMAT( c.fh_registro, ''dd/MM/yyyy HH:mm:ss'') as fh_registro,
				FORMAT( c.fh_actualizacion, ''dd/MM/yyyy HH:mm:ss'')  as fh_actualizacion, ca.id_area, ca.nombre AS area, u.id_usuario, u.nombre, u.primer_apellido, u.segundo_apellido,
                (@page + 1) AS pagina_actual, @totalRows AS total_registros, @totalPages AS total_paginas
            FROM contratos c
                INNER JOIN cat_forma_pago cfp ON cfp.id_forma_pago = c.id_forma_pago
                INNER JOIN cat_tipo_contrato ctc ON ctc.id_tipo_contrato = c.id_tipo_contrato
                INNER JOIN cat_consultoras cc ON cc.id_consultora = c.id_consultora
                LEFT JOIN cat_areas ca ON ca.id_area = c.id_area
                LEFT JOIN usuarios u ON u.id_usuario = c.id_gerente
            WHERE 1 = 1 ' + @filter + '
        ) AS tabla
        WHERE no_registro > @page * @itemsPage;';

    PRINT @sql; -- Para depuración, puedes quitarlo en producción
    EXEC(@sql);
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_consultaPerfilesContrato]    Script Date: 27/09/2024 11:33:24 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE  [dbo].[sp_consultaPerfilesContrato]
   @id_contrato int,
   @pagina_actual int,
   @registros_por_pagina int
AS
BEGIN
    IF (@pagina_actual IS NULL)
    BEGIN
        SET @pagina_actual = 1;
    END

    IF (@registros_por_pagina IS NULL)
    BEGIN
        SET @registros_por_pagina = 10;
    END

    DECLARE @sql VARCHAR(max);
    SET @sql = '
        DECLARE @itemsPage INT;
        DECLARE @totalRows INT;
        DECLARE @totalPages INT;
        DECLARE @page INT;

        SET @itemsPage = ' + CAST(@registros_por_pagina AS varchar) + ';
        SET @page = ' + CAST(@pagina_actual AS varchar) + ' - 1;

        SELECT @totalRows = COUNT(*)
        from perfiles_contrato pc
		inner join  cat_perfil_consultor cpc on cpc.id_perfil = pc.id_perfil
        WHERE pc.id_contrato = ' + CAST(@id_contrato AS varchar)  + '

        SET @totalPages = (@totalRows + @itemsPage - 1) / @itemsPage; -- Ajuste del cálculo de totalPages

        SELECT TOP ' + CAST(@registros_por_pagina AS varchar) + ' *
        FROM (
            SELECT ROW_NUMBER() OVER(ORDER BY cpc.nombre ASC, pc.fh_registro ASC) AS no_registro,
			     pc.id_perfil_contrato, CONVERT(varchar(10), pc.fh_registro, 103) as fh_registro, 
				 CONVERT(varchar(10), pc.fh_baja, 103) as fh_baja, pc.cantidad, cpc.id_perfil, cpc.nombre, cpc.descripcion, cpc.monto,
                 (@page + 1) AS pagina_actual, @totalRows AS total_registros, @totalPages AS total_paginas
             FROM perfiles_contrato pc
		         inner join  cat_perfil_consultor cpc on cpc.id_perfil = pc.id_perfil
             WHERE pc.id_contrato = ' + CAST(@id_contrato AS varchar) + '
        ) AS tabla
        WHERE no_registro > @page * @itemsPage;';

    PRINT @sql; -- Para depuración, puedes quitarlo en producción
    EXEC(@sql);
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_login]    Script Date: 27/09/2024 11:33:24 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_login]
  @usuario varchar(100)
AS
BEGIN
	BEGIN TRY
        -- Inicia la transacción
        BEGIN TRANSACTION;

		declare @id_usuario as int
		declare @conectado as bit
		declare @activo as bit
		SET @id_usuario = 0
		SET @conectado = 0
		SET @activo = 1

		SELECT  @id_usuario = id_usuario, @conectado = conectado, @activo = activo  FROM usuarios WHERE usuario = @usuario;

		IF  @activo = 0
			 BEGIN
					COMMIT TRANSACTION;
					select TOP 1 cast(0 as bit) as  succes , 'No cuentar con permiso para acceder al sistama' as message; 
			  END
		ELSE IF  @conectado = 1
			  BEGIN
			         COMMIT TRANSACTION;
					select TOP 1 cast(0 as bit) as  succes , 'Ya tienes una sesión activa' as message; 
			  END
	    ELSE IF  @id_usuario = 0
			   BEGIN
					COMMIT TRANSACTION;
					select TOP 1 cast(0 as bit) as  succes , 'No hay usuario registrado con esa cuanta' as message; 
			  END
        ELSE
			  BEGIN
					 COMMIT TRANSACTION;
					 SELECT TOP 1 cast(1 as bit) as  succes , 'Datos correctos' as message ,
					 id_usuario, contra, nombre, primer_apellido, segundo_apellido, usuario, correo, curp, rfc, img, activo, conectado 
					 FROM usuarios WHERE id_usuario = @id_usuario;
			  END
	END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0
            ROLLBACK TRANSACTION;
          PRINT 'Error capturado: ' + ERROR_MESSAGE();
		  select TOP 1  cast(0 as bit) as  succes , ERROR_MESSAGE() as message;
    END CATCH


END
GO
/****** Object:  StoredProcedure [dbo].[sp_registraActualizaArchivos]    Script Date: 27/09/2024 11:33:24 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_registraActualizaArchivos]
  @id_archivo int = NULL, 
  @nombre varchar(100),
  @id_extencion int,
  @ruta varchar(300),
  @id_usuario int,
  @ip varchar(20)
AS
BEGIN
	BEGIN TRY
        -- Inicia la transacción
        BEGIN TRANSACTION;
	    declare @sql varchar(max)
		IF  @id_archivo is not null
			 BEGIN
				set @sql = ' UPDATE archivos SET nombre = ''' + @nombre + ''', id_extencion = ''' + CONVERT(varchar(10), @id_extencion) + ''', ruta = ''' + @ruta + ''', fh_registro = CURRENT_TIMESTAMP 
				    WHERE id_contrato = ' + CONVERT(varchar(10), @id_archivo) + ';';

					PRINT @sql;
					EXEC (@sql);
					COMMIT TRANSACTION;

					EXEC sp_registraBitacora @id_usuario, 'archivos', @ip, @id_archivo, 'UPDATE', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se actualizó correctamente el archivo' as mensaje, @id_archivo as id_archivo ; 
			 END
        ELSE
			  BEGIN
					set @sql = ' INSERT INTO archivos ( nombre, id_extencion, ruta, fh_registro) 
					VALUES( ''' + @nombre + ''',''' + CONVERT(varchar(10), @id_extencion) + ''',''' + @ruta + ''', CURRENT_TIMESTAMP ); ';
              	
					PRINT @sql;
					EXEC (@sql);
					COMMIT TRANSACTION;

					SELECT  @id_archivo = MAX(id_archivo) FROM archivos;

					EXEC sp_registraBitacora @id_usuario, 'archivos', @ip, @id_archivo, 'INSERT', @sql;
					SELECT TOP 1 cast(1 as bit) as correcto, 'Se registró correctamente el archivo' as mensaje , @id_archivo as id_archivo ; 
			  END

	END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0
            ROLLBACK TRANSACTION;
          PRINT 'Error capturado: ' + ERROR_MESSAGE();
		  SELECT TOP 1 cast(0 as bit) as correcto, ERROR_MESSAGE() as mensaje;
    END CATCH
END
GO
/****** Object:  StoredProcedure [dbo].[sp_registraActualizaContrato]    Script Date: 27/09/2024 11:33:24 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_registraActualizaContrato]
  @id_contrato int = NULL, 
  @no_contrato varchar(50),
  @fh_inicio date,
  @fh_termino date,
  @monto_variable decimal(10, 5),
  @monto_fijo decimal(10, 5),
  @monto_total decimal(10, 5),
  @id_forma_pago int,
  @id_tipo_contrato int,
  @id_consultora int,
  @id_area int,
  @id_gerente int,
  @id_archivo int,
  @activo bit,
  @id_usuario int,
  @ip varchar(20)
AS
BEGIN
	BEGIN TRY
        -- Inicia la transacción
        BEGIN TRANSACTION;
	    declare @sql varchar(max)
		IF  @id_contrato is not null
			 BEGIN
				set @sql = 'UPDATE contratos SET no_contrato = ''' + @no_contrato + ''', fh_inicio = ''' + CONVERT(varchar(10), @fh_inicio, 120) + ''', fh_fin = ''' + CONVERT(varchar(10), @fh_termino, 120) + ''',
					monto_variable = ' + CONVERT(varchar(50), @monto_variable) + ', monto_fijo = ' + CONVERT(varchar(50), @monto_fijo) + ', monto_total = ' + CONVERT(varchar(50), @monto_total) + ',
					id_forma_pago = ' + CONVERT(varchar(10), @id_forma_pago) + ', id_tipo_contrato = ' + CONVERT(varchar(10), @id_tipo_contrato) + ',
					id_consultora = ' + CONVERT(varchar(10), @id_consultora) + ', id_archivo = ' + ISNULL(CONVERT(varchar(10), @id_archivo), 'NULL') + ', activo = ' + CONVERT(varchar(1), @activo) + ',
					id_area = ' + CONVERT(varchar(10), @id_area) + ', id_gerente = ' + CONVERT(varchar(10), @id_gerente) + ', fh_actualizacion = CURRENT_TIMESTAMP
					WHERE id_contrato = ' + CONVERT(varchar(10), @id_contrato) + ';';

					PRINT @sql;
					EXEC (@sql);
					COMMIT TRANSACTION;

					EXEC sp_registraBitacora @id_usuario, 'contratos', @ip, @id_contrato, 'UPDATE', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se actualizó correctamente el contrato' as mensaje, @id_contrato as id_contrato ; 
			 END
        ELSE
			  BEGIN
					set @sql = 'INSERT INTO contratos (no_contrato, fh_inicio, fh_fin, monto_variable, monto_fijo, monto_total, id_forma_pago, id_tipo_contrato, 
						id_consultora, id_archivo, activo, fh_registro, fh_actualizacion, id_area, id_gerente)
						VALUES (''' + @no_contrato + ''', ''' + CONVERT(varchar(10), @fh_inicio, 120) + ''', ''' + CONVERT(varchar(10), @fh_termino, 120) + ''',
						' + CONVERT(varchar(50), @monto_variable) + ', ' + CONVERT(varchar(50), @monto_fijo) + ', ' + CONVERT(varchar(50), @monto_total) + ',
						' + CONVERT(varchar(10), @id_forma_pago) + ', ' + CONVERT(varchar(10), @id_tipo_contrato) + ', ' + CONVERT(varchar(10), @id_consultora) + ',
						' + ISNULL(CONVERT(varchar(10), @id_archivo), 'NULL') + ', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP,
						' + CONVERT(varchar(10), @id_area) + ', ' + CONVERT(varchar(10), @id_gerente) + ');';
								
					PRINT @sql;
					EXEC (@sql);
					COMMIT TRANSACTION;

					
					SELECT  @id_contrato = MAX(id_contrato) FROM contratos;

					EXEC sp_registraBitacora @id_usuario, 'contratos', @ip, @id_contrato, 'INSERT', @sql;
					SELECT TOP 1 cast(1 as bit) as correcto, 'Se registró correctamente el contrato' as mensaje , @id_contrato as id_contrato ; 
			  END

	END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0
            ROLLBACK TRANSACTION;
          PRINT 'Error capturado: ' + ERROR_MESSAGE();
		  SELECT TOP 1 cast(0 as bit) as correcto, ERROR_MESSAGE() as mensaje;
    END CATCH
END
GO
/****** Object:  StoredProcedure [dbo].[sp_registraActualizaPerfil]    Script Date: 27/09/2024 11:33:24 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_registraActualizaPerfil]
  @id_perfil int = NULL, 
  @nombre varchar(100),
  @descripcion varchar(1000),
  @monto decimal(10, 5),
  @activo bit,
  @id_usuario int,
  @ip varchar(20)
AS
BEGIN
	BEGIN TRY
	   BEGIN TRANSACTION;
        -- Inicia la transacción
	
	    declare @sql varchar(max)
		IF  @id_perfil is not null
			 BEGIN

			 	declare @fh_baja varchar(50) = ''
				IF  @activo = 0
					 BEGIN
						set @fh_baja = ', fh_baja = CURRENT_TIMESTAMP '
					 END
			    ELSE
					BEGIN
						set @fh_baja = ', fh_baja = NULL '
					 END


				set @sql = 'UPDATE cat_perfil_consultor SET nombre = ' + @nombre + ', descripcion = ' + @descripcion + ', monto = ''' + CONVERT(varchar(50), @monto) + '''
				    '+ @fh_baja + ' WHERE id_perfil = ' + CONVERT(varchar(10), @id_perfil) + ';';

					PRINT @sql;
					EXEC (@sql);
					COMMIT TRANSACTION;

					EXEC sp_registraBitacora @id_usuario, 'cat_perfil_consultor', @ip, @id_perfil, 'UPDATE', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se actualizó correctamente el perfil' as mensaje, @id_perfil as id ; 
			 END
        ELSE
			  BEGIN
					set @sql =  'INSERT INTO cat_perfil_consultor ( nombre, descripcion, monto, fh_registro, fh_baja)
					VALUES(' + @nombre + ',  ' + @descripcion + ' , ''' + CONVERT(varchar(50), @monto) + ''', ' + CURRENT_TIMESTAMP + ')';

					PRINT @sql;
					EXEC (@sql);
					COMMIT TRANSACTION;

					
					SELECT  @id_perfil = MAX(id_perfil) FROM cat_perfil_consultor;

					EXEC sp_registraBitacora @id_usuario, 'cat_perfil_consultor', @ip, @id_perfil, 'INSERT', @sql;
					SELECT TOP 1 cast(1 as bit) as correcto, 'Se registró correctamente el perfil' as mensaje , @id_perfil as id ; 
			  END

	END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0
            ROLLBACK TRANSACTION;
          PRINT 'Error capturado: ' + ERROR_MESSAGE();
		  SELECT TOP 1 cast(0 as bit) as correcto, ERROR_MESSAGE() as mensaje, null as id;
    END CATCH
END
GO
/****** Object:  StoredProcedure [dbo].[sp_registraActualizaPerfilesContrato]    Script Date: 27/09/2024 11:33:24 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_registraActualizaPerfilesContrato]
  @id_perfil_contrato int = null,
  @id_contrato int,
  @id_perfil int, 
  @cantidad int, 
  @activo bit,
  @id_usuario int,
  @ip varchar(20)
AS
BEGIN
	BEGIN TRY
	   BEGIN TRANSACTION;
        -- Inicia la transacción
	

	    declare @sql varchar(max)
		IF  @id_perfil_contrato is not null
			 BEGIN

			 	declare @fh_baja varchar(50) = ''
				IF  @activo = 0
					 BEGIN
						set @fh_baja = ', fh_baja = CURRENT_TIMESTAMP '
					 END
			   ELSE
					BEGIN
						set @fh_baja = ', fh_baja = NULL '
					 END

				set @sql = 'UPDATE perfiles_contrato SET id_contrato =  ''' + CONVERT(varchar(10),  @id_contrato) + ''', id_perfil = ''' + CONVERT(varchar(10), @id_perfil) + ''' , 
				cantidad = ''' + CONVERT(varchar(10), @cantidad) + ''' '+ @fh_baja + ' WHERE id_perfil = ' + CONVERT(varchar(10), @id_perfil_contrato) + ';';

					PRINT @sql;
					EXEC (@sql);
					COMMIT TRANSACTION;

					EXEC sp_registraBitacora @id_usuario, 'perfiles_contrato', @ip, @id_perfil_contrato, 'UPDATE', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se actualizó correctamente el perfil del contrato' as mensaje, @id_perfil_contrato as id ; 
			 END
        ELSE
			  BEGIN
					set @sql =  'INSERT INTO perfiles_contrato ( id_contrato, fh_registro, id_perfil, cantidad)
					VALUES( ''' + CONVERT(varchar(10),  @id_contrato) + ''', ' + CURRENT_TIMESTAMP + ',  ''' + CONVERT(varchar(10), @id_perfil) + ''' ,  ''' + CONVERT(varchar(10), @cantidad) + ''')';

					PRINT @sql;
					EXEC (@sql);
					COMMIT TRANSACTION;

					
					SELECT  @id_perfil_contrato = MAX(id_perfil_contrato) FROM perfiles_contrato;

					EXEC sp_registraBitacora @id_usuario, 'perfiles_contrato', @ip, @id_perfil_contrato, 'INSERT', @sql;
					SELECT TOP 1 cast(1 as bit) as correcto, 'Se registró correctamente el perfil del contrato' as mensaje , @id_perfil_contrato as id ; 
			  END

	END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0
            ROLLBACK TRANSACTION;
          PRINT 'Error capturado: ' + ERROR_MESSAGE();
		  SELECT TOP 1 cast(0 as bit) as correcto, ERROR_MESSAGE() as mensaje, null as id;
    END CATCH
END
GO
/****** Object:  StoredProcedure [dbo].[sp_registraBitacora]    Script Date: 27/09/2024 11:33:24 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_registraBitacora]
  @id_usuario int = null,
  @tabla varchar(100),
  @ip varchar(20),
  @identificador int,
  @accion varchar(100),
  @descripcion varchar(5000)
AS
BEGIN
	BEGIN TRY
        -- Inicia la transacción
        BEGIN TRANSACTION;

		INSERT INTO bitacora
			(id_usuario, tabla, ip, identificador, accion, descripcion, fh_registro, fh_actualizacion)
			VALUES( @id_usuario, @tabla, @ip, @identificador, @accion, @descripcion, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

		COMMIT TRANSACTION;

	END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0
            ROLLBACK TRANSACTION;
          PRINT 'Error capturado: ' + ERROR_MESSAGE();
    END CATCH
END
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Tamaño maximo del archivo en MB' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'cat_extencion_archivo', @level2type=N'COLUMN',@level2name=N'tamano_maximo'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'1.  Rol infonavit, 2. Consultor externo' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'roles', @level2type=N'COLUMN',@level2name=N'grupo'
GO
