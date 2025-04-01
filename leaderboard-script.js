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

populateLeaderboard();
