export const ps5Periphery = [
    {
        id: "8442",
        image: "../../images/ps5periferija/bijelikontroler.webp",
        name: "PS5 bijeli kontroler",
        priceCents: "6999",
        releaseDate: "2025-11-27"
    },
    {
        id: "7930",
        image: "../../images/ps5periferija/crnikontroler.webp",
        name: "PS5 crni kontroler",
        priceCents: "6999",
        releaseDate: "2025-11-27"
    },
    {
        id: "3727",
        image: "../../images/ps5periferija/camocontroler.webp",
        name: "PS5 camo kontroler",
        priceCents: "6999",
        releaseDate: "2025-11-27"
    },
    {
        id: "4084",
        image: "../../images/ps5periferija/blue.webp",
        name: "PS5 svijetlo plavi kontroler",
        priceCents: "6999",
        releaseDate: "2025-11-27"
    },
    {
        id: "0317",
        image: "../../images/ps5periferija/slusalice.webp",
        name: "Nacon RIG 600 PRO HS",
        priceCents: "7499",
        releaseDate: "2024-10-17"
    },
    {
        id: "7210",
        image: "../../images/ps5periferija/slusalice2.webp",
        name: "HyperX CloudX Stinger 2",
        priceCents: "6299",
        releaseDate: "2024-06-11"
    }
];
import { renderPeriphery } from "../utils/renderPeriphery.js";
import { applySort } from "../utils/sort.js";
import { filter } from "../utils/filter.js";
import { reset } from "../utils/resetFilters.js";

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
})
