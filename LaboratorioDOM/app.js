// PASO 3.1: Seleccionar los elementos que vamos a usar
const inputTarea = document.getElementById('input-tarea');
const btnAgregar = document.getElementById('btn-agregar');
const listaTareas = document.getElementById('lista-tareas');
const numeroTareas = document.getElementById('numero-tareas');

console.log('Elementos seleccionados:', {
    inputTarea,
    btnAgregar,
    listaTareas,
    numeroTareas
});

// PASO 4.1: Crear la función para agregar tareas
function agregarTarea() {
    const textoTarea = inputTarea.value;
    
    if (textoTarea === '') {
        alert('Por favor escribe una tarea');
        return;
    }
    
    const nuevaTarea = document.createElement('li');
    nuevaTarea.className = 'tarea-item';
    nuevaTarea.textContent = textoTarea;
    
    // Agregar estilo inicial para animación
    nuevaTarea.style.opacity = '0';
    nuevaTarea.style.transform = 'translateX(-20px)';
    
    const btnEliminar = document.createElement('button');
    btnEliminar.className = 'btn-eliminar';
    btnEliminar.textContent = 'Eliminar';
    nuevaTarea.appendChild(btnEliminar);

    const btnCheck = document.createElement('button')
    btnCheck.className = 'btn-check'
    btnCheck.textContent = '✓'
    nuevaTarea.appendChild(btnCheck)

    listaTareas.appendChild(nuevaTarea);
    
    // Animar la entrada
    setTimeout(function() {
        nuevaTarea.style.transition = 'all 0.3s';
        nuevaTarea.style.opacity = '1';
        nuevaTarea.style.transform = 'translateX(0)';
    }, 10);
    
    inputTarea.value = '';
    actualizarContador();
}

// PASO 5.1: Agregar evento click al botón
btnAgregar.addEventListener('click', agregarTarea);

// PASO 5.2: Agregar evento para presionar Enter
inputTarea.addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter') {
        agregarTarea();
    }
});

// PASO 6.1: Agregar función de eliminar usando delegación de eventos
listaTareas.addEventListener('click', function(evento) {
    // Verificar si el click fue en un botón eliminar
    if (evento.target.classList.contains('btn-eliminar')) {
        // Obtener el elemento padre (el <li>)
        const tareaItem = evento.target.parentElement;
        console.log(evento.target);
        // Eliminar el elemento
        tareaItem.remove();
        
        // Actualizar el contador
        actualizarContador();
    }
});

// PASO 7.1: Función para actualizar el contador
function actualizarContador() {
    // Contar cuántos <li> hay en la lista
    const totalTareas = listaTareas.children.length;
    
    // Actualizar el texto del contador
    numeroTareas.textContent = totalTareas;
}
