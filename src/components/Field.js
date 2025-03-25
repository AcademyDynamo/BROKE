import React, { useState } from 'react';
import PlayerCard from './PlayerCard';
import { footballers } from '../database/footballers.json';
import '../styles/App.css';

const Field = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  return (
    <div className="field">
      <img src="/images/pitch.svg" alt="Football field" />
      <div className="players">
        {footballers.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            onClick={handlePlayerClick}
            isSelected={selectedPlayer && selectedPlayer.id === player.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Field;