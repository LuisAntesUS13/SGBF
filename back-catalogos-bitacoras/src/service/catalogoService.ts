
import  {connection} from '../database/connection'
import { CatalogoRequest } from '../model/request/request';
import { CatalogoResponse } from '../model/response/response';
import mssql from 'mssql';
import { mapToInterface } from '../util/util';

export const catalogoServicio = {

   // throw new Error("Error generado a propósito en la ruta");  Ejemplo de  error  
  async getCatalogoModuloAplicativo(request:CatalogoRequest): Promise<CatalogoResponse[]> {
        // Ejecuta tu consulta
        const pool = await connection(); // Asegúrate de obtener la conexión correctamente
        let condicion = 'WHERE 1 = 1'; // Condición base
        const parametros: any[] = [];
        // Condición para el nombre
        if (request.nombre && request.nombre.trim() !== '') {
          condicion += ' AND UPPER(TRIM(nombre)) LIKE @nombre';
          parametros.push({ name: 'nombre', value: `%${request.nombre}%`, type: mssql.VarChar });
        }
        
        // Condición para el campo 'activo'
        if (request.activo != null) {
          condicion += ' AND activo = @activo';
          parametros.push({ name: 'activo', value: request.activo, type: mssql.Bit }); // Asumiendo que 'activo' es de tipo bit
        }
        
        // Crear la consulta con la condición dinámica
        const query = `SELECT id_modulo_aplicativo as id, nombre, descripcion, activo FROM cat_aplicativo_modulo ${condicion}`;

        // Crear el request y asignar los parámetros
        let req = pool.request();
        
        parametros.forEach(param => {
          req = req.input(param.name, param.type, param.value); // Asignar los parámetros correctamente
        });

        // Ejecutar la consulta
        const result = await req.query(query);

        // Mapeamos los valores
        const respuesta: CatalogoResponse[] = mapToInterface<CatalogoResponse>(result.recordset);

        return respuesta;
  }
}