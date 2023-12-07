const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const mockUser = {
  username: 'user1',
  password: 'password123'
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === mockUser.username && password === mockUser.password) {
    res.send({
      token: 'test123'
    });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));
