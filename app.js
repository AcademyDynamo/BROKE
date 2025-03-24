// Показ/скрытие списка замен (только при нажатии на иконку игрока)
function toggleSubstitutes(playerIcon) {
    let menu = document.querySelector('.substitutes-menu');

    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        setTimeout(() => {
            menu.style.display = 'none';
        }, 300);
    } else {
        let rect = playerIcon.getBoundingClientRect();
        menu.style.top = (rect.top + window.scrollY + 30) + 'px';
        menu.style.left = (rect.left + window.scrollX) + 'px';
        menu.style.display = 'block';

        setTimeout(() => {
            menu.classList.add('show');
        }, 10);
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
    let activePlayer = document.querySelector('.player-icon.active');
    if (activePlayer) {
        let playerImg = activePlayer.querySelector('img');
        let subImg = sub.querySelector('img');
        
        playerImg.src = subImg.src;
        
        document.querySelector('.substitutes-menu').classList.remove('show');
        setTimeout(() => {
            document.querySelector('.substitutes-menu').style.display = 'none';
        }, 300);
    }
}
