

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
        { src: 'https://scontent.fjog1-1.fna.fbcdn.net/v/t39.30808-6/481360498_122112084956729446_1141717248545003544_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EVuRi0Fr4DIQ7kNvgGxHfnh&_nc_oc=Adj4PFugCmPFOwn2Q_FRgAWeMuYpOBevgWL5D0GRPQf-yZttM2146l8Fce3m1PNcrVw&_nc_zt=23&_nc_ht=scontent.fjog1-1.fna&_nc_gid=APpnktew5-XzTF_Deb3SoUS&oh=00_AYBMENFPdlfkSMPkh9De98fn6W8OH9Sng5LaAxrdp1Zi8w&oe=67CDC50F', alt: 'Gallery Image 1' },
        { src: 'https://scontent.fjog1-1.fna.fbcdn.net/v/t39.30808-6/481772419_122112085094729446_102749972079708325_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DbX7sYqWbB8Q7kNvgFWZ4QX&_nc_oc=AdjuzMkJmk0nBHG21g2MSh2DVA9FnMtfaW-dcvQQLlDXZtjkJEpyVy5nPt-O4HLfbVI&_nc_zt=23&_nc_ht=scontent.fjog1-1.fna&_nc_gid=ArL28YmQPN8MLLMJfKkC8Zm&oh=00_AYAXL5s-vaDVdmoBRTUMeC5w6PHvyMUWTgZJaOGNxwBt7Q&oe=67CDCEAB', alt: 'Gallery Image 2' },
        { src: 'https://scontent.fjog1-1.fna.fbcdn.net/v/t39.30808-6/481358244_122112084860729446_4986061850385389642_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=PVwpFsLGfBoQ7kNvgGFNQLJ&_nc_oc=Adiw2tzHY13kaRy8mdTs7pzXJ0D7NbjTsLvcctXS5ZWhcXp0ZK8Wbr81q5O_4D7zZHQ&_nc_zt=23&_nc_ht=scontent.fjog1-1.fna&_nc_gid=A5v4sHbzxk4aFK9vT4_VU6C&oh=00_AYAEqFBQ_jLQ0tXvoqzv_wweyTxlD6JheAeqycxE1hrxrA&oe=67CDB9C7', alt: 'Gallery Image 3' },
        { src: 'https://scontent.fjog1-1.fna.fbcdn.net/v/t39.30808-6/481257159_122112085598729446_414666427204733345_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ryeRd4NbEiIQ7kNvgHzeV3M&_nc_oc=AdgZQReB2Ilt89i-cR1wcLciSZSxmiQ-tNAnYr4-TmyodzuVGfLIOz8-NoKENFURUY8&_nc_zt=23&_nc_ht=scontent.fjog1-1.fna&_nc_gid=ABz5t806XNaFTPP2kPV1dpZ&oh=00_AYBS8v20-NpCXKtUudYdstG3kyOboyOoJPsBgVmps_DBcQ&oe=67CDCF66', alt: 'Gallery Image 4' },
        { src: 'https://scontent.fjog1-1.fna.fbcdn.net/v/t39.30808-6/481243973_122112085646729446_4549884141759316246_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_NyW06FiFHYQ7kNvgG9f3LT&_nc_oc=AdgiyEPmGm_0ZI1GMK4kyvS3vkHDxs4qvPDPUzZU4auYMbmRMNgqlSiRSJpBt56Kx4A&_nc_zt=23&_nc_ht=scontent.fjog1-1.fna&_nc_gid=Ah5CKrNLJs87hrEOcZLAtww&oh=00_AYD5wY2cgZxxZbiqmGkFq1-_bdMC65WVMEyKJhtYpcxKCA&oe=67CDC1AE', alt: 'Gallery Image 5' },
        { src: 'https://scontent.fjog1-1.fna.fbcdn.net/v/t39.30808-6/482070952_122112085406729446_8282311032524490446_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=j21FGNUwtKAQ7kNvgEyNgn5&_nc_oc=AdhXOwy3yihCoiVQDaUOg9qrndItfACUDOFh0UrKZ6jtGftvCkpvqMSSx9HQVyh9QcU&_nc_zt=23&_nc_ht=scontent.fjog1-1.fna&_nc_gid=AKQkXLVIBn-Of8n1cmmyRVa&oh=00_AYDvIhyCGMN8QLngNyoQJsQUUFO41ri-0m_rT_bpXtwFEw&oe=67CDD94F', alt: 'Gallery Image 6' },
        { src: 'https://scontent.fjog1-1.fna.fbcdn.net/v/t39.30808-6/481664602_122112085286729446_1669703495757555710_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GzGBTLdbXoAQ7kNvgE2r7FL&_nc_oc=AdjiijQIUWq8NJrUbFE_tdKwGEWxmGGyDJfObnalR4x-syCbA_l2wdLmuL3mH8sJw38&_nc_zt=23&_nc_ht=scontent.fjog1-1.fna&_nc_gid=ATR7IniJhKFZVD7WmpoSVjr&oh=00_AYDYpPfB0ODEFzB9PkbmaaUaJRYz-M8pvBa4gnjI6EDzaw&oe=67CDCE7E', alt: 'Gallery Image 7' },
        { src: 'https://scontent.fjog1-1.fna.fbcdn.net/v/t39.30808-6/482191916_122112085064729446_3156884841848344780_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HKZfbBkt1JAQ7kNvgET0pru&_nc_oc=Adjwe0kGtPbherZ9-D9WjOBd4v8z-BxZNpj0Nm4E8XefiE2ktOgM_FiQ0OFmWA-5nts&_nc_zt=23&_nc_ht=scontent.fjog1-1.fna&_nc_gid=AcHyBmB5xW59xUiAiUaFXEe&oh=00_AYCkGOvB4IEjFzs5nxDaAxY8t3Qg2uRvV_cX3oa11Y2xvg&oe=67CDA70D', alt: 'Gallery Image 8' },
        { src: 'https://scontent.fjog1-1.fna.fbcdn.net/v/t39.30808-6/481910790_122112085160729446_7090448189389273204_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wGRorH4epKwQ7kNvgF8ehNi&_nc_oc=AdgX6EJ68SZ6_aEsPwBexrY00CgJp9eoobyynh5dSYccurO1SsnIEv_n6_lhwIaSllc&_nc_zt=23&_nc_ht=scontent.fjog1-1.fna&_nc_gid=AQt2wFsm5WJEZygheteMHOn&oh=00_AYDe5HcPC9FHy2FULvls5EILxc4TXJIxrZNrg8WFCi0WpQ&oe=67CDAF05', alt: 'Gallery Image 9' },
        { src: 'https://scontent.fjog1-1.fna.fbcdn.net/v/t39.30808-6/482031274_122112085352729446_7113700827301720080_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=O2moM-xCrRMQ7kNvgHAjASq&_nc_oc=AdjZiw34DeFxMhP7WNdJvrLqdIBpSAKeRjJkIyYgwYSOiabVn36JV4w_vvQ8dwyT7no&_nc_zt=23&_nc_ht=scontent.fjog1-1.fna&_nc_gid=ARLRFHaX_dwKo9VuIwo0M0A&oh=00_AYCsEp-Gkdfa7PWR3UAYuDeyHIW4v8nD8COH0Pkow5s0lQ&oe=67CDD8E0', alt: 'Gallery Image 10' },
        { src: 'https://scontent.fjog1-1.fna.fbcdn.net/v/t39.30808-6/481250949_122112085256729446_5577470867955101271_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GSYOJaYd-WIQ7kNvgFXRzZW&_nc_oc=AdgqOVSCMWuhzOp1V__t1iuMcpK2HU4ku06LV2X87FGMwhxm027xGIcG8meFGuxG0BQ&_nc_zt=23&_nc_ht=scontent.fjog1-1.fna&_nc_gid=ASOMWAc6EkPi2ruN4YsrReS&oh=00_AYBZxVvLMoLu5f5pDYHuqomZs-dZE6zFvIfmsCB5VDAE-A&oe=67CDCD1A', alt: 'Gallery Image 11' },
        { src: 'https://scontent.fjog1-1.fna.fbcdn.net/v/t39.30808-6/482026961_122112085550729446_1427419181003002672_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=OrFj3RzAMUcQ7kNvgH92V_J&_nc_oc=AdiFcD6rdmv5myx8XzIiWvICn6FEPw4O8uc-2witr-J5lIjifJSWSH-CAcrD1DrWCCw&_nc_zt=23&_nc_ht=scontent.fjog1-1.fna&_nc_gid=A2moYkoFuj5-b_Rm0TameYJ&oh=00_AYATUFUFI3YQoKqXZCbAJLb5I0SBtwIiDQFYllPX4937fA&oe=67CDD1BC', alt: 'Gallery Image 12' },
        { src: 'https://scontent.fjog1-1.fna.fbcdn.net/v/t39.30808-6/481232914_122112085208729446_1789720970603623775_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ugt7OZPHApIQ7kNvgEjppKh&_nc_oc=AdiN3jscBQBvAwenXkIYzvsxhhCbjAHy5KcsWic2jIi8C5aqnClw5l_QgcgJncu08iE&_nc_zt=23&_nc_ht=scontent.fjog1-1.fna&_nc_gid=ARR6HqlceBQMDo-926EAI0a&oh=00_AYDjmnMgNY5Qih4o5i389INkMJEFZql-MjcrShQTHpUAuw&oe=67CDAFA7', alt: 'Gallery Image 13' },
        { src: 'https://scontent.fjog1-1.fna.fbcdn.net/v/t39.30808-6/482007100_122112085466729446_1484630065805670546_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Pj41cPislEAQ7kNvgH-KxNO&_nc_oc=AdgNxFteEVlgD3u6eJiKbE2KOpseqN2E5M1oVaq0sUbJD-hLM_wJL7BTX4CjOeImXBE&_nc_zt=23&_nc_ht=scontent.fjog1-1.fna&_nc_gid=Aa-jG7ytOT3PJmkD2qOF0sr&oh=00_AYDsbJZdV7J8K7zWzuOrOtw2U-H528a_cXsLaxueeFlzsA&oe=67CDAC7D', alt: 'Gallery Image 14' },
        { src: 'https://scontent.fjog1-1.fna.fbcdn.net/v/t39.30808-6/481262391_122112085436729446_4015750153217671828_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=717XKgM_l3wQ7kNvgHbM0Kv&_nc_oc=AdiTVXrICrLGXSfXQYP3TICteVRDr7_48eTDJdtdSSSN2Oh0h-54Uw1ABcTWsBvinAk&_nc_zt=23&_nc_ht=scontent.fjog1-1.fna&_nc_gid=AOOhyX5iDigKIjNZMu0Dhcx&oh=00_AYBIVly2I5CKhTAIcqcRpOdWiATrSTwKsIhAY2i0pP1QSg&oe=67CDAD35', alt: 'Gallery Image 15' },
        { src: 'https://scontent.fjog1-1.fna.fbcdn.net/v/t39.30808-6/481244861_122112085706729446_7199386741413436414_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=RI5-0Se_aXoQ7kNvgEgm0Ko&_nc_oc=AdhIPb6icQwC9-W0ncVDh82lUtR5FEe9kXLG9crz7ZTmI8WsF46y45w3Vetu3tDt_Rs&_nc_zt=23&_nc_ht=scontent.fjog1-1.fna&_nc_gid=AbPf6Xbfnp33H8uDJuvtvwm&oh=00_AYD5McXyySHGoQ3tYe5paDJ3ak7fPV1Zhuu8_PvrKtln9w&oe=67CDBA99', alt: 'Gallery Image 16' },
        { src: 'https://scontent.fjog1-1.fna.fbcdn.net/v/t39.30808-6/481470285_122112085736729446_7991701722923479246_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ztBeINEzEeQQ7kNvgEhNUB3&_nc_oc=AdgwkP3c7xNZOgXyzFIzkPsiCvTZcRTi4kB8Zt-j_l4FevxrqrDTRyta1mpwwlkemiQ&_nc_zt=23&_nc_ht=scontent.fjog1-1.fna&_nc_gid=A7QZbUsYSPPoYjfF-cP2pYw&oh=00_AYAsE_LQO1oICLzYwYoMqa_OwThzxaqO9qIHCoxl3yR_cg&oe=67CDD90F', alt: 'Gallery Image 17' },
        { src: 'https://scontent.fjog1-1.fna.fbcdn.net/v/t39.30808-6/481257402_122112085010729446_7029518756800357473_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eSsXvBSly9gQ7kNvgHh87gi&_nc_oc=Adgdx7brfCAvVkO5zs_mUfqTZIp51WCl0ALiYvGSOtqki7T5mgY6z1JD__grbZ34vww&_nc_zt=23&_nc_ht=scontent.fjog1-1.fna&_nc_gid=A7XbDpsh4sz_i1gJ_BnWaLp&oh=00_AYBcs0W6pObKu0Bgx2EDgbSCE5XOx7Resxd6JyJQYQlYdA&oe=67CDCA89', alt: 'Gallery Image 18' }
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