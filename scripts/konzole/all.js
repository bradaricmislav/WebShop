import { ps5Consoles } from "./ps5.js";
import { xboxConsoles } from "./xbox.js";
import { nintendoConsoles } from "./nintendo.js";
import { renderConsoles } from "../utils/renderConsoles.js";
import { applySort } from "../utils/sort.js";
import { filter } from "../utils/filter.js";
import { reset } from "../utils/resetFilters.js";

import { addToCart } from "../cart.js";

document.querySelector(".console-cards").addEventListener("click", e => {
    if (e.target.classList.contains("add-to-cart")) {
        addToCart(e.target.dataset.productId);
        const card = e.target.closest(".card"); 
        card.querySelector(".added-to-cart").style.display='block';
        setTimeout(() => {
            card.querySelector(".added-to-cart").style.display='none';
        },3000);
    }
});

const allConsoles = [...ps5Consoles, ...xboxConsoles, ...nintendoConsoles];
let currentConsoles = [...allConsoles];
let currentSort = "";


const sortSelect = document.querySelector('.sort-select');
sortSelect.addEventListener('change', () => {
    currentSort = sortSelect.value;
    const sortedConsoles = applySort(currentConsoles, currentSort);
    renderConsoles(sortedConsoles);
});

const filterBtn = document.querySelector(".filter-btn");

filterBtn.addEventListener(("click"), () => {
    const minPrice = document.querySelector(".min-price").value;
    const maxPrice = document.querySelector(".max-price").value;
    currentConsoles = filter(allConsoles, minPrice, maxPrice);
    renderConsoles(applySort(currentConsoles, currentSort));
    filterContainer.classList.remove("active");
});

renderConsoles(currentConsoles);

const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener(("click"), () => {
    document.querySelector(".min-price").value = "";
    document.querySelector(".max-price").value = "";
    currentConsoles = reset(allConsoles);
    renderConsoles(applySort(currentConsoles, currentSort));
    filterContainer.classList.remove("active");
});

const searchInput = document.querySelector(".search-bar");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();

    const searchedConsoles = currentConsoles.filter(console =>
        console.name.toLowerCase().includes(query)
    );

    renderConsoles(applySort(searchedConsoles, currentSort));
});

