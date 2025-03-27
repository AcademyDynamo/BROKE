document.addEventListener("DOMContentLoaded", async () => {
    const playersContainer = document.getElementById("players");

    // Загружаем данные об игроках
    const players = await fetch("./src/data/players.json").then(res => res.json());

    players.forEach(player => {
        const playerDiv = document.createElement("div");
        playerDiv.classList.add("player-card");

        const playerImg = document.createElement("img");
        playerImg.src = `./public/images/players/${player.photo}` || "./public/images/Group 5.svg";
        playerImg.alt = player.name;

        const playerName = document.createElement("span");
        playerName.textContent = player.name;

        playerDiv.appendChild(playerImg);
        playerDiv.appendChild(playerName);
        playersContainer.appendChild(playerDiv);
    });
});
