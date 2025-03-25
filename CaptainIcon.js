import React from "react";

function CaptainIcon({ isActive, onClick }) {
  return (
    <div
      className="captain-icon"
      onClick={onClick}
      style={{ opacity: isActive ? "1" : "0.3" }}
    >
      captain-icon.svg
    </div>
  );
}

export default CaptainIcon;
