import { Controller, Get, HttpStatus } from '@nestjs/common';

import { ApiResponse } from '../model/interface/respuesta.interface';
import { AccionService } from '../services/prueba.service';

@Controller('/v1')
export class ProcesoController {
  constructor(private readonly accionService: AccionService) {}

  @Get('/ExecuteStoredProcedure')
  async ExecuteStoredProcedure(): Promise<ApiResponse> {
    const datos = await this.accionService.ExecuteStoredProcedure();

    const resultado = {
      message: 'Todo correcto',
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };
    return resultado;
  }
}
