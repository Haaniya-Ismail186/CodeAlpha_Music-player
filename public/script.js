// Mock Complete Catalog for Perfect Replication
const mockCatalog = {
    weekly: [
        /* Fixed: Local system ka path mukammal tor par saaf kar ke direct file ka naam set kar diya hai */
        { title: 'Whatever It Takes', artist: 'Imagine Dragons', cover: 'c:\Users\Administrator\Downloads\Frame 185.png' },
        { title: 'Skyfall', artist: 'Adele', cover: '' },
        { title: 'Superman', artist: 'Eminem', cover: 'image_1dca80.png' },
        { title: 'Believer', artist: 'Imagine Dragons', cover: 'Frame 185.png' },
        { title: 'The Lockest', artist: 'Alan Walker', cover: 'image_1dca80.png' }
    ],
    releases: [
        { title: 'Eyes', artist: 'Zara Larsson', cover: 'Frame 185.png' },
        { title: '1, 2', artist: 'Tiësto', cover: 'image_1dca80.png' },
        { title: 'We Don\'t Care', artist: 'Kanye West', cover: 'Frame 185.png' },
        { title: 'Who I Am', artist: 'Alan Walker', cover: 'image_1dca80.png' },
        { title: 'Dance', artist: 'Ananya', cover: 'Frame 185.png' }
    ],
    trending: [
        { title: 'Starboy', artist: 'The Weeknd', date: 'Nov 4, 2023', album: 'Starboy', duration: '3:50', cover: 'Frame 185.png' },
        { title: 'Digital Silence', artist: 'Peter McPoland', date: 'Jan 24, 2024', album: 'Piggy', duration: '2:45', cover: 'image_1dca80.png' },
        { title: 'Greedy', artist: 'Tate McRae', date: 'Sep 15, 2023', album: 'Greedy', duration: '2:11', cover: 'Frame 185.png' },
        { title: 'Links Go Go', artist: 'Linkin Park', date: 'Dec 20, 2022', album: 'Lost Tracks', duration: '3:15', cover: 'image_1dca80.png' }
    ],
    artists: [
        { name: 'Eminem', img: 'image_1dca80.png' },
        { name: 'The Weeknd', img: 'Frame 185.png' },
        { name: 'Adele', img: 'image_1dca80.png' },
        { name: 'Lana Del Rey', img: 'Frame 185.png' },
        { name: 'Harry Styles', img: 'image_1dca80.png' }
    ],
    videos: [
        { title: 'Gossip', artist: 'Måneskin', cover: 'image_1dca80.png' },
        { title: 'Shape Of You', artist: 'Ed Sheeran', cover: 'image_1dca80.png' },
        { title: 'Someone Like You', artist: 'Adele', cover: 'image_1dca80.png' }
    ],
    albums: [
        { title: 'Born To Die', artist: 'Lana Del Rey', cover: 'Frame 185.png' },
        { title: 'Scorpion', artist: 'Drake', cover: 'Frame 185.png' },
        { title: 'Harry\'s House', artist: 'Harry Styles', cover: 'Frame 185.png' }
    ],
    moods: [
        { title: 'Sad Playlist', artist: 'Deep Melancholy', cover: 'image_1dca80.png' },
        { title: 'Chill Vibes', artist: 'Lo-Fi Study', cover: 'image_1dca80.png' },
        { title: 'Workout Energy', artist: 'Gym Motivation', cover: 'image_1dca80.png' }
    ]
};

// Initial Render System UI Data Injector
function initializeLayout() {
    populateStandardGrid('weekly-grid', mockCatalog.weekly);
    populateStandardGrid('release-grid', mockCatalog.releases);
    populateStandardGrid('albums-grid', mockCatalog.albums);
    populateStandardGrid('mood-grid', mockCatalog.moods);

    // Populate Trending Table Formats
    const trendingContainer = document.getElementById('trending-list');
    if (trendingContainer) {
        trendingContainer.innerHTML = '';
        mockCatalog.trending.forEach((song, idx) => {
            const item = document.createElement('div');
            item.className = 'song-item';
            item.innerHTML = `
                <span class="col-num">${idx + 1}</span>
                <div class="col-title">
                    <img src="${song.cover}" alt="Thumb">
                    <div class="title-info"><h4>${song.title}</h4><p>${song.artist}</p></div>
                </div>
                <span class="col-date desktop-only">${song.date}</span>
                <span class="col-album desktop-only">${song.album}</span>
                <span class="col-time">${song.duration}</span>
            `;
            trendingContainer.appendChild(item);
        });
    }

    // Populate Circles Profiles Artists
    const artistContainer = document.getElementById('artists-grid');
    if (artistContainer) {
        artistContainer.innerHTML = '';
        mockCatalog.artists.forEach(art => {
            const div = document.createElement('div');
            div.className = 'artist-card';
            div.innerHTML = `<img src="${art.img}" alt="Artist"><h4>${art.name}</h4>`;
            artistContainer.appendChild(div);
        });
    }

    // Populate Videos Wide Blocks Layouts
    const videoContainer = document.getElementById('video-grid');
    if (videoContainer) {
        videoContainer.innerHTML = '';
        mockCatalog.videos.forEach(vid => {
            const div = document.createElement('div');
            div.className = 'video-card';
            div.innerHTML = `<img src="${vid.cover}" alt="Video"><h4>${vid.title}</h4><p>${vid.artist}</p>`;
            videoContainer.appendChild(div);
        });
    }
}

function populateStandardGrid(elementId, dataset) {
    const grid = document.getElementById(elementId);
    if (!grid) return;
    grid.innerHTML = '';
    dataset.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<img src="${item.cover}" alt="Art"><h4>${item.title || item.name}</h4><p>${item.artist || 'Compilation'}</p>`;
        grid.appendChild(card);
    });
}

// Mobile Sidebar toggle control listener
const menuToggle = document.getElementById('menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.classList.toggle('active');
    });
}

window.onload = initializeLayout;