const substitutes = [
    { id: 8, name: "Игрок 8", position: "goalkeeper", img: "Group 5.svg" },
    { id: 9, name: "Игрок 9", position: "defender", img: "Group 5.svg" }
];

// Загрузка случайного изображения в group-5
document.querySelectorAll(".player-img").forEach(img => {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    img.src = images/изображения ${randomNum}.svg;
});

// Анимация появления списка замен
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
    playerCard.querySelector(".player-img").src = sub.img;
    document.getElementById("substitutes-menu").classList.remove("show");
}

// Установка капитана
function setCaptain(event, icon) {
    event.stopPropagation(); // Предотвращаем вызов showSubstitutes

    // Убираем капитана у всех игроков
    document.querySelectorAll(".captain-icon").forEach(el => el.classList.remove("active"));
    
    // Назначаем капитана выбранному игроку
    icon.classList.add("active");
}
