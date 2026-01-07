import { filter } from "../../utils/gameFilter.js";
import { renderGames } from "../../utils/renderGames.js";
import { reset } from "../../utils/resetFilters.js";
import { applySort } from "../../utils/sort.js";
import { xboxGames } from "../xbox.js";
import { addToCart, cart } from "../../cart.js";

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


let currentGames = [...xboxGames];
let currentSort = "";
const sortSelect = document.querySelector('.sort-select');
sortSelect.addEventListener('change', () => {
    currentSort = sortSelect.value;
    const sortedGames = applySort(currentGames, currentSort);
    renderGames(sortedGames);
});
const filterBtn = document.querySelector(".filter-btn");
filterBtn.addEventListener(("click"), () => {
    const minPrice = document.querySelector(".min-price").value;
    const maxPrice = document.querySelector(".max-price").value;

    const selectedGenres = [];
    Array.from(document.querySelectorAll(".genre-checkbox:checked"))
        .forEach(genre => selectedGenres.push(genre.value));

    currentGames = filter(xboxGames, minPrice, maxPrice, selectedGenres);
    renderGames(applySort(currentGames, currentSort));
    filterContainer.classList.remove("active");
});
renderGames(currentGames);
const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener(("click"), () => {
    document.querySelector(".min-price").value = "";
    document.querySelector(".max-price").value = "";
    document.querySelectorAll(".genre-checkbox").forEach(genre => genre.checked = false);
    currentGames = reset(xboxGames);
    renderGames(applySort(currentGames, currentSort));
    filterContainer.classList.remove("active");
});
