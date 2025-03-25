import React, { useState } from 'react';
import Field from './components/Field';
import PlayerList from './components/PlayerList';

const App = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: 'Игрок 1', position: 'FW', captain: false },
    { id: 2, name: 'Игрок 2', position: 'MF', captain: false },
    { id: 3, name: 'Игрок 3', position: 'DF', captain: false },
    { id: 4, name: 'Игрок 4', position: 'GK', captain: false },
    { id: 5, name: 'Игрок 5', position: 'DF', captain: false },
    { id: 6, name: 'Игрок 6', position: 'MF', captain: false },
    { id: 7, name: 'Игрок 7', position: 'FW', captain: false }
  ]);

  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [substitutes, setSubstitutes] = useState([
    { id: 8, name: 'Запас 1', position: 'MF' },
    { id: 9, name: 'Запас 2', position: 'FW' }
  ]);

  const selectPlayer = (player) => {
    setSelectedPlayer(player);
  };

  const replacePlayer = (sub) => {
    if (selectedPlayer) {
      setPlayers(players.map(p => (p.id === selectedPlayer.id ? { ...sub, captain: selectedPlayer.captain } : p)));
      setSubstitutes([...substitutes.filter(s => s.id !== sub.id), selectedPlayer]);
      setSelectedPlayer(null);
    }
  };

  const toggleCaptain = (id) => {
    setPlayers(players.map(p => ({ ...p, captain: p.id === id })));
  };

  return (
    <div className="app">
      <Field players={players} selectPlayer={selectPlayer} toggleCaptain={toggleCaptain} />
      {selectedPlayer && <PlayerList substitutes={substitutes} replacePlayer={replacePlayer} />}
    </div>
  );
};

export default App;
