// Sample leaderboard data
const leaderboardData = [
    { rank: 1, player: "User1", points: 150 },
    { rank: 2, player: "User2", points: 140 },
    { rank: 3, player: "User3", points: 130 },
    { rank: 4, player: "User4", points: 120 },
    { rank: 5, player: "User5", points: 110 }
];

// Populate leaderboard table
function populateLeaderboard() {
    const leaderboardBody = document.getElementById('leaderboardBody');
    leaderboardBody.innerHTML = ''; // Clear existing rows
    leaderboardData.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="py-2">${entry.rank}</td>
            <td class="py-2">${entry.player}</td>
            <td class="py-2 text-right">${entry.points}</td>
        `;
        leaderboardBody.appendChild(row);
    });
}

// Setup rules button
function setupRulesButton() {
    const rulesButton = document.getElementById('rulesButton');
    const rulesModal = document.getElementById('rulesModal');
    const closeRulesModal = document.getElementById('closeRulesModal');

    rulesButton.addEventListener('click', () => {
        rulesModal.classList.remove('hidden');
    });

    closeRulesModal.addEventListener('click', () => {
        rulesModal.classList.add('hidden');
    });

    document.addEventListener('click', (e) => {
        if (e.target === rulesModal) {
            rulesModal.classList.add('hidden');
        }
    });
}

// Initialize app
async function init() {
    await loadPlayers();
    setupPositionButtons();
    setupRulesButton();
    populateLeaderboard(); // Populate leaderboard on load
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
