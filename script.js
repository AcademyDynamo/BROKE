document.addEventListener("DOMContentLoaded", () => {
    const players = [
        { name: "Левандовски", position: "FWD" },
        { name: "Де Брюйне", position: "MID" },
        { name: "Ван Дейк", position: "DEF" },
        { name: "Куртуа", position: "GK" }
    ];

    const playerList = document.getElementById("players");
    const searchInput = document.getElementById("search");

    function renderPlayers(filter = "") {
        playerList.innerHTML = "";
        players
            .filter(player => player.name.toLowerCase().includes(filter.toLowerCase()))
            .forEach(player => {
                const li = document.createElement("li");
                li.textContent = ${player.name} (${player.position});
                li.dataset.position = player.position;
                li.addEventListener("click", () => selectPlayer(player));
                playerList.appendChild(li);
            });
    }

    function selectPlayer(player) {
        const slot = document.querySelector(.player-slot[data-position="${player.position}"]);
        if (slot) {
            slot.textContent = player.name;
            slot.style.backgroundColor = "#4CAF50";
            slot.style.color = "white";
        }
    }

    searchInput.addEventListener("input", () => renderPlayers(searchInput.value));

    renderPlayers();
});
