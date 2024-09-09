USE [GestionBitacora]
GO
EXEC sys.sp_dropextendedproperty @name=N'MS_Description' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'roles', @level2type=N'COLUMN',@level2name=N'grupo'
GO
EXEC sys.sp_dropextendedproperty @name=N'MS_Description' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'cat_extencion_archivo', @level2type=N'COLUMN',@level2name=N'tamaño_maximo'
GO
/****** Object:  StoredProcedure [dbo].[sp_login]    Script Date: 06/09/2024 06:16:14 p. m. ******/
DROP PROCEDURE [dbo].[sp_login]
GO
ALTER TABLE [dbo].[usuario_role] DROP CONSTRAINT [FK_usuariosRoles_usuarios]
GO
ALTER TABLE [dbo].[usuario_role] DROP CONSTRAINT [FK_usuariosRoles_roles]
GO
ALTER TABLE [dbo].[usuario_perfil] DROP CONSTRAINT [FK_usuarioPerfil_usuarios]
GO
ALTER TABLE [dbo].[usuario_perfil] DROP CONSTRAINT [FK_usuarioPerfil_catPerfilConsultor]
GO
ALTER TABLE [dbo].[rol_estatus_accion] DROP CONSTRAINT [FK_rolEstatusAccion_roles]
GO
ALTER TABLE [dbo].[rol_estatus_accion] DROP CONSTRAINT [FK_rolEstatusAccion_catalogoEstatus]
GO
ALTER TABLE [dbo].[rol_estatus_accion] DROP CONSTRAINT [FK_rolEstatusAccion_accionesFlujo]
GO
ALTER TABLE [dbo].[requerimientos] DROP CONSTRAINT [FK_requerimientos_usuarios1]
GO
ALTER TABLE [dbo].[requerimientos] DROP CONSTRAINT [FK_requerimientos_usuarios]
GO
ALTER TABLE [dbo].[requerimientos] DROP CONSTRAINT [FK_Proyectos_contratos]
GO
ALTER TABLE [dbo].[requerimientos] DROP CONSTRAINT [FK_Proyectos_catTipoAccion]
GO
ALTER TABLE [dbo].[requerimientos] DROP CONSTRAINT [FK_Proyectos_catGerenciaSubdir]
GO
ALTER TABLE [dbo].[requerimientos] DROP CONSTRAINT [FK_Proyectos_catAplicativoModulo]
GO
ALTER TABLE [dbo].[permisos] DROP CONSTRAINT [FK_permisos_roles]
GO
ALTER TABLE [dbo].[permisos] DROP CONSTRAINT [FK_permisos_menus]
GO
ALTER TABLE [dbo].[permiso_tipo_extencion] DROP CONSTRAINT [FK_permisoTipoExtencion_permisos]
GO
ALTER TABLE [dbo].[permiso_tipo_extencion] DROP CONSTRAINT [FK_permisoTipoExtencion_catExtencionArchivos]
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
ALTER TABLE [dbo].[contratos] DROP CONSTRAINT [FK_contratos_catTipoContrato]
GO
ALTER TABLE [dbo].[contratos] DROP CONSTRAINT [FK_contratos_catConsultoras]
GO
ALTER TABLE [dbo].[contratos] DROP CONSTRAINT [FK_contratos_cat_forma_pago]
GO
ALTER TABLE [dbo].[contratos] DROP CONSTRAINT [FK_contratos_archivos]
GO
ALTER TABLE [dbo].[consultores_requerimiento] DROP CONSTRAINT [FK_consultoresProyecto_proyectos]
GO
ALTER TABLE [dbo].[consultores_requerimiento] DROP CONSTRAINT [FK_consultores_requerimiento_usuarios]
GO
ALTER TABLE [dbo].[bitacora_actividades] DROP CONSTRAINT [FK_bitacoraActividades_catEstatus]
GO
ALTER TABLE [dbo].[bitacora_actividades] DROP CONSTRAINT [FK_bitacora_actividades_usuarios]
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
/****** Object:  Table [dbo].[usuarios]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usuarios]') AND type in (N'U'))
DROP TABLE [dbo].[usuarios]
GO
/****** Object:  Table [dbo].[usuario_role]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usuario_role]') AND type in (N'U'))
DROP TABLE [dbo].[usuario_role]
GO
/****** Object:  Table [dbo].[usuario_perfil]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usuario_perfil]') AND type in (N'U'))
DROP TABLE [dbo].[usuario_perfil]
GO
/****** Object:  Table [dbo].[roles]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[roles]') AND type in (N'U'))
DROP TABLE [dbo].[roles]
GO
/****** Object:  Table [dbo].[rol_estatus_accion]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[rol_estatus_accion]') AND type in (N'U'))
DROP TABLE [dbo].[rol_estatus_accion]
GO
/****** Object:  Table [dbo].[requerimientos]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[requerimientos]') AND type in (N'U'))
DROP TABLE [dbo].[requerimientos]
GO
/****** Object:  Table [dbo].[permisos]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[permisos]') AND type in (N'U'))
DROP TABLE [dbo].[permisos]
GO
/****** Object:  Table [dbo].[permiso_tipo_extencion]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[permiso_tipo_extencion]') AND type in (N'U'))
DROP TABLE [dbo].[permiso_tipo_extencion]
GO
/****** Object:  Table [dbo].[menus]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[menus]') AND type in (N'U'))
DROP TABLE [dbo].[menus]
GO
/****** Object:  Table [dbo].[expediente]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[expediente]') AND type in (N'U'))
DROP TABLE [dbo].[expediente]
GO
/****** Object:  Table [dbo].[detalle_consultores]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[detalle_consultores]') AND type in (N'U'))
DROP TABLE [dbo].[detalle_consultores]
GO
/****** Object:  Table [dbo].[contratos]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[contratos]') AND type in (N'U'))
DROP TABLE [dbo].[contratos]
GO
/****** Object:  Table [dbo].[consultores_requerimiento]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[consultores_requerimiento]') AND type in (N'U'))
DROP TABLE [dbo].[consultores_requerimiento]
GO
/****** Object:  Table [dbo].[configuracion]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[configuracion]') AND type in (N'U'))
DROP TABLE [dbo].[configuracion]
GO
/****** Object:  Table [dbo].[cat_tipo_pago]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_tipo_pago]') AND type in (N'U'))
DROP TABLE [dbo].[cat_tipo_pago]
GO
/****** Object:  Table [dbo].[cat_tipo_contrato]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_tipo_contrato]') AND type in (N'U'))
DROP TABLE [dbo].[cat_tipo_contrato]
GO
/****** Object:  Table [dbo].[cat_tipo_accion]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_tipo_accion]') AND type in (N'U'))
DROP TABLE [dbo].[cat_tipo_accion]
GO
/****** Object:  Table [dbo].[cat_perfil_consultor]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_perfil_consultor]') AND type in (N'U'))
DROP TABLE [dbo].[cat_perfil_consultor]
GO
/****** Object:  Table [dbo].[cat_gerencia_subdireccion]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_gerencia_subdireccion]') AND type in (N'U'))
DROP TABLE [dbo].[cat_gerencia_subdireccion]
GO
/****** Object:  Table [dbo].[cat_forma_pago]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_forma_pago]') AND type in (N'U'))
DROP TABLE [dbo].[cat_forma_pago]
GO
/****** Object:  Table [dbo].[cat_extencion_archivo]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_extencion_archivo]') AND type in (N'U'))
DROP TABLE [dbo].[cat_extencion_archivo]
GO
/****** Object:  Table [dbo].[cat_estatus]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_estatus]') AND type in (N'U'))
DROP TABLE [dbo].[cat_estatus]
GO
/****** Object:  Table [dbo].[cat_documento]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_documento]') AND type in (N'U'))
DROP TABLE [dbo].[cat_documento]
GO
/****** Object:  Table [dbo].[cat_consultoras]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_consultoras]') AND type in (N'U'))
DROP TABLE [dbo].[cat_consultoras]
GO
/****** Object:  Table [dbo].[cat_aplicativo_modulo]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_aplicativo_modulo]') AND type in (N'U'))
DROP TABLE [dbo].[cat_aplicativo_modulo]
GO
/****** Object:  Table [dbo].[bitacora_actividades]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[bitacora_actividades]') AND type in (N'U'))
DROP TABLE [dbo].[bitacora_actividades]
GO
/****** Object:  Table [dbo].[bitacora]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[bitacora]') AND type in (N'U'))
DROP TABLE [dbo].[bitacora]
GO
/****** Object:  Table [dbo].[asistencias]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[asistencias]') AND type in (N'U'))
DROP TABLE [dbo].[asistencias]
GO
/****** Object:  Table [dbo].[archivos_bitacora_actividades]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[archivos_bitacora_actividades]') AND type in (N'U'))
DROP TABLE [dbo].[archivos_bitacora_actividades]
GO
/****** Object:  Table [dbo].[archivos]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[archivos]') AND type in (N'U'))
DROP TABLE [dbo].[archivos]
GO
/****** Object:  Table [dbo].[acciones_flujo]    Script Date: 06/09/2024 06:16:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[acciones_flujo]') AND type in (N'U'))
DROP TABLE [dbo].[acciones_flujo]
GO
/****** Object:  Table [dbo].[acciones_flujo]    Script Date: 06/09/2024 06:16:14 p. m. ******/
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
/****** Object:  Table [dbo].[archivos]    Script Date: 06/09/2024 06:16:14 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[archivos](
	[id_archivo] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](100) NOT NULL,
	[id_extencion] [int] NOT NULL,
	[ruta] [varchar](300) NOT NULL,
	[fh_carga] [date] NOT NULL,
 CONSTRAINT [PK_archivos] PRIMARY KEY CLUSTERED 
(
	[id_archivo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[archivos_bitacora_actividades]    Script Date: 06/09/2024 06:16:14 p. m. ******/
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
/****** Object:  Table [dbo].[asistencias]    Script Date: 06/09/2024 06:16:14 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[asistencias](
	[id_asistencia] [int] IDENTITY(1,1) NOT NULL,
	[id_consultores_req] [int] NOT NULL,
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
/****** Object:  Table [dbo].[bitacora]    Script Date: 06/09/2024 06:16:14 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bitacora](
	[id_bitacora] [int] IDENTITY(1,1) NOT NULL,
	[id_usuario] [int] NOT NULL,
	[tabla] [varchar](100) NOT NULL,
	[ip] [varchar](20) NULL,
	[identificador] [int] NOT NULL,
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
/****** Object:  Table [dbo].[bitacora_actividades]    Script Date: 06/09/2024 06:16:14 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bitacora_actividades](
	[id_bitacora_actividades] [int] IDENTITY(1,1) NOT NULL,
	[id_consultores_req] [int] NOT NULL,
	[fecha] [date] NOT NULL,
	[actividad_realizada] [varchar](5000) NOT NULL,
	[horas] [decimal](10, 5) NOT NULL,
	[id_estatus] [int] NOT NULL,
	[obs_rechazo] [int] NULL,
	[id_usuario_rechazo] [int] NULL,
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
/****** Object:  Table [dbo].[cat_aplicativo_modulo]    Script Date: 06/09/2024 06:16:14 p. m. ******/
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
/****** Object:  Table [dbo].[cat_consultoras]    Script Date: 06/09/2024 06:16:14 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cat_consultoras](
	[id_consultora] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](5) NOT NULL,
	[descripocion] [varchar](500) NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_catConsultoras] PRIMARY KEY CLUSTERED 
(
	[id_consultora] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cat_documento]    Script Date: 06/09/2024 06:16:14 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cat_documento](
	[id_documento] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](100) NOT NULL,
	[descriocion] [varchar](500) NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_cat_documento] PRIMARY KEY CLUSTERED 
(
	[id_documento] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cat_estatus]    Script Date: 06/09/2024 06:16:14 p. m. ******/
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
/****** Object:  Table [dbo].[cat_extencion_archivo]    Script Date: 06/09/2024 06:16:14 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cat_extencion_archivo](
	[id_extencion] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](100) NOT NULL,
	[descripcion] [varchar](500) NULL,
	[tamaño_maximo] [int] NOT NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_catExtencionArchivos] PRIMARY KEY CLUSTERED 
(
	[id_extencion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cat_forma_pago]    Script Date: 06/09/2024 06:16:14 p. m. ******/
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
/****** Object:  Table [dbo].[cat_gerencia_subdireccion]    Script Date: 06/09/2024 06:16:14 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cat_gerencia_subdireccion](
	[id_gerencia_subdir] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](100) NOT NULL,
	[descripcion] [varchar](500) NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_catGerenciaSubdir] PRIMARY KEY CLUSTERED 
(
	[id_gerencia_subdir] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cat_perfil_consultor]    Script Date: 06/09/2024 06:16:14 p. m. ******/
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
/****** Object:  Table [dbo].[cat_tipo_accion]    Script Date: 06/09/2024 06:16:14 p. m. ******/
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
/****** Object:  Table [dbo].[cat_tipo_contrato]    Script Date: 06/09/2024 06:16:14 p. m. ******/
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
/****** Object:  Table [dbo].[cat_tipo_pago]    Script Date: 06/09/2024 06:16:14 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cat_tipo_pago](
	[id_tipo_pago] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](100) NOT NULL,
	[descripcion] [varchar](500) NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_cat_tipo_pago] PRIMARY KEY CLUSTERED 
(
	[id_tipo_pago] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[configuracion]    Script Date: 06/09/2024 06:16:14 p. m. ******/
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
/****** Object:  Table [dbo].[consultores_requerimiento]    Script Date: 06/09/2024 06:16:14 p. m. ******/
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
/****** Object:  Table [dbo].[contratos]    Script Date: 06/09/2024 06:16:14 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[contratos](
	[id_contrato] [int] IDENTITY(1,1) NOT NULL,
	[no_contrato] [varchar](50) NOT NULL,
	[fh_inicio] [date] NOT NULL,
	[fh_fin] [date] NOT NULL,
	[prorroga] [bit] NOT NULL,
	[monto_variable] [decimal](10, 5) NOT NULL,
	[monto_fijo] [decimal](10, 5) NOT NULL,
	[monto_total] [decimal](10, 5) NOT NULL,
	[id_forma_pago] [int] NULL,
	[id_tipo_contrato] [int] NOT NULL,
	[id_consultora] [int] NOT NULL,
	[id_archivo] [int] NULL,
	[activo] [bit] NOT NULL,
	[utilizado] [bit] NOT NULL,
	[fh_registro] [datetime] NOT NULL,
	[fh_actualizacion] [datetime] NOT NULL,
 CONSTRAINT [PK_contratos] PRIMARY KEY CLUSTERED 
(
	[id_contrato] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[detalle_consultores]    Script Date: 06/09/2024 06:16:14 p. m. ******/
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
/****** Object:  Table [dbo].[expediente]    Script Date: 06/09/2024 06:16:14 p. m. ******/
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
/****** Object:  Table [dbo].[menus]    Script Date: 06/09/2024 06:16:14 p. m. ******/
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
/****** Object:  Table [dbo].[permiso_tipo_extencion]    Script Date: 06/09/2024 06:16:14 p. m. ******/
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
/****** Object:  Table [dbo].[permisos]    Script Date: 06/09/2024 06:16:14 p. m. ******/
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
/****** Object:  Table [dbo].[requerimientos]    Script Date: 06/09/2024 06:16:14 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[requerimientos](
	[id_requerimiento] [int] NOT NULL,
	[id_contrato] [int] NOT NULL,
	[identificador] [varchar](100) NOT NULL,
	[nombre] [varchar](100) NOT NULL,
	[descripcion] [varchar](500) NOT NULL,
	[no_consultores] [int] NOT NULL,
	[id_lider_tecnico] [int] NOT NULL,
	[id_responsable] [int] NOT NULL,
	[id_area_solicitante] [int] NOT NULL,
	[id_tipo_accion] [int] NOT NULL,
	[id_modulo_aplicativo] [int] NOT NULL,
	[activo] [bit] NOT NULL,
	[fh_registro] [datetime] NOT NULL,
	[fh_actualizacion] [datetime] NOT NULL,
 CONSTRAINT [PK_Proyectos] PRIMARY KEY CLUSTERED 
(
	[id_requerimiento] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[rol_estatus_accion]    Script Date: 06/09/2024 06:16:14 p. m. ******/
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
/****** Object:  Table [dbo].[roles]    Script Date: 06/09/2024 06:16:14 p. m. ******/
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
/****** Object:  Table [dbo].[usuario_perfil]    Script Date: 06/09/2024 06:16:14 p. m. ******/
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
/****** Object:  Table [dbo].[usuario_role]    Script Date: 06/09/2024 06:16:14 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[usuario_role](
	[id_usuario] [int] NOT NULL,
	[id_rol] [int] NOT NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_usuariosRoles] PRIMARY KEY CLUSTERED 
(
	[id_usuario] ASC,
	[id_rol] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[usuarios]    Script Date: 06/09/2024 06:16:14 p. m. ******/
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
	[img] [varchar](max) NULL,
	[activo] [bit] NOT NULL,
	[conectado] [bit] NOT NULL,
 CONSTRAINT [PK_usuarios] PRIMARY KEY CLUSTERED 
(
	[id_usuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[cat_extencion_archivo] ON 

INSERT [dbo].[cat_extencion_archivo] ([id_extencion], [nombre], [descripcion], [tamaño_maximo], [activo]) VALUES (1, N'pdf', N'Documentos pdf', 10, 1)
INSERT [dbo].[cat_extencion_archivo] ([id_extencion], [nombre], [descripcion], [tamaño_maximo], [activo]) VALUES (2, N'png', N'Imagenes png', 10, 1)
INSERT [dbo].[cat_extencion_archivo] ([id_extencion], [nombre], [descripcion], [tamaño_maximo], [activo]) VALUES (3, N'jpg', N'Imagenes jpg', 10, 1)
SET IDENTITY_INSERT [dbo].[cat_extencion_archivo] OFF
GO
SET IDENTITY_INSERT [dbo].[cat_tipo_contrato] ON 

INSERT [dbo].[cat_tipo_contrato] ([id_tipo_contrato], [nombre], [descripcion], [activo]) VALUES (2, N'Continuidad 
Operativa', N'Contratos de continuidad operativa', 1)
INSERT [dbo].[cat_tipo_contrato] ([id_tipo_contrato], [nombre], [descripcion], [activo]) VALUES (3, N'Proyectos', N'Contratos por proyectos', 1)
SET IDENTITY_INSERT [dbo].[cat_tipo_contrato] OFF
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
INSERT [dbo].[usuario_role] ([id_usuario], [id_rol], [activo]) VALUES (5, 1, 1)
GO
SET IDENTITY_INSERT [dbo].[usuarios] ON 

INSERT [dbo].[usuarios] ([id_usuario], [nombre], [primer_apellido], [segundo_apellido], [usuario], [contra], [correo], [curp], [rfc], [img], [activo], [conectado]) VALUES (5, N'Admin', N'General', N'Sistema', N'admininfonavit.com', N'$2b$10$QCB6T1kzSLhNSp.Gp3n3.O4I8HagQ/euzSQ4ZgO4Z2iNj2mowWduq', N'admininfonavit.com', N'EISS910531DFSSSHG02', N'EISS910531DFS', NULL, 1, 0)
SET IDENTITY_INSERT [dbo].[usuarios] OFF
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
ALTER TABLE [dbo].[asistencias]  WITH CHECK ADD  CONSTRAINT [FK_asistencias_consultores_requerimiento] FOREIGN KEY([id_consultores_req])
REFERENCES [dbo].[consultores_requerimiento] ([id_consultores_req])
GO
ALTER TABLE [dbo].[asistencias] CHECK CONSTRAINT [FK_asistencias_consultores_requerimiento]
GO
ALTER TABLE [dbo].[bitacora]  WITH CHECK ADD  CONSTRAINT [FK_bitacora_usuarios] FOREIGN KEY([id_usuario])
REFERENCES [dbo].[usuarios] ([id_usuario])
GO
ALTER TABLE [dbo].[bitacora] CHECK CONSTRAINT [FK_bitacora_usuarios]
GO
ALTER TABLE [dbo].[bitacora_actividades]  WITH CHECK ADD  CONSTRAINT [FK_bitacora_actividades_consultores_requerimiento] FOREIGN KEY([id_consultores_req])
REFERENCES [dbo].[consultores_requerimiento] ([id_consultores_req])
GO
ALTER TABLE [dbo].[bitacora_actividades] CHECK CONSTRAINT [FK_bitacora_actividades_consultores_requerimiento]
GO
ALTER TABLE [dbo].[bitacora_actividades]  WITH CHECK ADD  CONSTRAINT [FK_bitacora_actividades_usuarios] FOREIGN KEY([id_usuario_rechazo])
REFERENCES [dbo].[usuarios] ([id_usuario])
GO
ALTER TABLE [dbo].[bitacora_actividades] CHECK CONSTRAINT [FK_bitacora_actividades_usuarios]
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
REFERENCES [dbo].[requerimientos] ([id_requerimiento])
GO
ALTER TABLE [dbo].[consultores_requerimiento] CHECK CONSTRAINT [FK_consultoresProyecto_proyectos]
GO
ALTER TABLE [dbo].[contratos]  WITH CHECK ADD  CONSTRAINT [FK_contratos_archivos] FOREIGN KEY([id_archivo])
REFERENCES [dbo].[archivos] ([id_archivo])
GO
ALTER TABLE [dbo].[contratos] CHECK CONSTRAINT [FK_contratos_archivos]
GO
ALTER TABLE [dbo].[contratos]  WITH CHECK ADD  CONSTRAINT [FK_contratos_cat_forma_pago] FOREIGN KEY([id_forma_pago])
REFERENCES [dbo].[cat_forma_pago] ([id_forma_pago])
GO
ALTER TABLE [dbo].[contratos] CHECK CONSTRAINT [FK_contratos_cat_forma_pago]
GO
ALTER TABLE [dbo].[contratos]  WITH CHECK ADD  CONSTRAINT [FK_contratos_catConsultoras] FOREIGN KEY([id_consultora])
REFERENCES [dbo].[cat_consultoras] ([id_consultora])
GO
ALTER TABLE [dbo].[contratos] CHECK CONSTRAINT [FK_contratos_catConsultoras]
GO
ALTER TABLE [dbo].[contratos]  WITH CHECK ADD  CONSTRAINT [FK_contratos_catTipoContrato] FOREIGN KEY([id_tipo_contrato])
REFERENCES [dbo].[cat_tipo_contrato] ([id_tipo_contrato])
GO
ALTER TABLE [dbo].[contratos] CHECK CONSTRAINT [FK_contratos_catTipoContrato]
GO
ALTER TABLE [dbo].[detalle_consultores]  WITH CHECK ADD  CONSTRAINT [FK_detalleConsultores_catPerfilConsultor] FOREIGN KEY([id_perfil])
REFERENCES [dbo].[cat_perfil_consultor] ([id_perfil])
GO
ALTER TABLE [dbo].[detalle_consultores] CHECK CONSTRAINT [FK_detalleConsultores_catPerfilConsultor]
GO
ALTER TABLE [dbo].[detalle_consultores]  WITH CHECK ADD  CONSTRAINT [FK_detalleConsultores_proyectos] FOREIGN KEY([id_requerimiento])
REFERENCES [dbo].[requerimientos] ([id_requerimiento])
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
ALTER TABLE [dbo].[permisos]  WITH CHECK ADD  CONSTRAINT [FK_permisos_roles] FOREIGN KEY([id_rol])
REFERENCES [dbo].[roles] ([id_rol])
GO
ALTER TABLE [dbo].[permisos] CHECK CONSTRAINT [FK_permisos_roles]
GO
ALTER TABLE [dbo].[requerimientos]  WITH CHECK ADD  CONSTRAINT [FK_Proyectos_catAplicativoModulo] FOREIGN KEY([id_modulo_aplicativo])
REFERENCES [dbo].[cat_aplicativo_modulo] ([id_modulo_aplicativo])
GO
ALTER TABLE [dbo].[requerimientos] CHECK CONSTRAINT [FK_Proyectos_catAplicativoModulo]
GO
ALTER TABLE [dbo].[requerimientos]  WITH CHECK ADD  CONSTRAINT [FK_Proyectos_catGerenciaSubdir] FOREIGN KEY([id_area_solicitante])
REFERENCES [dbo].[cat_gerencia_subdireccion] ([id_gerencia_subdir])
GO
ALTER TABLE [dbo].[requerimientos] CHECK CONSTRAINT [FK_Proyectos_catGerenciaSubdir]
GO
ALTER TABLE [dbo].[requerimientos]  WITH CHECK ADD  CONSTRAINT [FK_Proyectos_catTipoAccion] FOREIGN KEY([id_tipo_accion])
REFERENCES [dbo].[cat_tipo_accion] ([id_tipo_accion])
GO
ALTER TABLE [dbo].[requerimientos] CHECK CONSTRAINT [FK_Proyectos_catTipoAccion]
GO
ALTER TABLE [dbo].[requerimientos]  WITH CHECK ADD  CONSTRAINT [FK_Proyectos_contratos] FOREIGN KEY([id_contrato])
REFERENCES [dbo].[contratos] ([id_contrato])
GO
ALTER TABLE [dbo].[requerimientos] CHECK CONSTRAINT [FK_Proyectos_contratos]
GO
ALTER TABLE [dbo].[requerimientos]  WITH CHECK ADD  CONSTRAINT [FK_requerimientos_usuarios] FOREIGN KEY([id_lider_tecnico])
REFERENCES [dbo].[usuarios] ([id_usuario])
GO
ALTER TABLE [dbo].[requerimientos] CHECK CONSTRAINT [FK_requerimientos_usuarios]
GO
ALTER TABLE [dbo].[requerimientos]  WITH CHECK ADD  CONSTRAINT [FK_requerimientos_usuarios1] FOREIGN KEY([id_responsable])
REFERENCES [dbo].[usuarios] ([id_usuario])
GO
ALTER TABLE [dbo].[requerimientos] CHECK CONSTRAINT [FK_requerimientos_usuarios1]
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
/****** Object:  StoredProcedure [dbo].[sp_login]    Script Date: 06/09/2024 06:16:14 p. m. ******/
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
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Tamaño maximo del archivo en MB' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'cat_extencion_archivo', @level2type=N'COLUMN',@level2name=N'tamaño_maximo'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'1.  Rol infonavit, 2. Consultor externo' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'roles', @level2type=N'COLUMN',@level2name=N'grupo'
GO
