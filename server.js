const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    port:3306,
    // TODO: Add MySQL password
    password: '345trehgf503(_)@m3H0lyFuck3r',
    database: 'movie_db'
  },
  console.log(`Connected to the movie_db database.`)
);

  app.get('/api/movies', (req, res) => {
    db.query('SELECT * FROM movies', (err, results) => {
        if (err) {
            throw new Error(err);
        }else { 
            res.json(results);
    }
  });

app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  });
