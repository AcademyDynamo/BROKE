import React from 'react';
import '../styles/Field.css';

const Field = ({ players }) => {
    return (
        <div className="field">
            <img src="/images/pitch 1.svg" alt="Field" className="field-image" />
            {players.map(player => (
                <img
                    key={player.id}
                    src={player.image}
                    alt={player.name}
                    className="player-icon"
                    style={{ left: `${player.position.x}%`, top: `${player.position.y}%` }}
                />
            ))}
        </div>
    );
};

export default Field;
