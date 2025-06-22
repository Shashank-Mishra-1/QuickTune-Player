const express = require('express');
const cors = require('cors');
const app = express();
const https = require('https');
const http = require('http');
const url = require('url');

const PORT = 5500;

console.log("Starting server...");

app.use(cors());

console.log("CORS enabled");

const tracks = [
  { id: 1, title: "Happy Pop", mood: "Happy", genre: "Pop", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { id: 2, title: "Happy Lo-fi", mood: "Happy", genre: "Lo-fi", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { id: 3, title: "Happy Cinematic", mood: "Happy", genre: "Cinematic", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
  { id: 4, title: "Happy EDM", mood: "Happy", genre: "EDM", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },

  { id: 5, title: "Sad Pop", mood: "Sad", genre: "Pop", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
  { id: 6, title: "Sad Lo-fi", mood: "Sad", genre: "Lo-fi", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
  { id: 7, title: "Sad Cinematic", mood: "Sad", genre: "Cinematic", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
  { id: 8, title: "Sad EDM", mood: "Sad", genre: "EDM", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },

  { id: 9, title: "Energetic Pop", mood: "Energetic", genre: "Pop", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
  { id: 10, title: "Energetic Lo-fi", mood: "Energetic", genre: "Lo-fi", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
  { id: 11, title: "Energetic Cinematic", mood: "Energetic", genre: "Cinematic", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
  { id: 12, title: "Energetic EDM", mood: "Energetic", genre: "EDM", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },

  { id: 13, title: "Chill Pop", mood: "Chill", genre: "Pop", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
  { id: 14, title: "Chill Lo-fi", mood: "Chill", genre: "Lo-fi", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
  { id: 15, title: "Chill Cinematic", mood: "Chill", genre: "Cinematic", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
  { id: 16, title: "Chill EDM", mood: "Chill", genre: "EDM", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
];

console.log("Tracks loaded");

app.get('/api/tracks', (req, res) => {
  const { mood, genre } = req.query;
  const filtered = tracks.filter(t => t.mood === mood && t.genre === genre);

  if (filtered.length === 0) {
    return res.status(204).send(); // No content
  }

  const randomTrack = filtered[Math.floor(Math.random() * filtered.length)];
  res.json(randomTrack);
});

app.get('/api/download', (req, res) => {
  const fileUrl = req.query.url;

  if (!fileUrl) {
    return res.status(400).send("Missing URL");
  }

  const parsedUrl = url.parse(fileUrl);
  const protocol = parsedUrl.protocol === 'https:' ? https : http;

  protocol.get(fileUrl, (fileRes) => {
    res.setHeader('Content-Disposition', 'attachment; filename=track.mp3');
    res.setHeader('Content-Type', 'audio/mpeg');
    fileRes.pipe(res);
  }).on('error', (err) => {
    console.error("Download failed:", err.message);
    res.status(500).send("Download failed");
  });
});

console.log("API endpoint created");
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
