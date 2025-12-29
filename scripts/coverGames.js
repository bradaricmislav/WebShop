import { games } from "./games.js";
import { addToCart } from "./cart.js";

document.querySelector(".game-cards").addEventListener("click", e => {
    if (e.target.classList.contains("add-to-cart")) {
        addToCart(e.target.dataset.productId);
    }
});

let gamesHTML = '';
games.forEach((game) => {
    gamesHTML += `
    <div class="card">
        <a href=""><img src="images/${game.image}" alt="">${game.name}</a>
            <p class="game-price">${(game.priceCents/100).toFixed(2)}€</p>
            <button class="add-to-cart" data-product-id="${game.id}">U košaricu</button>
    </div>
    `;
})
document.querySelector(".game-cards").innerHTML = gamesHTML;