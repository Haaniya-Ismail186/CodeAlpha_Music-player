const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Public folder ko static files ke liye serve karna
app.use(express.static(path.join(__dirname, 'public')));

// Mock Data APIs (Future database connectivity ke liye)
app.get('/api/songs', (req, res) => {
    const songs = [
        { id: 1, title: 'Mockingbird', artist: 'Eminem', src: 'songs/mockingbird.mp3', cover: 'https://via.placeholder.com/150/ff007f/fff?text=Eminem', duration: '4:11' },
        { id: 2, title: 'Starboy', artist: 'The Weeknd', src: 'songs/starboy.mp3', cover: 'https://via.placeholder.com/150/ff007f/fff?text=Weeknd', duration: '3:50' },
        { id: 3, title: 'Blinding Lights', artist: 'The Weeknd', src: 'songs/blinding.mp3', cover: 'https://via.placeholder.com/150/ff007f/fff?text=Weeknd', duration: '3:20' }
    ];
    res.json(songs);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});