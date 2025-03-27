import React from 'react';
import FixtureCard from '../components/FixtureCard';
import fixtures from '../data/fixtures';

const Home = () => {
  return (
    <div>
      <h1>Матчи</h1>
      {fixtures.map((fixture) => (
        <FixtureCard key={fixture.id} fixture={fixture} />
      ))}
    </div>
  );
};

export default Home;
