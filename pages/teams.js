import React from 'react';
import TeamCard from '../components/TeamCard';
import teams from '../data/teams';

const Teams = () => {
  return (
    <div>
      <h1>Команды</h1>
      {teams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </div>
  );
};

export default Teams;
