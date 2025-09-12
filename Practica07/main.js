// Contexto: Eres el coordinador académico de una universidad y necesitas analizar el 
// rendimiento de los estudiantes para generar reportes y tomar decisiones sobre becas y programas de apoyo.

let estudiantes = [ 
    {id: 1, nombre: "Ana García", edad: 20, carrera: "Ingeniería", semestre: 6, 
        calificaciones: [95, 87, 92, 89, 94], asistencia: 95, beca: false}, 
    {id: 2, nombre: "Carlos López", edad: 22, carrera: "Medicina", semestre: 8, 
        calificaciones: [78, 82, 75, 80, 77], asistencia: 88, beca: true}, 
    {id: 3, nombre: "María Rodríguez", edad: 19, carrera: "Derecho", semestre: 4, 
        calificaciones: [92, 95, 88, 91, 93], asistencia: 97, beca: false}, 
    {id: 4, nombre: "Diego Hernández", edad: 21, carrera: "Ingeniería", semestre: 6, 
        calificaciones: [85, 79, 88, 82, 86], asistencia: 92, beca: false}, 
    {id: 5, nombre: "Laura Martín", edad: 23, carrera: "Medicina", semestre: 10, 
        calificaciones: [88, 92, 86, 90, 89], asistencia: 94, beca: true} ];

// 1. Calcular el promedio general de cada estudiante
function calcularPromedio(estudiante){
    return estudiante.calificaciones.reduce((total, item) => total + item, 0 ) / estudiante.calificaciones.length
}

function calcularPromedioTotal(estudiantes){
    let totalPromedio
    estudiantes.forEach(element => {
        
    });
}

console.log(calcularPromedio({id: 1, nombre: "Ana García", edad: 20, carrera: "Ingeniería", semestre: 6, 
        calificaciones: [95, 87, 92, 89, 94], asistencia: 95, beca: false})); 


// 2. Identificar estudiantes candidatos a beca (promedio >= 90 y asistencia >= 95)


// 3. Agrupar estudiantes por carrera y calcular el promedio por carrera


// 4. Encontrar al estudiante con mejor rendimiento general


// 5. Generar una lista de estudiantes en riesgo académico (promedio < 80)