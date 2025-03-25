import React, { useState } from "react";
import Pitch from "./components/Pitch";
import "./styles.css";

function App() {
  const [captain, setCaptain] = useState(null);

  return (
    <div className="app">
      <h1 className="header">Fantasy Mini App</h1>
      <Pitch captain={captain} setCaptain={setCaptain} />
    </div>
  );
}

export default App;
