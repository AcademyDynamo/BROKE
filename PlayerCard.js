import React from 'react';
import CaptainIcon from './CaptainIcon';

const PlayerCard = ({ player, selectPlayer, toggleCaptain }) => {
  return (
    <div className="player-card" onClick={() => selectPlayer(player)}>
      <img src="Group 5.svg" alt="player" className="player-image" />
      <span className="name">{player.name}</span>
      <CaptainIcon active={player.captain} onClick={() => toggleCaptain(player.id)} />
    </div>
  );
};

export default PlayerCard;
