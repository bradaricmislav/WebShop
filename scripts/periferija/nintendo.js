export const nintendoPeriphery = [
    {
        id: "5642",
        image: "../../images/nintendoperiferija/prokontroler.webp",
        name: "NS2 Pro kontroler",
        priceCents: "8499",
        releaseDate: "2025-06-05"
    },
    {
        id: "8152",
        image: "../../images/nintendoperiferija/joycon2.webp",
        name: "NS2 Joy-Con 2 par kontrolera",
        priceCents: "8529",
        releaseDate: "2025-06-05"
    },
    {
        id: "3236",
        image: "../../images/nintendoperiferija/joycon2.webp",
        name: "NS2 Joy-Con 2 Wheel Pair",
        priceCents: "1999",
        releaseDate: "2025-06-05"
    },
    {
        id: "7467",
        image: "../../images/nintendoperiferija/slusalice.webp",
        name: "NS2 Gaming slušalice",
        priceCents: "1699",
        releaseDate: "2025-07-21"
    }
];
import { renderPeriphery } from "../utils/renderPeriphery.js";
import { applySort } from "../utils/sort.js";
import { filter } from "../utils/filter.js";
import { reset } from "../utils/resetFilters.js";

let currentPeripheries = [...nintendoPeriphery];
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
    currentPeripheries = filter(nintendoPeriphery, minPrice, maxPrice);
    renderPeriphery(applySort(currentPeripheries, currentSort));
    filterContainer.classList.remove("active");
});

renderPeriphery(currentPeripheries);

const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener(("click"), () => {
    document.querySelector(".min-price").value = "";
    document.querySelector(".max-price").value = "";
    currentPeripheries = reset(nintendoPeriphery);
    renderPeriphery(applySort(currentPeripheries, currentSort));
    filterContainer.classList.remove("active");
})
