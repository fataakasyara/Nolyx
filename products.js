// Product data
const products = {
    shirts: [
        {
            id: 'choppedchinshirt',
            title: 'Chopped Chin T-Shirt',
            image: 'https://res.cloudinary.com/teepublic/image/private/s--v4O7h4ZI--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_428/c_crop,g_north_west,h_626,w_470,x_-21,y_-32/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-416,y_-357/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1737039054/production/designs/71215420_0.jpg',
            price: 23,
            buyLink: 'https://www.teepublic.com/t-shirt/71215420-chopped-chin-memes',
        },
        {
            id: 'alienlockshirt',
            title: 'Alien Locked In T-Shirt ',
            image: 'https://res.cloudinary.com/teepublic/image/private/s--IxQBmvB7--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_626/c_crop,g_north_west,h_626,w_470,x_-68,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-463,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1737598038/production/designs/71519296_0.jpg',
            price: 23,
            buyLink: 'https://www.teepublic.com/t-shirt/71519296-alien-locked-in-2024-reels-meme',
        },
        {
            id: 'eyeofrahshirt',
            title: 'Eye of rah T-Shirt',
            image: 'https://res.cloudinary.com/teepublic/image/private/s--RGCQRNDN--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1737168483/production/designs/71283381_0.jpg',
            price: 23,
            buyLink: 'https://www.teepublic.com/t-shirt/71283381-eye-of-rah-memes-lock-in',
        },
        {
            id: 'fishrockshirt',
            title: 'There is Sea Under the Rock T-Shirt',
            image: 'https://res.cloudinary.com/teepublic/image/private/s--NPRzTfB3--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1738327228/production/designs/71804962_0.jpg',
            price: 23,
            buyLink: 'https://www.teepublic.com/t-shirt/71804962-there-is-sea-under-the-rock',
        },
        {
            id: 'greatchaosshirt',
            title: 'The Great Chaos Ken Carson T-shirt',
            image:'https://res.cloudinary.com/teepublic/image/private/s--Xj0MXf6W--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829024:production:blanks:a59x1cgomgu5lprfjlmi,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1738460377/production/designs/71857723_0.jpg',
            price: 23,
            buyLink: 'https://www.teepublic.com/t-shirt/71857723-the-great-chaos-ken-carson-opium',
        },
        {
            id : 'homixidegangshirt',
            title: 'Homixide Gang T-Shirt',
            image : 'https://res.cloudinary.com/teepublic/image/private/s--OhwOs-mO--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_465/c_crop,g_north_west,h_626,w_470,x_-11,y_-61/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-406,y_-386/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1738720846/production/designs/71986303_0.jpg',
            price: 23,
            buyLink: 'https://www.teepublic.com/t-shirt/71986303-homixide-gang-opium',
        },
        {
            id : 'johnporkmeltshirt',
            title: 'John Pork melting T-Shirt',
            image:'https://res.cloudinary.com/teepublic/image/private/s--8hskRN0B--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_613/c_crop,g_north_west,h_626,w_470,x_-49,y_-6/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-444,y_-331/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1738459906/production/designs/71857570_0.jpg',
            price: 23,
            buyLink: 'https://www.teepublic.com/t-shirt/71857570-john-pork-melt',
        },
        {
            id : 'johnporkmeltkidshirt',
            title: 'John Pork melting kid T-Shirt',
            image:'https://res.cloudinary.com/teepublic/image/private/s--vyUkrqTV--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_543/c_crop,g_north_west,h_554,w_416,x_-43,y_-6/g_north_west,u_upload:v1446840606:production:blanks:swq1z7pyszdblujxb6qi,x_-467,y_-331/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1738459906/production/designs/71857570_0.jpg',
            price: 19,
            buyLink: 'https://www.teepublic.com/t-shirt/71857570-john-pork-melt',
        },
        {
            id : 'eyeofrahkidshirt',
            title: 'Eye of Rah kid T-Shirt',
            image:'https://res.cloudinary.com/teepublic/image/private/s--N2D3hPZm--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_416/c_crop,g_north_west,h_554,w_416,x_0,y_0/g_north_west,u_upload:v1446840606:production:blanks:swq1z7pyszdblujxb6qi,x_-424,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1737168483/production/designs/71283381_0.jpg',
            price: 19,
            buyLink: 'https://www.teepublic.com/t-shirt/71283381-eye-of-rah-opium',
        }
    ],
    hoodies: [
        {
            id: 'choppedchinhoodie',
            title: 'Chopped Chin Hoodie',
            image: 'https://res.cloudinary.com/teepublic/image/private/s--FDMijHw3--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_423/c_crop,g_north_west,h_620,w_465,x_-21,y_-32/g_north_west,u_upload:v1446840652:production:blanks:ymwlojdlb9pdlxgcmck4,x_-412,y_-308/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1737039054/production/designs/71215420_0.jpg',
            price: 39,
            buyLink: 'https://www.teepublic.com/hoodie/71215420-chopped-chin-memes',
        },
        {
            id: 'eyeofrahhoodie',
            title: 'Eye of Rah Hoodie',
            image: 'https://res.cloudinary.com/teepublic/image/private/s--Xo192-NQ--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_465/c_crop,g_north_west,h_620,w_465,x_0,y_0/g_north_west,u_upload:v1446840652:production:blanks:ymwlojdlb9pdlxgcmck4,x_-391,y_-276/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1737168483/production/designs/71283381_0.jpg',
            price: 39,
            buyLink: 'https://www.teepublic.com/hoodie/71283381-eye-of-rah-memes-lock-in',
        },
        {
            id: 'iamliarhoodie',
            title: 'I Am Liar Hoodie',
            image:'https://res.cloudinary.com/teepublic/image/private/s--8rp6FSDY--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_589/c_crop,g_north_west,h_620,w_465,x_-120,y_-16/g_north_west,u_upload:v1446840652:production:blanks:ymwlojdlb9pdlxgcmck4,x_-511,y_-292/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1738125706/production/designs/71727606_0.jpg',
            price: 39,
            buyLink: 'https://www.teepublic.com/hoodie/71727606-i-am-liar-i-am-music',
        },
        {
            id: 'homixideganghoodie',
            title: 'Homixide Gang Hoodie',
            image:'https://res.cloudinary.com/teepublic/image/private/s--py82g-lv--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_460/c_crop,g_north_west,h_620,w_465,x_-11,y_-61/g_north_west,u_upload:v1446840652:production:blanks:ymwlojdlb9pdlxgcmck4,x_-402,y_-337/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1738720846/production/designs/71986303_0.jpg',
            price: 39,
            buyLink: 'https://www.teepublic.com/hoodie/71986303-homixide-gang-opium',
        },
        {
            id: 'johnporkmelthoodie',
            title: 'John Pork Melt Hoodie',
            image:'https://res.cloudinary.com/teepublic/image/private/s--n_rnd7TK--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_608/c_crop,g_north_west,h_620,w_465,x_-48,y_-6/g_north_west,u_upload:v1446840652:production:blanks:ymwlojdlb9pdlxgcmck4,x_-439,y_-282/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1738459906/production/designs/71857570_0.jpg',
            price: 39,
            buyLink: 'https://www.teepublic.com/hoodie/71857570-john-pork-melt',
        }
    ],
    tanktop: [
        {
            id: 'iamliartanktop',
            title: 'I Am Liar Tank Top',
            image:'https://res.cloudinary.com/teepublic/image/private/s--LzIfw8Aa--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_479/c_crop,g_north_west,h_504,w_378,x_-97,y_-13/g_north_west,u_upload:v1458945136:production:blanks:komu2zf243wdtgnibvrn,x_-547,y_-405/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1738125706/production/designs/71727606_0.jpg',
            price: 20,
            buyLink: 'https://www.teepublic.com/tank-top/71727606-i-am-liar-i-am-music',
        }
    ],
    caps: [
        {
            id: 'choppedchincap',
            title: 'Chopped Chin Cap',
            image: 'https://res.cloudinary.com/teepublic/image/private/s--BomiQhqp--/c_crop,x_10,y_10/c_fit,h_280/c_crop,g_north_west,h_280,w_528,x_-144,y_-4/l_misc:transparent_1260/fl_layer_apply,g_north_west,x_-510,y_-390/c_mfit,g_north_east,u_misc:d_dad_4_24/e_displace,fl_layer_apply,x_0,y_52/u_upload:v1716913655:production:blanks:zpfti9jshalzacqi5cqg/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1737039054/production/designs/71215420_0.jpg',
            price: 23,
            buyLink: 'https://www.teepublic.com/hat/71215420-chopped-chin-memes',
        },
        {
            id: 'greatchaoscap',
            title: 'The Great Chaos Ken Carson Cap',
            image: 'https://res.cloudinary.com/teepublic/image/private/s--ZtvX3lx6--/c_crop,x_10,y_10/c_fit,h_280/c_crop,g_north_west,h_280,w_528,x_-130,y_0/l_misc:transparent_1260/fl_layer_apply,g_north_west,x_-496,y_-386/c_mfit,g_north_east,u_misc:d_dad_4_24/e_displace,fl_layer_apply,x_0,y_52/u_upload:v1716913653:production:blanks:wjq11hize8qbuup8bsvf/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1738460377/production/designs/71857723_0.jpg',
            price: 23,
            buyLink: 'https://www.teepublic.com/hat/71857723-the-great-chaos-ken-carson-opium',
        },
        {
            id: 'homixidegangcap',
            title: 'Homixide Gang Cap',
            image:'https://res.cloudinary.com/teepublic/image/private/s--QkaojAVU--/c_crop,x_10,y_10/c_fit,w_528/c_crop,g_north_west,h_280,w_528,x_0,y_-118/l_misc:transparent_1260/fl_layer_apply,g_north_west,x_-366,y_-504/c_mfit,g_north_east,u_misc:d_dad_4_24/e_displace,fl_layer_apply,x_0,y_52/u_upload:v1716913655:production:blanks:zpfti9jshalzacqi5cqg/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1738720846/production/designs/71986303_0.jpg',
            price: 23,
            buyLink: 'https://www.teepublic.com/hat/71986303-homixide-gang-opium',
        }
    ],
    sweatshirt: [
        {
            id: 'fishrocksweatshirt',
            title: 'There is Sea under the rock Sweatshirt',
            image: 'https://res.cloudinary.com/teepublic/image/private/s--dk3HJjfm--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_409/c_crop,g_north_west,h_544,w_409,x_0,y_0/g_north_west,u_upload:v1561483906:production:blanks:nvgy11lefnvjtfxu6kaw,x_-428,y_-347/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1738327228/production/designs/71804962_0.jpg',
            price: 35,
            buyLink: 'https://www.teepublic.com/crewneck-sweatshirt/71804962-there-is-sea-under-the-rock',
        }
    ],
    totebag: [
        {
            id: 'alienlockbag',
            title: 'Alien Locked In ToteBag ',
            image: 'https://res.cloudinary.com/teepublic/image/private/s--wZSBc0ra--/c_crop,x_10,y_10/c_fit,h_846/c_crop,g_north_west,h_1007,w_1007,x_-279,y_-81/l_upload:v1507037313:production:blanks:n2pk899a8qrzxtz4tyvn/fl_layer_apply,g_north_west,x_-406,y_-212/b_rgb:000000/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1737598038/production/designs/71519296_0.jpg',
            price: 20,
            buyLink: 'https://www.teepublic.com/tote/71519296-alien-locked-in-2024-reels-meme',
        },
        {
            id: 'eyeofrahbag',
            title: 'Eye of Rah ToteBag',
            image:'https://res.cloudinary.com/teepublic/image/private/s--U1PcBgZR--/c_crop,x_10,y_10/c_fit,h_916/c_crop,g_north_west,h_1007,w_1007,x_-146,y_-45/l_upload:v1507037313:production:blanks:n2pk899a8qrzxtz4tyvn/fl_layer_apply,g_north_west,x_-273,y_-176/b_rgb:000000/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1737168483/production/designs/71283381_0.jpg',
            price: 20,
            buyLink: 'https://www.teepublic.com/tote/71283381-eye-of-rah-memes-lock-in',
        }
    ]
};

function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to update category title
function updateCategoryTitle(category) {
    const titleElement = document.getElementById('category-title');
    titleElement.textContent = `Nolyx ${category[0].toUpperCase()}${category.slice(1)}`;
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
                        <span class="ml-1 text-gray-600 text-sm">${(Math.random() * (4.0 - 3.0 + 1) + 3.0).toFixed(1)}</span>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <a href="${product.buyLink}" target="_blank" 
                    class="w-full flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg transition-colors shadow-md text-sm sm:text-base">
                        <span class="font-bold">Buy Now</span>
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


    // Get category from URL parameter
    const category = getUrlParameter('category') ;
    
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
                         <span class="ml-1 text-gray-600 text-sm">${(Math.random() * (4.0 - 3.0 + 1) + 3.0).toFixed(1)}</span>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <a href="${product.buyLink}" target="_blank" 
                       class="w-full flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg transition-colors shadow-md text-sm sm:text-base">
                        <span class="font-bold">Buy Now</span>
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
