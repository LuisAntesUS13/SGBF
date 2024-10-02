import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { BaseResponse } from '../model/response/baseResponse';
import { CatalogosService } from '../services/catalogos.service';
import {
  CatalogoDocumentosRequest,
  CatalogoRequest,
} from '../model/request/catalogosRequest';
import {
  CatalogoDocumentoResponse,
  CatalogoExtArchivoResponse,
  CatalogoPerfilConsultorResponse,
  CatalogoResponse,
} from '../model/response/catalogoResponse';

@Controller('/catalogo')
export class CatalogosController {
  constructor(private readonly catalogosService: CatalogosService) {}

  @Post('/getAreas')
  async getCatalogoAreas(
    @Body() bodyRequest: CatalogoRequest,
  ): Promise<BaseResponse<CatalogoResponse[]>> {
    const datos = await this.catalogosService.getCatalogoAreas(bodyRequest);

    const resultado = {
      success: true,
      message: 'Consulta catalogo correcto',
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }

  @Post('/getConsultoras')
  async getCatalogoConsultoras(
    @Body() bodyRequest: CatalogoRequest,
  ): Promise<BaseResponse<CatalogoResponse[]>> {
    const datos =
      await this.catalogosService.getCatalogoConsultoras(bodyRequest);

    const resultado = {
      success: true,
      message: 'Consulta catalogo correcto',
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }

  @Post('/getDocumentos')
  async getCatalogoDocumento(
    @Body() bodyRequest: CatalogoDocumentosRequest,
  ): Promise<BaseResponse<CatalogoDocumentoResponse[]>> {
    const datos = await this.catalogosService.getCatalogoDocumento(bodyRequest);

    const resultado = {
      success: true,
      message: 'Consulta catalogo correcto',
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }

  @Post('/getTipoDocumentos')
  async getCatalogoEstatus(
    @Body() bodyRequest: CatalogoRequest,
  ): Promise<BaseResponse<CatalogoResponse[]>> {
    const datos = await this.catalogosService.getCatalogoEstatus(bodyRequest);

    const resultado = {
      success: true,
      message: 'Consulta catalogo correcto',
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }

  @Post('/getExtenciones')
  async getCatalogoExtencion(
    @Body() bodyRequest: CatalogoRequest,
  ): Promise<BaseResponse<CatalogoExtArchivoResponse[]>> {
    const datos = await this.catalogosService.getCatalogoExtencion(bodyRequest);

    const resultado = {
      success: true,
      message: 'Consulta catalogo correcto',
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }

  @Post('/getFormasPago')
  async getCatalogoFormaPago(
    @Body() bodyRequest: CatalogoRequest,
  ): Promise<BaseResponse<CatalogoResponse[]>> {
    const datos = await this.catalogosService.getCatalogoFormaPago(bodyRequest);

    const resultado = {
      success: true,
      message: 'Consulta catalogo correcto',
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }

  @Post('/getModuloAplicativo')
  async getCatalogoModuloAplicativo(
    @Body() bodyRequest: CatalogoRequest,
  ): Promise<BaseResponse<CatalogoResponse[]>> {
    const datos =
      await this.catalogosService.getCatalogoModuloAplicativo(bodyRequest);

    const resultado = {
      success: true,
      message: 'Consulta catalogo correcto',
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }

  @Post('/getPerfilesConsultores')
  async getCatalogoPerfilConsultor(
    @Body() bodyRequest: CatalogoRequest,
  ): Promise<BaseResponse<CatalogoPerfilConsultorResponse[]>> {
    const datos =
      await this.catalogosService.getCatalogoPerfilConsultor(bodyRequest);

    const resultado = {
      success: true,
      message: 'Consulta catalogo correcto',
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }

  @Post('/getProyectos')
  async getCatalogoProyecto(
    @Body() bodyRequest: CatalogoRequest,
  ): Promise<BaseResponse<CatalogoResponse[]>> {
    const datos = await this.catalogosService.getCatalogoProyecto(bodyRequest);

    const resultado = {
      success: true,
      message: 'Consulta catalogo correcto',
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }

  @Post('/getTipoAccion')
  async getCatalogoTipoAccion(
    @Body() bodyRequest: CatalogoRequest,
  ): Promise<BaseResponse<CatalogoResponse[]>> {
    const datos =
      await this.catalogosService.getCatalogoTipoAccion(bodyRequest);

    const resultado = {
      success: true,
      message: 'Consulta catalogo correcto',
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }

  @Post('/getTipoContrato')
  async getCatalogoTipoContrato(
    @Body() bodyRequest: CatalogoRequest,
  ): Promise<BaseResponse<CatalogoResponse[]>> {
    const datos =
      await this.catalogosService.getCatalogoTipoContrato(bodyRequest);

    const resultado = {
      success: true,
      message: 'Consulta catalogo correcto',
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }
}
