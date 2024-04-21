import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Ticket extends Document {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  price: number;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
