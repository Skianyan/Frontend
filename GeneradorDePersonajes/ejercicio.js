        /*
        ====================================
        INSTRUCCIONES PARA EL ESTUDIANTE
        ====================================

        Tu tarea es completar las funciones para hacer funcionar el generador.

        FUNCIONALIDADES REQUERIDAS:
        1. Capturar el evento submit del formulario
        2. Crear tarjetas de personajes dinámicamente
        3. Implementar el sistema de filtros por rareza
        4. Eliminar personajes individuales
        5. Actualizar el contador total

        BONUS (opcional):
        - Validar que el nivel esté entre 1 y 100
        - Limpiar el formulario después de crear un personaje
        - Animaciones al crear/eliminar

        ====================================
        */

        // PASO 1: Seleccionar elementos del DOM
        // TODO: Selecciona todos los elementos necesarios
        const characterForm = // Completa aquí
        const cardsContainer = // Completa aquí
        const totalCount = // Completa aquí
        const filterButtons = // Completa aquí (usa querySelectorAll)

        let currentFilter = 'all'; // Variable para guardar el filtro activo


        // PASO 2: Función para crear una tarjeta de personaje
        // TODO: Esta función debe crear el HTML de una tarjeta completa
        // Usa createElement, classList.add, textContent, appendChild
        function createCharacterCard(name, power, level, rarity, description) {
            // Crear el elemento principal de la tarjeta
            const card = // Completa aquí

            // Agregar las clases necesarias

            // Agregar atributo data-rarity para el filtrado

            // Crear el contenido HTML (puedes usar innerHTML o crear elementos uno por uno)
            // La tarjeta debe incluir:
            // - Nombre del personaje
            // - Nivel
            // - Poder
            // - Descripción
            // - Badge de rareza
            // - Botón de eliminar

            // PISTA: estructura sugerida:
            /*
            card.innerHTML = `
                <div class="card-header">
                    <span class="card-name">${name}</span>
                    <span class="card-level">Nv. ${level}</span>
                </div>
                ... completa el resto ...
            `;
            */

            // Agregar event listener al botón de eliminar


            return card;
        }


        // PASO 3: Manejar el envío del formulario
        // TODO: Agrega un event listener para el evento 'submit'
        // Debe prevenir el comportamiento por defecto, obtener los valores,
        // crear la tarjeta y actualizar el contador



        // PASO 4: Función para actualizar el contador
        // TODO: Cuenta todas las tarjetas visibles y actualiza el DOM
        function updateCounter() {
            // Completa aquí
        }


        // PASO 5: Implementar el sistema de filtros
        // TODO: Agrega event listeners a todos los botones de filtro
        // Usa event delegation o un forEach
        // Debes:
        // - Marcar el botón activo (clase 'active')
        // - Mostrar/ocultar tarjetas según data-rarity
        // - Actualizar el contador


        // PASO 6: Función para filtrar tarjetas
        // TODO: Muestra u oculta tarjetas según la rareza seleccionada
        function filterCards(rarity) {
            // Completa aquí
            // PISTA: usa querySelectorAll y cambia el estilo display
        }


        // PASO 7: Función para eliminar una tarjeta
        // TODO: Esta función debe eliminar la tarjeta del DOM
        // y actualizar el contador
        function deleteCard(card) {
            // Completa aquí
        }
