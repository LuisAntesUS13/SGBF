import { Injectable } from '@nestjs/common';
import { LoginRepository } from '../repository/login.repository';
import { LoginRequest } from '../model/request/loginRequest';
import { LoginResponse } from '../model/response/loginResponse';
import { CustomException } from '../util/errores';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
  constructor(
    private readonly loginRepository: LoginRepository,
    private jwtService: JwtService,
  ) {}

  public async login(loginRequest: LoginRequest): Promise<LoginResponse> {
    const datosLogin = await this.loginRepository.login(loginRequest.usuario);

    if (!datosLogin.succes) {
      throw new CustomException(
        datosLogin.message,
        '2fb67f0a-4af5-42e5-a8a3-a814ebe6cb89',
      );
    }

    const ConrasenaValida = await bcrypt.compare(
      loginRequest.contra,
      datosLogin.contra,
    );

    if (!ConrasenaValida) {
      throw new CustomException(
        'Contraseña no es valida',
        '2fb67f0a-4af5-42e5-a8a3-a814ebe6cb10',
      );
    }

    // const saltRounds = 10;
    // const hashedPassword = await bcrypt.hash(loginRequest.contra, saltRounds);

    // console.log(hashedPassword);

    const payload = { id_usuario: datosLogin.id_usuario };
    const token = await this.jwtService.sign(payload);

    const datos = {
      id_usuario: datosLogin.id_usuario,
      nombre: datosLogin.nombre,
      primer_apellido: datosLogin.primer_apellido,
      segundo_apellido: datosLogin.segundo_apellido,
      usuario: datosLogin.usuario,
      correo: datosLogin.correo,
      curp: datosLogin.curp,
      rfc: datosLogin.rfc,
      img: datosLogin.img,
      activo: datosLogin.activo,
      conectado: datosLogin.conectado,
      token: token,
    };

    return datos;
  }
}
