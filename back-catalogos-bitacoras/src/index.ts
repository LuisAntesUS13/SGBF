import express from 'express';
import cors from 'cors';
import {PORT} from './config/config';
import {CORS_OPTION} from './util/constantes';
import rutas from './routes/routes'
import { authMiddelware } from './middelware/authMiddelware';
// import { errorMiddleware, morganMiddleware } from './middelware/errorMiddelware';

const app = express();

// Middleware para parsear JSON
app.use(express.json());

app.use(express.urlencoded({extended: false}));

// Usar CORS con las opciones configuradas
app.use(cors(CORS_OPTION));

// Middleware de autenticación
app.use(authMiddelware);

// Usa las rutas
app.use(rutas);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en: ${PORT}`);
});