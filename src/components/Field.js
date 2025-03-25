import React, { useState, useEffect } from "react";
import PlayerIcon from "./PlayerIcon";
import CaptainIcon from "./CaptainIcon";
import "./styles.css";

const Field = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [captain, setCaptain] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/players")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
        const captainPlayer = data.find((p) => p.isCaptain === 1);
        setCaptain(captainPlayer);
      });
  }, []);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  const handleSetCaptain = (player) => {
    fetch("http://localhost:5000/set-captain", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerId: player.id }),
    }).then(() => {
      setCaptain(player);
    });
  };

  return (
    <div className="field">
      <img src="images/pitch.svg" alt="Football Field" className="field-img" />
      {players.map((player) => (
        <div key={player.id} className="player-slot">
          <PlayerIcon player={player} onClick={handlePlayerClick} />
          <CaptainIcon
            isActive={captain?.id === player.id}
            onClick={() => handleSetCaptain(player)}
          />
        </div>
      ))}
    </div>
  );
};

export default Field;
