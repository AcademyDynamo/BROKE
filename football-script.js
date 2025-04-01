// Open Rules Modal
function openRulesModal() {
    const modal = document.getElementById('rulesModal');
    modal.classList.remove('hidden');
}

// Close Rules Modal
function closeRulesModal() {
    const modal = document.getElementById('rulesModal');
    modal.classList.add('hidden');
}

// Open Leaderboard Modal
function openLeaderboardModal() {
    const modal = document.getElementById('leaderboardModal');
    modal.classList.remove('hidden');
}

// Close Leaderboard Modal
function closeLeaderboardModal() {
    const modal = document.getElementById('leaderboardModal');
    modal.classList.add('hidden');
}

// Setup footer navigation
function setupFooterNavigation() {
    const rulesButton = document.getElementById('rulesButton');
    const leaderboardButton = document.getElementById('leaderboardButton');

    rulesButton.addEventListener('click', () => {
        openRulesModal();
    });

    leaderboardButton.addEventListener('click', () => {
        openLeaderboardModal();
    });

    // Close modals when clicking the close button
    document.getElementById('closeRulesModal').addEventListener('click', closeRulesModal);
    document.getElementById('closeLeaderboardModal').addEventListener('click', closeLeaderboardModal);

    // Close modals when clicking outside the modal content
    document.addEventListener('click', (e) => {
        const rulesModal = document.getElementById('rulesModal');
        const leaderboardModal = document.getElementById('leaderboardModal');

        if (e.target === rulesModal) {
            closeRulesModal();
        }

        if (e.target === leaderboardModal) {
            closeLeaderboardModal();
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
