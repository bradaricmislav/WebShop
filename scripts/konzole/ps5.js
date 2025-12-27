export const ps5Consoles = [
    {
        id: "3844",
        image: "../../images/ps5konzole/ps5pro.webp",
        name: "PlayStation 5 Pro",
        priceCents: 79900,
        releaseDate: "2024-11-07"
    },
    {
        id: "9764",
        image: "../../images/ps5konzole/ps5pro2tb.webp",
        name: "PlayStation 5 Pro 2 TB",
        priceCents: 83999,
        releaseDate: "2025-10-09"
    },
    {
        id: "2597",
        image: "../../images/ps5konzole/ps5slim.webp",
        name: "PlayStation 5 Slim",
        priceCents: 57299,
        releaseDate: "2023-11-24"
    },
    {
        id: "9220",
        image: "../../images/ps5konzole/ps5slim1kontroler.webp",
        name: "PlayStation 5 Slim 1 TB",
        priceCents: 66499,
        releaseDate: "2025-11-18"
    },
    {
        id: "7926",
        image: "../../images/ps5konzole/ps5slim1tb.webp",
        name: "PlayStation 5 Slim 1 TB",
        priceCents: 63999,
        releaseDate: "2025-11-13"
    },
    {
        id: "5505",
        image: "../../images/ps5konzole/ps5slimdigital.webp",
        name: "PlayStation 5 Slim Digital",
        priceCents: 58999,
        releaseDate: "2025-11-13"
    },
]
import { renderConsoles } from "../utils/renderConsoles.js";
import { applySort } from "../utils/sort.js";
import { filter } from "../utils/filter.js";
import { reset } from "../utils/resetFilters.js";

let currentConsoles = [...ps5Consoles];
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
    currentConsoles = filter(ps5Consoles, minPrice, maxPrice);
    renderConsoles(applySort(currentConsoles, currentSort));
    filterContainer.classList.remove("active");
});

renderConsoles(currentConsoles);

const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener(("click"), () => {
    document.querySelector(".min-price").value = "";
    document.querySelector(".max-price").value = "";
    currentConsoles = reset(ps5Consoles);
    renderConsoles(applySort(currentConsoles, currentSort));
    filterContainer.classList.remove("active");
})
