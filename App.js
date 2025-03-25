import React, { useState } from "react";
import Pitch from "./components/Pitch";
import "./styles.css";

const App = () => {
    return (
        <div className="app">
            <h1 className="header">Fantasy League</h1>
            <Pitch />
        </div>
    );
};

export default App;
