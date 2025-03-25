import React from 'react';
import '../styles/App.css';

const PlayerCard = ({ player, onClick, isSelected }) => {
  return (
    <div
      className={player-card ${isSelected ? 'selected' : ''}}
      onClick={() => onClick(player)}
    >
      <img src={/images/${player.image}} alt={player.name} />
      <div className="player-name">{player.name}</div>
    </div>
  );
};

export default PlayerCard;