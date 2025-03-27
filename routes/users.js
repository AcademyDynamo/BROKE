const express = require("express");
const fs = require("fs");
const router = express.Router();

const usersFile = "./data/users.json";

router.post("/register", (req, res) => {
  const { telegram_id, username } = req.body;

  let users = JSON.parse(fs.readFileSync(usersFile, "utf-8"));

  if (users.find((user) => user.telegram_id === telegram_id)) {
    return res.status(400).json({ message: "Пользователь уже зарегистрирован." });
  }

  const newUser = {
    telegram_id,
    username,
    team_id: null,
    total_points: 0,
  };

  users.push(newUser);
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));

  res.json({ message: "Регистрация успешна!", user: newUser });
});

module.exports = router;
