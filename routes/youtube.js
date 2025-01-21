const express = require('express');
const { getYouTubeData } = require('../controllers/youtubeController');

const router = express.Router();

// Route for fetching YouTube video/audio details
router.get('/', getYouTubeData);

module.exports = router;
