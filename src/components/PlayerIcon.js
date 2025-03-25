import React from "react";
import "./styles.css";

const PlayerIcon = ({ player, onClick }) => {
  return (
    <div className="player-icon" onClick={() => onClick(player)}>
      <img src="вставь изображения 1" alt={player.name} className="player-img" />
      <span>{player.name}</span>
    </div>
  );
};

export default PlayerIcon;