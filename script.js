document.addEventListener("DOMContentLoaded", function() {
    let selectedPosition = null;
    
    // Загружаем данные об игроках
    fetch("players.json")
        .then(response => response.json())
        .then(players => {
            document.querySelectorAll(".position").forEach(position => {
                position.addEventListener("click", function() {
                    selectedPosition = this;
                    openModal(players[this.dataset.pos]);
                });
            });
        });

    function openModal(players) {
        const modal = document.querySelector(".player-modal");
        const playerList = document.getElementById("playerList");
        playerList.innerHTML = "";

        players.forEach(player => {
            const btn = document.createElement("button");
            btn.innerText = player.name;
            btn.onclick = function() {
                selectPlayer(player);
            };
            playerList.appendChild(btn);
        });

        modal.classList.remove("hidden");
    }

    function selectPlayer(player) {
        selectedPosition.innerHTML = <img src="${player.photo}" alt="${player.name}" width="80"><br>${player.name};
        document.querySelector(".player-modal").classList.add("hidden");
    }

    document.getElementById("closeModal").addEventListener("click", function() {
        document.querySelector(".player-modal").classList.add("hidden");
    });

    document.getElementById("confirmTeam").addEventListener("click", function() {
        alert("Команда подтверждена!");
    });
});
