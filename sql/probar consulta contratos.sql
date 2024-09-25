USE [GestionBitacora]
GO

DECLARE	@return_value int

EXEC	@return_value = [dbo].[sp_consultaContratos]
		@contrato = '',
		@consultora = 'd',
		@pagina_actual = 1,
		@registros_por_pagina = 10

SELECT	'Return Value' = @return_value

GO
