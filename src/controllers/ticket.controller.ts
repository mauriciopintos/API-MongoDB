import { Controller } from '@nestjs/common';
import { TicketService } from '../modules/ticket/ticket.service';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  // Definir rutas y métodos del controlador para manejar operaciones relacionadas con tickets
}
