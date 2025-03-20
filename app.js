document.querySelectorAll(".shirt").forEach((shirt, index) => {
    shirt.addEventListener("click", () => {
        alert(Вы выбрали игрока ${index + 1});
    });
});
