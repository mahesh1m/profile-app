// Entry point for the Express app
const express = require('express');
const app = express();
const routes = require('./routes/index'); // explicitly load routes/index.js

app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
