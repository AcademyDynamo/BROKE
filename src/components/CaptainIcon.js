import React from "react";

const CaptainIcon = ({ players, captain, setCaptain }) => {
  const handleSetCaptain = (player) => {
    setCaptain(player);
  };

  return (
    <div className="captain-icons">
      {players.map(player => (
        <img
          key={player.id}
          src="captain-icon.svg"
          alt="Капитан"
          className="captain-icon"
          style={{ opacity: captain?.id === player.id ? "1" : "0.3" }}
          onClick={() => handleSetCaptain(player)}
        />
      ))}
    </div>
  );
};

export default CaptainIcon;
