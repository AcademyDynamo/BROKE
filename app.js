<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fantasy Mini App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <!-- Фоновые элементы -->
    <div class="vector vector-1"></div>
    <div class="vector vector-2"></div>
    <div class="bg-image"></div>

    <!-- Размытие -->
    <div class="blur">
        <div class="blur-mask"></div>
        <div class="blur-filter"></div>
    </div>

    <!-- Заголовок -->
    <div class="header">Fantasy League</div>

    <!-- Футбольное поле -->
    <div class="pitch">
        <div class="player-card" data-id="1" style="top: 100px; left: 150px;">
            <div class="name">Игрок 1</div>
            <button class="button inactive"></button>
        </div>
        <div class="player-card" data-id="2" style="top: 200px; left: 250px;">
            <div class="name">Игрок 2</div>
            <button class="button inactive"></button>
        </div>
    </div>

    <!-- Список возможных замен -->
    <div class="replacement-list hidden">
        <div class="replacement-card" data-id="3">Игрок 3</div>
        <div class="replacement-card" data-id="4">Игрок 4</div>
    </div>

    <script src="script.js"></script>
</body>
</html>
