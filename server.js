const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const path = require('path');

const app = express();
const port = process.env.PORT || 7000; // Use environment variable for port or default to 3000

// Configure database connection details (replace with your actual credentials)
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'schemifyform',
//   decimalSeparator: '.', // Set decimal separator for compatibility (if using floating-point values)
});

app.use(express.static(path.join(__dirname, './form.html')));
// Configure body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/',function(req,res){
  res.sendFile(__dirname + '/form.html')
})

// Route to handle form submission
app.post('/store', async (req, res) => {
  const { username, age, caste, state, annualIncome, profession, gender } = req.body;

  // Validate form data (optional, add validation logic as needed)
  if (!username || !age || !caste || !state || !annualIncome || !profession || !gender) {
    return res.status(400).send('Please fill in all required fields.');
  }

  try {
    const connection = await pool.getConnection();
    const query = `INSERT INTO form (username, age, caste, state, annual_income, profession, gender) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const [results] = await connection.execute(query, [username, age, caste, state, annualIncome, profession, gender]);

    connection.release();
    res.status(201).send('Form submitted successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while processing your request.');
  }
});

// Start the server
app.listen(port, () => console.log(`Server listening on port ${port}`));
