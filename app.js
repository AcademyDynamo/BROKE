const players = [
    { id: 1, name: "Игрок 1" },
    { id: 2, name: "Игрок 2" },
    { id: 3, name: "Игрок 3" },
    { id: 4, name: "Игрок 4" },
    { id: 5, name: "Игрок 5" },
    { id: 6, name: "Игрок 6" },
];

const playersContainer = document.getElementById("players");

players.forEach(player => {
    const div = document.createElement("div");
    div.classList.add("player");
    div.innerText = player.name;
    div.onclick = () => div.classList.toggle("selected");
    playersContainer.appendChild(div);
});

document.getElementById("submitTeam").onclick = () => {
    const selectedPlayers = [...document.querySelectorAll(".player.selected")].map(p => p.innerText);
    alert("Вы выбрали: " + selectedPlayers.join(", "));
};
