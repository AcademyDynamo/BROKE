import React, { useState } from "react";
import PlayerCard from "./PlayerCard";
import CaptainIcon from "./CaptainIcon";

const initialPlayers = [
    { id: 1, name: "Игрок 1", position: { top: "100px", left: "50px" } },
    { id: 2, name: "Игрок 2", position: { top: "200px", left: "200px" } },
    { id: 3, name: "Игрок 52", position: { top: "200px", left: "50px" } },
    { id: 4, name: "Игрок 42", position: { top: "400px", left: "80px" } },
    { id: 5, name: "Игрок 23", position: { top: "400px", left: "30px" } },
    { id: 6, name: "Игрок 22", position: { top: "700px", left: "100px" } },
    { id: 7, name: "Игрок 21", position: { top: "700px", left: "20px" } },
];

const Pitch = () => {
    const [players, setPlayers] = useState(initialPlayers);
    const [captain, setCaptain] = useState(null);

    const handleSetCaptain = (id) => {
        setCaptain(id);
    };

    return (
        <div className="pitch">
            {players.map((player) => (
                <PlayerCard
                    key={player.id}
                    player={player}
                    isCaptain={captain === player.id}
                    onSetCaptain={() => handleSetCaptain(player.id)}
                />
            ))}
        </div>
    );
};

export default Pitch;
