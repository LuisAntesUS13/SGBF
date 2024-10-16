import {config} from 'dotenv';

config();

export const PORT = process.env.SGBD_PORT_CONTRATO || 3505;
export const DB_HOST = process.env.SGBD_DB_HOST || 'localhost';
export const DB_USER = process.env.SGBD_DB_USER || 'usuario_bitacora';
export const DB_PASSWORD = process.env.SGBD_DB_PASSWORD || 'p4ssw0rd2024';
export const DB_PORT =  parseInt(process.env.SGBD_DB_PORT || '1433') ;
export const DB_DATABASE = process.env.SGBD_DB_NAME || 'admingastos';

export const SECRET_KEY = process.env.SGBD_JWT_SECRET || '21c7e331-949a-5fdc-b364-1299ef81a298';

export const PROD = (process.env.SGBD_PROD == 'false' ? false : true);