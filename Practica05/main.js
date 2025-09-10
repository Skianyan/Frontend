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
console.log(Math.max(...calificaciones));

// Verificar si todos los estudiantes aprobaron (calificación >= 70)
console.log(calificaciones.every(num => num >= 70)); 

// Obtener solo las calificaciones sobresalientes (>= 90)
console.log(calificaciones.filter(num => num >= 90));

// Calcular el promedio de todas las calificaciones
total = calificaciones.reduce((total, num) => total + num, 0);
console.log(total / calificaciones.length);

// Ejercicio 4: Organizador de Tareas

// Estás desarrollando una app de productividad para organizar tareas diarias.

let tareas = ['comprar víveres', 'llamar al dentista', 'terminar proyecto', 'hacer ejercicio'];

let completadas = [false, true, false, false];

// Tareas:

// Agregar una nueva tarea ‘revisar emails’
tareas.push('revisar emails')
completadas.push(false)
console.log(tareas);
console.log(completadas);

// Marcar la primera tarea como completada
completadas.splice(0,1,true)
console.log(completadas);

// Obtener solo las tareas que NO están completadas
console.log(completadas.filter(comp => comp == false)); 

// Contar cuántas tareas faltan por completar
faltantes = completadas.filter(comp => comp == false).length
console.log(faltantes);

// Ejercicio 5: Catálogo de Libros

let libros = [

    {titulo: 'Cien años de soledad', autor: 'García Márquez', año: 1967},

    {titulo: '1984', autor: 'George Orwell', año: 1949},

    {titulo: 'Don Quijote', autor: 'Cervantes', año: 1605},

    {titulo: 'El principito', autor: 'Saint-Exupéry', año: 1943}

];

// Agregar un nuevo libro: {titulo: ‘Rayuela’, autor: ‘Cortázar’, año: 1963}
libros.push({titulo: 'Rayuela', autor: 'Cortázar', año: 1963})
console.log(libros);

// Encontrar el libro más antiguo
yrs = []
libros.forEach(val => yrs.push(val.año))
console.log(Math.min(...yrs));

// Obtener todos los libros publicados después de 1950
console.log(libros.filter(libro => libro.año > 1950));

// Crear un array solo con los títulos de todos los libros
nombres = []
libros.forEach(val => nombres.push(val.titulo))
console.log(nombres);
