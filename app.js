document.addEventListener("DOMContentLoaded", () => {
    const players = document.querySelectorAll(".player");
    const menu = document.getElementById("playerMenu");
    let activeCaptain = null;

    players.forEach(player => {
        const captainIcon = player.querySelector(".captain-icon");

        // Клик по игроку – показ меню с анимацией
        player.addEventListener("click", (event) => {
            event.stopPropagation(); // Предотвращаем всплытие клика на document
            const rect = player.getBoundingClientRect();
            
            // Устанавливаем позицию и показываем меню
            menu.style.left = ${rect.left + rect.width / 2}px;
            menu.style.top = ${rect.bottom + 10}px;
            menu.style.display = "block";

            // Задержка для плавного появления
            setTimeout(() => {
                menu.style.opacity = "1";
                menu.style.transform = "translateX(-50%) scale(1)";
            }, 10);
        });

        // Клик по капитанской иконке – переключение
        captainIcon.addEventListener("click", (event) => {
            event.stopPropagation();
            if (activeCaptain) activeCaptain.style.opacity = "0.3";
            if (activeCaptain === captainIcon) {
                activeCaptain = null;
            } else {
                captainIcon.style.opacity = "1";
                activeCaptain = captainIcon;
            }
        });
    });

    // Скрытие меню при клике вне игрока или меню
    document.addEventListener("click", (event) => {
        if (!event.target.closest(".player") && !event.target.closest(".player-menu")) {
            menu.style.opacity = "0";
            menu.style.transform = "translateX(-50%) scale(0.8)";
            setTimeout(() => menu.style.display = "none", 300);
        }
    });

    // Останавливаем всплытие при клике внутри меню
    menu.addEventListener("click", (event) => {
        event.stopPropagation();
    });
});
