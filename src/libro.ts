// Clase Libro
import { Transaccion } from "./transaccion";

export class Libro {
  public cantidadActual: number = 0;
  private transacciones: Transaccion[] = [];

  constructor(
    public isbn: string,
    public titulo: string,
    public imagen: string,
    public precioCompra: number,
    public precioVenta: number
  ) { }

  public agregarStock(cantidad: number): void {
    if (cantidad <= 0) {
      throw new Error("La cantidad debe ser positiva.");
    }
    this.cantidadActual += cantidad;
    this.transacciones.push(new Transaccion('agregarStock', new Date(), cantidad));
  }

  public vender(cantidad: number): void {
    if (cantidad <= 0) {
      throw new Error("La cantidad debe ser positiva.");
    }
    if (cantidad > this.cantidadActual) {
      throw new Error("No hay suficientes ejemplares para vender.");
    }
    this.cantidadActual -= cantidad;
    this.transacciones.push(new Transaccion('Venta', new Date(), cantidad));
  }

  public obtenerCantidadActual(): number {
    return this.cantidadActual;
  }
}
