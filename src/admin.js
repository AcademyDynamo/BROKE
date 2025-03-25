document.getElementById('set-scores-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const playerId = document.getElementById('player').value;
    const goals = document.getElementById('goals').value;
    const assists = document.getElementById('assists').value;

    // Сохранение баллов игрока в JSON (например, через API или в локальное хранилище)
    const players = JSON.parse(localStorage.getItem('players'));
    const player = players.find(p => p.id === parseInt(playerId));
    player.stats.goals = goals;
    player.stats.assists = assists;

    localStorage.setItem('players', JSON.stringify(players));

    alert('Баллы сохранены');
});
