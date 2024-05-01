/* eslint-disable prettier/prettier */
// event.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { connectToMongoDB } from '../../database.connection';
import { EventController } from '../../controllers/event.controller';
import { EventService } from './event.service';
import { Event, EventSchema } from './event.schema';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => {
        await connectToMongoDB();
        return {
          uri: process.env.MONGO_DB_URL,
          dbName: process.env.MONGO_DB_NAME,
        };
      },
    }),
    MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }]),
  ],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule { }
