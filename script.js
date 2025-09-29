async function loadData() {
  try {
    const res = await fetch('https://complete-project-app.azurewebsites.net/api/data');

    const data = await res.json();

    window.groupMatches = data.groupMatches;
    window.super4Matches = data.super4Matches;
    window.finalMatch = data.finalMatch;
    window.groupStandings = data.groupStandings;
    window.super4Standings = data.super4Standings;
    window.topBatsmen = data.topBatsmen;
    window.topBowlers = data.topBowlers;

    // Initialize page after data fetch
    loadMatches();
    loadStandings('group');
    loadStats('runs');

  } catch (err) {
    console.error('Failed to fetch data', err);
  }
}

// Remove static data.js import
document.addEventListener('DOMContentLoaded', loadData);
