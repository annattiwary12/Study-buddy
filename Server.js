

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const users = {}; 

app.post('/signup', (req, res) => {
  const { username, password, securityAnswer } = req.body;
  if (users[username]) {
    return res.status(400).json({ message: 'User already exists' });
  }
  users[username] = { password, securityAnswer };
  res.status(200).json({ message: 'User created successfully' });
});

app.post('/verify-security-question', (req, res) => {
  const { username, securityAnswer } = req.body;
  const user = users[username];
  if (user && user.securityAnswer === securityAnswer) {
    return res.status(200).json({ message: 'Verified' });
  }
  res.status(400).json({ message: 'Invalid answer' });
});

app.post('/reset-password', (req, res) => {
  const { username, newPassword } = req.body;
  const user = users[username];
  if (user) {
    user.password = newPassword;
    return res.status(200).json({ message: 'Password reset successfully' });
  }
  res.status(400).json({ message: 'User not found' });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
