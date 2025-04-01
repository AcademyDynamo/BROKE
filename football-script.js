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
    // Logic for showing modal
}

document.addEventListener('DOMContentLoaded', init);
