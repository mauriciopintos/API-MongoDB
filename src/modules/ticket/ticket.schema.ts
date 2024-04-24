import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TicketDocument = Ticket & Document;

@Schema()
export class Ticket {
  // Definir los campos del esquema del ticket
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
