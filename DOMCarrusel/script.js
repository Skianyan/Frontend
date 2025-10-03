// Seleccionar elementos del DOM
const images = document.querySelectorAll('.carousel-image');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Variable para rastrear la imagen actual
let currentIndex = 0;

console.log('Total de imágenes:', images.length);
console.log('Índice actual:', currentIndex);

// Función para mostrar una imagen específica
function showImage(index) {
    // Ocultar todas las imágenes
    images.forEach(image => {
        image.classList.remove('active');
    });
    
    // Mostrar la imagen en el índice especificado
    images[index].classList.add('active');
    
    // NUEVO: Actualizar indicadores
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    indicators[index].classList.add('active');
    
    console.log('Mostrando imagen:', index);
}



// Event listener para el botón siguiente
// Actualizar el event listener del botón siguiente
nextButton.addEventListener('click', function() {
    console.log('Click en siguiente');
    
    // Si está reproduciéndose, pausar
    if (isPlaying) {
        togglePlayPause();
    }
    
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
});


// Event listener para el botón anterior
// Actualizar el event listener del botón anterior
prevButton.addEventListener('click', function() {
    console.log('Click en anterior');
    
    // Si está reproduciéndose, pausar
    if (isPlaying) {
        togglePlayPause();
    }
    
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
});

const indicators = document.querySelectorAll('.indicator');

// Event listeners para los indicadores (actualizado)
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function() {
        console.log('Click en indicador:', index);
        
        // Si está reproduciéndose, pausar
        if (isPlaying) {
            togglePlayPause();
        }
        
        currentIndex = index;
        showImage(currentIndex);
    });
});

const playPauseBtn = document.getElementById('playPauseBtn');
const timerDisplay = document.getElementById('timer');

let intervalId = null;
let isPlaying = false;
let seconds = 0;

// Función para avanzar automáticamente
function autoAdvance() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
    
    // Incrementar contador de segundos
    seconds++;
    timerDisplay.textContent = seconds + 's';
}

function togglePlayPause() {
    if (isPlaying) {
        // PAUSAR
        clearInterval(intervalId);
        intervalId = null;
        playPauseBtn.textContent = '▶️ Iniciar';
        isPlaying = false;
        console.log('Presentación pausada');
    } else {
        // INICIAR
        intervalId = setInterval(autoAdvance, 3000);
        playPauseBtn.textContent = '⏸️ Pausar';
        isPlaying = true;
        seconds = 0;s
        console.log('Presentación iniciada');
    }
}

// Event listener del botón
playPauseBtn.addEventListener('click', togglePlayPause);

const spdButton = document.getElementById('spdButton');

const scrollSpeeds = ['slow','med','fast']

function toggleSpeed(speeds, index){
    
}

spdButton.addEventListener('click', spdButton);
