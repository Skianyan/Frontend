const datosUsuario = {
    nombre : "ana",
    edad: 27,
    email: "ana@email.com",
    salario: 30000,
    activo: true,
    experiencia: true
}

const propNumericas = Object.entries(datosUsuario)
    .filter(([clave,valor]) => typeof valor === "number")
    .reduce((objecto, [clave, valor]) => {
        objeto[clave] = valor;
        return objeto;
    })

const palabras = ["JavaScript", "Python", "Java", "C++"]

const resultado = palabras
    .filter(palabra => palabra.length > 4)
    .map(palabra => palabra.toLocaleLowerCase())
    .sort()
    .join(" | ")

console.log(resultado);


