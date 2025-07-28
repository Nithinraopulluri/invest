const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Nithin@2606',
  database: 'referral_subscribers'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// API routes (repeat for other tables similarly)
const tables = ['mainuserlist', 'ddemo', 'tdemo', 'tpaid', 'dpaid'];

tables.forEach(table => {
  app.get(`/api/${table}`, (req, res) => {
    db.query(`SELECT * FROM ${table}`, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });

  app.post(`/api/${table}`, (req, res) => {
    const data = req.body;
    db.query(`INSERT INTO ${table} SET ?`, data, (err, result) => {
      if (err) throw err;
      res.json({ status: 'success', id: result.insertId });
    });
  });
});

// Homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
