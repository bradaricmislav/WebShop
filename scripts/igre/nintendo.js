export const nintendoGames = [
    {
        id: "5865",
        image: "../../images/dragonballsparkingzero.jpg",
        name: "Dragon Ball Sparking Zero",
        priceCents: 6999,
        releaseDate: "2024-10-07",
        genres: ["Akcija", "Zabava"]
    },
    {
        id: "9576",
        image: "../../images/hades2.jpg",
        name: "Hades 2",
        priceCents: 4999,
        releaseDate: "2025-09-25",
        genres: ["Akcija"]
    },
    {
        id: "2050",
        image: "../../images/kirbyairriders.jpg",
        name: "Kirby Air Riders",
        priceCents: 8499,
        releaseDate: "2025-11-20",
        genres: ["Zabava"]
    },
    {
        id: "7241",
        image: "../../images/hogwartslegacy.jpg",
        name: "Hogwarts Legacy",
        priceCents: 4999,
        releaseDate: "2023-02-10",
        genres: ["Akcija", "Open-world"]
    },
    {
        id: "4582",
        image: "../../images/mariokart.jpg",
        name: "Mario Kart World",
        priceCents: 8999,
        releaseDate: "2025-06-05",
        genres: ["Utrke", "Zabava"]
    },
    {
        id: "9121",
        image: "../../images/metroidprime4beyond.jpg",
        name: "Metroid Prime 4 Beyond",
        priceCents: 7499,
        releaseDate: "2025-12-04",
        genres: ["Akcija", "FPS"]
    },
    {
        id: "0039",
        image: "../../images/pokemon.jpg",
        name: "Pokemon Legends Z-A",
        priceCents: 7499,
        releaseDate: "2025-10-16",
        genres: ["Zabava"]
    },
    {
        id: "7076",
        image: "../../images/splitfiction.jpg",
        name: "Split Fiction",
        priceCents: 5999,
        releaseDate: "2025-03-06",
        genres: ["Akcija"]
    },
    {
        id: "6931",
        image: "../../images/starwarsoutlaws.jpg",
        name: "Star Wars Outlaws",
        priceCents: 5999,
        releaseDate: "2024-08-30",
        genres: ["Akcija", "Open-world"]
    },
    {
        id: "4819",
        image: "../../images/supermariogalaxy.jpg",
        name: "Super Mario Galaxy/Galaxy 2",
        priceCents: 7499,
        releaseDate: "2025-10-02",
        genres: ["Akcija", "Zabava"]
    },
    {
        id: "9731",
        image: "../../images/zeldabreathofwild.jpg",
        name: "Zelda: Breath of the Wild",
        priceCents: 7999,
        releaseDate: "2025-06-05",
        genres: ["Akcija", "Open-world"]
    },
    {
        id: "9101",
        image: "../../images/zeldatearsofkingdom.jpg",
        name: "Zelda: Tears of The Kingdom",
        priceCents: 7999,
        releaseDate: "2025-06-05",
        genres: ["Akcija", "Open-world"]
    }
]
import { renderGames } from "../utils/renderGames.js";
import { applySort } from "../utils/sort.js";
import { filter } from "../utils/gameFilter.js";
import { reset } from "../utils/resetFilters.js";

let currentGames = [...nintendoGames];
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
    
    currentGames = filter(nintendoGames, minPrice, maxPrice, selectedGenres);
    renderGames(applySort(currentGames, currentSort));
    filterContainer.classList.remove("active");
});

renderGames(currentGames);

const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener(("click"), () => {
    document.querySelector(".min-price").value = "";
    document.querySelector(".max-price").value = "";
    document.querySelectorAll(".genre-checkbox").forEach(genre => genre.checked = false);
    currentGames = reset(nintendoGames);
    renderGames(applySort(currentGames, currentSort));
    filterContainer.classList.remove("active");
})
