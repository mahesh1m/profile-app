// Central route file
const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.send('API Home');
});

router.get('/hobbies', (req, res) => {
  res.send('learning and working with ai tools');
});

module.exports = router;
