document.addEventListener("DOMContentLoaded", () => {
    fetch("data/scores.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("jsonEditor").value = JSON.stringify(data, null, 4);
        });
});

function saveData() {
    alert("Сохранение данных вручную! Обновите JSON-файл в проекте.");
}
