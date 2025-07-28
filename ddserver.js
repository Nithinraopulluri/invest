const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Nithin@2606', 
  database: 'daily_demo'
});

connection.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,  'ddemo.html'));
});

app.get('/api/data', (req, res) => {
    connection.query('SELECT * FROM demo_subscribers' , (err,results) => {
        if(err) return res.status(500).json({ error: err});
        res.json(results);
    });
});


app.post('/submit', (req, res) => {
  const { date, referral_id, trading_view_id, expiry_date, phone_number, email, remaining_days } = req.body;

  const query = `
    INSERT INTO demo_subscribers
    (date, referral_id, trading_view_id, expiry_date, phone_number, email, remaining_days) 
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [ date, referral_id, trading_view_id, expiry_date, phone_number, email, remaining_days];

  connection.query(query, values, (err) => {
      if (err) return res.status(500).json({error : err}); 
      res.redirect('/api/data');
  });
});

/*app.get('/api/data', (req, res) => {
  const query = 'SELECT * FROM demo_subscribers';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Fetch Error:', err);
      res.send('Database fetch error');
    } else {
      let html = `<h2>All Subscribers</h2><table border="1"><tr>
        <th>ID</th><th>Date</th><th>Referral ID</th><th>Trading_view_id ID</th><th>Expiry Date</th><th>Phone</th><th>Email</th><th>Remaining Days</th>
      </tr>`;

      results.forEach(row => {
        html += `<tr>
          <td>${row.id}</td>
          <td>${row.date}</td>
          <td>${row.referral_id}</td>
          <td>${row.trading_view_id}</td>
          <td>${row.expiry_date}</td>
          <td>${row.phone_number}</td>
          <td>${row.email}</td>
          <td>${row.remaining_days}</td>
        </tr>`;
      });

      html += `</table><br><a href="/">Go Back</a>`;
      res.send(html);
    }
  });
});*/

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
