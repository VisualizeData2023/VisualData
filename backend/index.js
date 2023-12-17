const express = require('express');
const { Pool } = require('pg');
require('dotenv').config(); // If you are using dotenv to manage environment variables

const app = express();
app.use(express.json());

const cors = require('cors');

// CORS configuration
const corsOptions = {
  origin: '*', // Allows all origins
  optionsSuccessStatus: 200,
  credentials: true
};

app.use(cors(corsOptions));

app.use(function (_, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// Database connection setup
const pool = new Pool({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'db.itamvcrwuzphfserfybt.supabase.co',
    database: process.env.DB_NAME || 'postgres',
    password: process.env.DB_PASSWORD || 'DC38J_i?hK*6X3a',
    port: process.env.DB_PORT || 5432,
  });

// Add a root route handler
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/charts', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM "Chart"');
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});