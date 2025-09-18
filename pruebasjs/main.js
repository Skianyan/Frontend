const calificaciones = {
    matematicas : 84,
    historia: 80,
    ciencias: 93
}

function calif (){
    Object.entries(calificaciones).forEach(([materia, nota]) => {
        console.log(`${materia} : ${nota}`);
    } )
}

const valores = Object.values(calificaciones);
const promedio = valores.reduce((suma, valor) => 
    suma + valor,0 ) / valores.length

const inventario = {
    camisetas: 15,
    pantalones: 8,
    zapatos: 5,
    gorras: 12,
    chaquetas: 3
}

const stockBajo = Object.entries(inventario).filter(([producto,cantidad]) => 
    cantidad < 10).map(([producto, cantidad]) => producto)

console.log("Productos con stock bajo", stockBajo);

valorMax = Math.max(...Object.values(inventario))

console.log(Object.entries(inventario).filter(([producto, cantidad]) =>
    cantidad == valorMax, 0
).map(([producto,cantidad]) => producto))

const config = {
    tema: "oscuro",
    idioma: "español",
    notificaciones: true,
    autoguardado: false
}

const resultado = Object.entries(config)
    .filter(([clave,valor]) => typeof valor === "boolean")
    .map(([clave, valor]) => clave)


const empleados = {
    juan: {
        salario: 60000,
        departamento: "IT"
    },
    maria: {
        salario: 64000,
        departamento: "Marketing"
    }
}

const salarios = Object.values(empleados)
    .map(empleado => empleado.salario)
    .reduce((total,salario) => total + salario,0)

console.log(salarios);