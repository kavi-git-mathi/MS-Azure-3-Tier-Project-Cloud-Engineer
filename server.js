const express = require('express');
const sql = require('mssql');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database configuration - using environment variables
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: true,
    trustServerCertificate: false
  }
};

// Database connection pool
let pool;

async function connectToDatabase() {
  try {
    pool = await sql.connect(dbConfig);
    console.log('✅ Connected to Azure SQL Database');
    return pool;
  } catch (err) {
    console.error('❌ Database connection failed:', err);
    throw err;
  }
}

// Initialize database connection
connectToDatabase();

// API Routes
app.get('/api/group-matches', async (req, res) => {
  try {
    const result = await pool.request().query('SELECT * FROM GroupMatches ORDER BY MatchDate');
    res.json(result.recordset);
  } catch (err) {
    console.error('Error fetching group matches:', err);
    res.status(500).json({ error: 'Failed to fetch group matches' });
  }
});

app.get('/api/standings', async (req, res) => {
  try {
    const result = await pool.request().query('SELECT * FROM Standings ORDER BY Points DESC, GoalDifference DESC');
    res.json(result.recordset);
  } catch (err) {
    console.error('Error fetching standings:', err);
    res.status(500).json({ error: 'Failed to fetch standings' });
  }
});

app.get('/api/player-stats', async (req, res) => {
  try {
    const result = await pool.request().query('SELECT * FROM PlayerStats ORDER BY Goals DESC, Assists DESC');
    res.json(result.recordset);
  } catch (err) {
    console.error('Error fetching player stats:', err);
    res.status(500).json({ error: 'Failed to fetch player stats' });
  }
});

// Health check endpoint
app.get('/api/health', async (req, res) => {
  try {
    await pool.request().query('SELECT 1');
    res.json({ status: 'OK', database: 'Connected' });
  } catch (err) {
    res.status(500).json({ status: 'Error', database: 'Disconnected' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API endpoints available at http://localhost:${PORT}/api/`);
});