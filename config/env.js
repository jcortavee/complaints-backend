/**
 * Archivo de configuración de las variables globales
 */

const PORT = process.env.PORT || 3000;

// Database constants
const HOST = "localhost";
const USER = "root";
const PASSWORD = "Xroot1234";
const DATABASE_NAME = "complaintsdb";
const DIALECT = "mysql";
const MIN_CONNECTIONS = 0;
const MAX_CONNECTIONS = 3;
const DATABASE_PORT = 3306;

module.exports = {
    SERVER : {
        PORT: PORT
    },
    DATABASE : {
        HOST: HOST,
        USER: USER,
        PASSWORD: PASSWORD,
        DATABASE_NAME: DATABASE_NAME,
        DIALECT: DIALECT,
        MIN_CONNECTIONS: MIN_CONNECTIONS,
        MAX_CONNECTIONS: MAX_CONNECTIONS,
        ACQUIRE: 30000,
        IDLE: 30000,
        PORT: DATABASE_PORT
    }
};