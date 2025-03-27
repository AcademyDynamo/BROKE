import React from 'react';

const PlayerCard = ({ player }) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}>
      <img src={player.image} alt={player.name} style={{ width: '100px', height: '100px' }} />
      <h3>{player.name}</h3>
      <p>{player.position}</p>
    </div>
  );
};

export default PlayerCard;
