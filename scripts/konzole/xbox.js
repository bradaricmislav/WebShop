export const xboxConsoles = [
    {
        id: "1037",
        image: "../../images/xboxkonzole/xboxseriess.webp",
        name: "Xbox Series S 512GB",
        priceCents: 45999,
        releaseDate: "2020-11-10"
    },
    {
        id: "4084",
        image: "../../images/xboxkonzole/xboxseriesx1tb.webp",
        name: "Xbox Series X 1 TB",
        priceCents: 83999,
        releaseDate: "2023-11-10"
    },
    {
        id: "3242",
        image: "../../images/xboxkonzole/xboxseriesxdigital.webp",
        name: "Xbox Series X 1TB Digital",
        priceCents: 69499,
        releaseDate: "2025-12-10"
    }
]
import { renderConsoles } from "../utils/renderConsoles.js";
import { applySort } from "../utils/sort.js";
import { filter } from "../utils/filter.js";
import { reset } from "../utils/resetFilters.js";

let currentConsoles = [...xboxConsoles];
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
    currentConsoles = filter(xboxConsoles, minPrice, maxPrice);
    renderConsoles(applySort(currentConsoles, currentSort));
    filterContainer.classList.remove("active");
});

renderConsoles(currentConsoles);

const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener(("click"), () => {
    document.querySelector(".min-price").value = "";
    document.querySelector(".max-price").value = "";
    currentConsoles = reset(xboxConsoles);
    renderConsoles(applySort(currentConsoles, currentSort));
    filterContainer.classList.remove("active");
})
