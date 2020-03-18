export interface Cliente {
    id: number;
    nombre: String;
    cif: String;
    direccion: String;
    grupo: number;
}

export interface Grupo {
    id: number;
    nombre: String;
}