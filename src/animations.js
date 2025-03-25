// Анимация смены игроков на поле
function animatePlayerSwap(playerIn, playerOut) {
    const playerInElement = document.getElementById(player${playerIn});
    const playerOutElement = document.getElementById(player${playerOut});
    
    // Анимация выхода игрока
    playerOutElement.classList.add('player-out');
    
    // Ожидаем завершения анимации
    setTimeout(() => {
        // Меняем местами иконки
        const tempSrc = playerInElement.querySelector('img').src;
        const tempAlt = playerInElement.querySelector('img').alt;
        playerInElement.querySelector('img').src = playerOutElement.querySelector('img').src;
        playerInElement.querySelector('img').alt = playerOutElement.querySelector('img').alt;
        playerOutElement.querySelector('img').src = tempSrc;
        playerOutElement.querySelector('img').alt = tempAlt;
        
        // Применяем анимацию для входящего игрока
        playerInElement.classList.add('player-in');
        
        // Снимаем анимацию с исходящего игрока
        setTimeout(() => {
            playerOutElement.classList.remove('player-out');
            playerInElement.classList.remove('player-in');
        }, 500); // Длительность анимации
    }, 500); // Длительность анимации выхода игрока
}

// Анимация кнопки при нажатии
function animateButtonPress(buttonId) {
    const button = document.getElementById(buttonId);
    button.classList.add('button-pressed');
    
    // Убираем эффект после 200ms
    setTimeout(() => {
        button.classList.remove('button-pressed');
    }, 200);
}

// Пример анимации для кнопки "К" при смене капитана
function animateCaptainButton(buttonId) {
    const button = document.getElementById(buttonId);
    
    if (button.classList.contains('active')) {
        button.classList.add('captain-active');
    } else {
        button.classList.remove('captain-active');
    }
}
