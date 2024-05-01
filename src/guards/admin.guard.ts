/* eslint-disable prettier/prettier */
// guards/admin.guard.ts

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        // Aquí implementamos la lógica para verificar si el usuario es administrador
        const request = context.switchToHttp().getRequest();
        const userRole = request.user?.role; // Suponiendo que el rol del usuario se encuentra en el objeto request

        // Verificamos si el rol del usuario es "admin"
        return userRole === 'admin';
    }
}
