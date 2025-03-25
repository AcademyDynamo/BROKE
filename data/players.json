const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:");

// Создаем таблицу игроков
db.serialize(() => {
  db.run(
    CREATE TABLE players (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      position TEXT,
      club TEXT
    )
  );

  const stmt = db.prepare("INSERT INTO players (name, position, club) VALUES (?, ?, ?)");

  const players = [
    ["Player 1", "Forward", "Club A"],
    ["Player 2", "Midfielder", "Club B"],
    ["Player 3", "Defender", "Club C"],
  ];

  players.forEach((player) => stmt.run(...player));
  stmt.finalize();
});

module.exports = db;
