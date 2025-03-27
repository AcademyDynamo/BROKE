import React from 'react';
import '../styles/PlayerCard.css';

const PlayerCard = ({ player }) => {
    return (
        <div className="player-card">
            <img src={player.image} alt={player.name} className="player-card-image" />
            <div className="player-card-info">
                <h3>{player.name}</h3>
            </div>
        </div>
    );
};

export default PlayerCard;
