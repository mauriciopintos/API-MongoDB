/* eslint-disable prettier/prettier */
// ticket.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketController } from '../../controllers/ticket.controller';
import { TicketService } from './ticket.service';
import { Ticket, TicketSchema } from './ticket.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ticket.name, schema: TicketSchema }]),
  ],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule { }
