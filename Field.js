import React from 'react';
import PlayerCard from './PlayerCard';
import './Field.css';

const Field = ({ players, selectPlayer, toggleCaptain }) => {
  return (
    <div className="pitch">
      {players.map(player => (
        <PlayerCard key={player.id} player={player} selectPlayer={selectPlayer} toggleCaptain={toggleCaptain} />
      ))}
    </div>
  );
};

export default Field;
