import React from 'react';
import Image from 'next/image';

const FixtureCard = ({ fixture }) => {
  return (
    <div className="fixture-card">
      <Image src="/images/pitch 1.svg" alt="Поле" width={50} height={50} />
      <h3>{fixture.homeTeam} vs {fixture.awayTeam}</h3>
      <p>Дата: {fixture.date}</p>
      <p>Время: {fixture.time}</p>
    </div>
  );
};

export default FixtureCard;
