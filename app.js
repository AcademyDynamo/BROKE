function showSubstitutes(player) {
    let position = player.dataset.position;
    let menu = document.querySelector('.substitutes-menu');

    // Фильтруем замену по позиции
    document.querySelectorAll('.substitute').forEach(sub => {
        if (sub.dataset.position === position) {
            sub.style.display = "block";
        } else {
            sub.style.display = "none";
        }
    });

    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        setTimeout(() => { menu.style.display = 'none'; }, 300);
    } else {
        let rect = player.getBoundingClientRect();
        menu.style.top = (rect.top + window.scrollY + 30) + 'px';
        menu.style.left = (rect.left + window.scrollX) + 'px';
        menu.style.display = 'block';
        setTimeout(() => { menu.classList.add('show'); }, 10);
    }
}

function swapPlayer(sub) {
    let activePlayer = document.querySelector('.player-card.active');
    if (activePlayer) {
        let playerImg = activePlayer.querySelector('.player-icon');
        let subImg = sub.querySelector('img');

        playerImg.src = subImg.src;
        document.querySelector('.substitutes-menu').classList.remove('show');
        setTimeout(() => { document.querySelector('.substitutes-menu').style.display = 'none'; }, 300);
    }
}

function toggleCaptain(event, icon) {
    event.stopPropagation();
    document.querySelectorAll('.captain-icon').forEach(el => el.classList.remove('active'));
    icon.classList.add('active');
}
