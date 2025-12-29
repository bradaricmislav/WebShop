import { cart, removeFromCart} from "./cart.js";
import { games } from "./games.js"
import { ps5Games } from "./igre/ps5.js";
import { xboxGames } from "./igre/xbox.js";
import { nintendoGames} from "./igre/nintendo.js"
import { ps5Consoles } from "./konzole/ps5.js"
import { xboxConsoles } from "./konzole/xbox.js"
import { nintendoConsoles } from "./konzole/nintendo.js"
import { ps5Periphery } from "./periferija/ps5.js"
import { xboxPeriphery } from "./periferija/xbox.js"
import { nintendoPeriphery } from "./periferija/nintendo.js"

const products = [...games, ...ps5Games, ...xboxGames, ...nintendoGames, ...ps5Consoles, ...xboxConsoles, ...nintendoConsoles, ...ps5Periphery, ...xboxPeriphery, ...nintendoPeriphery];

let cartSummaryHTML = '';

cart.forEach((cartItem) => {
    const productId = cartItem.id;

    let matchingProduct;

    products.forEach((product) => {
        if(product.id === productId)
        {
            matchingProduct = product;
        }
    })
    cartSummaryHTML += `
    <div class="order js-cart-item-container-${productId}">
        <img src="${matchingProduct.image}" alt="${matchingProduct.name}">
        <div class="order-summary">
            <p class="name">${matchingProduct.name}</p>
            <p class="price">${(matchingProduct.priceCents/100).toFixed(2)} €</p>
            <div class="quantity">
                <p>Količina:</p>
                <input type="number" value="${cartItem.quantity}" min="1">
            </div>
            <div class="delete-item">
                <button 
                    class="remove-item" 
                    data-product-id="${productId}">
                    Izbriši
                </button>
            </div>
        </div>
    </div>
    `;

});
document.querySelector(".orders").innerHTML = cartSummaryHTML;
document.querySelectorAll(".remove-item")
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId; 
            removeFromCart(productId);

            const container = document.querySelector(
                `.js-cart-item-container-${productId}`
            );
            container.remove();
        });
    });
