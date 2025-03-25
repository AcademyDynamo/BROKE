let captain = null;

// Показать информацию о игроке
function showPlayerInfo(playerId) {
    const players = JSON.parse(localStorage.getItem('players'));
    const player = players.find(p => p.id === playerId);
    const infoDiv = document.getElementById('player-info');
    infoDiv.innerHTML = 
        <h3>${player.name}</h3>
        <p>Позиция: ${player.position}</p>
        <p>Команда: ${player.team}</p>
        <img src="${player.photo}" alt="${player.name}">
    ;
}

// Переключить капитана
function toggleCaptain(playerId) {
    const buttons = document.querySelectorAll('.captain-btn');
    buttons.forEach(button => button.classList.remove('active'));
    if (captain !== playerId) {
        document.querySelector(#player${playerId} .captain-btn).classList.add('active');
        captain = playerId;
    } else {
        captain = null;
    }
}
