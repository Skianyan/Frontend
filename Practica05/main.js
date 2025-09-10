// Ejercicio 1: Sistema de Inventario de Tienda
let productos = ['laptop', 'mouse', 'teclado', 'monitor'];
let precios = [15000, 500, 800, 3000];

// 1. Agregar un nuevo producto 'webcam' con precio 1200
productos.push("webcam")
precios.push(1200)

console.log(productos);
console.log(precios);

// 2. Encontrar si existe el producto 'mouse' en el inventario
console.log(productos.find(val => val == "mouse"));

// 3. Obtener todos los productos que cuestan menos de 1000 pesos
let menoraMil = precios.filter(precio => precio < 1000);
console.log(menoraMil);
// 4. Calcular el precio total de todos los productos
console.log(precios.reduce((total, num) => total + num, 0));


// Ejercicio 2: Lista de Reproducción Musical
let playlist = ['Bohemian Rhapsody', 'Hotel California', 'Imagine', 'Yesterday'];

//	Agregar ‘Stairway to Heaven’ al inicio de la playlist
playlist.unshift("Stairway to heaven")
console.log(playlist);

//	Eliminar la última canción de la lista
playlist.pop()
console.log(playlist);

//	Verificar si ‘Imagine’ está en la playlist
console.log(playlist.includes("Imagine")); 

//	Crear una nueva playlist solo con las canciones que tienen más de 8 caracteres
let longList = playlist.filter(song => song.length > 8)
console.log(longList);


// Ejercicio 3: Registro de Calificaciones
let calificaciones = [85, 92, 78, 96, 88, 73, 90, 87];

// Encontrar la calificación más alta


// Verificar si todos los estudiantes aprobaron (calificación >= 70)


// Obtener solo las calificaciones sobresalientes (>= 90)


// Calcular el promedio de todas las calificaciones