import React from "react";
import "./styles.css";

const PlayerIcon = ({ player, onClick }) => {
  return (
    <div className="player-icon" onClick={() => onClick(player)}>
      <img src="Group 5.svg" alt={player.name} className="player-img" />
      <span>{player.name}</span>
    </div>
  );
};

export default PlayerIcon;
