import React, { useState, useEffect } from 'react';
import PlayerList from './components/PlayerList';
import './styles.css';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('/players.json')
      .then(response => response.json())
      .then(data => setPlayers(data))
      .catch(error => console.error('Error fetching players:', error));
  }, []);

  return (
    <div className="App">
      <h1>Fantasy Premier League</h1>
      <PlayerList players={players} />
    </div>
  );
}

export default App;
