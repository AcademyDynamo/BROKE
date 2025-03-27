import React from 'react';

function PlayerCard({ player }) {
  return (
    <div className="player-card">
      <h3>{player.name}</h3>
      <p>Команда: {player.team}</p>
      <p>Позиция: {player.position}</p>
      <p>Очки: {player.points}</p>
    </div>
  );
}

export default PlayerCard;
