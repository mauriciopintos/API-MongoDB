//event.controller.ts
/* eslint-disable prettier/prettier */

import { Controller, Get, Post, Patch, Delete, Param, Body, /*UseGuards,*/ } from '@nestjs/common';
import { EventService } from '../modules/event/event.service';
import { CreateEventDto } from '../modules/event/dto/create-event.dto';
import { UpdateEventDto } from '../modules/event/dto/update-event.dto';
// import { AdminGuard } from '../../guards/admin.guard'; // Importar el guardia

// FALTA definir como tomar el user_role segun el usuario
const user_role = 'admin'

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) { }

  @Get()
  async findAll() {
    // FALTA MANEJAR ROLES CORRECTAMENTE CON GUARDIANES
    return this.eventService.findAll(user_role);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    // FALTA MANEJAR ROLES CORRECTAMENTE CON GUARDIANES
    return this.eventService.findById(id, user_role);
  }

  @Post()
  // FALTA MANEJAR ROLES CORRECTAMENTE CON GUARDIANES
  // @UseGuards(AdminGuard) // Utiliza un guardia para verificar el rol de administrador
  async create(@Body() createEventDto: CreateEventDto) {
    return this.eventService.create(createEventDto, user_role);
  }

  @Patch(':id')
  // FALTA MANEJAR ROLES CORRECTAMENTE CON GUARDIANES
  // @UseGuards(AdminGuard) // Utiliza un guardia para verificar el rol de administrador
  async update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(id, updateEventDto, user_role);
  }

  @Delete(':id')
  // FALTA MANEJAR ROLES CORRECTAMENTE CON GUARDIANES
  // @UseGuards(AdminGuard) // Utiliza un guardia para verificar el rol de administrador
  async delete(@Param('id') id: string) {
    return this.eventService.delete(id, user_role);
  }
}
