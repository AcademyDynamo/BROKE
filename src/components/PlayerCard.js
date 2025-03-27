export default function PlayerCard({ player, isSelected }) {
    const playerImage = player.photo
        ? ./public/images/players/${player.photo}
        : "./public/images/Group 5.svg";

    return 
        <div class="player-card">
            <img src="${playerImage}" alt="${player.name}" class="player-img">
            <span class="player-name">${player.name}</span>
            <span class="player-status">${isSelected ? "Выбран" : "+/выбери игрока"}</span>
        </div>
    ;
}
