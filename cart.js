function addToCart(productId) {
// Ambil div produk berdasarkan ID yang diklik
const productDiv = document.getElementById(productId);

// Ambil informasi dari div (misalnya nama, harga, gambar)
const name = productDiv.querySelector('h3').textContent;
const price = productDiv.querySelector('.text-green-700').textContent;
const image = productDiv.querySelector('img').src;
const link = productDiv.querySelector('a').href;

// Simpan data produk ke keranjang di localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Cek apakah produk sudah ada di dalam keranjang berdasarkan ID
const existingProductIndex = cart.findIndex(product => product.id === productId);

if (existingProductIndex !== -1) {
    // Gunakan SweetAlert2 untuk notifikasi
    Swal.fire({
        icon: 'info',
        title: 'Product already in cart',
        text: `your has added ${name} before.`,
        confirmButtonColor: '#4CAF50',
    });
    return; // Tidak menambah produk jika sudah ada
}

// Buat objek produk
const product = { id: productId, name, price, image, link };

// Tambahkan produk ke dalam cart
cart.push(product);

// Simpan kembali ke localStorage
localStorage.setItem('cart', JSON.stringify(cart));

// Gunakan SweetAlert2 untuk konfirmasi sukses
Swal.fire({
    icon: 'success',
    title: 'Added to cart!',
    html: `<p><strong>${name}</strong> has been added to your cart.</p>`,
    imageUrl: image,
    imageWidth: 100,
    imageHeight: 100,
    confirmButtonColor: '#4CAF50',
  });
}
