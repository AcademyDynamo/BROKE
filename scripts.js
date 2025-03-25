document.addEventListener("DOMContentLoaded", function() {
    // Анимация нажатия на игрока
    const players = document.querySelectorAll('.player');
    players.forEach(player => {
        player.addEventListener('click', function() {
            animatePlayerClick(player);
        });
    });

    function animatePlayerClick(player) {
        player.querySelector('.player-icon').style.transform = 'scale(1.2)';
        setTimeout(() => {
            player.querySelector('.player-icon').style.transform = 'scale(1)';
        }, 200);
    }

    // Замена игрока
    const substituteButtons = document.querySelectorAll('.substitute-button');
    substituteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const substituteId = this.parentElement.getAttribute('data-substitute-id');
            replacePlayer(substituteId);
        });
    });

    function replacePlayer(substituteId) {
        const playerToReplace = document.querySelector(".player"); // Берем первого попавшегося
        const newPlayer = footballers.find(player => player.id === parseInt(substituteId));

        if (newPlayer) {
            playerToReplace.querySelector('.player-icon').src = newPlayer.image;
            playerToReplace.setAttribute('data-player-id', newPlayer.id);
        }
    }

    // Функция выбора капитана
    const captainIcons = document.querySelectorAll('.captain-icon');
    captainIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            toggleCaptain(icon);
        });
    });

    function toggleCaptain(clickedIcon) {
        captainIcons.forEach(icon => {
            icon.classList.remove('active');
            icon.style.opacity = '0.3';
        });

        clickedIcon.classList.add('active');
        clickedIcon.style.opacity = '1';
    }
});
