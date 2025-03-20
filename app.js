document.addEventListener("DOMContentLoaded", async function () {
    const response = await fetch("data/players.json");
    const players = await response.json();
    const playersDiv = document.getElementById("players");

    players.forEach(player => {
        let div = document.createElement("div");
        div.className = "player";
        div.innerHTML = `
            <span>${player.name} (${player.club})</span>
            <input type="checkbox" value="${player.id}">
        `;
        playersDiv.appendChild(div);
    });
});

function saveTeam() {
    let selectedPlayers = Array.from(document.querySelectorAll("input:checked"))
        .map(input => input.value);
    localStorage.setItem("team", JSON.stringify(selectedPlayers));
    alert("Состав сохранён!");
}