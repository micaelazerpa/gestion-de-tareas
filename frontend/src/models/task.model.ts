export enum EstadoTarea {
    PENDIENTE='PENDIENTE',
    EN_PROGRESO='EN_PROGRESO',
    CANCELADA='CANCELADA',
    TERMINADA='TERMINADA',
}

export interface Tarea {
    nombre: string;
    descripcion: string;
    autorId: string
    estado: EstadoTarea;
}