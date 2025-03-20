document.querySelectorAll(".shirt").forEach((shirt, index) => {
    shirt.addEventListener("click", () => {
        alert(Вы выбрали игрока ${index + 1});
    });
});

document.getElementById("btn1").addEventListener("click", () => {
    alert("Нажата кнопка 1");
});

document.getElementById("btn2").addEventListener("click", () => {
    alert("Нажата кнопка 2");
});

document.getElementById("btn3").addEventListener("click", () => {
    alert("Нажата кнопка 3");
});
