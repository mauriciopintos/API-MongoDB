import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as fs from 'fs';

const data = JSON.parse(fs.readFileSync('./config/mongo_config.json', 'utf8'));

const user = data.user;
const pass = data.password;
const cluster = data.cluster;
const dbName = data.db;

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${user}:${pass}@${cluster}/${dbName}`,
    ),
  ],
})
export class AppModule {}
