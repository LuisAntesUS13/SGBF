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
    @Body() catalogoRequest: CatalogoRequest,
  ): Promise<BaseResponse<CatalogoResponse[]>> {
    const datos = await this.catalogosService.getCatalogoAreas(catalogoRequest);

    const resultado = {
      message: 'Consulta catalogo correcto',
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }

  @Post('/getConsultoras')
  async getCatalogoConsultoras(
    @Body() catalogoRequest: CatalogoRequest,
  ): Promise<BaseResponse<CatalogoResponse[]>> {
    const datos =
      await this.catalogosService.getCatalogoConsultoras(catalogoRequest);

    const resultado = {
      message: 'Consulta catalogo correcto',
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }

  @Post('/getDocumentos')
  async getCatalogoDocumento(
    @Body() catalogoDocumentosRequest: CatalogoDocumentosRequest,
  ): Promise<BaseResponse<CatalogoDocumentoResponse[]>> {
    const datos = await this.catalogosService.getCatalogoDocumento(
      catalogoDocumentosRequest,
    );

    const resultado = {
      message: 'Consulta catalogo correcto',
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }

  @Post('/getTipoDocumentos')
  async getCatalogoEstatus(
    @Body() catalogoRequest: CatalogoRequest,
  ): Promise<BaseResponse<CatalogoResponse[]>> {
    const datos =
      await this.catalogosService.getCatalogoEstatus(catalogoRequest);

    const resultado = {
      message: 'Consulta catalogo correcto',
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }

  @Post('/getExtenciones')
  async getCatalogoExtencion(
    @Body() catalogoRequest: CatalogoRequest,
  ): Promise<BaseResponse<CatalogoExtArchivoResponse[]>> {
    const datos =
      await this.catalogosService.getCatalogoExtencion(catalogoRequest);

    const resultado = {
      message: 'Consulta catalogo correcto',
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }

  @Post('/getFormasPago')
  async getCatalogoFormaPago(
    @Body() catalogoRequest: CatalogoRequest,
  ): Promise<BaseResponse<CatalogoResponse[]>> {
    const datos =
      await this.catalogosService.getCatalogoFormaPago(catalogoRequest);

    const resultado = {
      message: 'Consulta catalogo correcto',
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }

  @Post('/getModuloAplicativo')
  async getCatalogoModuloAplicativo(
    @Body() catalogoRequest: CatalogoRequest,
  ): Promise<BaseResponse<CatalogoResponse[]>> {
    const datos =
      await this.catalogosService.getCatalogoModuloAplicativo(catalogoRequest);

    const resultado = {
      message: 'Consulta catalogo correcto',
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }

  @Post('/getPerfilesConsultores')
  async getCatalogoPerfilConsultor(
    @Body() catalogoRequest: CatalogoRequest,
  ): Promise<BaseResponse<CatalogoPerfilConsultorResponse[]>> {
    const datos =
      await this.catalogosService.getCatalogoPerfilConsultor(catalogoRequest);

    const resultado = {
      message: 'Consulta catalogo correcto',
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }

  @Post('/getProyectos')
  async getCatalogoProyecto(
    @Body() catalogoRequest: CatalogoRequest,
  ): Promise<BaseResponse<CatalogoResponse[]>> {
    const datos =
      await this.catalogosService.getCatalogoProyecto(catalogoRequest);

    const resultado = {
      message: 'Consulta catalogo correcto',
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }

  @Post('/getTipoAccion')
  async getCatalogoTipoAccion(
    @Body() catalogoRequest: CatalogoRequest,
  ): Promise<BaseResponse<CatalogoResponse[]>> {
    const datos =
      await this.catalogosService.getCatalogoTipoAccion(catalogoRequest);

    const resultado = {
      message: 'Consulta catalogo correcto',
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }

  @Post('/getTipoContrato')
  async getCatalogoTipoContrato(
    @Body() catalogoRequest: CatalogoRequest,
  ): Promise<BaseResponse<CatalogoResponse[]>> {
    const datos =
      await this.catalogosService.getCatalogoTipoContrato(catalogoRequest);

    const resultado = {
      message: 'Consulta catalogo correcto',
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }
}
