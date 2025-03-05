

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

document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.getElementById('carousel-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // Gallery images (you can replace these with your actual images)
    const galleryImages = [
        {
            src: 'gambar/HOMIXIDE hoodie/1.png',
            alt: 'Gallery Image 1'
        },
        {
            src: 'gambar/HOMIXIDE hoodie/2.png',
            alt: 'Gallery Image 2'
        },
        {
            src: 'gambar/HOMIXIDE hoodie/3.png',
            alt: 'Gallery Image 3'
        },
        {
            src: 'gambar/ken/1.png',
            alt: 'Gallery Image 4'
        },
        {
            src: 'gambar/ken/2.png',
            alt: 'Gallery Image 5'
        },
        {
            src: 'gambar/ken/3.png',
            alt: 'Gallery Image 6'
        },
        {
            src: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExemN4YjdkOXc5OTd1b2RmOXozYmVleGUybGh0M3FjaTB5MjdrbTYydiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VEzBOCFhA6ICY/giphy.gif',
            alt: 'Gallery Image 7'
        },
        {
            src: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzVpd2t1YzVkNWlnb2I2ZnZjcGh1YmRheHpneDhqOXo0aWMwdnE5ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3vRgcFm4xmETD8qc/giphy.gif',
            alt: 'Gallery Image 8'
        }
    ];

    let currentIndex = 0;

    // Lightbox functionality
    const createLightbox = () => {
        const lightbox = document.createElement('div');
        const lightboxImg = document.createElement('img');

        lightbox.style.display = 'none';
        lightbox.style.position = 'fixed';
        lightbox.style.top = '0';
        lightbox.style.left = '0';
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.backgroundColor = 'rgba(0,0,0,0.8)';
        lightbox.style.zIndex = '1000';
        lightbox.style.display = 'flex';
        lightbox.style.justifyContent = 'center';
        lightbox.style.alignItems = 'center';

        lightboxImg.style.maxWidth = '90%';
        lightboxImg.style.maxHeight = '90%';
        lightboxImg.style.objectFit = 'contain';

        lightbox.appendChild(lightboxImg);
        document.body.appendChild(lightbox);

        return { lightbox, lightboxImg };
    };

    const { lightbox, lightboxImg } = createLightbox();

    // Function to render products
    function renderGallery() {
        carouselContainer.innerHTML = '';
        
        // Determine number of products to show based on screen size
        const productsToShow = window.innerWidth >= 768 ? 4 : 2;
        
        // Get the slice of products to display
        const displayedImages = galleryImages.slice(currentIndex, currentIndex + productsToShow);
        
        displayedImages.forEach(image => {
            const imageEl = document.createElement('div');
            imageEl.classList.add('relative', 'group', 'overflow-hidden', 'rounded-lg', 'cursor-pointer');
            imageEl.innerHTML = `
                <img src="${image.src}" alt="${image.alt}" 
                     class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110">
            `;
            
            // Add click event for lightbox
            imageEl.addEventListener('click', () => {
                lightbox.style.display = 'flex';
                lightboxImg.src = image.src;
            });
            
            carouselContainer.appendChild(imageEl);
        });
    }

    // Lightbox close functionality
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });

    // Next button functionality
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        renderGallery();
    });

    // Previous button functionality
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        renderGallery();
    });

    // Initial render
    renderGallery();

    // Responsive re-render on window resize
    window.addEventListener('resize', renderGallery);
});