const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const db = new sqlite3.Database("./src/db/fantasy.db");

app.use(cors());
app.use(express.json());

// Создание таблицы, если её нет
db.serialize(() => {
  db.run(CREATE TABLE IF NOT EXISTS players (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    position TEXT,
    club TEXT,
    isCaptain INTEGER DEFAULT 0
  ));
});

// Получение списка игроков
app.get("/players", (req, res) => {
  db.all("SELECT * FROM players", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Установка капитана
app.post("/set-captain", (req, res) => {
  const { playerId } = req.body;
  db.run("UPDATE players SET isCaptain = 0");
  db.run("UPDATE players SET isCaptain = 1 WHERE id = ?", [playerId], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Captain set successfully" });
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));