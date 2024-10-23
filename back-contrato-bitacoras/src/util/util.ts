export function mapToInterface<T>(recordset: any[]): T[] {
    return recordset.map((row: any) => {
      const mappedObject: Partial<T> = {}; // Objeto mapeado parcialmente
      
      // Recorremos las claves de cada fila
      Object.keys(row).forEach((key) => {
        // Si la clave existe en la interfaz T, la añadimos al objeto mapeado
        mappedObject[key as keyof T] = row[key];
      });
      
      return mappedObject as T; // Devolvemos el objeto mapeado al tipo T
    });
}


export function mapToInterfaceobject<T>(record: any): T {
  const mappedObject: Partial<T> = {}; // Objeto mapeado parcialmente
  
  // Recorremos las claves del objeto
  Object.keys(record).forEach((key) => {
      // Si la clave existe en la interfaz T, la añadimos al objeto mapeado
      mappedObject[key as keyof T] = record[key];
  });
  
  return mappedObject as T; // Devolvemos el objeto mapeado al tipo T
}

export function  StringFecha(fh_string: string): Date {
  // Dividir la cadena en día, mes y año
  const [dia, mes, anio] = fh_string.split('/');
  // Crear el objeto Date utilizando año, mes y día
  // Restar 1 al mes ya que los meses en JavaScript van de 0 a 11
  const fecha = new Date(parseInt(anio), parseInt(mes) - 1, parseInt(dia));
  return fecha;
}

export function StringStrinFechaSql(fh_string: string): string {
  // Dividir la cadena en día, mes y año
  const [dia, mes, anio] = fh_string.split('/');
  // Crear el objeto Date utilizando año, mes y día
  // Restar 1 al mes ya que los meses en JavaScript van de 0 a 11
  const fecha = new Date(parseInt(anio), parseInt(mes) - 1, parseInt(dia));

  return fecha.toISOString().split('T')[0];
}

export function StringComaToFloat(monto: string): number {
  const cadenaSinComas = monto.replace(/,/g, '');
  // Convertir la cadena resultante en un número flotante
  const numero = parseFloat(cadenaSinComas);
  console.log('Número convertido:', numero);
  return numero;
}