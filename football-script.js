let players = [];
let teamPositions = {
    'Goalkeeper': null,
    'Defender1': null,
    'Defender2': null,
    'Midfielder1': null,
    'Midfielder2': null,
    'Forward1': null,
    'Forward2': null
};

// Sample leaderboard data
const leaderboardData = [
    { rank: 1, player: "User1", points: 150 },
    { rank: 2, player: "User2", points: 140 },
    { rank: 3, player: "User3", points: 130 },
    { rank: 4, player: "User4", points: 120 },
    { rank: 5, player: "User5", points: 110 }
];

// Load players from JSON
async function loadPlayers() {
    try {
        const response = await fetch('players.json');
        players = (await response.json()).players;
        console.log('Players loaded:', players.length);
    } catch (error) {
        console.error('Error loading players:', error);
    }
}

// Initialize app
async function init() {
    await loadPlayers();
    setupPositionButtons();
    setupFooterNavigation();
    populateLeaderboard(); // Populate leaderboard on load
}

// Set up position button click handlers
function setupPositionButtons() {
    document.querySelectorAll('.position-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const position = this.dataset.position;
            showPlayerSelection(position);
        });
    });
}

// Show player selection modal
function showPlayerSelection(position) {
    const modal = document.getElementById('playerModal');
    const playerList = document.getElementById('playerList');

    // Filter available players by position and exclude already selected ones
    const selectedPlayerIds = Object.values(teamPositions)
        .filter(p => p !== null)
        .map(p => p.id);
    const filteredPlayers = players.filter(p =>
        p.position === position.split(/\d+/)[0] &&
        !selectedPlayerIds.includes(p.id)
    );

    // Clear and populate player list
    playerList.innerHTML = '';
    if (filteredPlayers.length === 0) {
        playerList.innerHTML = '<div class="p-4 text-center text-gray-500">No available players</div>';
    } else {
        filteredPlayers.forEach(player => {
            const playerEl = document.createElement('div');
            playerEl.className = 'player-item p-2 border-b cursor-pointer hover:bg-gray-100';
            playerEl.innerHTML = `
                <div class="flex items-center">
                  <img src="${player.playerPhoto}" class="w-10 h-10 rounded-lg mr-3">
                  <div>
                    <div class="font-medium">${player.firstName} ${player.lastName}</div>
                    <div class="text-sm text-gray-600">${player.club}</div>
                  </div>
                </div>
            `;
            playerEl.addEventListener('click', () => selectPlayer(position, player));
            playerList.appendChild(playerEl);
        });
    }
    modal
