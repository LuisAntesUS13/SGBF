USE [GestionBitacora]
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
        SET @filter += ' AND UPPER(LTRIM(RTRIM(c.no_contrato))) LIKE UPPER(LTRIM(RTRIM(''%' + CAST(@contrato AS varchar) + '%'')))';
    END

    IF (@consultora != '')
    BEGIN
        SET @filter += ' AND UPPER(LTRIM(RTRIM(cc.nombre))) LIKE UPPER(LTRIM(RTRIM(''%' + CAST(@consultora AS varchar) + '%'')))';
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
				FORMAT( c.fh_actualizacion, ''dd/MM/yyyy HH:mm:ss'')  as fh_actualizacion, ca.id_area, c.no_consultores,
				 c.id_gerente, ca.nombre AS area, u.id_usuario, u.nombre, u.primer_apellido, u.segundo_apellido,
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
			     pc.id_perfil_contrato, CONVERT(varchar(10), pc.fh_registro, 103) as fh_registro, pc.id_contrato,
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

CREATE PROCEDURE [dbo].[sp_regActCatAplicativoModulo]
  @id int = NULL, 
  @nombre varchar(100),
  @desc varchar(500),
  @activo bit,
  @id_usuario int,
  @ip varchar(20)
AS
BEGIN
	BEGIN TRY

        -- Inicia la transacción
        BEGIN TRANSACTION;
	    declare @sql NVARCHAR(MAX); 
		IF  @id is not null
			 BEGIN
				set @sql = ' UPDATE cat_aplicativo_modulo SET nombre = ''' + @nombre + ''', descripcion = ''' + @desc + ''', activo = ' + CONVERT(varchar(1), @activo) + '
							 WHERE id_modulo_aplicativo = ' + CONVERT(varchar(10), @id) + ';';
					PRINT @sql;
					EXEC (@sql);

					COMMIT TRANSACTION;

					EXEC sp_registraBitacora @id_usuario, 'cat_aplicativo_modulo', @ip, @id, 'UPDATE', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se actualizó correctamente' as mensaje ; 
			 END
        ELSE
			  BEGIN

					set @sql = ' INSERT INTO cat_aplicativo_modulo (nombre, descripcion, activo)
					             VALUES(''' + @nombre + ''', ''' + @desc + ''',' + CONVERT(varchar(1), @activo) + ')';
					PRINT @sql;
					EXEC (@sql);

					COMMIT TRANSACTION;

					SELECT  @id = MAX(id_modulo_aplicativo) FROM cat_aplicativo_modulo;

					EXEC sp_registraBitacora @id_usuario, 'cat_aplicativo_modulo', @ip, @id, 'INSERT', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se registró correctamente' as mensaje , @id as id ; 
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

CREATE PROCEDURE [dbo].[sp_regActCatAreas]
  @id int = NULL, 
  @nombre varchar(100),
  @desc varchar(500),
  @activo bit,
  @id_usuario int,
  @ip varchar(20)
AS
BEGIN
	BEGIN TRY
        -- Inicia la transacción
        BEGIN TRANSACTION;
	    declare @sql NVARCHAR(MAX); 
		IF  @id is not null
			 BEGIN
				set @sql = ' UPDATE cat_areas SET nombre = ''' + @nombre + ''', descripcion = ''' + @desc + ''', activo = ' + CONVERT(varchar(1), @activo) + '
							 WHERE id_area = ' + CONVERT(varchar(10), @id) + ';';
					PRINT @sql;
					EXEC (@sql);

					COMMIT TRANSACTION;

					EXEC sp_registraBitacora @id_usuario, 'cat_areas', @ip, @id, 'UPDATE', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se actualizó correctamente' as mensaje ; 
			 END
        ELSE
			  BEGIN

					set @sql = ' INSERT INTO cat_areas (nombre, descripcion, activo)
					             VALUES(''' + @nombre + ''', ''' + @desc + ''',' + CONVERT(varchar(1), @activo) + ')';
					PRINT @sql;
					EXEC (@sql);

					COMMIT TRANSACTION;

					SELECT  @id = MAX(id_area) FROM cat_areas;

					EXEC sp_registraBitacora @id_usuario, 'cat_areas', @ip, @id, 'INSERT', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se registró correctamente' as mensaje , @id as id ; 
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

CREATE PROCEDURE [dbo].[sp_regActCatCargo]
  @id int = NULL, 
  @nombre varchar(100),
  @desc varchar(500),
  @activo bit,
  @id_usuario int,
  @ip varchar(20)
AS
BEGIN
	BEGIN TRY
        -- Inicia la transacción
        BEGIN TRANSACTION;
	    declare @sql NVARCHAR(MAX); 
		IF  @id is not null
			 BEGIN
				set @sql = ' UPDATE cat_cargo SET nombre = ''' + @nombre + ''', descripcion = ''' + @desc + ''', activo = ' + CONVERT(varchar(1), @activo) + '
							 WHERE id_cargo = ' + CONVERT(varchar(10), @id) + ';';
					PRINT @sql;
					EXEC (@sql);

					COMMIT TRANSACTION;

					EXEC sp_registraBitacora @id_usuario, 'cat_cargo', @ip, @id, 'UPDATE', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se actualizó correctamente' as mensaje ; 
			 END
        ELSE
			  BEGIN

					set @sql = ' INSERT INTO cat_cargo (nombre, descripcion, activo)
					             VALUES(''' + @nombre + ''', ''' + @desc + ''',' + CONVERT(varchar(1), @activo) + ')';
					PRINT @sql;
					EXEC (@sql);

					COMMIT TRANSACTION;

					SELECT  @id = MAX(id_cargo) FROM cat_cargo;

					EXEC sp_registraBitacora @id_usuario, 'cat_cargo', @ip, @id, 'INSERT', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se registró correctamente' as mensaje , @id as id ; 
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

CREATE PROCEDURE [dbo].[sp_regActCatDocumentos]
  @id int = NULL, 
  @nombre varchar(100),
  @desc varchar(500),
  @activo bit,
  @grupo varchar(100),
  @id_usuario int,
  @ip varchar(20)
AS
BEGIN
	BEGIN TRY
        -- Inicia la transacción
        BEGIN TRANSACTION;
	    declare @sql NVARCHAR(MAX); 
		IF  @id is not null
			 BEGIN
				set @sql = ' UPDATE cat_documento SET nombre = ''' + @nombre + ''', descripcion = ''' + @desc + ''', activo = ' + CONVERT(varchar(1), @activo) + ', grupo = ''' + @grupo + '''
							 WHERE id_documento = ' + CONVERT(varchar(10), @id) + ';';
					PRINT @sql;
					EXEC (@sql);

					COMMIT TRANSACTION;

					EXEC sp_registraBitacora @id_usuario, 'cat_documento', @ip, @id, 'UPDATE', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se actualizó correctamente' as mensaje ; 
			 END
        ELSE
			  BEGIN

					set @sql = ' INSERT INTO cat_documento (nombre, descripcion, activo, grupo)
					             VALUES(''' + @nombre + ''', ''' + @desc + ''',' + CONVERT(varchar(1), @activo) + ', ''' + @grupo + ''')';
					PRINT @sql;
					EXEC (@sql);

					COMMIT TRANSACTION;

					SELECT  @id = MAX(id_documento) FROM cat_documento;

					EXEC sp_registraBitacora @id_usuario, 'cat_documento', @ip, @id, 'INSERT', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se registró correctamente' as mensaje , @id as id ; 
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

CREATE PROCEDURE [dbo].[sp_regActCatEstatus]
  @id int = NULL, 
  @nombre varchar(100),
  @desc varchar(500),
  @activo bit,
  @id_usuario int,
  @ip varchar(20)
AS
BEGIN
	BEGIN TRY
        -- Inicia la transacción
        BEGIN TRANSACTION;
	    declare @sql NVARCHAR(MAX); 
		IF  @id is not null
			 BEGIN
				set @sql = ' UPDATE cat_estatus SET nombre = ''' + @nombre + ''', descripcion = ''' + @desc + ''', activo = ' + CONVERT(varchar(1), @activo) + '
							 WHERE id_estatus = ' + CONVERT(varchar(10), @id) + ';';
					PRINT @sql;
					EXEC (@sql);

					COMMIT TRANSACTION;

					EXEC sp_registraBitacora @id_usuario, 'cat_estatus', @ip, @id, 'UPDATE', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se actualizó correctamente' as mensaje ; 
			 END
        ELSE
			  BEGIN

					set @sql = ' INSERT INTO cat_estatus (nombre, descripcion, activo)
					             VALUES(''' + @nombre + ''', ''' + @desc + ''',' + CONVERT(varchar(1), @activo) + ')';
					PRINT @sql;
					EXEC (@sql);

					COMMIT TRANSACTION;

					SELECT  @id = MAX(id_estatus) FROM cat_estatus;

					EXEC sp_registraBitacora @id_usuario, 'cat_estatus', @ip, @id, 'INSERT', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se registró correctamente' as mensaje , @id as id ; 
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

CREATE PROCEDURE [dbo].[sp_regActCatExtencionArchivo]
  @id int = NULL, 
  @nombre varchar(100),
  @desc varchar(500),
  @activo bit,
  @tamano_max int = 10, 
  @id_usuario int,
  @ip varchar(20)
AS
BEGIN
	BEGIN TRY
        -- Inicia la transacción
        BEGIN TRANSACTION;
	    declare @sql NVARCHAR(MAX); 
		IF  @id is not null
			 BEGIN
				set @sql = ' UPDATE cat_extencion_archivo SET nombre = ''' + @nombre + ''', descripcion = ''' + @desc + ''', activo = ' + CONVERT(varchar(1), @activo) + ', tamano_maximo = ' + CONVERT(varchar(50), @tamano_max) + '
							 WHERE id_extencion = ' + CONVERT(varchar(10), @id) + ';';
					PRINT @sql;
					EXEC (@sql);

					COMMIT TRANSACTION;

					EXEC sp_registraBitacora @id_usuario, 'cat_extencion_archivo', @ip, @id, 'UPDATE', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se actualizó correctamente' as mensaje ; 
			 END
        ELSE
			  BEGIN

					set @sql = ' INSERT INTO cat_extencion_archivo (nombre, descripcion, activo,tamano_maximo)
					             VALUES(''' + @nombre + ''', ''' + @desc + ''',' + CONVERT(varchar(1), @activo) + ',' + CONVERT(varchar(50), @tamano_max) + ')';
					PRINT @sql;
					EXEC (@sql);

					COMMIT TRANSACTION;

					SELECT  @id = MAX(id_extencion) FROM cat_extencion_archivo;

					EXEC sp_registraBitacora @id_usuario, 'cat_extencion_archivo', @ip, @id, 'INSERT', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se registró correctamente' as mensaje , @id as id ; 
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

CREATE PROCEDURE [dbo].[sp_regActCatFormaPago]
  @id int = NULL, 
  @nombre varchar(100),
  @desc varchar(500),
  @activo bit,
  @id_usuario int,
  @ip varchar(20)
AS
BEGIN
	BEGIN TRY
        -- Inicia la transacción
        BEGIN TRANSACTION;
	    declare @sql NVARCHAR(MAX); 
		IF  @id is not null
			 BEGIN
				set @sql = ' UPDATE cat_forma_pago SET nombre = ''' + @nombre + ''', descripcion = ''' + @desc + ''', activo = ' + CONVERT(varchar(1), @activo) + '
							 WHERE id_forma_pago = ' + CONVERT(varchar(10), @id) + ';';
					PRINT @sql;
					EXEC (@sql);

					COMMIT TRANSACTION;

					EXEC sp_registraBitacora @id_usuario, 'cat_forma_pago', @ip, @id, 'UPDATE', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se actualizó correctamente' as mensaje ; 
			 END
        ELSE
			  BEGIN

					set @sql = ' INSERT INTO cat_forma_pago (nombre, descripcion, activo)
					             VALUES(''' + @nombre + ''', ''' + @desc + ''',' + CONVERT(varchar(1), @activo) + ')';
					PRINT @sql;
					EXEC (@sql);

					COMMIT TRANSACTION;

					SELECT  @id = MAX(id_forma_pago) FROM cat_forma_pago;

					EXEC sp_registraBitacora @id_usuario, 'cat_forma_pago', @ip, @id, 'INSERT', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se registró correctamente' as mensaje , @id as id ; 
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

CREATE PROCEDURE [dbo].[sp_regActCatNivelPerfil]
  @id int = NULL, 
  @nombre varchar(100),
  @desc varchar(500),
  @activo bit,
  @id_usuario int,
  @ip varchar(20)
AS
BEGIN
	BEGIN TRY
        -- Inicia la transacción
        BEGIN TRANSACTION;
	    declare @sql NVARCHAR(MAX); 
		IF  @id is not null
			 BEGIN
				set @sql = ' UPDATE cat_nivel_perfil SET nombre = ''' + @nombre + ''', descripcion = ''' + @desc + ''', activo = ' + CONVERT(varchar(1), @activo) + '
							 WHERE id_nivel = ' + CONVERT(varchar(10), @id) + ';';
					PRINT @sql;
					EXEC (@sql);

					COMMIT TRANSACTION;

					EXEC sp_registraBitacora @id_usuario, 'cat_nivel_perfil', @ip, @id, 'UPDATE', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se actualizó correctamente' as mensaje ; 
			 END
        ELSE
			  BEGIN

					set @sql = ' INSERT INTO cat_nivel_perfil (nombre, descripcion, activo)
					             VALUES(''' + @nombre + ''', ''' + @desc + ''',' + CONVERT(varchar(1), @activo) + ')';
					PRINT @sql;
					EXEC (@sql);

					COMMIT TRANSACTION;

					SELECT  @id = MAX(id_nivel) FROM cat_nivel_perfil;

					EXEC sp_registraBitacora @id_usuario, 'cat_nivel_perfil', @ip, @id, 'INSERT', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se registró correctamente' as mensaje , @id as id ; 
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
/****** Object:  StoredProcedure [dbo].[sp_regActCatPerfiles]    Script Date: 17/10/2024 11:39:34 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_regActCatPerfiles]
  @id int = NULL, 
  @nombre varchar(100),
  @desc varchar(500),
  @activo bit,
  @monto float = 0.0, 
  @id_usuario int,
  @ip varchar(20)
AS
BEGIN
	BEGIN TRY
        -- Inicia la transacción
        BEGIN TRANSACTION;
	    declare @sql NVARCHAR(MAX); 
		IF  @id is not null
			 BEGIN
				set @sql = ' UPDATE cat_perfil_consultor SET nombre = ''' + @nombre + ''', descripcion = ''' + @desc + ''', activo = ' + CONVERT(varchar(1), @activo) + ', monto = ' + CONVERT(varchar(50), @monto) + '
							 WHERE id_perfil = ' + CONVERT(varchar(10), @id) + ';';
					PRINT @sql;
					EXEC (@sql);

					COMMIT TRANSACTION;

					EXEC sp_registraBitacora @id_usuario, 'cat_perfil_consultor', @ip, @id, 'UPDATE', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se actualizó correctamente' as mensaje ; 
			 END
        ELSE
			  BEGIN

					set @sql = ' INSERT INTO cat_perfil_consultor (nombre, descripcion, activo, monto)
					             VALUES(''' + @nombre + ''', ''' + @desc + ''',' + CONVERT(varchar(1), @activo) + ', ' + CONVERT(varchar(50), @monto) + ')';
					PRINT @sql;
					EXEC (@sql);

					COMMIT TRANSACTION;

					SELECT  @id = MAX(id_perfil) FROM cat_perfil_consultor;

					EXEC sp_registraBitacora @id_usuario, 'cat_perfil_consultor', @ip, @id, 'INSERT', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se registró correctamente' as mensaje , @id as id ; 
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

CREATE PROCEDURE [dbo].[sp_regActCatProyecto]
  @id int = NULL, 
  @nombre varchar(100),
  @desc varchar(500),
  @activo bit,
  @id_usuario int,
  @ip varchar(20)
AS
BEGIN
	BEGIN TRY
        -- Inicia la transacción
        BEGIN TRANSACTION;
	    declare @sql NVARCHAR(MAX); 
		IF  @id is not null
			 BEGIN
				set @sql = ' UPDATE cat_proyecto SET nombre = ''' + @nombre + ''', descripcion = ''' + @desc + ''', activo = ' + CONVERT(varchar(1), @activo) + '
							 WHERE id_proyecto = ' + CONVERT(varchar(10), @id) + ';';
					PRINT @sql;
					EXEC (@sql);

					COMMIT TRANSACTION;

					EXEC sp_registraBitacora @id_usuario, 'cat_proyecto', @ip, @id, 'UPDATE', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se actualizó correctamente' as mensaje ; 
			 END
        ELSE
			  BEGIN

					set @sql = ' INSERT INTO cat_proyecto (nombre, descripcion, activo)
					             VALUES(''' + @nombre + ''', ''' + @desc + ''',' + CONVERT(varchar(1), @activo) + ')';
					PRINT @sql;
					EXEC (@sql);

					COMMIT TRANSACTION;

					SELECT  @id = MAX(id_proyecto) FROM cat_proyecto;

					EXEC sp_registraBitacora @id_usuario, 'cat_proyecto', @ip, @id, 'INSERT', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se registró correctamente' as mensaje , @id as id ; 
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

CREATE PROCEDURE [dbo].[sp_regActCatTipoAccion]
  @id int = NULL, 
  @nombre varchar(100),
  @desc varchar(500),
  @activo bit,
  @id_usuario int,
  @ip varchar(20)
AS
BEGIN
	BEGIN TRY
        -- Inicia la transacción
        BEGIN TRANSACTION;
	    declare @sql NVARCHAR(MAX); 
		IF  @id is not null
			 BEGIN
				set @sql = ' UPDATE cat_tipo_accion SET nombre = ''' + @nombre + ''', descripcion = ''' + @desc + ''', activo = ' + CONVERT(varchar(1), @activo) + '
							 WHERE id_tipo_accion = ' + CONVERT(varchar(10), @id) + ';';
					PRINT @sql;
					EXEC (@sql);

					COMMIT TRANSACTION;

					EXEC sp_registraBitacora @id_usuario, 'cat_tipo_accion', @ip, @id, 'UPDATE', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se actualizó correctamente' as mensaje ; 
			 END
        ELSE
			  BEGIN

					set @sql = ' INSERT INTO cat_tipo_accion (nombre, descripcion, activo)
					             VALUES(''' + @nombre + ''', ''' + @desc + ''',' + CONVERT(varchar(1), @activo) + ')';
					PRINT @sql;
					EXEC (@sql);

					COMMIT TRANSACTION;

					SELECT  @id = MAX(id_tipo_accion) FROM cat_tipo_accion;

					EXEC sp_registraBitacora @id_usuario, 'cat_tipo_accion', @ip, @id, 'INSERT', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se registró correctamente' as mensaje , @id as id ; 
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

CREATE PROCEDURE [dbo].[sp_regActCatTipoContrato]
  @id int = NULL, 
  @nombre varchar(100),
  @desc varchar(500),
  @activo bit,
  @id_usuario int,
  @ip varchar(20)
AS
BEGIN
	BEGIN TRY
        -- Inicia la transacción
        BEGIN TRANSACTION;
	    declare @sql NVARCHAR(MAX); 
		IF  @id is not null
			 BEGIN
				set @sql = ' UPDATE cat_tipo_contrato SET nombre = ''' + @nombre + ''', descripcion = ''' + @desc + ''', activo = ' + CONVERT(varchar(1), @activo) + '
							 WHERE id_tipo_contrato = ' + CONVERT(varchar(10), @id) + ';';
					PRINT @sql;
					EXEC (@sql);

					COMMIT TRANSACTION;

					EXEC sp_registraBitacora @id_usuario, 'cat_tipo_contrato', @ip, @id, 'UPDATE', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se actualizó correctamente' as mensaje ; 
			 END
        ELSE
			  BEGIN

					set @sql = ' INSERT INTO cat_tipo_contrato (nombre, descripcion, activo)
					             VALUES(''' + @nombre + ''', ''' + @desc + ''',' + CONVERT(varchar(1), @activo) + ')';
					PRINT @sql;
					EXEC (@sql);

					COMMIT TRANSACTION;

					SELECT  @id = MAX(id_tipo_contrato) FROM cat_tipo_contrato;

					EXEC sp_registraBitacora @id_usuario, 'cat_tipo_contrato', @ip, @id, 'INSERT', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se registró correctamente' as mensaje , @id as id ; 
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
  @activo bit,
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
	    DECLARE @sql varchar(max);
		DECLARE @mensaje varchar(100);

        IF @ruta <> ''
        BEGIN
            IF @id_archivo IS NOT NULL
            BEGIN
                SET @sql = 'UPDATE archivos SET nombre = ''' + @nombre + ''', id_extencion = ''' + CONVERT(varchar(10), @id_extencion) + ''', ruta = ''' + @ruta + ''', fh_registro = CURRENT_TIMESTAMP 
                    WHERE id_contrato = ' + CONVERT(varchar(10), @id_archivo) + ';';

                PRINT @sql;
                EXEC (@sql);

                EXEC sp_registraBitacora @id_usuario, 'archivos', @ip, @id_archivo, 'UPDATE', @sql;
            END
            ELSE
            BEGIN
                SET @sql = 'INSERT INTO archivos (nombre, id_extencion, ruta, fh_registro) 
                    VALUES( ''' + @nombre + ''',''' + CONVERT(varchar(10), @id_extencion) + ''',''' + @ruta + ''', CURRENT_TIMESTAMP ); ';
                
                PRINT @sql;
                EXEC (@sql);

                SELECT @id_archivo = MAX(id_archivo) FROM archivos;

                EXEC sp_registraBitacora @id_usuario, 'archivos', @ip, @id_archivo, 'INSERT', @sql;
            END
        END

        -- Update existing contract or insert a new one
        IF @id_contrato IS NOT NULL
        BEGIN
            SET @sql = 'UPDATE contratos SET no_contrato = ''' + @no_contrato + ''', fh_inicio = ''' + CONVERT(varchar(10), @fh_inicio, 120) + ''', fh_fin = ''' + CONVERT(varchar(10), @fh_termino, 120) + ''',
                monto_variable = ' + CONVERT(varchar(50), @monto_variable) + ', monto_fijo = ' + CONVERT(varchar(50), @monto_fijo) + ', monto_total = ' + CONVERT(varchar(50), @monto_total) + ',
                id_forma_pago = ' + CONVERT(varchar(10), @id_forma_pago) + ', id_tipo_contrato = ' + CONVERT(varchar(10), @id_tipo_contrato) + ',
                id_consultora = ' + CONVERT(varchar(10), @id_consultora) + ', id_archivo = ' + ISNULL(CONVERT(varchar(10), @id_archivo), 'NULL') + ', activo = ' + CONVERT(varchar(1), @activo) + ',
                id_area = ' + ISNULL(CONVERT(varchar(10), @id_area), 'NULL') + ', id_gerente = ' + ISNULL(CONVERT(varchar(10), @id_gerente), 'NULL') + ', fh_actualizacion = CURRENT_TIMESTAMP
                WHERE id_contrato = ' + CONVERT(varchar(10), @id_contrato) + ';';

			SET	@mensaje = 'actualizo';
            PRINT @sql;
            EXEC (@sql);

            EXEC sp_registraBitacora @id_usuario, 'contratos', @ip, @id_contrato, 'UPDATE', @sql;
        END
        ELSE
        BEGIN
            SET @sql = 'INSERT INTO contratos (no_contrato, fh_inicio, fh_fin, monto_variable, monto_fijo, monto_total, id_forma_pago, id_tipo_contrato, 
                id_consultora, id_archivo, activo, fh_registro, fh_actualizacion, id_area, id_gerente)
                VALUES (''' + @no_contrato + ''', ''' + CONVERT(varchar(10), @fh_inicio, 120) + ''', ''' + CONVERT(varchar(10), @fh_termino, 120) + ''',
                ' + CONVERT(varchar(50), @monto_variable) + ', ' + CONVERT(varchar(50), @monto_fijo) + ', ' + CONVERT(varchar(50), @monto_total) + ',
                ' + CONVERT(varchar(10), @id_forma_pago) + ', ' + CONVERT(varchar(10), @id_tipo_contrato) + ', ' + CONVERT(varchar(10), @id_consultora) + ',
                ' + ISNULL(CONVERT(varchar(10), @id_archivo), 'NULL') + ', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP,
                ' + ISNULL(CONVERT(varchar(10), @id_area), 'NULL') + ', ' + ISNULL(CONVERT(varchar(10), @id_gerente), 'NULL') + ');';

			SET	@mensaje = 'registro';
            PRINT @sql;
            EXEC (@sql);

            SELECT @id_contrato = MAX(id_contrato) FROM contratos;
            EXEC sp_registraBitacora @id_usuario, 'contratos', @ip, @id_contrato, 'INSERT', @sql;
        END

		
	  	COMMIT TRANSACTION; 

		SELECT TOP 1 cast(1 as bit) as correcto, 'Se ' + @mensaje + ' correctamente el contrato' as mensaje,
		@id_contrato as id_contrato, @Id_archivo as Id_archivo ; 

	END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0
            ROLLBACK TRANSACTION;
		  SELECT TOP 1 cast(0 as bit) as correcto, ERROR_MESSAGE() as mensaje;
    END CATCH
END
GO

CREATE PROCEDURE [dbo].[sp_registraActualizaPerfil]
  @id_perfil int = NULL, 
  @nombre varchar(100),
  @descripcion varchar(1000),
  @monto varchar(16),
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

				set @sql = 'UPDATE cat_perfil_consultor SET nombre = ''' + @nombre + ''', descripcion = ''' + @descripcion + ''', monto = ' + CONVERT(varchar(50), @monto) + ',
				    activo = '+ CONVERT(CHAR(1), @activo) + ' WHERE id_perfil = ' + CONVERT(varchar(10), @id_perfil) + ';';

					PRINT @sql;
					EXEC (@sql);
					COMMIT TRANSACTION;

					EXEC sp_registraBitacora @id_usuario, 'cat_perfil_consultor', @ip, @id_perfil, 'UPDATE', @sql;

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se actualizó correctamente el perfil' as mensaje, @id_perfil as id ; 
			 END
        ELSE
			  BEGIN
					set @sql =  'INSERT INTO cat_perfil_consultor ( nombre, descripcion, monto, activo)
					VALUES(''' + @nombre + ''',  ''' + @descripcion + ''' , ' +  CONVERT(varchar(16), @monto) + ',  '+ CONVERT(CHAR(1), @activo) + ')';


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

					SELECT TOP 1 cast(1 as bit) as correcto, 'Se actualizó correctamente el perfil del contrato' as mensaje, @id_perfil_contrato as id_perfil_contrato ; 
			 END
        ELSE
			  BEGIN
					set @sql =  'INSERT INTO perfiles_contrato ( id_contrato, fh_registro, id_perfil, cantidad)
					VALUES( ''' + CONVERT(varchar(10),  @id_contrato) + ''', CURRENT_TIMESTAMP ,  ' + CONVERT(varchar(10), @id_perfil) + ' ,  ' + CONVERT(varchar(10), @cantidad) + ')';

					PRINT @sql;
					EXEC (@sql);
					COMMIT TRANSACTION;

					
					SELECT  @id_perfil_contrato = MAX(id_perfil_contrato) FROM perfiles_contrato;

					EXEC sp_registraBitacora @id_usuario, 'perfiles_contrato', @ip, @id_perfil_contrato, 'INSERT', @sql;
					SELECT TOP 1 cast(1 as bit) as correcto, 'Se registró correctamente el perfil del contrato' as mensaje , @id_perfil_contrato as id_perfil_contrato ; 
			  END

	END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0
            ROLLBACK TRANSACTION;
          PRINT 'Error capturado: ' + ERROR_MESSAGE();
		  SELECT TOP 1 cast(0 as bit) as correcto, ERROR_MESSAGE() as mensaje, null as id_perfil_contrato;
    END CATCH
END
GO
/****** Object:  StoredProcedure [dbo].[sp_registraBitacora]    Script Date: 17/10/2024 11:39:34 a. m. ******/
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
		INSERT INTO bitacora
			(id_usuario, tabla, ip, identificador, accion, descripcion, fh_registro, fh_actualizacion)
			VALUES( @id_usuario, @tabla, @ip, @identificador, @accion, @descripcion, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
END
GO
