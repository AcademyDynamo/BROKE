import React from 'react';
import Field from './Field';
import PlayerCard from './PlayerCard';

const Team = ({ players }) => {
  return (
    <div>
      <Field players={players} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default Team;
