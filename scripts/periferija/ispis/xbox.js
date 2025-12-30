import { filter } from "../../utils/filter.js";
import { renderPeriphery } from "../../utils/renderPeriphery.js";
import { reset } from "../../utils/resetFilters.js";
import { applySort } from "../../utils/sort.js";
import { xboxPeriphery } from "../xbox.js";
import { addToCart } from "../../cart.js";

document.querySelector(".periphery-cards").addEventListener("click", e => {
    if (e.target.classList.contains("add-to-cart")) {
        addToCart(e.target.dataset.productId);
        const card = e.target.closest(".card"); 
        card.querySelector(".added-to-cart").style.display='block';
        setTimeout(() => {
            card.querySelector(".added-to-cart").style.display='none';
        },3000);
    }
});


let currentPeripheries = [...xboxPeriphery];
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
    currentPeripheries = filter(xboxPeriphery, minPrice, maxPrice);
    renderPeriphery(applySort(currentPeripheries, currentSort));
    filterContainer.classList.remove("active");
});
renderPeriphery(currentPeripheries);
const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener(("click"), () => {
    document.querySelector(".min-price").value = "";
    document.querySelector(".max-price").value = "";
    currentPeripheries = reset(xboxPeriphery);
    renderPeriphery(applySort(currentPeripheries, currentSort));
    filterContainer.classList.remove("active");
});
const searchInput = document.querySelector(".search-bar");
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();

    const searchedPeriphery = currentPeripheries.filter(periphery => periphery.name.toLowerCase().includes(query)
    );

    renderPeriphery(applySort(searchedPeriphery, currentSort));
});
