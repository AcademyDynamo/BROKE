// Показ/скрытие списка замен
function toggleSubstitutes(player) {
    let menu = document.querySelector('.substitutes-menu');
    
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
    } else {
        menu.style.top = player.offsetTop + 'px';
        menu.style.left = (player.offsetLeft + 50) + 'px';
        menu.classList.add('show');
    }
}

// Логика смены капитана
function toggleCaptain(event, icon) {
    event.stopPropagation();
    
    document.querySelectorAll('.captain-icon').forEach(el => el.classList.remove('active'));
    icon.classList.add('active');
}

// Логика замены игрока
function swapPlayer(sub) {
    let activePlayer = document.querySelector('.player-card.active');
    if (activePlayer) {
        let playerImg = activePlayer.querySelector('img:first-child');
        let subImg = sub.querySelector('img');
        
        playerImg.src = subImg.src;
        
        document.querySelector('.substitutes-menu').classList.remove('show');
    }
}
