import { games } from "./games.js";
import { addToCart } from "./cart.js";

document.querySelector(".game-cards").addEventListener("click", e => {
    if (e.target.classList.contains("add-to-cart")) {
        addToCart(e.target.dataset.productId);
        const card = e.target.closest(".card"); 
        card.querySelector(".added-to-cart").style.display='block';
        setTimeout(() => {
            card.querySelector(".added-to-cart").style.display='none';
        },3000);
    }
});

let gamesHTML = '';
games.forEach((game) => {
    gamesHTML += `
    <div class="card">
        <a href=""><img src="images/${game.image}" alt="">${game.name}</a>
            <p class="game-price">${(game.priceCents/100).toFixed(2)}€</p>
            <button class="add-to-cart" data-product-id="${game.id}">U košaricu</button>
            <p class="added-to-cart">&#x2713 dodano</p>
    </div>
    `;
})
document.querySelector(".game-cards").innerHTML = gamesHTML;