document.addEventListener("DOMContentLoaded", () => {
    loadPlayers();
});

let team = [];
let substitutes = [];

function loadPlayers() {
    fetch("data/teams.json")
        .then(response => response.json())
        .then(data => {
            team = data.team;
            substitutes = data.substitutes;
            renderPlayers();
        });
}

function renderPlayers() {
    const playersContainer = document.getElementById("players");
    playersContainer.innerHTML = "";

    team.forEach((player, index) => {
        const playerDiv = document.createElement("div");
        playerDiv.classList.add("player");
        playerDiv.innerHTML = img src="public/images/Group 5.svg" alt="${player.name}"
                               <div class="captain" onclick="setCaptain(${index})"></div>;
        playerDiv.style.left = ${player.x}px;
        playerDiv.style.top = ${player.y}px;
        playerDiv.onclick = () => openSubstitutes(index);
        playersContainer.appendChild(playerDiv);
    });
}

function setCaptain(index) {
    document.querySelectorAll(".captain").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".captain")[index].classList.add("active");
}

function openSubstitutes(index) {
    const subMenu = document.getElementById("substitutes");
    subMenu.innerHTML = "";
    substitutes.forEach((sub, subIndex) => {
        const subDiv = document.createElement("div");
        subDiv.innerHTML = img src="public/images/Group 5.svg" alt="${sub.name}";
        subDiv.onclick = () => swapPlayers(index, subIndex);
        subMenu.appendChild(subDiv);
    });
    subMenu.classList.remove("hidden");
}

function swapPlayers(playerIndex, subIndex) {
    [team[playerIndex], substitutes[subIndex]] = [substitutes[subIndex], team[playerIndex]];
    document.getElementById("substitutes").classList.add("hidden");
    renderPlayers();
}
