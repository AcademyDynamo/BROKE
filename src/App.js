import React, { useState } from 'react';
import Team from './components/Team';

const App = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: 'Player 1', position: 'Forward', image: '/images/player1.jpg' },
    { id: 2, name: 'Player 2', position: 'Midfielder', image: '/images/player2.jpg' },
    { id: 3, name: 'Player 3', position: 'Defender', image: '/images/player3.jpg' },
   { id: 3, name: 'Player 3', position: 'Defender', image: '/images/player3.jpg' },
    { id: 2, name: 'Player 2', position: 'Midfielder', image: '/images/player2.jpg' },
    { id: 1, name: 'Player 1', position: 'Forward', image: '/images/player1.jpg' }
  ]);

  return (
    <div>
      <h1>Fantasy Premier League Team</h1>
      <Team players={players} />
    </div>
  );
};

export default App;
