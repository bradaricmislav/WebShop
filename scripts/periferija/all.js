import { ps5Periphery  } from "./ps5.js";
import { xboxPeriphery } from "./xbox.js";
import { nintendoPeriphery } from "./nintendo.js";
import { renderPeriphery } from "../utils/renderPeriphery.js";
import { applySort } from "../utils/sort.js";
import { filter } from "../utils/filter.js";
import { reset } from "../utils/resetFilters.js";

import { cart } from "../cart.js";

document.querySelector(".periphery-cards").addEventListener("click", e => {
    if (e.target.classList.contains("add-to-cart")) {
        cart.addToCart(e.target.dataset.productId);
        const card = e.target.closest(".card"); 
        card.querySelector(".added-to-cart").style.display='block';
        setTimeout(() => {
            card.querySelector(".added-to-cart").style.display='none';
        },3000);
    }
});

const allPeriphery = [...ps5Periphery, ...xboxPeriphery, ...nintendoPeriphery];
let currentPeripheries = [...allPeriphery];
let currentSort = "";


const sortSelect = document.querySelector('.sort-select');
sortSelect.addEventListener('change', () => {
    currentSort = sortSelect.value;
    const sortedPeripheries = applySort(currentPeripheries, currentSort);
    renderPeriphery(sortedPeripheries);
});

const filterBtn = document.querySelector(".filter-btn");

filterBtn.addEventListener(("click"), () => {
    const minPrice = document.querySelector(".min-price").value;
    const maxPrice = document.querySelector(".max-price").value;
    currentPeripheries = filter(allPeriphery, minPrice, maxPrice);
    renderPeriphery(applySort(currentPeripheries, currentSort));
    filterContainer.classList.remove("active");
});

renderPeriphery(currentPeripheries);

const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener(("click"), () => {
    document.querySelector(".min-price").value = "";
    document.querySelector(".max-price").value = "";
    currentPeripheries = reset(allPeriphery);
    renderPeriphery(applySort(currentPeripheries, currentSort));
    filterContainer.classList.remove("active");
})


