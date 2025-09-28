// Group Stage Matches
const groupMatches = [
  { date: "2025-09-09", group: "720.1 of 19", team1: "Afghanistan", team2: "Hong Kong", winner: "AFC", margin: "94 runs" },
  { date: "2025-09-10", group: "720.2 of 19", team1: "UAE", team2: "India", winner: "IND", margin: "9 wickets (93 balls left)" },
  { date: "2025-09-11", group: "720.3 of 19", team1: "Hong Kong", team2: "Bangladesh", winner: "BAN", margin: "7 wickets (4 balls left)" },
  { date: "2025-09-12", group: "720.4 of 19", team1: "Pakistan", team2: "Oman", winner: "PAK", margin: "93 runs" },
  { date: "2025-09-13", group: "720.5 of 19", team1: "Bangladesh", team2: "Sri Lanka", winner: "SL", margin: "6 wickets" },
  { date: "2025-09-14", group: "720.6 of 19", team1: "Pakistan", team2: "India", winner: "IND", margin: "7 wickets" },
  { date: "2025-09-15", group: "720.7 of 19", team1: "UAE", team2: "Oman", winner: "UAE", margin: "42 runs" },
  { date: "2025-09-15", group: "720.8 of 19", team1: "Hong Kong", team2: "Sri Lanka", winner: "SL", margin: "4 wickets" },
  { date: "2025-09-16", group: "720.9 of 19", team1: "Bangladesh", team2: "Afghanistan", winner: "BAN", margin: "8 runs" },
  { date: "2025-09-17", group: "720.10 of 19", team1: "Pakistan", team2: "UAE", winner: "PAK", margin: "41 runs" },
  { date: "2025-09-18", group: "720.11 of 19", team1: "Afghanistan", team2: "Sri Lanka", winner: "SL", margin: "6 wickets" }
];

// Super 4 Matches
const super4Matches = [
  { date: "2025-09-20", team1: "Sri Lanka", team2: "Bangladesh", winner: "BAN", margin: "4 wickets" },
  { date: "2025-09-21", team1: "India", team2: "Pakistan", winner: "IND", margin: "6 wickets" },
  { date: "2025-09-23", team1: "Pakistan", team2: "Sri Lanka", winner: "PAK", margin: "5 wickets" },
  { date: "2025-09-24", team1: "India", team2: "Bangladesh", winner: "IND", margin: "41 runs" },
  { date: "2025-09-25", team1: "Pakistan", team2: "Bangladesh", winner: "PAK", margin: "6 wickets" },
  { date: "2025-09-26", team1: "India", team2: "Sri Lanka", winner: "IND", margin: "2 wickets (via Super Over)" }
];

// Final Match
const finalMatch = {
  date: "2025-09-28",
  team1: "India",
  team2: "Pakistan",
  winner: "India",
  margin: "5 wickets"
};

// Group Stage Standings
const groupStandings = [
  { name: "India", matches: 3, wins: 3, losses: 0, nrr: "+1.278", points: 6 },
  { name: "Pakistan", matches: 3, wins: 2, losses: 1, nrr: "-0.270", points: 4 },
  { name: "Bangladesh", matches: 3, wins: 1, losses: 2, nrr: "+1.241", points: 2 },
  { name: "Sri Lanka", matches: 3, wins: 0, losses: 3, nrr: "-2.151", points: 0 }
];

// Super 4 Standings
const super4Standings = [
  { name: "India", matches: 3, wins: 3, losses: 0, nrr: "+0.913", points: 6 },
  { name: "Pakistan", matches: 3, wins: 2, losses: 1, nrr: "+0.329", points: 4 },
  { name: "Bangladesh", matches: 3, wins: 1, losses: 2, nrr: "-0.831", points: 2 },
  { name: "Sri Lanka", matches: 3, wins: 0, losses: 3, nrr: "-0.418", points: 0 }
];

// Top Batsmen
const topBatsmen = [
  { name: "Abhishek Sharma", country: "India", matches: 7, average: 44.85, runs: 314 },
  { name: "Pathum Nissanka", country: "Sri Lanka", matches: 6, average: 43.50, runs: 261 },
  { name: "Sahibzada Farhan", country: "Pakistan", matches: 7, average: 31.00, runs: 217 },
  { name: "Tilak Varma", country: "India", matches: 7, average: 71.00, runs: 213 },
  { name: "Fakhar Zaman", country: "Pakistan", matches: 7, average: 30.16, runs: 181 }
];

// Top Bowlers
const topBowlers = [
  { name: "Kuldeep Yadav", country: "India", matches: 7, economy: 6.27, wickets: 17 },
  { name: "Shaheen Afridi", country: "Pakistan", matches: 7, economy: 6.60, wickets: 10 },
  { name: "Jasprit Bumrah", country: "India", matches: 6, economy: 6.45, wickets: 9 },
  { name: "Wanindu Hasaranga", country: "Sri Lanka", matches: 6, economy: 7.10, wickets: 8 },
  { name: "Mohammad Nabi", country: "Afghanistan", matches: 5, economy: 6.90, wickets: 7 }
];