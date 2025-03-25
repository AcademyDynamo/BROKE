import React, { useState } from "react";
import PlayerCard from "./PlayerCard";
import CaptainIcon from "./CaptainIcon";

const initialPlayers = [
  { id: 1, name: "Player 1", position: "Forward" },
  { id: 2, name: "Player 2", position: "Midfielder" },
  { id: 3, name: "Player 3", position: "Defender" },
];

function Pitch({ captain, setCaptain }) {
  const [players, setPlayers] = useState(initialPlayers);

  const handleCaptainSelect = (id) => {
    setCaptain(id);
  };

  return (
    <div className="pitch">
      {players.map((player) => (
        <div key={player.id} className="player-container">
          <PlayerCard player={player} />
          <CaptainIcon isActive={captain === player.id} onClick={() => handleCaptainSelect(player.id)} />
        </div>
      ))}
    </div>
  );
}

export default Pitch;
