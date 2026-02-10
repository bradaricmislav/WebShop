import { filter } from "../../utils/filter.js";
import { renderPeriphery } from "../../utils/renderPeriphery.js";
import { reset } from "../../utils/resetFilters.js";
import { applySort } from "../../utils/sort.js";
import { ps5Periphery } from "../ps5.js";

import { cart } from "../../cart.js";

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


let currentPeripheries = [...ps5Periphery];
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
    currentPeripheries = filter(ps5Periphery, minPrice, maxPrice);
    renderPeriphery(applySort(currentPeripheries, currentSort));
    filterContainer.classList.remove("active");
});
renderPeriphery(currentPeripheries);
const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener(("click"), () => {
    document.querySelector(".min-price").value = "";
    document.querySelector(".max-price").value = "";
    currentPeripheries = reset(ps5Periphery);
    renderPeriphery(applySort(currentPeripheries, currentSort));
    filterContainer.classList.remove("active");
});
