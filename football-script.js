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
    modal.classList.remove('hidden');
}

// Handle player selection
function selectPlayer(position, player) {
    teamPositions[position] = player;
    updatePositionButton(position, player);
    document.getElementById('playerModal').classList.add('hidden');
}

// Update position button with selected player
function updatePositionButton(position, player) {
    const btn = document.querySelector(`.position-btn[data-position="${position}"]`);
    if (player) {
        btn.innerHTML = `
            <div class="w-full h-full flex flex-col items-center justify-center p-1">
              <img src="${player.playerPhoto}" class="w-10 h-10 rounded-lg mb-1 object-cover">
              <div class="text-xs text-center font-medium truncate w-full">
                ${player.firstName.charAt(0)}. ${player.lastName}
              </div>
            </div>
        `;
    } else {
        btn.innerHTML = '<i class="fas fa-plus text-2xl"></i>';
    }
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('playerModal');
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
