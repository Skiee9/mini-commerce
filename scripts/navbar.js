
export function injectNavbar() {
    const navigationHTML = `
        <header>
            <nav>
                <a href="index.html">Home</a>
                <a href="wishlist.html">Wishlist</a>
                <a href="cart.html">Cart</a>
            </nav>
        </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', navigationHTML);
}
