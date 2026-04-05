// Product data
const products = [
    { id: 1, name: 'Product 1', price: 29.99 },
    { id: 2, name: 'Product 2', price: 39.99 },
    { id: 3, name: 'Product 3', price: 49.99 },
    { id: 4, name: 'Product 4', price: 59.99 },
    { id: 5, name: 'Product 5', price: 69.99 },
    { id: 6, name: 'Product 6', price: 79.99 }
];

// Shopping cart management functions
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        saveCart();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
}

function saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Wishlist management
let wishlist = [];

function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (product && !wishlist.includes(product)) {
        wishlist.push(product);
    }
}

// Notification system
function notify(message) {
    alert(message);
}

// Product rendering function
function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const item = document.createElement('div');
        item.innerHTML = `${product.name} - $${product.price}`;
        productList.appendChild(item);
    });
}

// Search and filter capabilities
function searchProducts(query) {
    return products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
}

// Event listeners for initialization and newsletter subscription
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    renderProducts();
    // Add more initialization logic here
});

// Example of newsletter subscription
document.getElementById('subscribe-btn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    if (email) {
        notify('Thank you for subscribing!');
    }
});
