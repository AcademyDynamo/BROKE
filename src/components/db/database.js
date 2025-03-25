const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./src/db/fantasy.db");

db.serialize(() => {
  db.run("DELETE FROM players"); // Очистка перед добавлением новых данных
  const players = [
    ["Лионель Месси", "Нападающий", "Интер Майами"],
    ["Килиан Мбаппе", "Нападающий", "ПСЖ"],
    ["Кевин Де Брюйне", "Полузащитник", "Манчестер Сити"],
    ["Вирджил ван Дейк", "Защитник", "Ливерпуль"],
    ["Тибо Куртуа", "Вратарь", "Реал Мадрид"],
  ];

  players.forEach((player) => {
    db.run("INSERT INTO players (name, position, club) VALUES (?, ?, ?)", player);
  });
});

db.close();