const substitutes = [
    { id: 8, name: "Игрок 8", surname: "Фамилия", position: "goalkeeper", img: "images/player8.svg" },
    { id: 9, name: "Игрок 9", surname: "Фамилия", position: "defender", img: "images/player9.svg" },
    { id: 10, name: "Игрок 10", surname: "Фамилия", position: "midfielder", img: "images/player10.svg" },
    { id: 11, name: "Игрок 11", surname: "Фамилия", position: "forward", img: "images/player11.svg" }
];

function showSubstitutes(playerCard) {
    const position = playerCard.dataset.position;
    const filteredSubs = substitutes.filter(sub => sub.position === position);

    const subList = document.getElementById("substitutes-list");
    subList.innerHTML = "";

    filteredSubs.forEach(sub => {
        const subItem = document.createElement("div");
        subItem.classList.add("substitute");
        subItem.innerHTML = <img src="${sub.img}" alt="${sub.name}"><span>${sub.name} ${sub.surname}</span>;
        subItem.onclick = () => substitutePlayer(playerCard, sub);
        subList.appendChild(subItem);
    });

    document.getElementById("substitutes-menu").style.display = "block";
}

function substitutePlayer(playerCard, sub) {
    playerCard.querySelector(".name").innerText = ${sub.name};
    playerCard.querySelector("img").src = sub.img;
    document.getElementById("substitutes-menu").style.display = "none";
}
