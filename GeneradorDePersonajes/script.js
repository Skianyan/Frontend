
    /*
====================================
PRÁCTICA: GENERADOR DE PERSONAJES
====================================

INSTRUCCIONES PARA EL ESTUDIANTE:

Tu tarea es completar las funciones JavaScript para hacer funcionar
este generador de personajes interactivo.

OBJETIVOS DE APRENDIZAJE:
✓ Manipulación del DOM (crear, modificar y eliminar elementos)
✓ Manejo de eventos (submit, click)
✓ Trabajo con formularios
✓ Uso de data attributes
✓ Filtrado dinámico de elementos
✓ Actualización de contadores

FUNCIONALIDADES REQUERIDAS:
1. Capturar datos del formulario cuando se envía
2. Crear tarjetas de personajes dinámicamente
3. Implementar filtros por rareza
4. Permitir eliminar personajes
5. Actualizar contador automáticamente

BONUS (OPCIONAL):
- Limpiar el formulario después de crear un personaje
- Validar que no se creen personajes sin datos
- Agregar efectos visuales (mostrar mensaje de confirmación)
- Persistir datos en localStorage

TIEMPO ESTIMADO: 60-90 minutos

====================================
*/

    // PASO 1: SELECCIÓN DE ELEMENTOS DEL DOM
    // TODO: Completa la selección de todos los elementos necesarios

    const characterForm = document.getElementById('characterForm');
    const cardsContainer = document.getElementById('cardsContainer');
    const totalCount = document.getElementById('totalCount');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Inputs del formulario
    const charNameInput = document.getElementById('charName');
    const charPowerInput = document.getElementById('charPower');
    const charLevelInput = document.getElementById('charLevel');
    const charRarityInput = document.getElementById('charRarity');
    const charDescriptionInput = document.getElementById('charDescription');

    let currentFilter = 'all'; // Guarda el filtro activo


    // PASO 2: CREAR TARJETA DE PERSONAJE
    /*
    TODO: Completa esta función para crear una tarjeta de personaje

    Requisitos:
    - Debe crear un elemento div para la tarjeta
    - Asignar estilos inline según la rareza
    - Incluir: nombre, nivel, poder, descripción, badge de rareza
    - Agregar botón de eliminar con su evento
    - Usar data-rarity para el filtrado
    - Retornar el elemento creado

    PISTA: Usa template strings (backticks) para crear el HTML interno
    */
    function createCharacterCard(name, power, level, rarity, description) {
        const card = document.createElement('div');
        card.setAttribute('data-rarity', rarity);

        // Estilos base de la tarjeta
        let borderColor = '#9e9e9e';
        let rarityBg = '#9e9e9e';
        let cardBg = 'white';

        // Determinar colores según rareza
        if (rarity === 'rare') {
            borderColor = '#2196F3';
            rarityBg = '#2196F3';
        } else if (rarity === 'epic') {
            borderColor = '#9C27B0';
            rarityBg = '#9C27B0';
        } else if (rarity === 'legendary') {
            borderColor = '#FF9800';
            rarityBg = '#FF9800';
            cardBg = 'linear-gradient(135deg, #fff9e6 0%, #ffffff 100%)';
        }

        card.style.cssText = `
        background: ${cardBg};
        border-radius: 15px;
        padding: 20px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        border: 3px solid ${borderColor};
        transition: transform 0.3s;
    `;

        // TODO: Completa el contenido HTML de la tarjeta
        card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #f0f0f0;">
            <span style="font-size: 1.5em; font-weight: bold; color: #333;">${name}</span>
            <span style="background: #2a5298; color: white; padding: 5px 15px; border-radius: 20px; font-weight: bold;">Nv. ${level}</span>
        </div>
        <div style="font-size: 1.1em; color: #666; margin-bottom: 10px; font-style: italic;">⚡ ${power}</div>
        <div style="color: #777; line-height: 1.5; margin-bottom: 15px;">${description}</div>
        <span style="display: inline-block; padding: 5px 15px; border-radius: 20px; font-size: 0.85em; font-weight: bold; text-transform: uppercase; margin-bottom: 10px; background: ${rarityBg}; color: white;">${rarity}</span>
        <div style="margin-top: 10px;">
            <button class="delete-btn" style="padding: 8px 15px; border: none; border-radius: 8px; cursor: pointer; background: #f44336; color: white; width: 100%; font-weight: bold;">🗑️ Eliminar</button>
        </div>
    `;

        // TODO: Agregar evento al botón de eliminar
        const deleteBtn = card.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            deleteCard(card);
        });

        // Efecto hover
        card.addEventListener('mouseenter', function() {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.4)';
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
        });

        return card;
    }


    // PASO 3: MANEJAR ENVÍO DEL FORMULARIO
    /*
    TODO: Completa el event listener del formulario

    Debe:
    1. Prevenir el comportamiento por defecto del formulario
    2. Obtener los valores de todos los inputs
    3. Validar que los datos sean correctos
    4. Llamar a createCharacterCard con los datos
    5. Agregar la tarjeta al contenedor
    6. Limpiar el formulario
    7. Actualizar el contador
    8. Eliminar el mensaje de "sin personajes" si existe
    */

    characterForm.addEventListener('submit', function(e) {
        // TODO: Completa aquí
        e.preventDefault();

        // Obtener valores
        const name = charNameInput.value.trim();
        const power = charPowerInput.value.trim();
        const level = charLevelInput.value;
        const rarity = charRarityInput.value;
        const description = charDescriptionInput.value.trim();

        // Validación básica
        if (!name || !power || !level || !description) {
            alert('Por favor completa todos los campos');
            return;
        }

        // Eliminar mensaje de "sin personajes" si existe
        const emptyState = cardsContainer.querySelector('div[style*="grid-column"]');
        if (emptyState) {
            emptyState.remove();
        }

        // Crear y agregar la tarjeta
        const card = createCharacterCard(name, power, level, rarity, description);
        cardsContainer.appendChild(card);

        // Limpiar formulario
        characterForm.reset();

        // Actualizar contador
        updateCounter();

        // Aplicar filtro actual si hay uno activo
        if (currentFilter !== 'all') {
            filterCards(currentFilter);
        }
    });


    // PASO 4: ACTUALIZAR CONTADOR
    /*
    TODO: Completa esta función

    Debe contar todas las tarjetas VISIBLES (display !== 'none')
    y actualizar el elemento totalCount
    */
    function updateCounter() {
        // TODO: Completa aquí
        const cards = cardsContainer.querySelectorAll('[data-rarity]');
        const visibleCards = Array.from(cards).filter(card => card.style.display !== 'none');
        totalCount.textContent = visibleCards.length;
    }


    // PASO 5: SISTEMA DE FILTROS
    /*
    TODO: Implementa el sistema de filtros

    Para cada botón de filtro:
    1. Agregar event listener al click
    2. Actualizar el filtro activo (currentFilter)
    3. Remover clase 'active' de todos los botones
    4. Agregar clase 'active' al botón clickeado
    5. Llamar a filterCards con la rareza seleccionada
    6. Actualizar el contador

    PISTA: Usa forEach para recorrer todos los botones
    */

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // TODO: Completa aquí
            const rarity = this.getAttribute('data-rarity');
            currentFilter = rarity;

            // Remover 'active' de todos
            filterButtons.forEach(btn => {
                btn.style.transform = 'scale(1)';
                btn.style.boxShadow = 'none';
            });

            // Marcar este como activo
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';

            // Filtrar tarjetas
            filterCards(rarity);

            // Actualizar contador
            updateCounter();
        });
    });


    /* // PASO 6: FILTRAR TARJETAS
    /*
    TODO: Completa esta función

    Debe mostrar/ocultar tarjetas según la rareza:
    - Si rarity es 'all', mostrar todas las tarjetas
    - Si no, mostrar solo las que coincidan con data-rarity

    PISTA:
    - Usa querySelectorAll('[data-rarity]') para obtener todas las tarjetas
    - Cambia la propiedad style.display ('block' o 'none')
    */
    function filterCards(rarity) {
        // TODO: Completa aquí
        const allCards = cardsContainer.querySelectorAll('[data-rarity]');

        allCards.forEach(card => {
            if (rarity === 'all' || card.getAttribute('data-rarity') === rarity) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }


    /* // PASO 7: ELIMINAR TARJETA
    /*
    TODO: Completa esta función

    Debe:
    1. Eliminar la tarjeta del DOM
    2. Actualizar el contador
    3. Si no quedan tarjetas, mostrar mensaje de "sin personajes"
    */
    function deleteCard(card) {
        // TODO: Completa aquí
        card.remove();
        updateCounter();

        // Si no quedan tarjetas, mostrar mensaje
        const remainingCards = cardsContainer.querySelectorAll('[data-rarity]');
        if (remainingCards.length === 0) {
            cardsContainer.innerHTML = '<div style="text-align: center; color: white; padding: 60px 20px; font-size: 1.2em; opacity: 0.8; grid-column: 1/-1;">No hay personajes aún. ¡Crea tu primer personaje!</div>';
        }
    }
