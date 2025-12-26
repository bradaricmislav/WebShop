export const xboxGames = [
    {
        id: "8014",
        image: "../../images/xbox/codeveinii.jpg",
        name: "Code Vein II",
        priceCents: 7549,
        releaseDate: "2026-01-30"
    },
    {
        id: "7638",
        image: "../../images/xbox/gothic1remake.webp",
        name: "Gothic 1 Remake",
        priceCents: 5249,
        releaseDate: "2026-02-12"
    },
    {
        id: "8258",
        image: "../../images/xbox/screamerstandard.webp",
        name: "Screamer Standard Edition",
        priceCents: 5789,
        releaseDate: "2026-03-26"
    },
    {
        id: "8419",
        image: "../../images/xbox/residentevilrequiem.webp",
        name: "Resident Evil Requiem",
        priceCents: 7239,
        releaseDate: "2026-02-27"
    },
    {
        id: "5641",
        image: "../../images/xbox/pragmata.webp",
        name: "Pragmata",
        priceCents: 6669,
        releaseDate: "2026-04-24"
    },
    {
        id: "5884",
        image: "../../images/xbox/invinciblevs.webp",
        name: "Invincible VS",
        priceCents: 5089,
        releaseDate: "2025-01-30"
    },
    {
        id: "6357",
        image: "../../images/xbox/mafia.webp",
        name: "Mafia: The Old Country",
        priceCents: 5039,
        releaseDate: "2025-08-08"
    },
    {
        id: "2029",
        image: "../../images/xbox/eldenring.webp",
        name: "Elden Ring",
        priceCents: 3079,
        releaseDate: "2022-02-25"
    },
    {
        id: "5623",
        image: "../../images/xbox/ittakestwo.webp",
        name: "It Takes Two",
        priceCents: 2309,
        releaseDate: "2021-01-06"
    },
    {
        id: "9037",
        image: "../../images/xbox/tekken.webp",
        name: "Tekken 8",
        priceCents: 3079,
        releaseDate: "2024-01-26"
    },
    {
        id: "6955",
        image: "../../images/xbox/f1.webp",
        name: "F1 25",
        priceCents: 4399,
        releaseDate: "2025-05-30"
    },
    {
        id: "5790",
        image: "../../images/xbox/deadspace.webp",
        name: "Dead Space",
        priceCents: 2489,
        releaseDate: "2023-01-27"
    }
]
renderGames(xboxGames);
function renderGames(games)
{
    let gamesHTML = '';
    games.forEach((game) => {
        gamesHTML += `
        <div class="card xbox-card">
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
    let sortedGames = [...xboxGames];
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