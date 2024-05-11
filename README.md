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

Definición del Modelo: Modelo para los tickets. Es un archivo ticket.model.ts dentro de la carpeta src/

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

#### EVENTOS

##### CREAR EVENTOS

```bash
curl -X POST http://127.0.0.1:3000/event -H "Content-Type: application/json" -d "{\"imagen_evento\": \"https://example.com/image2.jpg\", \"ubicacion\": \"34.0522° N, 118.2437° W\", \"establecimiento\": \"Estadio\", \"direccion\": \"456 Calle Secundaria, Ciudad\", \"horario\": 7, \"franja\": \"pm\", \"fecha\": \"20/06/2024\", \"sector\": [\"Zona VIP\", \"Zona General\"], \"stock_tickets\": 500, \"descripcion\": \"Concierto de música\"}"
```

```bash
curl -X POST http://127.0.0.1:3000/event -H "Content-Type: application/json" -d "{\"imagen_evento\": \"https://example.com/image3.jpg\", \"ubicacion\": \"51.5074° N, 0.1278° W\", \"establecimiento\": \"Teatro Municipal\", \"direccion\": \"789 Calle Secundaria, Ciudad\", \"horario\": 3, \"franja\": \"pm\", \"fecha\": \"10/07/2024\", \"sector\": [\"Platea\", \"Palco\"], \"stock_tickets\": 300, \"descripcion\": \"Obra de teatro\"}"
```

```bash
curl -X POST http://127.0.0.1:3000/event -H "Content-Type: application/json" -d "{\"imagen_evento\": \"https://example.com/image4.jpg\", \"ubicacion\": \"52.5200° N, 13.4050° E\", \"establecimiento\": \"Museo de Arte\", \"direccion\": \"101 Calle Artística, Ciudad\", \"horario\": 11, \"franja\": \"am\", \"fecha\": \"05/08/2024\", \"sector\": [\"Sala 1\", \"Sala 2\"], \"stock_tickets\": 150, \"descripcion\": \"Exposición de arte moderno\"}"
```

```bash
curl -X POST http://127.0.0.1:3000/event -H "Content-Type: application/json" -d "{\"imagen_evento\": \"https://example.com/image5.jpg\", \"ubicacion\": \"48.8566° N, 2.3522° E\", \"establecimiento\": \"Restaurante\", \"direccion\": \"202 Calle Gastronómica, Ciudad\", \"horario\": 8, \"franja\": \"pm\", \"fecha\": \"25/09/2024\", \"sector\": [\"Salón Principal\", \"Terraza\"], \"stock_tickets\": 100, \"descripcion\": \"Cena de gala\"}"

```

```bash
curl -X POST http://127.0.0.1:3000/event -H "Content-Type: application/json" -d "{\"imagen_evento\": \"https://example.com/image6.jpg\", \"ubicacion\": \"Calle falsa, 1234\", \"establecimiento\": \"Centro de ornitologia\", \"direccion\": \"Calle falsa, 1234, Ciudad Metro\", \"horario\": 11, \"franja\": \"am\", \"fecha\": \"15/03/2025\", \"sector\": [\"Auditorio central\", \"Palco\"], \"stock_tickets\": 400, \"descripcion\": \"Parvada de pajaros\"}"

```

```bash
curl -X POST http://127.0.0.1:3000/event -H "Content-Type: application/json" -d "{\"imagen_evento\": \"https://example.com/image7.jpg\", \"ubicacion\": \"34.0178° N, 0.3578° E\", \"establecimiento\": \"Micro estadio del campo\", \"direccion\": \"Cañada Vargas, Ciudad Rural\", \"horario\": 8, \"franja\": \"am\", \"fecha\": \"12/07/2024\", \"sector\": [\"Platea este\", \"Popular\"], \"stock_tickets\": 3200, \"descripcion\": \"Fiesta regional\"}"
```

```bash
curl -X POST http://127.0.0.1:3000/event -H "Content-Type: application/json" -d "{\"imagen_evento\": \"BORRAME POR FEO\", \"ubicacion\": \"34.0178° N, 0.3578° E\", \"establecimiento\": \"Micro estadio del campo\", \"direccion\": \"Cañada Vargas, Ciudad Rural\", \"horario\": 8, \"franja\": \"am\", \"fecha\": \"12/07/2024\", \"sector\": [\"Platea este\", \"Popular\"], \"stock_tickets\": 3200, \"descripcion\": \"Fiesta regional\"}"
```


##### CONSULTAR EVENTOS
```bash
curl -X GET http://127.0.0.1:3000/event
```

##### CONSULTAR EVENTOS POR ID
```bash
curl -X GET http://127.0.0.1:3000/event/6632c1df56cb543739959099
```

##### ACTUALIZAR PARCIALMENTE UN EVENTOS POR ID
```bash
curl -X PATCH http://127.0.0.1:3000/event/6632c1df56cb543739959099 -H "Content-Type: application/json" -d "{\"establecimiento\": \"EVENTO ACTUALIZADO\", \"descripcion\": \"EVENTO RE COPADO\"}"
```

##### ELIMINAR EVENTOS POR ID
```bash
curl -X DELETE http://127.0.0.1:3000/event/663ff7467218f1990bbe5e1d
```


#### TICKETS
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

    > DTO: "Data Transfer Object" (Objeto de Transferencia de Datos)    

```bash
api-mongo-db/
├── src/
│   ├── controllers/
│   │   ├── event.controller.ts         // Controlador para manejar eventos
│   │   └── ticket.controller.ts        // Controlador para manejar tickets
│   ├── modules/
│   │   ├── event/                      // Módulo para eventos
│   │   │   ├── dto/                    // DTOs relacionados con eventos
│   │   │   │   ├── create.event.dto.ts // DTO para crear un evento
│   │   │   │   └── update.event.dto.ts // DTO para actualizar un evento
│   │   │   ├── event.schema.ts         // Esquema Mongoose para eventos
│   │   │   ├── event.service.ts        // Servicio para manejar ops. de eventos
│   │   │   └── event.module.ts         // Módulo de eventos
│   │   └── ticket/                     // Módulo para tickets
│   │       ├── dto/                    // DTOs relacionados con tickets
│   │       │   ├── create.ticket.dto.ts// DTO para crear un ticket
│   │       │   └── update.ticket.dto.ts// DTO para actualizar un ticket
│   │       ├── ticket.schema.ts        // Esquema Mongoose para tickets
│   │       ├── ticket.service.ts       // Servicio para manejar ops. de tickets
│   │       └── ticket.module.ts        // Módulo de tickets
│   ├── app.module.ts                   // Arch. ppal de config. de la aplicación
│   ├── database.connection.ts          // Archivo para manejar la conexión a MongoDB
│   ├── dotenv.config.ts                // Archivo para cargar variables de entorno
│   ├── main.ts                         // Archivo principal de la aplicación
│   └── ...
├── test/                                // Carpeta para pruebas
├── .env                                 // Archivo de variables de entorno
├── .eslintrc.js                         // Configuración de ESLint
├── .gitignore   
├── .prettierrc                          // Configuración de Prettier
├── .TEMPLATE-env                        // Archivo de plantilla para var. de entorno
├── nest-cli.json                        // Configuración de Nest CLI
├── package-lock.json                    // Archivo de bloqueo de dependencias de npm
├── package.json                         // Archivo de configuración de npm
├── README.md                            // Archivo de documentación
├── tsconfig.build.json                  // Config. de TS para compilar el proyecto
├── tsconfig.json                        // Config. de TS
├── yarn.lock                            // Archivo de bloqueo de dependencias de Yarn
└── ...
```
