import { Injectable } from '@nestjs/common';
import { CatalogoRepository } from '../repository/catalogos.repository';
import {
  CatalogoDocumentosRequest,
  CatalogoPeriodoRequest,
  CatalogoRequest,
} from '../model/request/catalogosRequest';
import {
  CatalogoDocumentoResponse,
  CatalogoExtArchivoResponse,
  CatalogoPerfilConsultorResponse,
  CatalogoPeriodosResponse,
  CatalogoResponse,
} from '../model/response/catalogoResponse';

@Injectable()
export class CatalogosService {
  constructor(private readonly catalogoRepository: CatalogoRepository) {}

  public async getCatalogoAreas(
    request: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    const datosCatalogo =
      await this.catalogoRepository.getCatalogoAreas(request);

    return datosCatalogo;
  }

  public async getCatalogoConsultoras(
    request: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    const datosCatalogo =
      await this.catalogoRepository.getCatalogoConsultoras(request);

    return datosCatalogo;
  }

  public async getCatalogoDocumento(
    request: CatalogoDocumentosRequest,
  ): Promise<CatalogoDocumentoResponse[]> {
    const datosCatalogo =
      await this.catalogoRepository.getCatalogoDocumento(request);

    return datosCatalogo;
  }

  public async getCatalogoEstatus(
    request: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    const datosCatalogo =
      await this.catalogoRepository.getCatalogoEstatus(request);

    return datosCatalogo;
  }

  public async getCatalogoExtencion(
    request: CatalogoRequest,
  ): Promise<CatalogoExtArchivoResponse[]> {
    const datosCatalogo =
      await this.catalogoRepository.getCatalogoExtencion(request);

    return datosCatalogo;
  }

  public async getCatalogoFormaPago(
    request: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    const datosCatalogo =
      await this.catalogoRepository.getCatalogoFormaPago(request);

    return datosCatalogo;
  }

  public async getCatalogoModuloAplicativo(
    request: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    const datosCatalogo =
      await this.catalogoRepository.getCatalogoModuloAplicativo(request);

    return datosCatalogo;
  }

  public async getCatalogoPerfilConsultor(
    request: CatalogoRequest,
  ): Promise<CatalogoPerfilConsultorResponse[]> {
    const datosCatalogo =
      await this.catalogoRepository.getCatalogoPerfilConsultor(request);

    return datosCatalogo;
  }

  public async getCatalogoProyecto(
    request: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    const datosCatalogo =
      await this.catalogoRepository.getCatalogoProyecto(request);

    return datosCatalogo;
  }

  public async getCatalogoTipoAccion(
    request: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    const datosCatalogo =
      await this.catalogoRepository.getCatalogoTipoAccion(request);

    return datosCatalogo;
  }

  public async getCatalogoTipoContrato(
    request: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    const datosCatalogo =
      await this.catalogoRepository.getCatalogoTipoContrato(request);

    return datosCatalogo;
  }

  public async getCatalogoPeriodos(
    request: CatalogoPeriodoRequest,
  ): Promise<CatalogoPeriodosResponse[]> {
    const datosCatalogo =
      await this.catalogoRepository.getCatalogoPeriodos(request);

    return datosCatalogo;
  }
}
