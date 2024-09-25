USE [GestionBitacora]
GO

DECLARE	@return_value int

EXEC	@return_value = [dbo].[sp_registraActualizaContrato]
		@id_contrato = NULL,
		@no_contrato = N'1',
		@fh_inicio = '2024/05/05',
		@fh_termino = '2024/05/05',
		@monto_variable = 1.1,
		@monto_fijo = 0,
		@monto_total = 0,
		@id_forma_pago = 1,
		@id_tipo_contrato = 3,
		@id_consultora = 1,
		@id_area = 1,
		@id_gerente = 1,
		@id_archivo = NULL,
		@activo = 1,
		@id_usuario = NULL,
		@ip = '1207.25.258'

SELECT	'Return Value' = @return_value

GO
