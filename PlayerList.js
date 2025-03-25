import React from 'react';

const PlayerList = ({ substitutes, replacePlayer }) => {
  return (
    <div className="player-list">
      {substitutes.map(sub => (
        <div key={sub.id} className="substitute" onClick={() => replacePlayer(sub)}>
          {sub.name}
        </div>
      ))}
    </div>
  );
};

export default PlayerList;
