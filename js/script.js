import footballers from '../database.js';

// Функция для создания иконок игроков на поле
function renderPlayers() {
  const playersContainer = document.querySelector('.players');
  
  footballers.forEach((player, index) => {
    const playerElement = document.createElement('div');
    playerElement.classList.add('player-icon');
    playerElement.style.top = ${(index + 1) * 100}px;  // Позиционируем по оси Y
    playerElement.style.left = ${(index + 1) * 100}px; // Позиционируем по оси X
    playerElement.innerHTML = <img src="${player.playerImage}" alt="Player" id="player-${player.id}" />;
    
    playerElement.addEventListener('click', () => handlePlayerClick(player.id));
    playersContainer.appendChild(playerElement);
  });
}

// Обработка клика по иконке игрока
function handlePlayerClick(playerId) {
  const playerElement = document.getElementById(player-${playerId});
  playerElement.classList.toggle('clicked'); // Анимация нажатия на иконку игрока

  // Показываем список игроков, на которых можно заменить выбранного
  const playerList = document.getElementById('playerList');
  playerList.innerHTML = '';  // Очистить список перед добавлением новых данных

  footballers.forEach(player => {
    const listItem = document.createElement('li');
    listItem.innerText = ${player.name} - ${player.position};
    listItem.addEventListener('click', () => replacePlayer(playerId, player.id));
    playerList.appendChild(listItem);
  });
}

// Замена игрока
function replacePlayer(oldPlayerId, newPlayerId) {
  const oldPlayerElement = document.getElementById(player-${oldPlayerId});
  const newPlayer = footballers.find(player => player.id === newPlayerId);
  
  oldPlayerElement.innerHTML = <img src="${newPlayer.playerImage}" alt="Player" id="player-${newPlayer.id}" />;
  oldPlayerElement.classList.remove('clicked');
}

// Активация/деактивация капитанской иконки
function toggleCaptainIcon(playerId) {
  const captainIcons = document.querySelectorAll('.captain');
  captainIcons.forEach(icon => icon.style.opacity = 0.3); // Деактивировать все капитанские иконки
  
  const selectedPlayer = document.getElementById(player-${playerId});
  selectedPlayer.classList.add('captain');
  selectedPlayer.style.opacity = 1;  // Сделать активную иконку капитаном
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  renderPlayers();
});
