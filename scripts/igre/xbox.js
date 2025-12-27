export const xboxGames = [
    {
        id: "8014",
        image: "../../images/xbox/codeveinii.webp",
        name: "Code Vein II",
        priceCents: 7549,
        releaseDate: "2026-01-30",
        genres: ["Akcija"]
    },
    {
        id: "7638",
        image: "../../images/xbox/gothic1remake.webp",
        name: "Gothic 1 Remake",
        priceCents: 5249,
        releaseDate: "2026-02-12",
        genres: ["Open-world", "Akcija"]
    },
    {
        id: "8258",
        image: "../../images/xbox/screamerstandard.webp",
        name: "Screamer Standard Edition",
        priceCents: 5789,
        releaseDate: "2026-03-26",
        genres: ["Utrke", "Zabava"]
    },
    {
        id: "8419",
        image: "../../images/xbox/residentevilrequiem.webp",
        name: "Resident Evil Requiem",
        priceCents: 7239,
        releaseDate: "2026-02-27",
        genres: ["Akcija", "Horor"]
    },
    {
        id: "5641",
        image: "../../images/xbox/pragmata.webp",
        name: "Pragmata",
        priceCents: 6669,
        releaseDate: "2026-04-24",
        genres: ["Akcija"]
    },
    {
        id: "5884",
        image: "../../images/xbox/invinciblevs.webp",
        name: "Invincible VS",
        priceCents: 5089,
        releaseDate: "2025-01-30",
        genres: ["Akcija"]
    },
    {
        id: "6357",
        image: "../../images/xbox/mafia.webp",
        name: "Mafia: The Old Country",
        priceCents: 5039,
        releaseDate: "2025-08-08",
        genres: ["Akcija", "Open-world"]
    },
    {
        id: "2029",
        image: "../../images/xbox/eldenring.webp",
        name: "Elden Ring",
        priceCents: 3079,
        releaseDate: "2022-02-25",
        genres: ["Akcija", "Open-world"]
    },
    {
        id: "5623",
        image: "../../images/xbox/ittakestwo.webp",
        name: "It Takes Two",
        priceCents: 2309,
        releaseDate: "2021-01-06",
        genres: ["Zabava"]
    },
    {
        id: "9037",
        image: "../../images/xbox/tekken.webp",
        name: "Tekken 8",
        priceCents: 3079,
        releaseDate: "2024-01-26",
        genres: ["Akcija", "Multiplayer"]
    },
    {
        id: "6955",
        image: "../../images/xbox/f1.webp",
        name: "F1 25",
        priceCents: 4399,
        releaseDate: "2025-05-30",
        genres: ["Utrke", "Sport"]
    },
    {
        id: "5790",
        image: "../../images/xbox/deadspace.webp",
        name: "Dead Space",
        priceCents: 2489,
        releaseDate: "2023-01-27",
        genres: ["Akcija", "Horor"]
    }
]
import { renderGames } from "../utils/renderGames.js";
import { applySort } from "../utils/sort.js";
import { filter } from "../utils/filter.js";
import { reset } from "../utils/resetFilters.js";

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
    currentGames = filter(xboxGames, minPrice, maxPrice);
    renderGames(applySort(currentGames, currentSort));
    filterContainer.classList.remove("active");
});

renderGames(currentGames);

const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener(("click"), () => {
    document.querySelector(".min-price").value = "";
    document.querySelector(".max-price").value = "";
    currentGames = reset(xboxGames);
    renderGames(applySort(currentGames, currentSort));
    filterContainer.classList.remove("active");
})
