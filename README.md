# api-mongo-db

### API con MongoDB para realizar pruebas

##### 0- Instalar node o actualizar versión

descargar desde https://nodejs.org/en/

##### 1- Instalación de NestJS globalmente:

```bash
npm update -g
npm install -g yarn
npm install -g @nestjs/cli
```

##### 2- Creación del Proyecto (omitir este paso al clonar):

```bash
nest new api-mongo-db
```

##### 3- Instalación de Dependencias:

```bash
cd .\api-mongo-db\
yarn install
npm install @nestjs/mongoose mongoose
npm install dotenv -D
npm install --save-dev @types/mongoose
```

##### \*En caso de errores

\# Instalar el modulo testing o el que esté fallando

```bash
npm install --save-dev @nestjs/testing
```

\# Limpiar cache de nmp

```bash
npm cache clean --force
```

\# Eliminar node_modules para corregir errores

```bash
Remove-Item -Recurse -Force node_modules
```

\# Reinstalar node_modules

```bash
npm install
```

##### 4- Creación de la API con Mongoose (omitir este paso al clonar):

Definición del Modelo: Modelo para los tickets. Es un archivo ticket.model.ts dentro de la carpeta src

##### 5- Módulo de Tickets (omitir este paso al clonar):

Módulo para manejar los modelos de tickets. Crea un archivo ticket.model.ts dentro de la carpeta src/

##### 6- Controlador de Tickets (omitir este paso al clonar):

Módulo para manejar los modelos de eventos. Crea un archivo event.model.ts dentro de la carpeta src/

### Uso de la API

##### 1- Configuración de MongoDB:

Tener MongoDB instalado localmente o configuradas las credenciales para una instancia remota. Configurar la conexión en el archivo .env, tomar como modelo .TEMPLATE-env.

##### 2- Definición de Rutas:

Definir las rutas en el controlador de tickets utilizando los métodos HTTP necesarios (GET, POST, PUT, DELETE).

##### 3- Lanzamiento del Servidor:

Ejecuta el servidor NestJS con el siguiente comando:

```bash
yarn start
```

o bien...

```bash
npm run start

```

### Pruebas

Utilizar herramientas como Postman o cURL para probar las rutas de la API. Se pueden enviar solicitudes HTTP a http://localhost:3000/tickets (o la URL correspondiente) para crear, leer, actualizar y eliminar tickets.

#### Ejemplos CURL

##### 1- Crear un Ticket (POST)

```bash
curl -X POST -H "Content-Type: application/json" -d '{"title": "Concierto de Rock", "description": "Increíble concierto de rock en vivo", "price": 20}' http://localhost:3000/tickets
```

##### 2- Obtener Todos los Tickets (GET)

```bash
curl http://localhost:3000/tickets
```

##### 3- Obtener un Ticket por su ID (GET)

```bash
curl http://localhost:3000/tickets/{id}
```

##### 4- Actualizar un Ticket por su ID (PUT)

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"title": "Concierto de Rock (Actualizado)", "description": "Increíble concierto de rock en vivo (Actualizado)", "price": 25}' http://localhost:3000/tickets/{id}
```

##### 5- Eliminar un Ticket por su ID (DELETE)

```bash
curl -X DELETE http://localhost:3000/tickets/{id}
```

### Estructura de directorios y archivos

```bash
api-mongo-db/
├── src/
│   ├── controllers/
│   │   ├── event.controller.ts    // Controlador para manejar eventos
│   │   └── ticket.controller.ts   // Controlador para manejar tickets
│   ├── modules/
│   │   ├── event/                 // Módulo para eventos
│   │   │   ├── dto/               // DTOs relacionados con eventos
│   │   │   ├── event.schema.ts    // Esquema Mongoose para eventos
│   │   │   ├── event.service.ts   // Servicio para manejar operaciones de eventos
│   │   │   └── event.module.ts    // Módulo de eventos
│   │   └── ticket/                // Módulo para tickets
│   │       ├── dto/               // DTOs relacionados con tickets
│   │       ├── ticket.schema.ts   // Esquema Mongoose para tickets
│   │       ├── ticket.service.ts  // Servicio para manejar operaciones de tickets
│   │       └── ticket.module.ts   // Módulo de tickets
│   ├── app.controller.ts
│   ├── app.module.ts              // Archivo ppal de configuración de la aplicación
│   ├── app.service.ts
│   ├── database.connection.ts     // Archivo para manejar la conexión a MongoDB
│   ├── dotenv.config.ts           // Archivo para cargar variables de entorno
│   ├── event.model.ts             // Modelo de datos de evento
│   ├── main.ts
│   ├── ticket.model.ts            // Modelo de datos de ticket
│   └── ...
├── test/
├── .env                       // Archivo de variables de entorno
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── .TEMPLATE-env
├── nest-cli.json
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.build.json
├── tsconfig.json
├── yarn.lock
└── ...
```
