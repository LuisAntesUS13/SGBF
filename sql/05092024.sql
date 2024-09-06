USE [GestionBitacora]
GO
EXEC sys.sp_dropextendedproperty @name=N'MS_Description' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'cat_extencion_archivo', @level2type=N'COLUMN',@level2name=N'tamaño_maximo'
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
/****** Object:  Table [dbo].[usuarios]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usuarios]') AND type in (N'U'))
DROP TABLE [dbo].[usuarios]
GO
/****** Object:  Table [dbo].[usuario_role]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usuario_role]') AND type in (N'U'))
DROP TABLE [dbo].[usuario_role]
GO
/****** Object:  Table [dbo].[usuario_perfil]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usuario_perfil]') AND type in (N'U'))
DROP TABLE [dbo].[usuario_perfil]
GO
/****** Object:  Table [dbo].[roles]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[roles]') AND type in (N'U'))
DROP TABLE [dbo].[roles]
GO
/****** Object:  Table [dbo].[rol_estatus_accion]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[rol_estatus_accion]') AND type in (N'U'))
DROP TABLE [dbo].[rol_estatus_accion]
GO
/****** Object:  Table [dbo].[requerimientos]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[requerimientos]') AND type in (N'U'))
DROP TABLE [dbo].[requerimientos]
GO
/****** Object:  Table [dbo].[permisos]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[permisos]') AND type in (N'U'))
DROP TABLE [dbo].[permisos]
GO
/****** Object:  Table [dbo].[expediente]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[expediente]') AND type in (N'U'))
DROP TABLE [dbo].[expediente]
GO
/****** Object:  Table [dbo].[detalle_consultores]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[detalle_consultores]') AND type in (N'U'))
DROP TABLE [dbo].[detalle_consultores]
GO
/****** Object:  Table [dbo].[contratos]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[contratos]') AND type in (N'U'))
DROP TABLE [dbo].[contratos]
GO
/****** Object:  Table [dbo].[consultores_requerimiento]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[consultores_requerimiento]') AND type in (N'U'))
DROP TABLE [dbo].[consultores_requerimiento]
GO
/****** Object:  Table [dbo].[configuracion]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[configuracion]') AND type in (N'U'))
DROP TABLE [dbo].[configuracion]
GO
/****** Object:  Table [dbo].[cat_tipo_pago]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_tipo_pago]') AND type in (N'U'))
DROP TABLE [dbo].[cat_tipo_pago]
GO
/****** Object:  Table [dbo].[cat_tipo_contrato]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_tipo_contrato]') AND type in (N'U'))
DROP TABLE [dbo].[cat_tipo_contrato]
GO
/****** Object:  Table [dbo].[cat_tipo_accion]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_tipo_accion]') AND type in (N'U'))
DROP TABLE [dbo].[cat_tipo_accion]
GO
/****** Object:  Table [dbo].[cat_perfil_consultor]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_perfil_consultor]') AND type in (N'U'))
DROP TABLE [dbo].[cat_perfil_consultor]
GO
/****** Object:  Table [dbo].[cat_gerencia_subdireccion]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_gerencia_subdireccion]') AND type in (N'U'))
DROP TABLE [dbo].[cat_gerencia_subdireccion]
GO
/****** Object:  Table [dbo].[cat_forma_pago]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_forma_pago]') AND type in (N'U'))
DROP TABLE [dbo].[cat_forma_pago]
GO
/****** Object:  Table [dbo].[cat_extencion_archivo]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_extencion_archivo]') AND type in (N'U'))
DROP TABLE [dbo].[cat_extencion_archivo]
GO
/****** Object:  Table [dbo].[cat_estatus]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_estatus]') AND type in (N'U'))
DROP TABLE [dbo].[cat_estatus]
GO
/****** Object:  Table [dbo].[cat_documento]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_documento]') AND type in (N'U'))
DROP TABLE [dbo].[cat_documento]
GO
/****** Object:  Table [dbo].[cat_consultoras]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_consultoras]') AND type in (N'U'))
DROP TABLE [dbo].[cat_consultoras]
GO
/****** Object:  Table [dbo].[cat_aplicativo_modulo]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cat_aplicativo_modulo]') AND type in (N'U'))
DROP TABLE [dbo].[cat_aplicativo_modulo]
GO
/****** Object:  Table [dbo].[bitacora_actividades]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[bitacora_actividades]') AND type in (N'U'))
DROP TABLE [dbo].[bitacora_actividades]
GO
/****** Object:  Table [dbo].[bitacora]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[bitacora]') AND type in (N'U'))
DROP TABLE [dbo].[bitacora]
GO
/****** Object:  Table [dbo].[asistencias]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[asistencias]') AND type in (N'U'))
DROP TABLE [dbo].[asistencias]
GO
/****** Object:  Table [dbo].[archivos_bitacora_actividades]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[archivos_bitacora_actividades]') AND type in (N'U'))
DROP TABLE [dbo].[archivos_bitacora_actividades]
GO
/****** Object:  Table [dbo].[archivos]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[archivos]') AND type in (N'U'))
DROP TABLE [dbo].[archivos]
GO
/****** Object:  Table [dbo].[acciones_flujo]    Script Date: 05/09/2024 04:38:42 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[acciones_flujo]') AND type in (N'U'))
DROP TABLE [dbo].[acciones_flujo]
GO
USE [master]
GO
/****** Object:  Database [GestionBitacora]    Script Date: 05/09/2024 04:38:42 p. m. ******/
DROP DATABASE [GestionBitacora]
GO
/****** Object:  Database [GestionBitacora]    Script Date: 05/09/2024 04:38:42 p. m. ******/
CREATE DATABASE [GestionBitacora]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'GestionBitacora', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\GestionBitacora.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'GestionBitacora_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\GestionBitacora_log.ldf' , SIZE = 73728KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [GestionBitacora] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [GestionBitacora].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [GestionBitacora] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [GestionBitacora] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [GestionBitacora] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [GestionBitacora] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [GestionBitacora] SET ARITHABORT OFF 
GO
ALTER DATABASE [GestionBitacora] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [GestionBitacora] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [GestionBitacora] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [GestionBitacora] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [GestionBitacora] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [GestionBitacora] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [GestionBitacora] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [GestionBitacora] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [GestionBitacora] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [GestionBitacora] SET  DISABLE_BROKER 
GO
ALTER DATABASE [GestionBitacora] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [GestionBitacora] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [GestionBitacora] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [GestionBitacora] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [GestionBitacora] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [GestionBitacora] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [GestionBitacora] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [GestionBitacora] SET RECOVERY FULL 
GO
ALTER DATABASE [GestionBitacora] SET  MULTI_USER 
GO
ALTER DATABASE [GestionBitacora] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [GestionBitacora] SET DB_CHAINING OFF 
GO
ALTER DATABASE [GestionBitacora] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [GestionBitacora] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [GestionBitacora] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [GestionBitacora] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'GestionBitacora', N'ON'
GO
ALTER DATABASE [GestionBitacora] SET QUERY_STORE = OFF
GO
USE [GestionBitacora]
GO
/****** Object:  Table [dbo].[acciones_flujo]    Script Date: 05/09/2024 04:38:42 p. m. ******/
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
/****** Object:  Table [dbo].[archivos]    Script Date: 05/09/2024 04:38:42 p. m. ******/
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
/****** Object:  Table [dbo].[archivos_bitacora_actividades]    Script Date: 05/09/2024 04:38:42 p. m. ******/
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
/****** Object:  Table [dbo].[asistencias]    Script Date: 05/09/2024 04:38:42 p. m. ******/
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
/****** Object:  Table [dbo].[bitacora]    Script Date: 05/09/2024 04:38:42 p. m. ******/
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
/****** Object:  Table [dbo].[bitacora_actividades]    Script Date: 05/09/2024 04:38:42 p. m. ******/
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
/****** Object:  Table [dbo].[cat_aplicativo_modulo]    Script Date: 05/09/2024 04:38:42 p. m. ******/
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
/****** Object:  Table [dbo].[cat_consultoras]    Script Date: 05/09/2024 04:38:42 p. m. ******/
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
/****** Object:  Table [dbo].[cat_documento]    Script Date: 05/09/2024 04:38:42 p. m. ******/
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
/****** Object:  Table [dbo].[cat_estatus]    Script Date: 05/09/2024 04:38:42 p. m. ******/
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
/****** Object:  Table [dbo].[cat_extencion_archivo]    Script Date: 05/09/2024 04:38:42 p. m. ******/
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
/****** Object:  Table [dbo].[cat_forma_pago]    Script Date: 05/09/2024 04:38:42 p. m. ******/
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
/****** Object:  Table [dbo].[cat_gerencia_subdireccion]    Script Date: 05/09/2024 04:38:42 p. m. ******/
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
/****** Object:  Table [dbo].[cat_perfil_consultor]    Script Date: 05/09/2024 04:38:42 p. m. ******/
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
/****** Object:  Table [dbo].[cat_tipo_accion]    Script Date: 05/09/2024 04:38:42 p. m. ******/
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
/****** Object:  Table [dbo].[cat_tipo_contrato]    Script Date: 05/09/2024 04:38:42 p. m. ******/
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
/****** Object:  Table [dbo].[cat_tipo_pago]    Script Date: 05/09/2024 04:38:42 p. m. ******/
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
/****** Object:  Table [dbo].[configuracion]    Script Date: 05/09/2024 04:38:42 p. m. ******/
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
/****** Object:  Table [dbo].[consultores_requerimiento]    Script Date: 05/09/2024 04:38:42 p. m. ******/
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
/****** Object:  Table [dbo].[contratos]    Script Date: 05/09/2024 04:38:42 p. m. ******/
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
/****** Object:  Table [dbo].[detalle_consultores]    Script Date: 05/09/2024 04:38:42 p. m. ******/
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
/****** Object:  Table [dbo].[expediente]    Script Date: 05/09/2024 04:38:42 p. m. ******/
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
/****** Object:  Table [dbo].[permisos]    Script Date: 05/09/2024 04:38:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[permisos](
	[id_permiso] [int] IDENTITY(1,1) NOT NULL,
	[id_rol] [int] NOT NULL,
	[menu] [varchar](100) NOT NULL,
	[descripcion] [varchar](500) NULL,
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
/****** Object:  Table [dbo].[requerimientos]    Script Date: 05/09/2024 04:38:42 p. m. ******/
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
/****** Object:  Table [dbo].[rol_estatus_accion]    Script Date: 05/09/2024 04:38:42 p. m. ******/
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
/****** Object:  Table [dbo].[roles]    Script Date: 05/09/2024 04:38:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[roles](
	[id_rol] [int] IDENTITY(1,1) NOT NULL,
	[rol] [varchar](50) NOT NULL,
	[descipcion] [varchar](500) NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_roles] PRIMARY KEY CLUSTERED 
(
	[id_rol] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[usuario_perfil]    Script Date: 05/09/2024 04:38:42 p. m. ******/
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
/****** Object:  Table [dbo].[usuario_role]    Script Date: 05/09/2024 04:38:42 p. m. ******/
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
/****** Object:  Table [dbo].[usuarios]    Script Date: 05/09/2024 04:38:42 p. m. ******/
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
SET IDENTITY_INSERT [dbo].[roles] ON 

INSERT [dbo].[roles] ([id_rol], [rol], [descipcion], [activo]) VALUES (1, N'Administrador', N'Administrador general', 1)
INSERT [dbo].[roles] ([id_rol], [rol], [descipcion], [activo]) VALUES (2, N'Gestor contrato', N'Gestor de los contratos', 1)
INSERT [dbo].[roles] ([id_rol], [rol], [descipcion], [activo]) VALUES (3, N'Responsable ejecucion', N'Responsable de  la ejecucion', 1)
INSERT [dbo].[roles] ([id_rol], [rol], [descipcion], [activo]) VALUES (4, N'Lider tecnico', N'lider tecnico', 1)
INSERT [dbo].[roles] ([id_rol], [rol], [descipcion], [activo]) VALUES (5, N'Responsable', N'Responsable  de consultores', 1)
INSERT [dbo].[roles] ([id_rol], [rol], [descipcion], [activo]) VALUES (6, N'Visualizador de  reportes', N'Ve  los reportes', 1)
INSERT [dbo].[roles] ([id_rol], [rol], [descipcion], [activo]) VALUES (7, N'Segurudad', N'Seguridad admin', 1)
SET IDENTITY_INSERT [dbo].[roles] OFF
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
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Tamaño maximo del archivo en MB' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'cat_extencion_archivo', @level2type=N'COLUMN',@level2name=N'tamaño_maximo'
GO
USE [master]
GO
ALTER DATABASE [GestionBitacora] SET  READ_WRITE 
GO
