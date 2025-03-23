const tg = window.Telegram.WebApp;
tg.expand(); // Разворачиваем мини-апп

const userPoints = document.getElementById("userPoints");
const teamContainer = document.getElementById("team");
const playersContainer = document.getElementById("players");
const editTeamBtn = document.getElementById("editTeamBtn");
const playerSelection = document.getElementById("playerSelection");
const saveTeamBtn = document.getElementById("saveTeamBtn");

let team = [];
let availablePlayers = [];

// Запрос данных о текущем составе и очках
fetch("/api/user-data")
    .then(response => response.json())
    .then(data => {
        userPoints.textContent = data.points;
        team = data.team;
        renderTeam();
    });

// Запрос доступных игроков
fetch("/api/players")
    .then(response => response.json())
    .then(data => {
        availablePlayers = data;
        renderPlayers();
    });

// Отобразить команду пользователя
function renderTeam() {
    teamContainer.innerHTML = "";
    team.forEach(player => {
        let div = document.createElement("div");
        div.className = "player";
        div.textContent = player.name;
        teamContainer.appendChild(div);
    });
}

// Отобразить список доступных игроков
function renderPlayers() {
    playersContainer.innerHTML = "";
    availablePlayers.forEach(player => {
        let div = document.createElement("div");
        div.className = "player";
        div.textContent = player.name;
        div.onclick = () => togglePlayerSelection(player);
        playersContainer.appendChild(div);
    });
}

// Переключение выбора игрока
function togglePlayerSelection(player) {
    const index = team.findIndex(p => p.id === player.id);
    if (index !== -1) {
        team.splice(index, 1); // Удаляем из команды
    } else if (team.length < 7) {
        team.push(player); // Добавляем в команду
    }
    renderTeam();
}

// Открыть редактор команды
editTeamBtn.onclick = () => {
    playerSelection.classList.toggle("hidden");
};

// Сохранить состав
saveTeamBtn.onclick = () => {
    fetch("/api/save-team", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ team }),
    }).then(response => response.json())
    .then(data => {
        tg.showAlert(data.message);
        playerSelection.classList.add("hidden");
        renderTeam();
    });
};
