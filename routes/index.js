// Central route file
const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.send('API Home');
});

router.get('/contact', (req, res) => {
  res.send('You can contact me at trishamahesh@gmail.com and my phone nymber is 9916590880');
});

module.exports = router;
