const players = [
    { id: 1, name: "Игрок 1", img: "" },
    { id: 2, name: "Игрок 2", img: "" },
    { id: 3, name: "Игрок 3", img: "" },
    { id: 4, name: "Игрок 4", img: "" },
    { id: 5, name: "Игрок 5", img: "" },
    { id: 6, name: "Игрок 6", img: "" },
];

const playersContainer = document.getElementById("players");
const imageUpload = document.getElementById("playerImageUpload");

players.forEach(player => {
    const div = document.createElement("div");
    div.classList.add("player");
    div.innerText = player.name;
    div.onclick = () => div.classList.toggle("selected");

    playersContainer.appendChild(div);
});

imageUpload.addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const selectedPlayers = document.querySelectorAll(".player.selected");
            selectedPlayers.forEach(player => {
                player.innerHTML = <img src="${e.target.result}" alt="Игрок">;
            });
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById("submitTeam").onclick = () => {
    const selectedPlayers = [...document.querySelectorAll(".player.selected")].map(p => p.innerText || "Игрок с фото");
    alert("Вы выбрали: " + selectedPlayers.join(", "));
};
