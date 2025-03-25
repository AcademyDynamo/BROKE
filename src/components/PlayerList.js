import React from 'react';
import '../styles/App.css';

const PlayerList = ({ players, onPlayerChange }) => {
  return (
    <div className="player-list">
      {players.map((player) => (
        <div key={player.id} className="player-item" onClick={() => onPlayerChange(player)}>
          <img src={/images/${player.image}} alt={player.name} />
          <span>{player.name}</span>
        </div>
      ))}
    </div>
  );
};

export default PlayerList;