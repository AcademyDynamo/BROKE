const express = require("express");
const fs = require("fs");
const router = express.Router();

const teamsFile = "./data/teams.json";
const usersFile = "./data/users.json";

router.post("/create", (req, res) => {
  const { telegram_id } = req.body;

  let teams = JSON.parse(fs.readFileSync(teamsFile, "utf-8"));
  let users = JSON.parse(fs.readFileSync(usersFile, "utf-8"));

  if (teams.find((team) => team.telegram_id === telegram_id)) {
    return res.status(400).json({ message: "Команда уже создана." });
  }

  const newTeam = {
    team_id: `team_${telegram_id}`,
    telegram_id,
    team_name: `Fantasy Team #${Math.floor(Math.random() * 1000)}`,
    captain_id: null,
    squad: [],
  };

  teams.push(newTeam);
  fs.writeFileSync(teamsFile, JSON.stringify(teams, null, 2));

  users.find((user) => user.telegram_id === telegram_id).team_id = newTeam.team_id;
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));

  res.json({ message: "Команда создана!", team: newTeam });
});

module.exports = router;
