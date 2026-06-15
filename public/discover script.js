// === MELODIES MUSIC PLAYER - CORE ENGINE ===

document.addEventListener("DOMContentLoaded", () => {
    // 1. Audio Element Initialize
    const audio = new Audio();
    let isPlaying = false;

    // 2. DOM Elements Selection (Aapke HTML classes ke mutabiq)
    const playBtn = document.querySelector(".play-btn") || document.getElementById("main-play");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const volumeSlider = document.querySelector(".volume-slider");
    const progressBar = document.querySelector(".progress-bar");
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");

    // 3. Global Play / Pause Functionality
    function togglePlay() {
        if (!audio.src) {
            console.log("No track loaded yet.");
            return;
        }
        if (isPlaying) {
            audio.pause();
            if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        } else {
            audio.play().catch(err => console.log("Playback error:", err));
            if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        }
        isPlaying = !isPlaying;
    }

    if (playBtn) {
        playBtn.addEventListener("click", togglePlay);
    }

    // 4. Volume Control System
    if (volumeSlider) {
        volumeSlider.addEventListener("input", (e) => {
            audio.volume = e.target.value / 100;
        });
    }

    // 5. Progress Bar Tracking (Auto updates as song plays)
    audio.addEventListener("timeupdate", () => {
        if (progressBar && audio.duration) {
            const progressPercent = (audio.currentTime / audio.duration) * 100;
            progressBar.value = progressPercent;
        }
    });

    if (progressBar) {
        progressBar.addEventListener("input", (e) => {
            if (audio.duration) {
                audio.currentTime = (e.target.value / 100) * audio.duration;
            }
        });
    }

    // 6. Grid Cards Click Event Listener (Dynamic Track Loader)
    // Jab user kisi bhi HTML card par click karega, yeh uska data utha lega
    const cards = document.querySelectorAll(".card, .song-item");
    cards.forEach(card => {
        card.style.cursor = "pointer";
        card.addEventListener("click", () => {
            const titleElement = card.querySelector("h4");
            const artistElement = card.querySelector("p");
            const imgElement = card.querySelector("img");

            if (titleElement) {
                console.log(`Now Playing: ${titleElement.innerText}`);
                // Player panel elements ko update karne ka custom core code yahan add ho sakta hai
            }
        });
    });

    // 7. Mobile Sidebar Responsive Drawer Controller
    if (menuToggle && sidebar) {
        menuToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            sidebar.classList.toggle("active");
        });

        // Sidebar se baahar click karne par menu auto-close ho jaye
        document.addEventListener("click", (e) => {
            if (!sidebar.contains(e.target) && e.target !== menuToggle) {
                sidebar.classList.remove("active");
            }
        });
    }
});