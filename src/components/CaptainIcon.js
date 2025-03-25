import React, { useState } from 'react';
import '../styles/App.css';

const CaptainIcon = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={captain-icon ${isActive ? 'active' : ''}}
      onClick={handleClick}
    >
      <img
        src="/images/captain-icon.svg"
        alt="Captain"
        className={captain-image ${isActive ? 'active' : ''}}
      />
    </div>
  );
};

export default CaptainIcon;