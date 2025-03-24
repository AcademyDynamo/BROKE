const substitutes = [
    { id: 8, name: "Игрок 8", position: "goalkeeper", img: "images/player8.svg" },
    { id: 9, name: "Игрок 9", position: "defender", img: "images/player9.svg" }
];

let currentCaptain = null;

// Показ списка замен
function showSubstitutes(playerCard) {
    const position = playerCard.dataset.position;
    const filteredSubs = substitutes.filter(sub => sub.position === position);

    const subList = document.getElementById("substitutes-list");
    subList.innerHTML = "";

    filteredSubs.forEach(sub => {
        const subItem = document.createElement("div");
        subItem.classList.add("substitute");
        subItem.innerHTML = <img src="${sub.img}" alt="${sub.name}"><span>${sub.name}</span>;
        subItem.onclick = () => substitutePlayer(playerCard, sub);
        subList.appendChild(subItem);
    });

    const menu = document.getElementById("substitutes-menu");
    menu.classList.add("show");
}

// Замена игрока
function substitutePlayer(playerCard, sub) {
    playerCard.querySelector(".name").innerText = sub.name;
    playerCard.querySelector("img").src = sub.img;
    document.getElementById("substitutes-menu").classList.remove("show");
}

// Выбор капитана
function toggleCaptain(captain) {
    if (currentCaptain === captain) {
        captain.classList.remove("active");
        currentCaptain = null;
    } else {
        document.querySelectorAll(".captain").forEach(el => el.classList.remove("active"));
        captain.classList.add("active");
        currentCaptain = captain;
    }
}
