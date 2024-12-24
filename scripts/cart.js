import { injectNavbar } from './navbar.js';
import { renderProductList } from './renderproduct.js';

injectNavbar();
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// cart items
renderProductList(cartItems, 'cart');
