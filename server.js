const express = require('express');
const youtubeRoutes = require('./routes/youtube');

const app = express();
app.use(express.json());

// Routes
app.use('/api/youtube', youtubeRoutes);

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
