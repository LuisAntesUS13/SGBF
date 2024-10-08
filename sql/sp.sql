USE [GestionBitacora]
GO
/****** Object:  StoredProcedure [dbo].[sp_consultaContratos]    Script Date: 25/09/2024 11:42:15 a. m. ******/
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
/****** Object:  StoredProcedure [dbo].[sp_consultaPerfilesContrato]    Script Date: 25/09/2024 11:42:15 a. m. ******/
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
/****** Object:  StoredProcedure [dbo].[sp_login]    Script Date: 25/09/2024 11:42:15 a. m. ******/
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
/****** Object:  StoredProcedure [dbo].[sp_registraActualizaContrato]    Script Date: 25/09/2024 11:42:15 a. m. ******/
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
						VALUES (' + @no_contrato + ', ''' + CONVERT(varchar(10), @fh_inicio, 120) + ''', ''' + CONVERT(varchar(10), @fh_termino, 120) + ''',
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
/****** Object:  StoredProcedure [dbo].[sp_registraActualizaPerfil]    Script Date: 25/09/2024 11:42:15 a. m. ******/
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
/****** Object:  StoredProcedure [dbo].[sp_registraActualizaPerfilesContrato]    Script Date: 25/09/2024 11:42:15 a. m. ******/
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
		declare @fh_baja varchar(50) = ''
		IF  @activo = 0
		     BEGIN
			    set @fh_baja = ', fh_baja = CURRENT_TIMESTAMP '
			 END
	   ELSE
			BEGIN
			    set @fh_baja = ', fh_baja = NULL '
			 END

	    declare @sql varchar(max)
		IF  @id_perfil_contrato is not null
			 BEGIN

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
/****** Object:  StoredProcedure [dbo].[sp_registraBitacora]    Script Date: 25/09/2024 11:42:15 a. m. ******/
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
