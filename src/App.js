import React from 'react';
import Field from './components/Field';
import CaptainIcon from './components/CaptainIcon';
import PlayerList from './components/PlayerList';
import './styles/App.css';

const App = () => {
  const [availablePlayers, setAvailablePlayers] = React.useState([
    { id: 1, name: 'John Doe', image: 'Ресурс 1.svg', team: 'Team A' },
    { id: 2, name: 'Jane Smith', image: 'Ресурс 1.svg', team: 'Team B' },
    { id: 3, name: 'Tom Brown', image: 'Ресурс 1.svg', team: 'Team A' }
    { id: 4, name: 'Tom Brown', image: 'Ресурс 1.svg', team: 'Team A' }
    { id: 5, name: 'Tom Brown', image: 'Ресурс 1.svg', team: 'Team A' }
    { id: 6, name: 'Tom Brown', image: 'Ресурс 1.svg', team: 'Team A' }
    { id: 7, name: 'Tom Brown', image: 'Ресурс 1.svg', team: 'Team A' }
  ]);
  
  const [selectedPlayer, setSelectedPlayer] = React.useState(null);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  const handlePlayerChange = (newPlayer) => {
    console.log('Player changed:', newPlayer);
    setSelectedPlayer(newPlayer);
  };

  return (
    <div className="app">
      <h1>Fantasy Football</h1>
      <CaptainIcon />
      <Field selectedPlayer={selectedPlayer} onPlayerClick={handlePlayerClick} />
      {selectedPlayer && (
        <PlayerList 
          players={availablePlayers.filter(player => player.id !== selectedPlayer.id)} 
          onPlayerChange={handlePlayerChange} 
        />
      )}
    </div>
  );
};

export default App;