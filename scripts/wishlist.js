import { injectNavbar } from './navbar.js';
import { renderProductList } from './renderproduct.js';

injectNavbar();

// Retrieve wishlist 
const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Add item from wishlist to cart
function moveToCart(item) {
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert('Moved to cart!');
}

// Render wishlist
renderProductList(wishlistItems, 'wishlist', [
    { label: 'Move to Cart', onClick: moveToCart },
]);
