import { Libro } from "./libro";
import { Transaccion } from "./transaccion";

export class Tienda {
    private libros: Map<string, Libro> = new Map<string, Libro>();
    private dineroEnCaja: number;

    constructor(inversionInicial: number) {
        this.dineroEnCaja = inversionInicial;
    }

    public agregarLibro(libro: Libro): void {
        if (this.libros.has(libro.isbn)) {
            throw new Error("El libro ya está en el catálogo.");
        }
        this.libros.set(libro.isbn, libro);
    }

    public buscarLibro(isbn: string): Libro | undefined {
        return this.libros.get(isbn);
    }

    public agregarStockLibro(isbn: string, cantidad: number): void {
        const libro = this.buscarLibro(isbn);
        if (!libro) {
            throw new Error("El libro no existe.");
        }
        libro.agregarStock(cantidad);
        this.dineroEnCaja -= libro.precioCompra * cantidad;
    }

    public venderLibro(isbn: string, cantidad: number): void {
        const libro = this.buscarLibro(isbn);
        if (!libro) {
            throw new Error("El libro no existe.");
        }
        libro.vender(cantidad);
        this.dineroEnCaja += libro.precioVenta * cantidad;
    }

    public obtenerDineroEnCaja(): number {
        return this.dineroEnCaja;
    }

    public obtenerCatalogo(): Libro[] {
        return Array.from(this.libros.values());
    }

    public obtenerTransaccionesDeLibro(isbn: string): Transaccion [] {
        const libro = this.buscarLibro(isbn);
        if (!libro) {
            throw new Error("El libro no existe");
        }
        return libro.obtenerTransacciones();
    }
}
