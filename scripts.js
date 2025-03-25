// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    // Делаем все игроки кликабельными
    const players = document.querySelectorAll('.player');
    players.forEach(player => {
        player.addEventListener('click', function() {
            animatePlayerClick(player);
        });
    });

    // Функция для анимации нажатия на иконку игрока
    function animatePlayerClick(player) {
        player.querySelector('.player-icon').style.transform = 'scale(1.2)';
        setTimeout(() => {
            player.querySelector('.player-icon').style.transform = 'scale(1)';
        }, 200);
    }

    // Функция для замены игрока
    const substituteButtons = document.querySelectorAll('.substitute-button');
    substituteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const substituteId = this.parentElement.getAttribute('data-substitute-id');
            const playerToReplace = document.querySelector(#player-${substituteId});
            replacePlayer(playerToReplace);
        });
    });

    // Замена игрока
    function replacePlayer(playerToReplace) {
        const newPlayerId = '3'; // Выбирайте нового игрока (в данном случае Player 3)
        const newPlayer = footballers.find(player => player.id === parseInt(newPlayerId));

        playerToReplace.querySelector('.player-icon').src = newPlayer.image;
        playerToReplace.setAttribute('data-player-id', newPlayer.id);
    }

    // Активировать и деактивировать иконку капитана
    const captainIcons = document.querySelectorAll('.captain-icon');
    captainIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            toggleCaptain(icon);
        });
    });

    // Функция для включения/выключения иконки капитана
    function toggleCaptain(clickedIcon) {
        const allCaptainIcons = document.querySelectorAll('.captain-icon');
        allCaptainIcons.forEach(icon => {
            if (icon !== clickedIcon) {
                icon.style.opacity = '0.3';
            }
        });

        clickedIcon.style.opacity = '1';
    }
});
