// Database with players and teams
const footballers = [
    {
        id: 1,
        name: "Player 1",
        team: "Team A",
        position: "Forward",
        teamLogo: "images/teamA-logo.svg",
        image: "images/Ресурс 1.svg"
    },
    {
        id: 2,
        name: "Player 2",
        team: "Team B",
        position: "Midfielder",
        teamLogo: "images/teamB-logo.svg",
        image: "images/Ресурс 1.svg"
    },
    {
        id: 3,
        name: "Player 3",
        team: "Team C",
        position: "Defender",
        teamLogo: "images/teamC-logo.svg",
        image: "images/Ресурс 1.svg"
    }
];

// Function to handle player click animation
function handlePlayerClick(playerId) {
    const player = document.getElementById(player-${playerId});
    player.classList.add('clicked');
    
    // Reset animation after a short delay
    setTimeout(() => {
        player.classList.remove('clicked');
    }, 500);

    showSubstitutionList(playerId);
}

// Function to show substitution list
function showSubstitutionList(playerId) {
    const playerList = document.getElementById('player-list');
    playerList.innerHTML = '';  // Clear the list first

    footballers.forEach(player => {
        if (player.id !== playerId) {
            const button = document.createElement('button');
            button.textContent = Substitute with ${player.name};
            button.onclick = () => substitutePlayer(playerId, player.id);
            playerList.appendChild(button);
        }
    });

    playerList.classList.add('active');
}

// Function to substitute player
function substitutePlayer(oldPlayerId, newPlayerId) {
    const oldPlayer = document.getElementById(player-${oldPlayerId});
    const newPlayer = footballers.find(player => player.id === newPlayerId);

    const playerIcon = oldPlayer.querySelector('.player-icon');
    playerIcon.src = newPlayer.image;

    hideSubstitutionList();
}

// Hide substitution list
function hideSubstitutionList() {
    document.getElementById('player-list').classList.remove('active');
}

// Function to toggle captain icon
function toggleCaptain() {
    const captainIcon = document.getElementById('captain-icon');
    const players = document.querySelectorAll('.player .player-icon');

    if (captainIcon.parentElement.classList.contains('active')) {
        captainIcon.parentElement.classList.remove('active');
        players.forEach(player => {
            player.style.opacity = '1';
        });
    } else {
        captainIcon.parentElement.classList.add('active');
        players.forEach(player => {
            player.style.opacity = '0.3';
        });
    }
}

// Event listeners
document.querySelectorAll('.player').forEach(player => {
    player.addEventListener('click', () => {
        const playerId = player.dataset.playerId;
        handlePlayerClick(playerId);
    });
});

document.getElementById('captain-icon').addEventListener('click', toggleCaptain);
