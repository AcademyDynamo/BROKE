import React from 'react';

const Field = ({ players }) => {
  return (
    <div style={{ position: 'relative', backgroundImage: 'url(/images/pitch 1.svg)', width: '800px', height: '600px' }}>
      {players.map((player) => (
        <img
          key={player.id}
          src={player.image}
          alt={player.name}
          style={{
            position: 'absolute',
            left: `${Math.random() * 700}px`, // Случайное положение X
            top: `${Math.random() * 500}px`, // Случайное положение Y
            width: '50px', // Размер изображения игрока
            height: '50px',
          }}
        />
      ))}
    </div>
  );
};

export default Field;
