# Complaints Backend
Aplicación backend para llevar el control de quejas

## Paquetes utilizados

* express
* sequelize
* cors
* jsonwebtoken
* body-parser
* bcryptjs
* mysql2

## Instalación

Esta aplicación requiere la instalación de los paquetes utilizados.
```sh
cd complaints-backend
npm i
```

## Ejecución

### Creación de base de datos
El proceso de ejecución requiere que se tenga una base de datos. En esta aplicación se esta haciendo uso de la base de datos
**complaintsdb**.

El script para la creación
```
CREATE DATABASE complaintsdb;
```

Si se desea utilizar otra configuración se debe ir a cambiar la configuración de las constantes utilizadas. El archivo es *config/env.js*.

### Ejecución de migraciones
Se deben ejecutar las migraciones para poder ejecutar la aplicación. Para ello se proporciona el siguiente script.

```
npm run migrate
```

### Ejecución de semillas (seed)
La aplicación requiere unos datos por defecto. Para ellos se crearon seeds los cuales se ejecutan con el comando

```
npm run seed
```

### Ejecución de la aplicación
Finalmente ya se puede proceder a la ejecución de la aplicación.

```
npm run start
```