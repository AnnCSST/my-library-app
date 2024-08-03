import * as readline from 'node:readline';
import { Tienda } from "./tienda";
import { Libro } from "./libro";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const tienda = new Tienda(1000000);

function mostrarMenu() {
    console.log("\n--- Menú ---");
    console.log("1. Agregar libro");
    console.log("2. Agregar stock");
    console.log("3. Vender libro");
    console.log("4. Ver catálogo");
    console.log("5. Ver dinero en caja");
    console.log("6. Salir");
    rl.question("Elija una opción: ", (opcion) => {
        manejarOpcion(opcion);
    });
}

function manejarOpcion(opcion: string) {
    switch (opcion) {
        case "1":
            agregarLibro();
            break;
        case "2":
            agregarStock();
            break;
        case "3":
            venderLibro();
            break;
        case "4":
            verCatalogo();
            break;
        case "5":
            verDineroEnCaja();
            break;
        case "6":
            console.log("Saliendo....");
            rl.close();
            break;
        default:
            console.log("Opción no válida.");
            mostrarMenu();
            break;
    }
}

function agregarLibro() {
    rl.question("Ingrese el ISBN del libro: ", (isbn) => {
        rl.question("Ingrese el título del libro: ", (titulo) => {
            rl.question("Ingrese la imagen del libro: ", (imagen) => {
                rl.question("Ingrese el precio de compra del libro: ", (precioCompra) => {
                    rl.question("Ingrese el precio de venta del libro: ", (precioVenta) => {
                        const libro = new Libro(isbn, titulo, imagen, parseFloat(precioCompra), parseFloat(precioVenta));
                        try {
                            tienda.agregarLibro(libro);
                        } catch (error) {
                            if (error instanceof Error) {
                                console.log(error.message);
                            } else {
                                console.log('Error desconocido:', error);
                            }
                        }
                        mostrarMenu();
                    });
                });
            });
        });
    });
}

function agregarStock() {
    rl.question("Ingrese el ISBN del libro para agregar stock: ", (isbn) => {
        rl.question("Ingrese la cantidad de stock a agregar: ", (cantidad) => {
            try {
                tienda.agregarStockLibro(isbn, parseInt(cantidad));
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message);
                } else {
                    console.log('Error desconocido:', error);
                }
            }
            mostrarMenu();
        });
    });
}

function venderLibro() {
    rl.question("Ingrese el ISBN del libro para vender: ", (isbn) => {
        rl.question("Ingrese la cantidad de libros a vender: ", (cantidad) => {
            try {
                tienda.venderLibro(isbn, parseInt(cantidad));
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message);
                } else {
                    console.log('Error desconocido:', error);
                }
            }
            mostrarMenu();
        });
    });
}

function verCatalogo() {
    const catalogo = tienda.obtenerCatalogo();
    console.log("Catálogo de libros:");
    catalogo.forEach(libro => {
        console.log(`ISBN: ${libro.isbn}, Título: ${libro.titulo}, Stock: ${libro.cantidadActual}`);
    });
    mostrarMenu();
}

function verDineroEnCaja() {
    console.log(`Dinero en caja: $${tienda.obtenerDineroEnCaja()}`);
    mostrarMenu();
}

mostrarMenu();

