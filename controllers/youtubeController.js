const { youtube } = require('@bochilteam/scraper-sosmed');

const getYouTubeData = async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send({ error: 'YouTube video URL is required' });
  }

  try {
    const data = await youtube(url);

    const response = {
      title: data.title,
      thumbnail: data.thumbnail,
      resolutions: data.video.map((v) => ({
        quality: v.quality,
        size: v.size,
        url: v.url,
      })),
      audio: data.audio.map((a) => ({
        quality: a.quality,
        size: a.size,
        url: a.url,
      })),
    };

    res.status(200).send(response);
  } catch (error) {
    console.error('Error fetching YouTube data:', error.message);
    res.status(500).send({ error: 'Failed to fetch video/audio data' });
  }
};

module.exports = { getYouTubeData };
