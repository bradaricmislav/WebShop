export const nintendoConsoles = [
    {
        id: "3857",
        image: "../../images/nintendokonzole/ns.webp",
        name: "Nintendo Switch",
        priceCents: "37999",
        releaseDate: "2020-01-01"
    },
    {
        id: "7703",
        image: "../../images/nintendokonzole/ns2.webp",
        name: "Nintendo Switch 2",
        priceCents: "49999",
        releaseDate: "2025-05-06"
    }
];
import { renderConsoles } from "../utils/renderConsoles.js";
import { applySort } from "../utils/sort.js";
import { filter } from "../utils/filter.js";
import { reset } from "../utils/resetFilters.js";

let currentConsoles = [...nintendoConsoles];
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
    currentConsoles = filter(nintendoConsoles, minPrice, maxPrice);
    renderConsoles(applySort(currentConsoles, currentSort));
    filterContainer.classList.remove("active");
});

renderConsoles(currentConsoles);

const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener(("click"), () => {
    document.querySelector(".min-price").value = "";
    document.querySelector(".max-price").value = "";
    currentConsoles = reset(nintendoConsoles);
    renderConsoles(applySort(currentConsoles, currentSort));
    filterContainer.classList.remove("active");
})
