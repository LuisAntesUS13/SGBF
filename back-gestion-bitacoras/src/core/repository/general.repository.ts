import { Injectable } from '@nestjs/common';
import * as fs from 'fs-extra';
import * as path from 'path';
import { CustomException } from '../util/errores';

@Injectable()
export class GeneralRepository {
  constructor() {}

  public async StringFecha(fh_string: string): Promise<Date> {
    // Dividir la cadena en día, mes y año
    const [dia, mes, anio] = fh_string.split('/');
    // Crear el objeto Date utilizando año, mes y día
    // Restar 1 al mes ya que los meses en JavaScript van de 0 a 11
    const fecha = new Date(parseInt(anio), parseInt(mes) - 1, parseInt(dia));
    return fecha;
  }

  public async StringStrinFechaSql(fh_string: string): Promise<string> {
    console.log(fh_string);
    // Dividir la cadena en día, mes y año
    const [dia, mes, anio] = fh_string.split('/');
    // Crear el objeto Date utilizando año, mes y día
    // Restar 1 al mes ya que los meses en JavaScript van de 0 a 11
    const fecha = new Date(parseInt(anio), parseInt(mes) - 1, parseInt(dia));

    return fecha.toISOString().split('T')[0];
  }

  public async guardaArchivo(
    base64: string,
    folderPath: string,
    fileName: string,
  ): Promise<string> {
    try {
      const file = Buffer.from(base64, 'base64');

      // Crear la ruta completa del archivo
      const filePath = path.join(folderPath, fileName);

      const exists = await fs.pathExists(filePath);

      if (exists) {
        await fs.remove(filePath);
      }
      // Verificar si la carpeta existe, si no, crearla
      await fs.ensureDir(folderPath);

      // Escribir el archivo en el sistema de archivos
      await fs.writeFile(filePath, file);

      return filePath;
    } catch (error) {
      throw new CustomException(error, '2fb67f0a-4af5-42e5-a8a3-a814ebe6c111');
    }
  }
}
