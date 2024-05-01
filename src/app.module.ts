/* eslint-disable prettier/prettier */
// app.module.ts
import { Module } from '@nestjs/common';
import { EventModule } from './modules/event/event.module';
import { TicketModule } from './modules/ticket/ticket.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // Comentamos estas líneas para evitar la importación de MongooseModule
    // MongooseModule.forRootAsync({
    //   useFactory: async () => ({}),
    // }),
    EventModule,
    TicketModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
