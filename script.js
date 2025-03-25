document.addEventListener("DOMContentLoaded", async () => {
    const field = document.getElementById("field");
    const playerList = document.getElementById("player-list");
    const playersUl = document.getElementById("players");

    let players = await fetch("players.json").then(res => res.json());

    // Фиксированные позиции
    let squad = [
        { id: 1, position: "GK" },
        { id: 2, position: "DF" },
        { id: 3, position: "DF" },
        { id: 4, position: "DF" },
        { id: 5, position: "MF" },
        { id: 6, position: "MF" },
        { id: 7, position: "MF" },
        { id: 8, position: "FW" },
        { id: 9, position: "FW" }
    ];

    // Отображение стартового состава
    function renderField() {
        field.innerHTML = "";
        squad.forEach((spot, index) => {
            let player = players.find(p => p.id === spot.id);
            let div = document.createElement("div");
            div.classList.add("player");
            div.innerHTML = 
                <img src="${player.image}" alt="${player.name}">
                <p>${player.name}</p>
            ;
            div.addEventListener("click", () => openPlayerSelection(index, spot.position));
            field.appendChild(div);
        });
    }

    // Открыть список игроков
    function openPlayerSelection(index, position) {
        playersUl.innerHTML = "";
        let availablePlayers = players.filter(p => p.position === position);
        availablePlayers.forEach(p => {
            let li = document.createElement("li");
            li.textContent = p.name;
            li.addEventListener("click", () => replacePlayer(index, p.id));
            playersUl.appendChild(li);
        });
        playerList.style.display = "block";
    }

    // Заменить игрока
    function replacePlayer(index, newPlayerId) {
        squad[index].id = newPlayerId;
        playerList.style.display = "none";
        renderField();
    }

    renderField();
});
