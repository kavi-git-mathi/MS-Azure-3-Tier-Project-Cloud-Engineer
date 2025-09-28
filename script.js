// Elements
const matchesContainer = document.getElementById("matches-container");
const standingsContainer = document.getElementById("standings-container");
const statsContainer = document.getElementById("stats-container");

// Navigation
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    
    const targetId = this.getAttribute('href').substring(1);
    document.querySelectorAll('section').forEach(section => {
      section.style.display = 'none';
    });
    document.getElementById(targetId).style.display = 'block';
  });
});

// Stage selector
document.querySelectorAll('.stage-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.stage-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    loadStandings(this.dataset.stage);
  });
});

// Stats tabs
document.querySelectorAll('.stat-tab').forEach(tab => {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.stat-tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    loadStats(this.dataset.stat);
  });
});

// Load matches
function loadMatches() {
  matchesContainer.innerHTML = '';
  
  // Group stage matches
  groupMatches.forEach(match => {
    const matchElement = document.createElement('div');
    matchElement.className = 'match-item';
    
    matchElement.innerHTML = `
      <div class="match-date">${formatDate(match.date)}</div>
      <div class="match-stage">Group stage: ${match.group}</div>
      <div class="match-teams">
        <span>${match.team1}</span>
        <span>${match.team2}</span>
      </div>
      <div class="match-result">${match.winner} won by ${match.margin}</div>
    `;
    
    matchesContainer.appendChild(matchElement);
  });
  
  // Super 4 matches
  super4Matches.forEach(match => {
    const matchElement = document.createElement('div');
    matchElement.className = 'match-item';
    
    matchElement.innerHTML = `
      <div class="match-date">${formatDate(match.date)}</div>
      <div class="match-stage">Super 4</div>
      <div class="match-teams">
        <span>${match.team1}</span>
        <span>${match.team2}</span>
      </div>
      <div class="match-result">${match.winner} won by ${match.margin}</div>
    `;
    
    matchesContainer.appendChild(matchElement);
  });
  
  // Final match
  const finalElement = document.createElement('div');
  finalElement.className = 'match-item';
  
  finalElement.innerHTML = `
    <div class="match-date">${formatDate(finalMatch.date)}</div>
    <div class="match-stage">Final</div>
    <div class="match-teams">
      <span>${finalMatch.team1}</span>
      <span>${finalMatch.team2}</span>
    </div>
    <div class="match-result">${finalMatch.winner} won by ${finalMatch.margin}</div>
  `;
  
  matchesContainer.appendChild(finalElement);
}

// Load standings
function loadStandings(stage) {
  standingsContainer.innerHTML = '';
  
  const standings = stage === 'group' ? groupStandings : super4Standings;
  const stageName = stage === 'group' ? 'Group Stage' : 'Super 4';
  
  const table = document.createElement('table');
  
  // Table header
  table.innerHTML = `
    <thead>
      <tr>
        <th>Team</th>
        <th>M</th>
        <th>W</th>
        <th>L</th>
        <th>NRR</th>
        <th>Pts</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  `;
  
  const tbody = table.querySelector('tbody');
  
  // Table rows
  standings.forEach((team, index) => {
    const row = document.createElement('tr');
    
    row.innerHTML = `
      <td class="team-name">${index + 1} ${team.name}</td>
      <td>${team.matches}</td>
      <td>${team.wins}</td>
      <td>${team.losses}</td>
      <td>${team.nrr}</td>
      <td>${team.points}</td>
    `;
    
    tbody.appendChild(row);
  });
  
  standingsContainer.appendChild(table);
}

// Load stats
function loadStats(type) {
  statsContainer.innerHTML = '';
  
  if (type === 'runs') {
    const table = document.createElement('table');
    table.className = 'stats-table';
    
    table.innerHTML = `
      <thead>
        <tr>
          <th>Player</th>
          <th>M</th>
          <th>Avg</th>
          <th>Runs</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    `;
    
    const tbody = table.querySelector('tbody');
    
    topBatsmen.forEach((player, index) => {
      const row = document.createElement('tr');
      
      row.innerHTML = `
        <td>
          <div>${index + 1} ${player.name}</div>
          <div class="player-team">${player.country}</div>
        </td>
        <td>${player.matches}</td>
        <td>${player.average}</td>
        <td>${player.runs}</td>
      `;
      
      tbody.appendChild(row);
    });
    
    statsContainer.appendChild(table);
  } else if (type === 'wickets') {
    const table = document.createElement('table');
    table.className = 'stats-table';
    
    table.innerHTML = `
      <thead>
        <tr>
          <th>Player</th>
          <th>M</th>
          <th>Econ</th>
          <th>W</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    `;
    
    const tbody = table.querySelector('tbody');
    
    topBowlers.forEach((player, index) => {
      const row = document.createElement('tr');
      
      row.innerHTML = `
        <td>
          <div>${index + 1} ${player.name}</div>
          <div class="player-team">${player.country}</div>
        </td>
        <td>${player.matches}</td>
        <td>${player.economy}</td>
        <td>${player.wickets}</td>
      `;
      
      tbody.appendChild(row);
    });
    
    statsContainer.appendChild(table);
  }
}

// Helper function to format date
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Show matches by default
  document.querySelectorAll('section').forEach(section => {
    if (section.id !== 'matches') {
      section.style.display = 'none';
    }
  });
  
  // Load initial data
  loadMatches();
  loadStandings('group');
  loadStats('runs');
});