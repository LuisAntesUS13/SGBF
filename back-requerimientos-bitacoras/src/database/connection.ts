import sql from 'mssql';
import  {DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_DATABASE} from '../config/config';

// Configuración de la conexión a SQL Server
const dbConfig = {
  user: DB_USER,
  password: DB_PASSWORD,
  server: DB_HOST,
  database: DB_DATABASE,
  port: DB_PORT,
  options: {
    encrypt: true, // Usar en producción si es necesario
    trustServerCertificate: true // Para certificados autofirmados
  }
};

// Función para conectar a la base de datos
export const connection = async () => {
  try {
    const pool = await sql.connect(dbConfig);
    console.log('Conexión a la base de datos exitosa');
    return pool;
  } catch (error) {
    console.error('Error al conectarse a la base de datos:', error);
    throw error;
  }
};