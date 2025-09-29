// Replace with your actual backend URL
const API_URL = "https://complete-project-app.azurewebsites.net/api";

// Test the connection first
async function testConnection() {
    try {
        const response = await fetch(`${API_URL}/health`);
        const data = await response.json();
        console.log('Backend status:', data);
        return data.status === 'OK';
    } catch (error) {
        console.error('Cannot connect to backend:', error);
        return false;
    }
}

// Load all data
async function loadAllData() {
    const isConnected = await testConnection();
    if (!isConnected) {
        console.error('Backend is not available');
        return;
    }

    try {
        const [matches, standings, stats] = await Promise.all([
            fetch(`${API_URL}/group-matches`).then(res => res.json()),
            fetch(`${API_URL}/standings`).then(res => res.json()),
            fetch(`${API_URL}/player-stats`).then(res => res.json())
        ]);

        // Your existing functions to display data
        displayMatches(matches);
        displayStandings(standings);
        displayPlayerStats(stats);
        
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

// Call this when page loads
document.addEventListener('DOMContentLoaded', loadAllData);