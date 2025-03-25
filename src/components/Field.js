import React, { useState } from "react";
import PlayerIcon from "./PlayerIcon";
import CaptainIcon from "./CaptainIcon";
import SubstitutionList from "./SubstitutionList";
import footballers from "../data";

const Field = () => {
  const [players, setPlayers] = useState(footballers);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [captain, setCaptain] = useState(null);

  const handleSelectPlayer = (player) => {
    setSelectedPlayer(player);
  };

  const handleSubstitute = (newPlayer) => {
    setPlayers(players.map(p => (p.id === selectedPlayer.id ? newPlayer : p)));
    setSelectedPlayer(null);
  };

  return (
    <div className="field">
      <img src="images/pitch 1.svg" alt="Поле" className="field-image" />
      {players.map(player => (
        <PlayerIcon 
          key={player.id} 
          player={player} 
          onClick={() => handleSelectPlayer(player)} 
        />
      ))}
      <CaptainIcon players={players} captain={captain} setCaptain={setCaptain} />
      {selectedPlayer && <SubstitutionList selectedPlayer={selectedPlayer} onSubstitute={handleSubstitute} />}
    </div>
  );
};

export default Field;
