import React from "react";
import "../styles/styles.css";

const PlayerIcon = ({ player, onClick }) => {
  return (
    <div className="player-icon" onClick={onClick}>
      <img src="Group 5.svg" alt="Иконка футболиста" className="player-image" />
      <span className="player-name">{player.name}</span>
    </div>
  );
};

export default PlayerIcon;
