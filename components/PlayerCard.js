import React from 'react';
import Image from 'next/image';

const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
      <Image src="/images/Group 5.svg" alt="Игрок" width={50} height={50} />
      <Image src={`/images/${player.image}`} alt={player.name} width={100} height={100} />
      <h3>{player.name}</h3>
      <p>Команда: {player.team}</p>
      <p>Позиция: {player.position}</p>
      <p>Цена: {player.price}</p>
    </div>
  );
};

export default PlayerCard;
