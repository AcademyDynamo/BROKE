import React from "react";

function PlayerCard({ player }) {
  return (
    <div className="player-card">
      <div className="player-icon">Group 5.svg</div>
      <div className="name">{player.name}</div>
    </div>
  );
}

export default PlayerCard;
