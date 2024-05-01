/* eslint-disable prettier/prettier */
// app.controller.ts

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// import { EventController } from './controllers/event.controller'; // Importa el controlador de eventos
// import { TicketController } from './controllers/ticket.controller'; // Importa el controlador de tickets

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    // private readonly eventController: EventController, // Inyecta el controlador de eventos
    // private readonly ticketController: TicketController, // Inyecta el controlador de tickets
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
