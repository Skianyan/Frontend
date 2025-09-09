// const fruta = {
//     nombre : 'manzana',
//     color : 'rojo',
//     precio : 20.5,
//     quimicos : false,
//     nutrientes : {
//         vitaminaC : false,
//         folato : false,
//         biotina : false,
//     }
// }

// for (propiedad in fruta){
//     console.log(`${propiedad} : con valor de ${fruta[propiedad]} ` );
// }


// for(let key in fruta){
//     if(fruta.hasOwnProperty(key)){
//         if(typeof(fruta[key]) == 'object'){
//             console.log(`${key} : {`);
//             for(let property in fruta[key]){
//                 console.log(`${property} : ${fruta[key][property]}`);    
//             }
//             console.log(`}`);
//         }
//         else{
//             console.log(`${key} : ${fruta[key]}`);
//         }

//     }
// }

const computadora = {
    tipo: 'escritorio',
    modelo: 'ASUS',
    ram: '16',
    procesador: 'Intel Core i5 8300i'
}
// notacion de punto
console.log(computadora.procesador);

// notacion de corchete
console.log(computadora["ram"]);

// acceso dinamico
const prop = 'tipo'
console.log(computadora[prop]);

//cambiar el valor
computadora.ram = 32
console.log(computadora.ram);

computadora["procesador"] = "Intel i9 10500e"
console.log(computadora['procesador']);

// borra propiedades
delete computadora.modelo

//copia superficial
const computadora2 = Object.assign({},computadora)

console.log(computadora2);

delete computadora.ram
// spread operator ...
const copiacompu = {...computadora}

console.log(copiacompu);
