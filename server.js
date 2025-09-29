const express = require('express');
const path = require('path');
const sql = require('mssql');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

// Serve frontend files
app.use(express.static(path.join(__dirname)));

// Azure SQL config
const dbConfig = {
  server: process.env.DB_SERVER, // e.g., 'three-tier-db-server.database.windows.net'
  database: process.env.DB_NAME, // e.g., 'three-tier-db'
  user: process.env.DB_USER,     // SQL admin username
  password: process.env.DB_PASSWORD, // SQL admin password
  encrypt: true,
  trustServerCertificate: false,
  options: {
    enableArithAbort: true
  }
};

// API endpoint to fetch all data dynamically
app.get('/api/data', async (req, res) => {
  try {
    let pool = await sql.connect(dbConfig);

    const resultGroupMatches = await pool.request().query('SELECT * FROM GroupMatches');
    const resultSuper4Matches = await pool.request().query('SELECT * FROM Super4Matches');
    const resultFinalMatch = await pool.request().query('SELECT TOP 1 * FROM FinalMatch');
    const resultGroupStandings = await pool.request().query('SELECT * FROM GroupStandings');
    const resultSuper4Standings = await pool.request().query('SELECT * FROM Super4Standings');
    const resultTopBatsmen = await pool.request().query('SELECT * FROM TopBatsmen');
    const resultTopBowlers = await pool.request().query('SELECT * FROM TopBowlers');

    res.json({
      groupMatches: resultGroupMatches.recordset,
      super4Matches: resultSuper4Matches.recordset,
      finalMatch: resultFinalMatch.recordset[0],
      groupStandings: resultGroupStandings.recordset,
      super4Standings: resultSuper4Standings.recordset,
      topBatsmen: resultTopBatsmen.recordset,
      topBowlers: resultTopBowlers.recordset
    });

  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
