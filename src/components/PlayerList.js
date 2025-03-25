import React from "react";
import players from "../data/players";
import "./PlayerList.css";

function PlayerList({ onSelect }) {
  return (
    <div className="player-list">
      {players.map((player) => (
        <div key={player.id} className="player-option" onClick={() => onSelect(player)}>
          <img src={player.photo} alt={player.name} className="player-option-image" />
          <p>{player.name}</p>
        </div>
      ))}
    </div>
  );
}

export default PlayerList;
