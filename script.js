const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking menu items
const mobileMenuItems = mobileMenu.querySelectorAll('a');
mobileMenuItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('hidden');
    }
});

// Prevent menu from closing when clicking inside it
mobileMenu.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Close mobile menu when scrolling
window.addEventListener('scroll', () => {
    if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Create particles
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 650; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = Math.random() * 10 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 2 + 5) + 's';
        particle.style.animationDelay = (Math.random() * 2) + 's';
        particlesContainer.appendChild(particle);
    }

    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });
});

// Ambil elemen audio dan tombol play/pause
const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("playPauseButton");

// Periksa status audio dari localStorage
const isPlaying = localStorage.getItem("audioPlaying") === "true";

// Atur status awal audio berdasarkan localStorage
if (isPlaying) {
    audio.play();
    playPauseButton.textContent = "Pause Music";
}

// Event listener untuk tombol Play/Pause
playPauseButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = "Pause Music";
        localStorage.setItem("audioPlaying", "true");
    } else {
        audio.pause();
        playPauseButton.textContent = "Play Music";
        localStorage.setItem("audioPlaying", "false");
    }
});

// Simpan waktu pemutaran ketika halaman dimuat ulang
window.addEventListener("beforeunload", () => {
    if (!audio.paused) {
        localStorage.setItem("audioTime", audio.currentTime); // Simpan posisi waktu
    }
});

// Pulihkan posisi waktu saat halaman dimuat ulang
const savedTime = parseFloat(localStorage.getItem("audioTime"));
if (!isNaN(savedTime)) {
    audio.currentTime = savedTime;
}
