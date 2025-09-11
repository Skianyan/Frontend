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

// solucion vieja
// let total = 0
// let returnTotal = carrito.forEach(item => {
//     total = total + productos.find((producto) => 
//     producto.id === item.productoId).precio * item.cantidad
// })

function calcularTotal (productos, carrito) {
    return carrito.reduce ((total, item) => {
        const producto = productos.find(p => p.id === item.productoId)
        return total + (producto.precio * item.cantidad)
    }, 0)
}

total = calcularTotal(productos,carrito)
console.log('Precio sin descuento: '); 
console.log(mxnFormat.format(total) + ' MXN'); 

// 2. Aplicar un descuento del 15% si el total supera los $5000
function applyDiscount(total) {
        return total > 5000 ? total = total * .15 : total
}

let discountValue = applyDiscount(total)
console.log('Precio con descuento: '); 
console.log(mxnFormat.format(total - discountValue) + ' MXN'); 

// 3. Verificar si hay suficiente stock para todos los productos del carrito

// solucion vieja
// let stockComparison = []
// let isEnough = carrito.forEach(item => {
//     stockComparison.push(productos.find((producto) => producto.id === item.productoId).stock >= item.cantidad)
// }
// )
// if (stockComparison.every(item => item === true)) {
//     console.log("Hay stock suficiente");
// }

// Compara si hay suficiente de un item de un carrito
function hasEnoughStock (item){
    return productos.find((producto) => producto.id === item.productoId).stock >= item.cantidad
}
// Compara si hay suficiente de todos los items de un carrito
function hasEnoughforCart (cart){
        let compareToStock = cart.map(item => hasEnoughStock(item) === true)
    return compareToStock.every(item => item === true)
}

console.log(hasEnoughforCart(carrito));

// 4. Generar un resumen detallado de la compra
function returnProductFromID(id) {
    return productos.find((producto) => producto.id === id)
}

function resumenDeCompra (cart) {
    cart.forEach(item => {
        const product = returnProductFromID(item.productoId); 
        const {nombre, precio} = product;
        console.table(nombre, `     ${precio} x ${item.cantidad}`);
    });
    let total = calcularTotal(productos, cart)
    console.log(`TOTAL:             ${total}`);
}
resumenDeCompra(carrito)

// 5. Encontrar el producto más caro en el carrito
function mostExpensiveIteminCart(cart) {
    cartObjects = []
    cart.forEach(item => {
        const product = returnProductFromID(item.productoId);
        cartObjects.push(product)
    })
    let expensiveItem = cartObjects.reduce((expensiveItem, product) =>
        product.price < expensiveItem ? product : expensiveItem);
    return expensiveItem
}
console.log(mostExpensiveIteminCart(carrito));