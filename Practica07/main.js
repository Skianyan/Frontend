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
    let totalPromedio = []
    estudiantes.forEach(estudiante => {
        promEstudiante = calcularPromedio(estudiante)
        totalPromedio.push(promEstudiante)
    });
    return totalPromedio.reduce((total,item) => total + item, 0) / totalPromedio.length
}

console.log(calcularPromedioTotal(estudiantes)); 

// 2. Identificar estudiantes candidatos a beca (promedio >= 90 y asistencia >= 95)
function candidatosABecar(estudiantes){
    return estudiantes.filter(estudiante => (estudiante.asistencia >= 95 && calcularPromedio(estudiante) >= 90) )
}
console.log(candidatosABecar(estudiantes));

// 3. Agrupar estudiantes por carrera y calcular el promedio por carrera
function promEstudiantesPorCarrera(estudiantes){
    const resultado = {};
    
    estudiantes.forEach(estudiante => {
        const carrera = estudiante.carrera;
        const promedioEstudiante = calcularPromedio(estudiante)
        
        if (!resultado[carrera]) {
            resultado[carrera] = {
                puntTotal: 0,
                cantidad: 0,
                promedio: 0
            };
        }
        
        resultado[carrera].puntTotal += promedioEstudiante;
        resultado[carrera].cantidad++;
        resultado[carrera].promedio = resultado[carrera].puntTotal / resultado[carrera].cantidad;
    });
    
    return resultado;
}

const promediosFinales = promEstudiantesPorCarrera(estudiantes);
console.log("Promedios por carrera:");
for (const carrera in promediosFinales) {
    console.log(`${carrera}: ${promediosFinales[carrera].promedio}`);
}

// 4. Encontrar al estudiante con mejor rendimiento general
function estudianteConMejorRendimiento(estudiantes){
    let mejorEstudiante = estudiantes.reduce((mejor, estudiante) =>
        estudiante.asistencia + calcularPromedio(estudiante) > mejor.asistencia + calcularPromedio(mejor) 
        ? estudiante : mejor
    )
    return mejorEstudiante
}
console.log(estudianteConMejorRendimiento(estudiantes));

// 5. Generar una lista de estudiantes en riesgo académico (promedio < 80)
function riesgoAcademico(estudiantes){
    return estudiantes.filter(estudiante => (calcularPromedio(estudiante) < 80) )
}

console.log(riesgoAcademico(estudiantes));

