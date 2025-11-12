// Central route file
const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.send('API Home');
});

router.get('/contact', (req, res) => {
  res.send('You can contact me at trishamahesh@gmail.com');
});

module.exports = router;
