import React from 'react';
import PlayerCard from '../components/PlayerCard';
import players from '../data/players';

const Players = () => {
  return (
    <div>
      <h1>Игроки</h1>
      {players.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
};

export default Players;
