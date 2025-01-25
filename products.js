// Product data
const products = {
    shirts: [
        {
            id: 'choppedchinshirt',
            title: 'Chopped Chin Shirt',
            image: 'https://res.cloudinary.com/teepublic/image/private/s--v4O7h4ZI--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_428/c_crop,g_north_west,h_626,w_470,x_-21,y_-32/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-416,y_-357/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1737039054/production/designs/71215420_0.jpg',
            price: 17,
            rating: 4.9,
            buyLink: 'https://www.teepublic.com/t-shirt/71215420-chopped-chin-memes',
        },
        {
            id: 'eyeofrahshirt',
            title: 'Eye of rah Shirt',
            image: 'https://res.cloudinary.com/teepublic/image/private/s--RGCQRNDN--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1737168483/production/designs/71283381_0.jpg',
            price: 17,
            rating: 4.9,
            buyLink: 'https://www.teepublic.com/t-shirt/71283381-eye-of-rah-memes-lock-in',
        }
    ],
    hoodies: [
        {
            id: 'choppedchinhoodie',
            title: 'Chopped Chin Hoodie',
            image: 'https://res.cloudinary.com/teepublic/image/private/s--FDMijHw3--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_423/c_crop,g_north_west,h_620,w_465,x_-21,y_-32/g_north_west,u_upload:v1446840652:production:blanks:ymwlojdlb9pdlxgcmck4,x_-412,y_-308/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1737039054/production/designs/71215420_0.jpg',
            price: 32,
            rating: 4.9,
            buyLink: 'https://www.teepublic.com/hoodie/71215420-chopped-chin-memes',
        },
        {
            id: 'eyeofrahhoodie',
            title: 'Eye of Rah Hoodie',
            image: 'https://res.cloudinary.com/teepublic/image/private/s--Xo192-NQ--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_465/c_crop,g_north_west,h_620,w_465,x_0,y_0/g_north_west,u_upload:v1446840652:production:blanks:ymwlojdlb9pdlxgcmck4,x_-391,y_-276/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1737168483/production/designs/71283381_0.jpg',
            price: 32,
            rating: 4.9,
            buyLink: 'https://www.teepublic.com/hoodie/71283381-eye-of-rah-memes-lock-in',
        }
    ],
    wallArt: [
        // Add wall art products here with the same structure
    ],
    caps: [
        {
            id: 'choppedchincap',
            title: 'Chopped Chin Cap',
            image: 'https://res.cloudinary.com/teepublic/image/private/s--BomiQhqp--/c_crop,x_10,y_10/c_fit,h_280/c_crop,g_north_west,h_280,w_528,x_-144,y_-4/l_misc:transparent_1260/fl_layer_apply,g_north_west,x_-510,y_-390/c_mfit,g_north_east,u_misc:d_dad_4_24/e_displace,fl_layer_apply,x_0,y_52/u_upload:v1716913655:production:blanks:zpfti9jshalzacqi5cqg/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1737039054/production/designs/71215420_0.jpg',
            price: 18,
            rating: 4.9,
            buyLink: 'https://www.teepublic.com/hat/71215420-chopped-chin-memes',
        }
        // Add cap products here with the same structure
    ],
    totebag: [
        {
            id: 'alienlockbag',
            title: 'Alien Locked In ToteBag ',
            image: 'https://res.cloudinary.com/teepublic/image/private/s--wZSBc0ra--/c_crop,x_10,y_10/c_fit,h_846/c_crop,g_north_west,h_1007,w_1007,x_-279,y_-81/l_upload:v1507037313:production:blanks:n2pk899a8qrzxtz4tyvn/fl_layer_apply,g_north_west,x_-406,y_-212/b_rgb:000000/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1737598038/production/designs/71519296_0.jpg',
            price: 14,
            rating: 3.5,
            buyLink: 'https://www.teepublic.com/tote/71519296-alien-locked-in-2024-reels-meme',
        },
        {
            id: 'eyeofrahbag',
            title: 'Eye of Rah ToteBag',
            image:'https://res.cloudinary.com/teepublic/image/private/s--U1PcBgZR--/c_crop,x_10,y_10/c_fit,h_916/c_crop,g_north_west,h_1007,w_1007,x_-146,y_-45/l_upload:v1507037313:production:blanks:n2pk899a8qrzxtz4tyvn/fl_layer_apply,g_north_west,x_-273,y_-176/b_rgb:000000/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1737168483/production/designs/71283381_0.jpg',
            price: 14,
            rating: 3.5,
            buyLink: 'https://www.teepublic.com/hoodie/71283381-eye-of-rah-memes-lock-in',
        }
    ]
};

function getUrlParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// Function to update category title
function updateCategoryTitle(category) {
    const title = document.getElementById('category-title');
    title.textContent = `Nolyx ${category.charAt(0).toUpperCase() + category.slice(1)}`;
}

// Function to render products
function renderProducts(category) {
    const productGrid = document.getElementById('product-grid');
    const categoryProducts = products[category] || products.all; // Default to shirts if category not found
    
    productGrid.innerHTML = categoryProducts.map(product => `
        <div id="${product.id}" class="product-card bg-white rounded-lg overflow-hidden shadow-md mx-auto w-full">
            <div class="relative">
                <img src="${product.image}" alt="${product.title}" class="w-full h-48 sm:h-64 object-cover">
                ${Math.random() < 0.25 ? `
                    <div class="absolute top-2 right-2">
                        <span class="bg-red-700 text-white px-2 py-1 rounded-full text-xs sm:text-sm">Hot</span>
                    </div>
                ` : Math.random() < 0.5 ? `
                    <div class="absolute top-2 right-2">
                        <span class="bg-blue-700 text-white px-2 py-1 rounded-full text-xs sm:text-sm">Discount</span>
                    </div>
                ` : Math.random() < 0.75 ? `
                    <div class="absolute top-2 right-2">
                        <span class="bg-green-700 text-white px-2 py-1 rounded-full text-xs sm:text-sm">New</span>
                    </div>
                ` : `
                    <div class="absolute top-2 right-2">
                        <span class="bg-yellow-700 text-white px-2 py-1 rounded-full text-xs sm:text-sm">Flash Sale</span>
                    </div>
                `}
            </div>
            <div class="p-3 sm:p-4">
                <h3 class="text-base sm:text-lg font-semibold mb-2">${product.title}</h3>
                <div class="flex justify-between items-center mb-3 sm:mb-4">
                    <span class="text-green-700 font-bold text-sm sm:text-base">from $${product.price}</span>
                    <div class="flex items-center">
                        <i class="fas fa-star text-yellow-400"></i>
                        <span class="ml-1 text-gray-600 text-sm">${product.rating}</span>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <a href="${product.buyLink}" target="_blank" 
                    class="w-full flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg transition-colors shadow-md text-sm sm:text-base">
                        <span class="font-bold">Buy Now</span>
                        <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                    <button onclick="addToCart('${product.id}')" 
                            class="w-16 sm:w-24 flex items-center justify-center bg-gray-700 hover:bg-gray-800 text-white px-2 sm:px-4 py-2 rounded-lg transition-colors shadow-md">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Handle mobile menu
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Get category from URL parameter
    const category = getUrlParameter('category') || 'Design';
    
    // Update title and render products
    updateCategoryTitle(category);
    renderProducts(category);
});

// Product data tetap sama seperti sebelumnya...

// Fungsi untuk menangani pencarian
let allProducts = [];

// Fungsi untuk mengumpulkan semua produk
function collectAllProducts() {
    allProducts = [];
    for (const category in products) {
        products[category].forEach(product => {
            allProducts.push({
                ...product,
                category: category
            });
        });
    }
}

// Fungsi untuk filter produk
function filterProducts(searchTerm, category) {
    searchTerm = searchTerm.toLowerCase();
    let filteredProducts = allProducts;

    // Filter berdasarkan kategori jika bukan 'all'
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    // Filter berdasarkan nama jika ada search term
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.title.toLowerCase().includes(searchTerm)
        );
    }

    return filteredProducts;
}

// Fungsi untuk render hasil pencarian
function renderSearchResults(searchTerm, category) {
    const filteredProducts = filterProducts(searchTerm, category);
    const productGrid = document.getElementById('product-grid');
    const searchInfo = document.getElementById('searchInfo');
    const noResults = document.getElementById('noResults');
    const resultCount = document.getElementById('resultCount');
    const searchTermDisplay = document.getElementById('searchTermDisplay');

    // Update search info
    if (searchTerm || category !== 'all') {
        searchInfo.classList.remove('hidden');
        searchTermDisplay.textContent = `${searchTerm} ${category !== 'all' ? `(${category})` : ''}`;
        resultCount.textContent = filteredProducts.length;
    } else {
        searchInfo.classList.add('hidden');
    }

    // Show/hide no results message
    if (filteredProducts.length === 0) {
        noResults.classList.remove('hidden');
        productGrid.classList.add('hidden');
    } else {
        noResults.classList.add('hidden');
        productGrid.classList.remove('hidden');
    }

    // Render products
    productGrid.innerHTML = filteredProducts.map(product => `
 <div id="${product.id}" class="product-card bg-white rounded-lg overflow-hidden shadow-md mx-auto w-full">
            <div class="relative">
                <img src="${product.image}" alt="${product.title}" class="w-full h-48 sm:h-64 object-cover">
                ${Math.random() < 0.25 ? `
                    <div class="absolute top-2 right-2">
                        <span class="bg-red-700 text-white px-2 py-1 rounded-full text-xs sm:text-sm">Hot</span>
                    </div>
                ` : Math.random() < 0.5 ? `
                    <div class="absolute top-2 right-2">
                        <span class="bg-blue-700 text-white px-2 py-1 rounded-full text-xs sm:text-sm">Discount</span>
                    </div>
                ` : Math.random() < 0.75 ? `
                    <div class="absolute top-2 right-2">
                        <span class="bg-green-700 text-white px-2 py-1 rounded-full text-xs sm:text-sm">New</span>
                    </div>
                ` : `
                    <div class="absolute top-2 right-2">
                        <span class="bg-yellow-700 text-white px-2 py-1 rounded-full text-xs sm:text-sm">Flash Sale</span>
                    </div>
                `}
            </div>
            <div class="p-3 sm:p-4">
                <h3 class="text-base sm:text-lg font-semibold mb-2">${product.title}</h3>
                <div class="flex justify-between items-center mb-3 sm:mb-4">
                    <span class="text-green-700 font-bold text-sm sm:text-base">from $${product.price}</span>
                    <div class="flex items-center">
                        <i class="fas fa-star text-yellow-400"></i>
                        <span class="ml-1 text-gray-600 text-sm">${product.rating}</span>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <a href="${product.buyLink}" target="_blank" 
                       class="w-full flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg transition-colors shadow-md text-sm sm:text-base">
                        <span class="font-bold">Buy Now</span>
                        <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                    <button onclick="addToCart('${product.id}')" 
                            class="w-16 sm:w-24 flex items-center justify-center bg-gray-700 hover:bg-gray-800 text-white px-2 sm:px-4 py-2 rounded-lg transition-colors shadow-md">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Event listeners untuk search
document.addEventListener('DOMContentLoaded', () => {
    // Inisialisasi semua produk
    collectAllProducts();

    // Get elements
    const searchName = document.getElementById('searchName');
    const searchCategory = document.getElementById('searchCategory');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Set initial category from URL
    const urlCategory = getUrlParameter('category') || 'all';
    searchCategory.value = urlCategory;

    // Event listeners untuk pencarian
    let searchTimeout;
    searchName.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            renderSearchResults(e.target.value, searchCategory.value);
        }, 300); // Debounce 300ms
    });

    searchCategory.addEventListener('change', (e) => {
        renderSearchResults(searchName.value, e.target.value);
    });

    // Mobile menu tetap sama seperti sebelumnya...

    // Initial render
    renderSearchResults('', searchCategory.value);
});
