

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

const scrollButton = document.createElement('button');
scrollButton.className = 'fixed bottom-4 right-4 bg-green-700 z-50 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transform transition-all duration-300 hover:bg-green-800 hover:scale-110 opacity-0 pointer-events-none';
scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollButton.classList.remove('opacity-0', 'pointer-events-none');
    } else {
        scrollButton.classList.add('opacity-0', 'pointer-events-none');
    }
});

scrollButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
const button = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

if (button && mobileMenu) {
    button.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && !button.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
    });

    window.addEventListener('scroll', function() {
        mobileMenu.classList.add('hidden');
    });
}


function copyLink() {
    var link = "https://t.me/YonKasyura?text=Halo%20designer%20saya%20ingin%20request%20sebuah%20design";
    navigator.clipboard.writeText(link);
    Swal.fire({
        toast: true,
        position: 'top',
        icon: 'success',
        title: 'Link copied to clipboard',
        showConfirmButton: false,
        timer: 1500
    });
}

