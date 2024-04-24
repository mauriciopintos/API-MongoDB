// database.connection.ts
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

export const connectToMongoDB = async () => {
  try {
    const mongoURI = process.env.MONGO_DB_URL;
    const dbName = process.env.MONGO_DB_NAME;

    // console.log(`MongoURI: ${mongoURI} \n DB: ${dbName}`);

    if (!mongoURI || !dbName) {
      throw new Error(
        'La URL de MongoDB o el nombre de la base de datos no se proporcionan en las variables de entorno',
      );
    }

    const options: mongoose.ConnectOptions = {};

    await mongoose.connect(`${mongoURI}${dbName}`, options);

    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Fallo la conexion con MongoDB', error);
  }
};
