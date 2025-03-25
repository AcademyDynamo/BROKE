import React, { useState } from "react";
import CaptainIcon from "./CaptainIcon";

const PlayerCard = ({ player, isCaptain, onSetCaptain }) => {
    const [active, setActive] = useState(false);

    return (
        <div
            className="player-card"
            style={{ top: player.position.top, left: player.position.left }}
            onClick={() => setActive(!active)}
        >
            <img src="Group 5.svg" alt="Игрок" className="player-icon" />
            <p className="name">{player.name}</p>
            <CaptainIcon active={isCaptain} onClick={onSetCaptain} />
        </div>
    );
};

export default PlayerCard;
