export interface Usuario {
    id?:           number;
    username?:     string;
    password?:     string;
    nombre:       string;
    apellido?:     string;
    phone_number?: string;
    email?:        string;
    activo?:       boolean;
    tipo?:         string;
}

export interface Proyecto {
    id?:     number;
    nombre: string;
    activo?: boolean;
}

export interface ProyectoUsuario {
    id?:         number;
    usuario_id: Usuario;
    proyecto:   Proyecto;
    activo?:     boolean;
}




