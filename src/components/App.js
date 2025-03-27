import React, { useState } from 'react';
import Field from './Field';
import PlayerCard from './PlayerCard';
import '../styles/App.css';

const App = () => {
    const [players, setPlayers] = useState([
        { id: 1, name: 'Игрок 1', position: { x: 10, y: 20 }, image: '/images/player1.jpg' },
        { id: 2, name: 'Игрок 2', position: { x: 30, y: 50 }, image: '/images/player2.jpg' },
        // ... другие игроки
        { id: 11, name: 'Игрок 11', position: { x: 80, y: 90 }, image: '/images/player11.jpg' },
    ]);

    return (
        <div className="app">
            <Field players={players} />
            <div className="player-cards">
                {players.map(player => (
                    <PlayerCard key={player.id} player={player} />
                ))}
            </div>
        </div>
    );
};

export default App;
