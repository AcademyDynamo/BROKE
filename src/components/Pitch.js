import PlayerCard from "./PlayerCard.js";
import players from "../data/players.json" assert { type: "json" };

export default function Pitch() {
    const playersHTML = players.map(player => {
        // Установка случайного флага, что игрок выбран (для демонстрации)
        const isSelected = Math.random() > 0.5; // Примерная логика для проверки состояния (можно заменить на настоящую)
        return PlayerCard({ player, isSelected });
    }).join("");

    return 
        <div class="pitch-container">
            <img src="./public/images/pitch 1.svg" alt="Football Pitch" class="pitch">
            <div class="players">${playersHTML}</div>
        </div>
    ;
}
