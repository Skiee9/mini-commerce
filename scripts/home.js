import { injectNavbar } from './navbar.js';
import { renderProductList } from './renderproduct.js';

injectNavbar();

const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 60000, rating: 4.8 },
    { id: 2, name: 'Book', category: 'Stationery', price: 500, rating: 4.2 },
    { id: 3, name: 'Shoes', category: 'Fashion', price: 3000, rating: 4.5 },
];

//  wishlist and cart from datta storafe
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];

// Add item to cart
function addToCart(item) {
    if (confirm('Do you want to add this to the cart?')) {
        cartItems.push(item);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert('Added to cart!');
    }
}

// Add item to wishlist
function addToWishlist(item) {
    if (confirm('Do you want to add this to the wishlist?')) {
        wishlistItems.push(item);
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
        alert('Added to wishlist!');
    }
}

// Render products on home page
renderProductList(products, 'products', [
    { label: 'Add to Cart', onClick: addToCart },
    { label: 'Add to Wishlist', onClick: addToWishlist },
]);
