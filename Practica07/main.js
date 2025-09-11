let productos = [ 
    {
        id: 1, 
        nombre: "Laptop Gaming", 
        precio: 25000, 
        categoria: "tecnologia", 
        stock: 5}, 
    {
        id: 2, 
        nombre: "Auriculares", 
        precio: 1500, 
        categoria: "tecnologia", 
        stock: 15}, 
    {
        id: 3, 
        nombre: "Cafetera", 
        precio: 2500, 
        categoria: "hogar", 
        stock: 8}, 
    {
        id: 4, 
        nombre: "Libro JavaScript", 
        precio: 450, 
        categoria: "libros", 
        stock: 20}, 
    {
        id: 5, 
        nombre: "Silla Ergonómica", 
        precio: 3500, 
        categoria: "oficina", 
        stock: 3} 
    ];

let carrito = [ 
    {
        productoId: 1, 
        cantidad: 1
    }, 
    {
        productoId: 2, 
        cantidad: 2
    }, 
    {
        productoId: 4, 
        cantidad: 3
    } 
];

const mxnFormat = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN'
})

// 1. Calcular el total del carrito incluyendo todos los productos
let total = 0

// crear funcion
let returnTotal = carrito.forEach(item => {
    total = total + productos.find((producto) => 
    producto.id === item.productoId).precio * item.cantidad
}
)
console.log('Precio sin descuento: '); 
console.log(mxnFormat.format(total) + ' MXN'); 

// 2. Aplicar un descuento del 15% si el total supera los $5000
if (total > 5000) {
    total = total - (total * .15)
}
console.log('Precio con descuento: '); 
console.log(mxnFormat.format(total) + ' MXN'); 
// 3. Verificar si hay suficiente stock para todos los productos del carrito


// 4. Generar un resumen detallado de la compra


// 5. Encontrar el producto más caro en el carrito