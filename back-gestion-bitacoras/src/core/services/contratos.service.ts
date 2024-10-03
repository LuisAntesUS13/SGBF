import { Injectable } from '@nestjs/common';
import {
  ConsultaContratoRequest,
  ConsultaPErfilesContratoRequest,
  RegistraActualizaContratoRequest,
} from '../model/request/contratoRequest';
import { ContratosRepository } from '../repository/contratos.repository';
import {
  ActualizaRegistraBaseResponse,
  ActualizaRegistraPerfilResponse,
  ContratoResponse,
  PerfilContratoResponse,
} from '../model/response/contratoResponse';
import { ArchivoRepository } from '../repository/archivo.repository';
import { CustomException } from '../util/errores';
import {
  folderArchivos,
  tipoArchivos,
  usuarioPorDefecto,
} from '../util/global-enum';
import { GeneralRepository } from '../repository/general.repository';
import {
  CatalogoAddUpdatePerfilContratoRequest,
  CatalogoAddUpdatePerfilRequest,
} from '../model/request/catalogosRequest';
import { CatalogoRepository } from '../repository/catalogos.repository';

@Injectable()
export class ContratosService {
  constructor(
    private readonly contratosRepository: ContratosRepository,
    private readonly archivoRepository: ArchivoRepository,
    private readonly generalRepository: GeneralRepository,
    private readonly catalogoRepository: CatalogoRepository,
  ) {}

  public async getContratos(
    request: ConsultaContratoRequest,
  ): Promise<ContratoResponse[]> {
    const datosLogin = await this.contratosRepository.getContratos(request);

    return datosLogin;
  }

  public async addUpdateContratos(
    request: RegistraActualizaContratoRequest,
  ): Promise<ActualizaRegistraBaseResponse> {
    request.id_usuario = usuarioPorDefecto.id_usuario;
    const valido = await this.validaAddUpdateContrato(request);

    if (valido != '') {
      throw new CustomException(valido, '');
    }

    const no_contrato_valido =
      await this.contratosRepository.validaNumeroContrato(
        request.no_contrato,
        request.id_contrato,
      );

    if (!no_contrato_valido) {
      throw new CustomException(
        'El numero de contrato ( ' + request.no_contrato + ' ) ya existe',
        '',
      );
    }
    try {
      const nombreArchivo = 'contrato_' + request.no_contrato;

      let rutaCompleta = '';
      if (request.archivo != '') {
        rutaCompleta = await this.generalRepository.guardaArchivo(
          request.archivo,
          folderArchivos.ruta + 'contratos/',
          nombreArchivo,
        );
      }

      request.id_extencion = tipoArchivos.pdf;
      request.ruta = rutaCompleta;
      request.nombre_archivo = nombreArchivo;
    } catch (error) {
      throw new CustomException(error, '2fb67f0a-4af5-42e5-a8a3-a814ebe6c111');
    }

    const datos = await this.contratosRepository.addUpdateContratos(request);

    const respuesta: ActualizaRegistraBaseResponse = {
      mensaje: datos.mensaje,
      correcto: datos.correcto,
      data: {
        id_contrato: datos.id_contrato ?? null,
        id_archivo: datos.id_archivo ?? null,
      },
    };
    console.log(respuesta);
    return respuesta;
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

  public async addUpdatePerfilesContratos(
    request: CatalogoAddUpdatePerfilContratoRequest,
  ): Promise<ActualizaRegistraPerfilResponse> {
    try {
      request.id_usuario = usuarioPorDefecto.id_usuario;
      const datosPErfil: CatalogoAddUpdatePerfilRequest = {
        id_perfil: request.id_perfil,
        perfil: request.perfil,
        descripcion: request.descripcion,
        monto: request.monto,
        activo: request.activo,
        ip: request.ip,
        id_usuario: request.id_usuario,
      };

      console.log(datosPErfil);
      const datosPerfil =
        await this.catalogoRepository.addUpdatePerfilConsultor(datosPErfil);

      if (!datosPerfil.correcto) {
        throw new CustomException(datosPerfil.mensaje, '');
      }
      console.log(datosPerfil);
      request.id_perfil = datosPerfil.id;
      console.log(request);
      const datos =
        await this.contratosRepository.addUpdatePerfilesContratos(request);
      console.log(datos);
      const respuesta: ActualizaRegistraPerfilResponse = {
        mensaje: datos.mensaje,
        correcto: datos.correcto,
        data: {
          id_perfil_contrato: datos.id_perfil_contrato ?? null,
        },
      };

      console.log(request);
      return respuesta;
    } catch (error) {
      throw new CustomException(error, '1fb67f0a-4af6-42e6-a8a3-a814ebe6c111');
    }
  }

  public async getPerfilesContratos(
    request: ConsultaPErfilesContratoRequest,
  ): Promise<PerfilContratoResponse[]> {
    const datosLogin =
      await this.contratosRepository.getPerfilesContratos(request);

    return datosLogin;
  }
}
