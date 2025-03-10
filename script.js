

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

    const galleryImages = [
        { src: 'https://scontent-cgk1-2.xx.fbcdn.net/v/t39.30808-6/481470285_122112085736729446_7991701722923479246_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=iP3bwA0IJ-IQ7kNvgH4kdwz&_nc_oc=Adhavj1HCnnoHduhB6i2hcjzzWFuqESDOdtl9vnuHK13sfnGRCr8yDYk7x8QtDHisek&_nc_zt=23&_nc_ht=scontent-cgk1-2.xx&_nc_gid=AynB7aFuOZUAF2GJ8riIznz&oh=00_AYH5xdzWv66KKJjm1coLz3HMR7uAdqBCUumLZFNBtT7Mzw&oe=67D4A8CF', alt: 'Gallery Image 1' },
        { src: 'https://scontent-cgk1-2.xx.fbcdn.net/v/t39.30808-6/481244861_122112085706729446_7199386741413436414_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bp6Z0aJBzmgQ7kNvgFmUqi2&_nc_oc=Adj_MLUPWmU0z5AMcoBw1X3w0b2dXu7mCTbvIfN6pKqpkLf2wsq_B3-jUpIxwbT3a0I&_nc_zt=23&_nc_ht=scontent-cgk1-2.xx&_nc_gid=A_J29vCk2GdxuwzaeyhwIdg&oh=00_AYF7PWhVw5iP9APMtxks6BkkwfKAFJxvEXaX9PXZuohegw&oe=67D48A59', alt: 'Gallery Image 2' },
        { src: 'https://scontent-cgk2-1.xx.fbcdn.net/v/t39.30808-6/481243973_122112085646729446_4549884141759316246_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=f15cz8EHOk8Q7kNvgH8QP6c&_nc_oc=Adjc6BIDJwzDyjO7VkqKvYbySOQSibBMEmxIY0ZwBlzCN1Nty1D_FvenaILNSle7XEo&_nc_zt=23&_nc_ht=scontent-cgk2-1.xx&_nc_gid=AkfcQS2ahXAAAezG8yJLv2B&oh=00_AYF_0Xt6rkKe9MT5RkqxZgOtDYE2HspXaS2Pk8TMIzK8yQ&oe=67D4916E', alt: 'Gallery Image 3' },
        { src: 'https://scontent-cgk1-2.xx.fbcdn.net/v/t39.30808-6/481257159_122112085598729446_414666427204733345_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ooP2WiglEikQ7kNvgHQe8sO&_nc_oc=Adjswf8WIl8T0U4lmiBFiMM7WIOtx4HAqy2QDyo5n9ULkVOf921WvRU6em6eVzLJvUk&_nc_zt=23&_nc_ht=scontent-cgk1-2.xx&_nc_gid=AE3HeACSpFb6k7qtsRwptFc&oh=00_AYFw3gi_sFXofIXbruNdOQ0qrDucOjDyVcCOI8mJ32CIsg&oe=67D49F26', alt: 'Gallery Image 4' },
        { src: 'https://scontent-cgk1-1.xx.fbcdn.net/v/t39.30808-6/482026961_122112085550729446_1427419181003002672_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uFABRjxJK9wQ7kNvgH6aei7&_nc_oc=Adi2Z_lWPsBJvZqOdB_yC54NRyO2v8vcFpZ2VesruLcYYKMMTwLfEoFRPkrdVvz750g&_nc_zt=23&_nc_ht=scontent-cgk1-1.xx&_nc_gid=AAaa8bd3kTHWh60OKX7emwC&oh=00_AYGr9vyDwmr94DKkV3wMlIsdzId3zATGj7Nj6lj3nPvvoQ&oe=67D4A17C', alt: 'Gallery Image 5' },
        { src: 'https://scontent-cgk1-2.xx.fbcdn.net/v/t39.30808-6/482007100_122112085466729446_1484630065805670546_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=lhLdeYwJ6DYQ7kNvgGZQGE8&_nc_oc=AdgQt1jXvbVI5uhyIaIT5bLUDJuC-jMV58WjcxDxJCzNkDFGwxwiSKmBLRgLvD-kJl4&_nc_zt=23&_nc_ht=scontent-cgk1-2.xx&_nc_gid=AAnbjLP3Azvx9XgA9AB93Bn&oh=00_AYH3MI-nvPdxzb1EeZvAzfX-bHj_J0Lz2810r5OKITowfw&oe=67D47C3D', alt: 'Gallery Image 6' },
        { src: 'https://scontent-cgk2-1.xx.fbcdn.net/v/t39.30808-6/481262391_122112085436729446_4015750153217671828_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Z_lnN0D3oY4Q7kNvgFwNuq7&_nc_oc=AdhMMqMqE9hqiusj359DbIrsIM6XGOzS3AoPFB5T9Qeag0UQl45TYlt31l2ET79QOIE&_nc_zt=23&_nc_ht=scontent-cgk2-1.xx&_nc_gid=Aqps8yJvz2IY-yG0yOxfjND&oh=00_AYF4VtIDlD9O-KpMenW8G9k6pytRn93g_fSwvd_NauKSZg&oe=67D47CF5', alt: 'Gallery Image 7' },
        { src: 'https://scontent-cgk1-2.xx.fbcdn.net/v/t39.30808-6/482070952_122112085406729446_8282311032524490446_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=K4hyUrYTBQkQ7kNvgFuKD6s&_nc_oc=Adjn89r_TI8p5HscbMM9COccJLF_RPn6V3DLB-FO0mtcE3UgcbPHwAc81Ozdbmz18P8&_nc_zt=23&_nc_ht=scontent-cgk1-2.xx&_nc_gid=AddXOnyEzjiGqaxwi_eykY9&oh=00_AYG_TR8O5KuRk19rFdYnG8RAgrbx0Gdyemk-NbZfRRnN5g&oe=67D4A90F', alt: 'Gallery Image 8' },
        { src: 'https://scontent-cgk2-2.xx.fbcdn.net/v/t39.30808-6/482031274_122112085352729446_7113700827301720080_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JawsI9mR4WoQ7kNvgGMz4cN&_nc_oc=Adh7yl_kH0xHhxz3LUMYXlBawGUvRbMRc3NEvuZ1f9ba7XA3eLoGrT0QiOwxyeW0R9U&_nc_zt=23&_nc_ht=scontent-cgk2-2.xx&_nc_gid=A9FHsP-gS-4L3JCTRSzFLtx&oh=00_AYFUJA1nm1BohIYdtuwCyJuIWE_8yRpmrjaKz85w4FKo0Q&oe=67D4A8A0', alt: 'Gallery Image 9' },
        { src: 'https://scontent-cgk1-2.xx.fbcdn.net/v/t39.30808-6/481664602_122112085286729446_1669703495757555710_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6_UIezAonXgQ7kNvgEwsLii&_nc_oc=Adgjt7Zi-0Gs4YdK50_d5psIv2l3agSSBnsYVlxztzYjuoyqL1YZn24LyPatXJrewMY&_nc_zt=23&_nc_ht=scontent-cgk1-2.xx&_nc_gid=A56zMEsfDL0rpgeTDJBNoEV&oh=00_AYFBXcx3nzakPVdURXLfreZRGkmg2CmW6WPJwApjiMACIA&oe=67D49E3E', alt: 'Gallery Image 10' },
        { src: 'https://scontent-cgk2-2.xx.fbcdn.net/v/t39.30808-6/481250949_122112085256729446_5577470867955101271_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5AB5hQnU_58Q7kNvgGyJssP&_nc_oc=AdhxTxFVT0qoj0p29LPeWXY2qmUhwrxySM_mK2Nlyg-RugyCJvoTUYZovA7t3DE7S1E&_nc_zt=23&_nc_ht=scontent-cgk2-2.xx&_nc_gid=AqcHpVZU96Lu4c5-8VsR9sn&oh=00_AYGFZ_nlKWUiP2OV_aCMm4UXgE-BAo3jh1Wb5g9OuuazcQ&oe=67D49CDA', alt: 'Gallery Image 11' },
        { src: 'https://scontent-cgk2-2.xx.fbcdn.net/v/t39.30808-6/481232914_122112085208729446_1789720970603623775_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gZLBUOdREAYQ7kNvgEYnwA9&_nc_oc=AdjFCxqtMDRUQcNqX8BMXnCa1qPmr5QQ3GVA8Z_Tl-tUH4hIGMzr8T8hpyrNB1G31Ro&_nc_zt=23&_nc_ht=scontent-cgk2-2.xx&_nc_gid=A5gZnKjv3hCXnrZYjXJkTM3&oh=00_AYEpRHsQOc7v4xbwrGqmOttnZSrGVdSKTo5EvKzArrcvUA&oe=67D47F67', alt: 'Gallery Image 12' },
        { src: 'https://scontent-cgk2-2.xx.fbcdn.net/v/t39.30808-6/481910790_122112085160729446_7090448189389273204_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Pw4JF1s4CNcQ7kNvgHtqwk1&_nc_oc=AdhqtMoF9fjCYfh47kDXLJ1iLRrL4sIN9HDnKLolc_dWxx4E9v_MlsAN9i0J2lTGB3Y&_nc_zt=23&_nc_ht=scontent-cgk2-2.xx&_nc_gid=AZbwBr8TmsHhQDXFgBkaMto&oh=00_AYGQh9DGvzvkKrxsA3OAtol3gQ2migteELWKCan1ylveTw&oe=67D47EC5', alt: 'Gallery Image 13' },
        { src: 'https://scontent-cgk2-2.xx.fbcdn.net/v/t39.30808-6/481772419_122112085094729446_102749972079708325_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jOorjb_ma7YQ7kNvgHedCh0&_nc_oc=AdjSi7sdXesa6BUoxVwDF5gTfWx6hjm-uyoL1J4ZwCOPmaIiPrFwoGkf5QXIDDWMzRw&_nc_zt=23&_nc_ht=scontent-cgk2-2.xx&_nc_gid=Aea0FvC8BJSWHnh00poFaOM&oh=00_AYFX1MZhO6XpxfsRpOVx1MaLR2JNFKZ9hUcgUTxAcyt-aw&oe=67D49E6B', alt: 'Gallery Image 14' },
        { src: 'https://scontent-cgk1-2.xx.fbcdn.net/v/t39.30808-6/482191916_122112085064729446_3156884841848344780_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BQqCeVZeCrUQ7kNvgFgM9Dv&_nc_oc=AdjRJLmm33Gm9IAvtjAGIoz80g2Px6zfhduslMPuJPORi0rmTsZHh0B78OzPCHpBi1g&_nc_zt=23&_nc_ht=scontent-cgk1-2.xx&_nc_gid=ASOq4io8tCNkKeQpxKAKdJl&oh=00_AYENRMzqSWc6Xy_8vJbQTXiOI9w8AbABCoE2iVS2fBZq_g&oe=67D476CD', alt: 'Gallery Image 15' },
        { src: 'https://scontent-cgk1-1.xx.fbcdn.net/v/t39.30808-6/481257402_122112085010729446_7029518756800357473_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Dwjrlj4UiIAQ7kNvgEulEEt&_nc_oc=AdhEwAoPRmsxV4G0fIS920082aZh2YN2c8GKvteMaadMYe1nIYBlFahl51s6TqkDkA8&_nc_zt=23&_nc_ht=scontent-cgk1-1.xx&_nc_gid=AWu60dZjzv_SM72yWkhls_O&oh=00_AYHqb9L_U541ctSU8hD1QDuAm4nK4nB6DkKYZntYIgOVXQ&oe=67D49A49', alt: 'Gallery Image 16' },
        { src: 'https://scontent-cgk2-2.xx.fbcdn.net/v/t39.30808-6/481360498_122112084956729446_1141717248545003544_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=T9zoWvlk3_wQ7kNvgG6j-9o&_nc_oc=Adj-1ji7M0rqXmXhwEQMX_REy3thbDiLYfHO-M-Oe9mjcYEXKmbWvJc-zX2dbYNyrPA&_nc_zt=23&_nc_ht=scontent-cgk2-2.xx&_nc_gid=AvWi2tdpfFHhlNCPiV8Ur9T&oh=00_AYFGegJZZsll-7XgCMpGaI9FPRVdTPjtjzavJUMu7aFbHg&oe=67D494CF', alt: 'Gallery Image 17' },
        { src: 'https://scontent-cgk1-2.xx.fbcdn.net/v/t39.30808-6/481358244_122112084860729446_4986061850385389642_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dUq2V4pg6ZYQ7kNvgF64Qg2&_nc_oc=AdhhOwiK1Qwf4OSKpo9W32QbpkUGINJs_WtiW60bualb_VPFnJJjVoJIEYypdTOxoTA&_nc_zt=23&_nc_ht=scontent-cgk1-2.xx&_nc_gid=A_ZMI5KQ2bX0u2CYwaB7nE5&oh=00_AYF429moko5oz-drVKEnISOnq0kdZ6mYKWNDBbhJC5GeXw&oe=67D48987', alt: 'Gallery Image 18' }
    ];

    let currentIndex = 0;
    let autoSlideTimer;

    // Fungsi untuk pra-memuat gambar
    function preloadImages() {
        galleryImages.forEach(image => {
            const img = new Image();
            img.src = image.src;
        });
    }

    // Fungsi render yang dioptimalkan
    function renderGallery() {
        // Gunakan requestAnimationFrame untuk render yang lebih mulus
        requestAnimationFrame(() => {
            const productsToShow = window.innerWidth >= 768 ? 4 : 2;
            const displayedImages = galleryImages.slice(currentIndex, currentIndex + productsToShow);

            // Gunakan innerHTML sekali untuk performa lebih baik
            const imageHTML = displayedImages.map(image => `
                <div class="relative group overflow-hidden rounded-lg 
                            cursor-pointer transition-all duration-300 
                            ease-in-out transform hover:scale-105 
                            shadow-lg hover:shadow-xl">
                    <img src="${image.src}" alt="${image.alt}" 
                         class="w-full h-64 object-cover transition-transform 
                                duration-300 group-hover:brightness-90 lazy">
                    <div class="absolute inset-0 bg-black opacity-0 
                                group-hover:opacity-20 transition-opacity"></div>
                </div>
            `).join('');

            carouselContainer.innerHTML = imageHTML;
        });
    }

    // Fungsi geser carousel yang lebih efisien
    function updateCarousel(direction) {
        const totalImages = galleryImages.length;
        currentIndex = direction === 'next' 
            ? (currentIndex + 1) % totalImages 
            : (currentIndex - 1 + totalImages) % totalImages;
        
        renderGallery();
    }

    // Fungsi auto-slide dengan mekanisme yang lebih baik
    function startAutoSlide() {
        // Hapus interval sebelumnya jika ada
        if (autoSlideTimer) {
            clearInterval(autoSlideTimer);
        }
        
        autoSlideTimer = setInterval(() => {
            updateCarousel('next');
        }, 3500); // Sedikit lebih cepat untuk kesan lebih dinamis
    }

    // Event listeners dengan optimasi
    function setupEventListeners() {
        nextBtn.addEventListener('click', () => {
            updateCarousel('next');
            startAutoSlide(); // Reset timer saat diklik manual
        });

        prevBtn.addEventListener('click', () => {
            updateCarousel('prev');
            startAutoSlide(); // Reset timer saat diklik manual
        });

        // Pause auto-slide dengan mekanisme yang lebih baik
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(autoSlideTimer);
        });

        carouselContainer.addEventListener('mouseleave', startAutoSlide);

        // Responsif dengan debounce
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(renderGallery, 250);
        });
    }

    // Inisialisasi
    function init() {
        preloadImages(); // Pra-muat gambar untuk pengalaman lebih lancar
        renderGallery();
        setupEventListeners();
        startAutoSlide();
    }

    // Jalankan inisialisasi
    init();
});