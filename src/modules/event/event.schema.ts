import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EventDocument = Event & Document;

@Schema()
export class Event {
  // Definir los campos del esquema del evento
}

export const EventSchema = SchemaFactory.createForClass(Event);
