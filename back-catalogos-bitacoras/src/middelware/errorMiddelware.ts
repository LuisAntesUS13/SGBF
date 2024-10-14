// src/logger.ts
import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import path from 'path';

// Define el directorio de logs
const logDirectory = path.join(__dirname, 'logs');

// Crea el transportador para rotación diaria de errores
const errorTransport = new DailyRotateFile({
    filename: `${logDirectory}/%DATE%-error.log`,
    datePattern: 'DD-MM-YYYY',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
});

// Crea el logger
const logger = createLogger({
    level: 'error',
    format: format.combine(
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => {
            return `${level}: ${timestamp} ${message}`;
        })
    ),
    transports: [
        errorTransport,
        new transports.Console() // Imprime en la consola
    ],
});

export { logger};