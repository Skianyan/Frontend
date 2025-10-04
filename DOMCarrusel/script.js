// Seleccionar elementos del DOM
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Variable para rastrear la imagen actual
let currentIndex = 0;

const imageData = [
        {url: "https://picsum.photos/600/400?random=1", alt:"Imagen 1"},
        {url: "https://picsum.photos/600/400?random=2", alt:"Imagen 2"},
        {url: "https://picsum.photos/600/400?random=3", alt:"Imagen 3"},
        {url: "https://picsum.photos/600/400?random=4", alt:"Imagen 4"},
        {url: "https://picsum.photos/600/400?random=5", alt:"Imagen 5"}
]

const carousel = document.getElementById('carousel-images')
imageData.forEach((img) => {
    const newImage = document.createElement('img')
    newImage.src = img.url
    newImage.alt = img.alt
    newImage.classList.add('carousel-image')
    carousel.appendChild(newImage)
});

const images = document.querySelectorAll('.carousel-image');
carousel.firstElementChild.classList.add('active')

// console.log('Total de imágenes:', images.length);
// console.log('Índice actual:', currentIndex);

// Conseguir el elemento image-counter
const imgIndex = document.getElementById('image-counter');

// Función para mostrar una imagen específica
function showImage(index) {
    // console.log(images.firstElementChild);
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
    
    // console.log('Mostrando imagen:', index);
    imgIndex.textContent = (index + 1);
}


const imageLength = document.getElementById('image-length')




// Event listener para el botón siguiente
// Actualizar el event listener del botón siguiente
function showNextImage(){
    // console.log('Click en siguiente');
    
    // Si está reproduciéndose, pausar
    if (isPlaying) {
        togglePlayPause();
    }
    
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}

nextButton.addEventListener('click', showNextImage);


// Event listener para el botón anterior
// Actualizar el event listener del botón anterior
function showPreviousImage(){
        // console.log('Click en anterior');
    
    // Si está reproduciéndose, pausar
    if (isPlaying) {
        togglePlayPause();
    }
    
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
}

prevButton.addEventListener('click', showPreviousImage);


const indicators = document.querySelectorAll('.indicator');

// Event listeners para los indicadores (actualizado)
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function() {
        // console.log('Click en indicador:', index);
        
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

// Declarar variables de velocidad
let speedIndex = 0

const speeds = [
    {
        speed: 'Slow',
        interval: '5000'
    },
    {
        speed: 'Medium',
        interval: '3000'
    },
    {
        speed: 'Fast',
        interval: '1000'
    },
]

const spdButton = document.getElementById('spdButton');
spdButton.innerHTML = speeds[speedIndex].speed

function toggleSpeed(){
    if (isPlaying) {
        // PAUSAR
        clearInterval(intervalId);
        intervalId = null;
        playPauseBtn.textContent = '▶️ Iniciar';
        isPlaying = false;
    }
    if (speedIndex == speeds.length - 1){
        speedIndex = 0
        spdButton.innerHTML = speeds[speedIndex].speed
    }
    else {
        speedIndex++
        spdButton.innerHTML = speeds[speedIndex].speed
    }
}

spdButton.addEventListener('click', toggleSpeed);


function togglePlayPause() {
    if (isPlaying) {
        // PAUSAR
        clearInterval(intervalId);
        intervalId = null;
        playPauseBtn.textContent = '▶️ Iniciar';
        isPlaying = false;
        // console.log('Presentación pausada');
    } else {
        // INICIAR
        intervalId = setInterval(autoAdvance, speeds[speedIndex].interval);
        playPauseBtn.textContent = '⏸️ Pausar';
        isPlaying = true;
        seconds = 0;
        // console.log('Presentación iniciada');
    }
}

// Event listener del botón
playPauseBtn.addEventListener('click', togglePlayPause);

// Conseguir el elemento resetButton
const resetButton = document.getElementById('reset-btn');

// Funcion para resetear parametros
function resetFunction(){
    currentIndex = 0
    showImage(0)
    if (isPlaying) {
        togglePlayPause();
    }
    timerDisplay.textContent = 0 + 's';
}

// Event listener del botón
resetButton.addEventListener('click', resetFunction);

// Conseguir el elemento randomButton
const randomButton = document.getElementById('random-btn');

// Funcion para retornar un numero aleatorio que excluya al indice actual
function randomImage(){
    if (isPlaying) togglePlayPause()
    let randomnum;
    do {
        randomnum = Math.floor(Math.random() * images.length);
    } while (randomnum == currentIndex);

    currentIndex = randomnum;
    showImage(randomnum)
}

randomButton.addEventListener('click', randomImage);

addEventListener("keydown", (e) => { 
    if (e.key === " ") togglePlayPause()
    else if (e.key === "ArrowLeft") {
        showPreviousImage()
    }
    else if(e.key === "ArrowRight") {
        showNextImage()
    }
})
  







