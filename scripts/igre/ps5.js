export const ps5Games = [
    {
        id: "8245",
        image: "../../images/007.jpg",
        name: "007 - First Light",
        priceCents: 7999,
        releaseDate: "2026-03-26",
        genres: ["Akcija"]
    },
    {
        id: "1936",
        image: "../../images/codbo7.jpg",
        name: "Call of Duty Black Ops 7",
        priceCents: 7999,
        releaseDate: "2025-11-14",
        genres: ["FPS", "Akcija", "Multiplayer"]
    },
    {
        id: "2792",
        image: "../../images/bf6.jpg",
        name: "Battlefield 6",
        priceCents: 7000,
        releaseDate: "2025-10-10",
        genres: ["FPS", "Akcija", "Multiplayer"]
    },
    {
        id: "8698",
        image: "../../images/fc26.jpg",
        name: "FC 26",
        priceCents: 5000,
        releaseDate: "2025-09-26",
        genres: ["Sport"]

    },
    {
        id: "4994",
        image: "../../images/ghostofyotei.jpg",
        name: "Ghost of Yotei",
        priceCents: 6500,
        releaseDate: "2025-10-02",
        genres: ["Akcija", "Open-world"]
    },
    {
        id: "1921",
        image: "../../images/nba2k26.jpg",
        name: "NBA 2K26",
        priceCents: 3500,
        releaseDate: "2025-09-05",
        genres: ["Sport"]
    },
    {
        id: "5335",
        image: "../../images/acshadows.jpg",
        name: "Assassin's Creed Shadows",
        priceCents: 3999,
        releaseDate: "2025-03-20",
        genres: ["Akcija", "Open-world"]
    },
    {
        id: "1520",
        image: "../../images/deathstranding2.jpg",
        name: "Death Stranding 2",
        priceCents: 5999,
        releaseDate: "2025-06-26",
        genres: ["Open-world"]
    },
    {
        id: "4194",
        image: "../../images/gt7.jpg",
        name: "Gran Turismo 7",
        priceCents: 3999,
        releaseDate: "2022-03-04",
        genres: ["Sport", "Utrke"]
    },
    {
        id: "3564",
        image: "../../images/borderlands4.jpg",
        name: "Borderlands 4",
        priceCents: 6499,
        releaseDate: "2025-09-12",
        genres: ["FPS", "Akcija"]
    },
    {
        id: "8272",
        image: "../../images/acmirage.jpg",
        name: "Assassin's Creed Mirage",
        priceCents: 2499,
        releaseDate: "2023-10-05",
        genres: ["Akcija", "Open-world"]
    },
    {
        id: "9825",
        image: "../../images/acvalhalla.jpg",
        name: "Assassin's Creed Valhalla",
        priceCents: 2000,
        releaseDate: "2020-11-10",
        genres: ["Akcija", "Open-world"]
    },
    {
        id: "2941",
        image: "../../images/bmwukong.jpg",
        name: "Black Myth Wukong",
        priceCents: 5499,
        releaseDate: "2024-08-20",
        genres: ["Akcija", "Open-world"]
    },
    {
        id: "5941",
        image: "../../images/ghostoftsushima.jpg",
        name: "Ghost of Tsushima",
        priceCents: 2000,
        releaseDate: "2020-07-17",
        genres: ["Akcija", "Open-world"]
    },
    {
        id: "3640",
        image: "../../images/gowragnarok.jpg",
        name: "God of War Ragnarok",
        priceCents: 2499,
        releaseDate: "2022-11-09",
        genres: ["Akcija", "Open-world"]
    },
    {
        id: "5952",
        image: "../../images/gtav.jpg",
        name: "GTA V",
        priceCents: 2499,
        releaseDate: "2022-03-15",
        genres: ["Akcija", "Open-world", "Multiplayer"]
    },
    {
        id: "8986",
        image: "../../images/horizond.jpg",
        name: "Horizon Zero Dawn",
        priceCents: 2500,
        releaseDate: "2024-10-31",
        genres: ["Akcija", "Open-world"]
    },
    {
        id: "3562",
        image: "../../images/re2.jpg",
        name: "Resident Evil 2",
        priceCents: 2499,
        releaseDate: "2019-01-25",
        genres: ["Akcija", "Horor"]
    },
    {
        id: "5516",
        image: "../../images/re3.jpg",
        name: "Resident Evil 3",
        priceCents: 2499,
        releaseDate: "2020-04-03",
        genres: ["Akcija", "Horor"]
    },
    {
        id: "0998",
        image: "../../images/re4.jpg",
        name: "Resident Evil 4",
        priceCents: 2499,
        releaseDate: "2023-03-24",
        genres: ["Akcija", "Horor"]
    },
    {
        id: "9301",
        image: "../../images/spidermanmm.jpg",
        name: "Spider-Man Miles Morales",
        priceCents: 2000,
        releaseDate: "2020-11-12",
        genres: ["Akcija", "Open-world"]
    },
    {
        id: "6805",
        image: "../../images/swjs.jpg",
        name: "Star Wars Jedi Survivor",
        priceCents: 2499,
        releaseDate: "2023-04-28",
        genres: ["Akcija", "Open-world"]
    },
    {
        id: "1099",
        image: "../../images/tlou2.jpg",
        name: "The Last of Us 2",
        priceCents: 1499,
        releaseDate: "2024-01-19",
        genres: ["Akcija", "Horor"]
    },
    {
        id: "1267",
        image: "../../images/uncharted.jpg",
        name: "Uncharted Legacy of Thieves",
        priceCents: 1499,
        releaseDate: "2022-01-28",
        genres: ["Akcija"]
    }
];
import { renderGames } from "../utils/renderGames.js";
import { applySort } from "../utils/sort.js";
import { filter } from "../utils/gameFilter.js";
import { reset } from "../utils/resetFilters.js";

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
})
