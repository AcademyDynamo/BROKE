const substitutes = [
    { id: 8, name: "Игрок 8", position: "goalkeeper", img: "вставь изображения" },
    { id: 9, name: "Игрок 9", position: "defender", img: "вставь изображения" }
];

// Открытие списка замен рядом с игроком
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
    menu.style.top = playerCard.offsetTop + "px";
    menu.style.left = playerCard.offsetLeft + 100 + "px";
    menu.classList.add("show");
}

// Установка капитана
function setCaptain(event, icon) {
    event.stopPropagation();
    document.querySelectorAll(".captain-icon").forEach(el => el.classList.remove("active"));
    icon.classList.add("active");
}
