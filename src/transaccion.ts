export class Transaccion {
    constructor(
      public tipo: "Venta" | "Agregar Stock",
      public fecha: Date,
      public cantidad: number
    ) { }
  }
  