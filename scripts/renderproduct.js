
export function renderProductList(items, targetId, buttonActions = []) {
    const container = document.getElementById(targetId);
    container.innerHTML = ""; 

    items.forEach((item) => {
        const productCard = document.createElement('div');
        productCard.className = "product-item";

        productCard.innerHTML = `
            <h4>${item.name}</h4>
            <p>Category: ${item.category}</p>
            <p>Price: ₹${item.price}</p>
            <p>Rating: ${item.rating}</p>
        `;

     
        buttonActions.forEach((action) => {
            const button = document.createElement('button');
            button.textContent = action.label;
            button.onclick = () => action.onClick(item);
            productCard.appendChild(button);
        });

        container.appendChild(productCard);
    });
}
