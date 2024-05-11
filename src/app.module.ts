/* eslint-disable prettier/prettier */
// app.module.ts
import { Module } from '@nestjs/common';
import { EventModule } from './modules/event/event.module';
import { TicketModule } from './modules/ticket/ticket.module';

@Module({
  imports: [
    EventModule,
    TicketModule,
  ],
})
export class AppModule { }
