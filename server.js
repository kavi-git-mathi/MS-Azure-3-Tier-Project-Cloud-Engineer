const express = require("express");
const cors = require("cors");
const sql = require("mssql");

const app = express();
app.use(cors({
  origin: "*"   // allow all origins for testing
}));
app.use(express.json());

// Azure SQL configuration
const dbConfig = {
  user: process.env.DB_USER || "dbadmin",
  password: process.env.DB_PASS || "Jaihind@12345",
  server: process.env.DB_SERVER || "three-tier-db-server.database.windows.net",
  database: process.env.DB_NAME || "three-tier-db",
  options: {
    encrypt: true,
    trustServerCertificate: false
  }
};

// API: Matches
app.get("/api/matches", async (req, res) => {
  try {
    let pool = await sql.connect(dbConfig);
    let result = await pool.request().query("SELECT * FROM Matches");
    res.json(result.recordset);
  } catch (err) {
    console.error("Error fetching Matches:", err);
    res.status(500).send("Database error");
  }
});

// API: Standings
app.get("/api/standings", async (req, res) => {
  try {
    let pool = await sql.connect(dbConfig);
    let result = await pool.request().query("SELECT * FROM Standings");
    res.json(result.recordset);
  } catch (err) {
    console.error("Error fetching Standings:", err);
    res.status(500).send("Database error");
  }
});

// API: Stats
app.get("/api/stats", async (req, res) => {
  try {
    let pool = await sql.connect(dbConfig);
    let result = await pool.request().query("SELECT * FROM Stats");
    res.json(result.recordset);
  } catch (err) {
    console.error("Error fetching Stats:", err);
    res.status(500).send("Database error");
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});

const API_URL = "https://complete-project-app.azurewebsites.net/api";
fetch(`${API_URL}/data`)
  .then(res => res.json())
  .then(data => console.log(data));

