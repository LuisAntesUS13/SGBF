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