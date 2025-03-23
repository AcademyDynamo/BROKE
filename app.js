document.addEventListener("DOMContentLoaded", () => {
    const playerCards = document.querySelectorAll(".player-card");
    const substitutes = document.querySelector(".substitutes");
    const playerList = document.querySelector(".player-list");
    let selectedPlayer = null;

    // Список доступных игроков для замены
    const availableSubs = [
        { id: 3, name: "Игрок 3", position: "fw" },
        { id: 4, name: "Игрок 4", position: "fw" }
    ];

    // Обработчик нажатия на игрока
    playerCards.forEach(card => {
        card.addEventListener("click", () => {
            selectedPlayer = card;
            showSubstitutes(card.dataset.position);
        });
    });

    // Показ списка замен
    function showSubstitutes(position) {
        playerList.innerHTML = "";
        availableSubs
            .filter(player => player.position === position)
            .forEach(player => {
                const subCard = document.createElement("div");
                subCard.classList.add("player-card");
                subCard.innerHTML = <span class="name">${player.name}</span>;
                subCard.addEventListener("click", () => replacePlayer(player));
                playerList.appendChild(subCard);
            });

        substitutes.style.display = "block";
    }

    // Замена игрока
    function replacePlayer(newPlayer) {
        if (selectedPlayer) {
            selectedPlayer.querySelector(".name").textContent = newPlayer.name;
            substitutes.style.display = "none";
            selectedPlayer = null;
        }
    }
});
