/* eslint-disable prettier/prettier */
export class UpdateTicketDto {
    readonly id_evento: string;
    readonly propietario_ticket: string;
    readonly dni_ticket: string;
    readonly imagen_evento?: string;
    readonly ubicacion?: string;
    readonly establecimiento?: string;
    readonly direccion?: string;
    readonly horario?: number;
    readonly franja?: 'am' | 'pm';
    readonly fecha?: string;
    readonly sector?: string[];
    readonly descripcion?: string;
}
