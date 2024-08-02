// Imports de clases Tienda y Libro
import { Tienda } from "./tienda";
import { Libro } from "./libro";

console.log("Inicio del programa");

// Crear instancia de Tienda con una inversión inicial 
const tienda = new Tienda(1000000);
console.log("Tienda creada");

// Crear un nuevo libro
const libro1 = new Libro("999-666-333", "La rueda del tiempo", "Imagen01.jpg", 50, 100);
console.log("Libro creado");

// Agregar el libro al catálogo de la tienda
tienda.agregarLibro(libro1);
console.log("Libro agregado al catálogo");

// Agregar stock al libro con 20 ejemplares.
tienda.agregarStockLibro("999-666-333", 20);
console.log(`Dinero en caja después de agregar stock: $${tienda.obtenerDineroEnCaja()}`);

// Vender 5 ejemplares del libro.
tienda.venderLibro("999-666-333", 5);
console.log(`Dinero en caja después de vender: $${tienda.obtenerDineroEnCaja()}`);

// Verificar el stock restante
const libroBuscado = tienda.buscarLibro("999-666-333");
if (libroBuscado) {
  console.log(`Stock restante del libro: ${libroBuscado.cantidadActual}`);
}

// Mostrar catálogo
const catalogo = tienda.obtenerCatalogo();
console.log("Catálogo de libros en la tienda:");
catalogo.forEach(libro => {
  console.log(`ISBN: ${libro.isbn}, Título: ${libro.titulo}, Stock: ${libro.cantidadActual}`);
});