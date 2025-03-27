document.addEventListener("DOMContentLoaded", async () => {
    const playersContainer = document.getElementById("players");

    try {
        // Загружаем данные об игроках с правильным путем
        const players = await fetch("/public/data/players.json") // Обновленный путь
            .then(res => {
                if (!res.ok) throw new Error("Failed to load players data.");
                return res.json();
            });

        players.forEach(player => {
            const playerDiv = document.createElement("div");
            playerDiv.classList.add("player-card");

            const playerImg = document.createElement("img");
            playerImg.src = ./public/images/players/${player.photo} || "./public/images/Group 5.svg";
            playerImg.alt = player.name;

            const playerName = document.createElement("span");
            playerName.textContent = player.name;

            playerDiv.appendChild(playerImg);
            playerDiv.appendChild(playerName);
            playersContainer.appendChild(playerDiv);
        });
    } catch (err) {
        console.error("Ошибка загрузки данных об игроках:", err);
    }
});
