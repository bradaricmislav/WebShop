import { renderGames } from "./utils/renderGames.js";
import { ps5Games } from "./igre/ps5.js";
import { xboxGames } from "./igre/xbox.js";
import { nintendoGames } from "./igre/nintendo.js";
import { ps5Consoles } from "./konzole/ps5.js";
import { xboxConsoles } from "./konzole/xbox.js";
import { nintendoConsoles } from "./konzole/nintendo.js";
import { ps5Periphery } from "./periferija/ps5.js";
import { xboxPeriphery } from "./periferija/xbox.js";
import { nintendoPeriphery } from "./periferija/nintendo.js";

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

const games = [...ps5Games, ...xboxGames, ...nintendoGames];

const consoles = [...ps5Consoles, ...xboxConsoles, ...nintendoConsoles];

const peripheries = [...ps5Periphery, ...xboxPeriphery, ...nintendoPeriphery];

const allProducts = [...games, ...consoles, ...peripheries];

const searchResult = document.querySelector(".search-result");
const query = sessionStorage.getItem("searchQuery").toLowerCase().trim();

let productsToRender = allProducts;
productsToRender = allProducts.filter(product =>
    product.name.toLowerCase().includes(query)
);
sessionStorage.removeItem("searchQuery");
searchResult.innerHTML = `<h3>Rezultati pretrage: ${query}</h3>`;
renderGames(productsToRender);

