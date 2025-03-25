import React from "react";
import "./styles.css";

const CaptainIcon = ({ isActive, onClick }) => {
  return (
    <div
      className="captain-icon"
      onClick={onClick}
      style={{ opacity: isActive ? 1 : 0.3 }}
    >
      <img src="вставь изображения 2" alt="Captain Icon" />
    </div>
  );
};

export default CaptainIcon;