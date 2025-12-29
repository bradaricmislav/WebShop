import { filter } from "../../utils/gameFilter.js";
import { renderGames } from "../../utils/renderGames.js";
import { reset } from "../../utils/resetFilters.js";
import { applySort } from "../../utils/sort.js";
import { ps5Games } from "../ps5.js";
import { addToCart, cart } from "../../cart.js";

document.querySelector(".game-cards").addEventListener("click", e => {
    if (e.target.classList.contains("add-to-cart")) {
        addToCart(e.target.dataset.productId);
    }
});
let currentGames = [...ps5Games];
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
    currentGames = filter(ps5Games, minPrice, maxPrice, selectedGenres);
    renderGames(applySort(currentGames, currentSort));
    filterContainer.classList.remove("active");
});
renderGames(currentGames);
const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener(("click"), () => {
    document.querySelector(".min-price").value = "";
    document.querySelector(".max-price").value = "";
    document.querySelectorAll(".genre-checkbox").forEach(genre => genre.checked = false);
    currentGames = reset(ps5Games);
    renderGames(applySort(currentGames, currentSort));
    filterContainer.classList.remove("active");
});
const searchInput = document.querySelector(".search-bar");
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();

    const searchedGames = currentGames.filter(game => game.name.toLowerCase().includes(query)
    );

    renderGames(applySort(searchedGames, currentSort));
});
