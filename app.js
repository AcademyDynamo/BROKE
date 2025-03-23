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

// Отображение карточек игроков
players.forEach(player => {
    const div = document.createElement("div");
    div.classList.add("player-card");
    div.setAttribute("data-id", player.id);

    const img = document.createElement("img");
    img.src = player.img || "default-avatar.png"; // Заглушка
    img.alt = player.name;

    const name = document.createElement("div");
    name.classList.add("name");
    name.innerText = player.name;

    div.appendChild(img);
    div.appendChild(name);
    div.onclick = () => div.classList.toggle("selected");

    playersContainer.appendChild(div);
});

// Загрузка изображения для выбранных игроков
imageUpload.addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const selectedPlayers = document.querySelectorAll(".player-card.selected img");
            selectedPlayers.forEach(img => img.src = e.target.result);
        };
        reader.readAsDataURL(file);
    }
});

// Подтверждение состава
document.getElementById("submitTeam").onclick = () => {
    const selectedPlayers = [...document.querySelectorAll(".player-card.selected")].map(p => p.innerText || "Игрок с фото");
    alert("Вы выбрали: " + selectedPlayers.join(", "));
};
