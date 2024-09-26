import { Injectable } from '@nestjs/common';
import { CatalogoRepository } from '../repository/catalogos.repository';
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

@Injectable()
export class CatalogosService {
  constructor(private readonly catalogoRepository: CatalogoRepository) {}

  public async getCatalogoAreas(
    catalogoRequest: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    const datosCatalogo =
      await this.catalogoRepository.getCatalogoAreas(catalogoRequest);

    return datosCatalogo;
  }

  public async getCatalogoConsultoras(
    catalogoRequest: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    const datosCatalogo =
      await this.catalogoRepository.getCatalogoConsultoras(catalogoRequest);

    return datosCatalogo;
  }

  public async getCatalogoDocumento(
    catalogoDocumentosRequest: CatalogoDocumentosRequest,
  ): Promise<CatalogoDocumentoResponse[]> {
    const datosCatalogo = await this.catalogoRepository.getCatalogoDocumento(
      catalogoDocumentosRequest,
    );

    return datosCatalogo;
  }

  public async getCatalogoEstatus(
    catalogoRequest: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    const datosCatalogo =
      await this.catalogoRepository.getCatalogoEstatus(catalogoRequest);

    return datosCatalogo;
  }

  public async getCatalogoExtencion(
    catalogoRequest: CatalogoRequest,
  ): Promise<CatalogoExtArchivoResponse[]> {
    const datosCatalogo =
      await this.catalogoRepository.getCatalogoExtencion(catalogoRequest);

    return datosCatalogo;
  }

  public async getCatalogoFormaPago(
    catalogoRequest: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    const datosCatalogo =
      await this.catalogoRepository.getCatalogoFormaPago(catalogoRequest);

    return datosCatalogo;
  }

  public async getCatalogoModuloAplicativo(
    catalogoRequest: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    const datosCatalogo =
      await this.catalogoRepository.getCatalogoModuloAplicativo(
        catalogoRequest,
      );

    return datosCatalogo;
  }

  public async getCatalogoPerfilConsultor(
    catalogoRequest: CatalogoRequest,
  ): Promise<CatalogoPerfilConsultorResponse[]> {
    const datosCatalogo =
      await this.catalogoRepository.getCatalogoPerfilConsultor(catalogoRequest);

    return datosCatalogo;
  }

  public async getCatalogoProyecto(
    catalogoRequest: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    const datosCatalogo =
      await this.catalogoRepository.getCatalogoProyecto(catalogoRequest);

    return datosCatalogo;
  }

  public async getCatalogoTipoAccion(
    catalogoRequest: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    const datosCatalogo =
      await this.catalogoRepository.getCatalogoTipoAccion(catalogoRequest);

    return datosCatalogo;
  }

  public async getCatalogoTipoContrato(
    catalogoRequest: CatalogoRequest,
  ): Promise<CatalogoResponse[]> {
    const datosCatalogo =
      await this.catalogoRepository.getCatalogoTipoContrato(catalogoRequest);

    return datosCatalogo;
  }
}
