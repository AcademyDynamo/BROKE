import React, { useState } from "react";
import PlayerIcon from "./PlayerIcon";
import players from "../data/players";
import "./Field.css";

function Field() {
  const [team, setTeam] = useState(players.slice(0, 7));

  const swapPlayer = (index, newPlayer) => {
    const newTeam = [...team];
    newTeam[index] = newPlayer;
    setTeam(newTeam);
  };

  return (
    <div className="field">
      {team.map((player, index) => (
        <PlayerIcon key={player.id} player={player} onSwap={(newPlayer) => swapPlayer(index, newPlayer)} />
      ))}
    </div>
  );
}

export default Field;
