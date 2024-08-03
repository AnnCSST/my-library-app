// Clase que representa una transacción realizada de un libro
export class Transaccion {
    constructor(
        public tipo: "Venta" | "agregarStock",
        public fecha: Date,
        public cantidad: number
    ) { }
}