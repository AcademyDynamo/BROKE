import React from 'react';
import CaptainIcon from './CaptainIcon';

const PlayerCard = ({ player, selectPlayer, toggleCaptain }) => {
  return (
    <div className="player-card" onClick={() => selectPlayer(player)}>
      <img src="вставь изображение 2" alt="player" className="player-image" />
      <span className="name">{player.name}</span>
      <CaptainIcon active={player.captain} onClick={() => toggleCaptain(player.id)} />
    </div>
  );
};

export default PlayerCard;
