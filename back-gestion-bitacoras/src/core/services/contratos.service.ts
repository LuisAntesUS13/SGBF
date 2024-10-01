import { Injectable } from '@nestjs/common';
import {
  ConsultaContratoRequest,
  RegistraActualizaContratoRequest,
} from '../model/request/contratoRequest';
import { ContratosRepository } from '../repository/contratos.repository';
import {
  ActualizaRegistraResponse,
  ContratoResponse,
} from '../model/response/contratoResponse';
import { ArchivoRepository } from '../repository/archivo.repository';
import { CustomException } from '../util/errores';
import { folderArchivos, tipoArchivos } from '../util/global-enum';
import { ArchivoRequest } from '../model/request/archivoRequest';
import { GeneralRepository } from '../repository/general.repository';

@Injectable()
export class ContratosService {
  constructor(
    private readonly contratosRepository: ContratosRepository,
    private readonly archivoRepository: ArchivoRepository,
    private readonly generalRepository: GeneralRepository,
  ) {}

  public async getContratos(
    request: ConsultaContratoRequest,
  ): Promise<ContratoResponse[]> {
    const datosLogin = await this.contratosRepository.getContratos(request);

    return datosLogin;
  }

  public async addUpdateContratos(
    request: RegistraActualizaContratoRequest,
  ): Promise<ActualizaRegistraResponse> {
    request.id_usuario = 1;
    const valido = await this.validaAddUpdateContrato(request);

    if (valido != '') {
      throw new CustomException(valido, '2fb67f0a-4af5-42e5-a8a3-a814ebe6c111');
    }

    try {
      const nombreArchivo = 'contrato_' + request.no_contrato;

      const ruta = folderArchivos.ruta + 'contratos/';

      const rutaCompleta = await this.generalRepository.guardaArchivo(
        request.archivo,
        ruta,
        nombreArchivo,
      );

      const archivo: ArchivoRequest = {
        id_archivo: request.id_archivo,
        nombre: nombreArchivo,
        id_extencion: tipoArchivos.pdf,
        ruta: rutaCompleta,
        id_usuario: request.id_usuario,
        ip: request.ip,
      };

      const datosArchivos =
        await this.archivoRepository.addUpdateArchivo(archivo);

      request.id_archivo = datosArchivos.id_archivo;
    } catch (error) {
      throw new CustomException(error, '2fb67f0a-4af5-42e5-a8a3-a814ebe6c111');
    }

    const datosLogin =
      await this.contratosRepository.addUpdateContratos(request);

    return datosLogin;
  }

  public async validaAddUpdateContrato(
    request: RegistraActualizaContratoRequest,
  ): Promise<string> {
    let respuesta = '';

    if (request.no_contrato == '' || request.no_contrato == null) {
      respuesta = respuesta + ' Numero de ontrato';
    }

    if (request.fh_inicio == '' || request.fh_inicio == null) {
      respuesta = respuesta + ' Fecha de incio';
    }

    if (request.fh_termino == '' || request.fh_termino == null) {
      respuesta = respuesta + ' Fecha de incio';
    }

    if (request.monto_variable == null) {
      respuesta = respuesta + ' Monto variable';
    }

    if (request.monto_fijo == null) {
      respuesta = respuesta + ' Monto fijo';
    }

    if (request.monto_total == null) {
      respuesta = respuesta + ' Monto total';
    }

    if (request.id_forma_pago == null) {
      respuesta = respuesta + ' Forma de pago';
    }

    if (request.id_tipo_contrato == null) {
      respuesta = respuesta + ' Tipo de cpntrato';
    }

    if (request.id_consultora == null) {
      respuesta = respuesta + ' Consultora';
    }

    if (respuesta != '') {
      respuesta = 'Los siguentes campos son obligatorios: ' + respuesta;
    }
    return respuesta;
  }
}
