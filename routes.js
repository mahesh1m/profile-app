const express = require('express');
const router = express.Router();

router.get('/hobbies', (req, res) => {
  res.json({
    hobby: "AI Copilot learning and speaking to people"
  });
});

module.exports = router;