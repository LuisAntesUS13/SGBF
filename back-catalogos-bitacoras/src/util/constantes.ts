// Configurar CORS
export const CORS_OPTION = {
    origin: '*', // Permitir todas las solicitudes, puedes especificar dominios permitidos aquí
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Headers permitidos
};


export const RUTA_BASE = "/catalogo";

export const MENSAJES = {
    DATOS_OBTENIDOS: 'Datos obtenidos correctamente', 
    SIN_INFORMACION: "No se encontro información",
    GUARDADO_CORRECTO: "Datos guardados correctaente",
    GUARDADO_INCORRECTO: "No se logro guardar la información",
    ACTUALIZADO_CORRECTO: "Datos actualizados correctamente",
    ACTUALIZADO_INCORRECTO: "No se logro actualizar la información",
    BORRADO_CORRECTO: "Información borrada correctamente",
    BORRADO_INCORRECTO: "La información no se logro borrar",
    TOKEN_VACIO: "Token no proporcionado",
    TOKEN_INVALIDO: "Token inválido",
};
