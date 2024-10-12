// Configurar CORS
export const CORS_OPTION = {
    origin: '*', // Permitir todas las solicitudes, puedes especificar dominios permitidos aquí
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Headers permitidos
};


export const RUTA_BASE = "/catalogo"