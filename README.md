# API-MongoDB

API con MongoDB para realizar pruebas

0- Instalar node o actualizar versión
descargar desde https://nodejs.org/en/

1- Instalación de NestJS globalmente:
npm update -g
npm install -g yarn
npm install -g @nestjs/cli

2- Creación del Proyecto:
nest new api-mongo-db

3- Instalación de Dependencias:
cd .\api-mongo-db\
yarn install
npm install @nestjs/mongoose mongoose

\*En caso de errores
-# Instalar el modulo testing o el que esté fallandonpm install --save-dev @nestjs/testing

-# Limpiar cache de nmp
npm cache clean --force

-# Eliminar node_modules para corregir errores
Remove-Item -Recurse -Force node_modules

-# Reinstalar node_modules
npm install

4- Creación de la API con Mongoose
Definición del Modelo: Modelo para los tickets. Es un archivo ticket.model.ts dentro de la carpeta src

5- Módulo de Tickets: Módulo para manejar los tickets. Crea un archivo tickets.module.ts dentro de la carpeta src/tickets

6- Controlador de Tickets: Controlador para manejar las rutas relacionadas con los tickets. Crea un archivo tickets.controller.ts dentro de la carpeta src/tickets:

7- Servicio de Tickets: Servicio para manejar la lógica relacionada con los tickets. Con un archivo tickets.service.ts dentro de la carpeta src/tickets

### Uso de la API

1- Configuración de MongoDB: Tener MongoDB instalado localmente o configuradas las credenciales para una instancia remota. Configurar la conexión en el archivo ./src/config/mongo_config.json, tomar como modelo TEMPLATE-mongo_config.json.

2- Definición de Rutas: Definir las rutas en el controlador de tickets (tickets.controller.ts) utilizando los métodos HTTP necesarios (GET, POST, PUT, DELETE).

3- Lanzamiento del Servidor: Ejecuta el servidor NestJS con el siguiente comando:
npm run start

### Pruebas

Utilizar herramientas como Postman o cURL para probar las rutas de la API. Se pueden enviar solicitudes HTTP a http://localhost:3000/tickets (o la URL correspondiente) para crear, leer, actualizar y eliminar tickets.

#### Ejemplos CURL

1- Crear un Ticket (POST)
curl -X POST -H "Content-Type: application/json" -d '{"title": "Concierto de Rock", "description": "Increíble concierto de rock en vivo", "price": 20}' http://localhost:3000/tickets

2- Obtener Todos los Tickets (GET)
curl http://localhost:3000/tickets

3- Obtener un Ticket por su ID (GET)
curl http://localhost:3000/tickets/{id}

4- Actualizar un Ticket por su ID (PUT)
curl -X PUT -H "Content-Type: application/json" -d '{"title": "Concierto de Rock (Actualizado)", "description": "Increíble concierto de rock en vivo (Actualizado)", "price": 25}' http://localhost:3000/tickets/{id}

5- Eliminar un Ticket por su ID (DELETE)
curl -X DELETE http://localhost:3000/tickets/{id}

api-mongo-db/
├── node_modules/
├── src/
│ ├── config/
│ ├── controllers/
│ ├── filters/
│ ├── guards/
│ ├── interceptors/
│ ├── middleware/
│ ├── modules/
│ ├── schemas/
│ ├── services/
│ ├── app.controller.spec.ts
│ ├── app.controller.ts
│ ├── app.module.ts
│ ├── app.service.ts
│ ├── main.ts
│ ├── ticket.model.ts
│ └── ...
├── test/
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.build.json
├── tsconfig.json
├── yarn.lock
└── ...
