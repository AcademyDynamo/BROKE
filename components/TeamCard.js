import React from 'react';
import Image from 'next/image';

const TeamCard = ({ team }) => {
  return (
    <div className="team-card">
      <Image src={`/images/${team.image}`} alt={team.name} width={100} height={100} />
      <h3>{team.name}</h3>
      <p>Стадион: {team.stadium}</p>
      <p>Город: {team.city}</p>
    </div>
  );
};

export default TeamCard;
