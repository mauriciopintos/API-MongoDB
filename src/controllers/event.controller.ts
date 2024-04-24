import { Controller } from '@nestjs/common';
import { EventService } from '../modules/event/event.service';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  // Definir rutas y métodos del controlador para manejar operaciones relacionadas con eventos
}
