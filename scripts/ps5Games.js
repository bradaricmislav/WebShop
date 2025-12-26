export const ps5Games = [
    {
        id: "8245",
        image: "../../images/007.jpg",
        name: "007 - First Light",
        priceCents: 7999,
        releaseDate: "2026-03-26"
    },
    {
        id: "1936",
        image: "../../images/codbo7.jpg",
        name: "Call of Duty Black Ops 7",
        priceCents: 7999,
        releaseDate: "2025-11-14"
    },
    {
        id: "2792",
        image: "../../images/bf6.jpg",
        name: "Battlefield 6",
        priceCents: 7000,
        releaseDate: "2025-10-10"
    },
    {
        id: "8698",
        image: "../../images/fc26.jpg",
        name: "FC 26",
        priceCents: 5000,
        releaseDate: "2025-09-26"

    },
    {
        id: "4994",
        image: "../../images/ghostofyotei.jpg",
        name: "Ghost of Yotei",
        priceCents: 6500,
        releaseDate: "2025-10-02"
    },
    {
        id: "1921",
        image: "../../images/nba2k26.jpg",
        name: "NBA 2K26",
        priceCents: 3500,
        releaseDate: "2025-09-05"
    },
    {
        id: "5335",
        image: "../../images/acshadows.jpg",
        name: "Assassin's Creed Shadows",
        priceCents: 3999,
        releaseDate: "2025-03-20"
    },
    {
        id: "1520",
        image: "../../images/deathstranding2.jpg",
        name: "Death Stranding 2",
        priceCents: 5999,
        releaseDate: "2025-06-26"
    },
    {
        id: "4194",
        image: "../../images/gt7.jpg",
        name: "Gran Turismo 7",
        priceCents: 3999,
        releaseDate: "2022-03-04"
    },
    {
        id: "3564",
        image: "../../images/borderlands4.jpg",
        name: "Borderlands 4",
        priceCents: 6499,
        releaseDate: "2025-09-12"
    },
    {
        id: "8272",
        image: "../../images/acmirage.jpg",
        name: "Assassin's Creed Mirage",
        priceCents: 2499,
        releaseDate: "2023-10-05"
    },
    {
        id: "9825",
        image: "../../images/acvalhalla.jpg",
        name: "Assassin's Creed Valhalla",
        priceCents: 2000,
        releaseDate: "2020-11-10"
    },
    {
        id: "2941",
        image: "../../images/bmwukong.jpg",
        name: "Black Myth Wukong",
        priceCents: 5499,
        releaseDate: "2024-08-20"
    },
    {
        id: "5941",
        image: "../../images/ghostoftsushima.jpg",
        name: "Ghost of Tsushima",
        priceCents: 2000,
        releaseDate: "2020-07-17"
    },
    {
        id: "3640",
        image: "../../images/gowragnarok.jpg",
        name: "God of War Ragnarok",
        priceCents: 2499,
        releaseDate: "2022-11-09"
    },
    {
        id: "5952",
        image: "../../images/gtav.jpg",
        name: "GTA V",
        priceCents: 2499,
        releaseDate: "2022-03-15"
    },
    {
        id: "8986",
        image: "../../images/horizond.jpg",
        name: "Horizon Zero Dawn",
        priceCents: 2500,
        releaseDate: "2024-10-31"
    },
    {
        id: "3562",
        image: "../../images/re2.jpg",
        name: "Resident Evil 2",
        priceCents: 2499,
        releaseDate: "2019-01-25"
    },
    {
        id: "5516",
        image: "../../images/re3.jpg",
        name: "Resident Evil 3",
        priceCents: 2499,
        releaseDate: "2020-04-03"
    },
    {
        id: "0998",
        image: "../../images/re4.jpg",
        name: "Resident Evil 4",
        priceCents: 2499,
        releaseDate: "2023-03-24"
    },
    {
        id: "9301",
        image: "../../images/spidermanmm.jpg",
        name: "Spider-Man Miles Morales",
        priceCents: 2000,
        releaseDate: "2020-11-12"
    },
    {
        id: "6805",
        image: "../../images/swjs.jpg",
        name: "Star Wars Jedi Survivor",
        priceCents: 2499,
        releaseDate: "2023-04-28"
    },
    {
        id: "1099",
        image: "../../images/tlou2.jpg",
        name: "The Last of Us 2",
        priceCents: 1499,
        releaseDate: "2024-01-19"
    },
    {
        id: "1267",
        image: "../../images/uncharted.jpg",
        name: "Uncharted Legacy of Thieves",
        priceCents: 1499,
        releaseDate: "2022-01-28"
    }
];
renderGames(ps5Games);
function renderGames(games)
{
    let gamesHTML = '';
    games.forEach((game) => {
        gamesHTML += `
        <div class="card">
            <a href=""><img src="../../images/${game.image}" alt="">${game.name}</a>
                <p class="game-price">${(game.priceCents/100).toFixed(2)}€</p>
                <button>U košaricu</button>
        </div>
        `;
    })
    document.querySelector(".game-cards").innerHTML = gamesHTML;
}

const sortSelect = document.querySelector('.sort-select');
sortSelect.addEventListener('change', () => {
    const selectedOption = sortSelect.value;
    let sortedGames = [...ps5Games];
    if(selectedOption === 'price-asc')
    {
        sortedGames.sort((a,b) => a.priceCents - b.priceCents);
    }
    if(selectedOption === 'price-desc')
    {
        sortedGames.sort((a,b) => b.priceCents - a.priceCents);
    }
    if(selectedOption === 'a-z')
    {
        sortedGames.sort((a,b) => a.name.localeCompare(b.name))
    }
    if(selectedOption === 'z-a')
    {
        sortedGames.sort((a,b) => b.name.localeCompare(a.name))
    }
    if(selectedOption === 'date-desc')
    {
        sortedGames.sort((a,b) => new Date(b.releaseDate) - new Date(a.releaseDate))
    }
    renderGames(sortedGames);
});