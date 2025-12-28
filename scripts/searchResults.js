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

const games = [...ps5Games, ...xboxGames, ...nintendoGames];

const consoles = [...ps5Consoles, ...xboxConsoles, ...nintendoConsoles];

const peripheries = [...ps5Periphery, ...xboxPeriphery, ...nintendoPeriphery];

const allProducts = [...games, ...consoles, ...peripheries];

const productContainer = document.querySelector(".game-cards");
const searchResult = document.querySelector(".search-result");
const query = sessionStorage.getItem("searchQuery")?.toLowerCase().trim();

let productsToRender = allProducts;
if (query) {
    productsToRender = allProducts.filter(game =>
        game.name.toLowerCase().includes(query)
    );
    sessionStorage.removeItem("searchQuery");

    if (searchResult) {
        searchResult.innerHTML = `<h3>Rezultati pretrage: ${query}</h3>`;
    }
}
if (productContainer) {
    renderGames(productsToRender);
}
