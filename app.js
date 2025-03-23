// Получаем все элементы с классом .name (имена игроков)
const names = document.querySelectorAll('.name');

// Функция для обработки начала перетаскивания
names.forEach(name => {
    name.addEventListener('dragstart', (event) => {
        event.target.classList.add('dragging'); // Добавляем класс "dragging"
        event.dataTransfer.setData("text", event.target.innerText); // Сохраняем текст для перемещения
    });

    // Функция для обработки окончания перетаскивания
    name.addEventListener('dragend', () => {
        name.classList.remove('dragging'); // Убираем класс "dragging"
    });

    // Разрешаем элементу быть перетаскиваемым
    name.addEventListener('dragover', (event) => {
        event.preventDefault();
        const card = event.target.closest('.player-card');
        if (card) {
            const offsetX = event.clientX - card.offsetLeft;
            const offsetY = event.clientY - card.offsetTop;
            card.style.transform = translate(${offsetX - card.offsetWidth / 2}px, ${offsetY - card.offsetHeight / 2}px);
        }
    });

    name.addEventListener('dragend', (event) => {
        const card = event.target.closest('.player-card');
        if (card) {
            const rect = card.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            card.style.transform = translate(${x - card.offsetWidth / 2}px, ${y - card.offsetHeight / 2}px);
        }
    });
});
