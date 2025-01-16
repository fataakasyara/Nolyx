function addToCart(productId) {
    // Ambil div produk berdasarkan ID yang diklik
    const productDiv = document.getElementById(productId);

    // Ambil informasi dari div (misalnya nama, harga, gambar)
    const name = productDiv.querySelector('h3').textContent;
    const price = productDiv.querySelector('.text-green-700').textContent.replace('$', '');
    const image = productDiv.querySelector('img').src;

    // Simpan data produk ke keranjang di localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Cek apakah produk sudah ada di dalam keranjang berdasarkan ID
    const existingProductIndex = cart.findIndex(product => product.id === productId);
    
    if (existingProductIndex !== -1) {
    alert(`${name} sudah ada di keranjang.`);
      return; // Tidak menambah produk jika sudah ada
    }

    // Buat objek produk
    const product = { id: productId, name, price, image };
    
    // Tambahkan produk ke dalam cart
    cart.push(product);
    
    // Simpan kembali ke localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${name} telah ditambahkan ke keranjang.`);
    } 