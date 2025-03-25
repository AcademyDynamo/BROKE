import React, { useState } from "react";
import PlayerList from "./PlayerList";
import "./PlayerIcon.css";

function PlayerIcon({ player, onSwap }) {
  const [showList, setShowList] = useState(false);

  return (
    <div className="player-icon" onClick={() => setShowList(!showList)}>
      <img src={player.photo} alt={player.name} className="player-image" />
      <p>{player.name}</p>
      {showList && <PlayerList onSelect={onSwap} />}
    </div>
  );
}

export default PlayerIcon;
