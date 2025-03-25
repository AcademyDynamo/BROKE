import React from "react";
import footballers from "../data";

const SubstitutionList = ({ selectedPlayer, onSubstitute }) => {
  return (
    <div className="substitution-list">
      <h3>Выберите замену для {selectedPlayer.name}:</h3>
      {footballers.map(player => (
        player.id !== selectedPlayer.id && (
          <div key={player.id} onClick={() => onSubstitute(player)} className="substitution-option">
            {player.name} ({player.team})
          </div>
        )
      ))}
    </div>
  );
};

export default SubstitutionList;
