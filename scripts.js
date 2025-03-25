document.addEventListener("DOMContentLoaded", () => {
    const players = [
        { name: "Игрок 1", img: "assets/images/player1.png" },
        { name: "Игрок 2", img: "assets/images/player2.png" },
        { name: "Игрок 3", img: "assets/images/player3.png" },
    ];

    const slots = document.querySelectorAll(".player-slot");
    const playerList = document.getElementById("player-list");
    const playerOptions = document.getElementById("player-options");

    slots.forEach(slot => {
        slot.addEventListener("click", () => {
            playerList.classList.remove("hidden");
            playerOptions.innerHTML = "";
            
            players.forEach(player => {
                const li = document.createElement("li");
                li.textContent = player.name;
                li.addEventListener("click", () => {
                    slot.style.backgroundImage = url(${player.img});
                    slot.textContent = "";
                    playerList.classList.add("hidden");
                });
                playerOptions.appendChild(li);
            });
        });
    });

    document.body.addEventListener("click", (e) => {
        if (!playerList.contains(e.target) && !Array.from(slots).includes(e.target)) {
            playerList.classList.add("hidden");
        }
    });
});
