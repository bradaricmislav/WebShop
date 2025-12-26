export const nintendoGames = [
    {
        id: "5865",
        image: "../../images/dragonballsparkingzero.jpg",
        name: "Dragon Ball Sparking Zero",
        priceCents: 6999,
        releaseDate: "2024-10-07"
    },
    {
        id: "9576",
        image: "../../images/hades2.jpg",
        name: "Hades 2",
        priceCents: 4999,
        releaseDate: "2025-09-25"
    },
    {
        id: "2050",
        image: "../../images/kirbyairriders.jpg",
        name: "Kirby Air Riders",
        priceCents: 8499,
        releaseDate: "2025-11-20"
    },
    {
        id: "7241",
        image: "../../images/hogwartslegacy.jpg",
        name: "Hogwarts Legacy",
        priceCents: 4999,
        releaseDate: "2023-02-10"
    },
    {
        id: "4582",
        image: "../../images/mariokart.jpg",
        name: "Mario Kart World",
        priceCents: 8999,
        releaseDate: "2025-06-05"
    },
    {
        id: "9121",
        image: "../../images/metroidprime4beyond.jpg",
        name: "Metroid Prime 4 Beyond",
        priceCents: 7499,
        releaseDate: "2025-12-04"
    },
    {
        id: "0039",
        image: "../../images/pokemon.jpg",
        name: "Pokemon Legends Z-A",
        priceCents: 7499,
        releaseDate: "2025-10-16"
    },
    {
        id: "7076",
        image: "../../images/splitfiction.jpg",
        name: "Split Fiction",
        priceCents: 5999,
        releaseDate: "2025-03-06"
    },
    {
        id: "6931",
        image: "../../images/starwarsoutlaws.jpg",
        name: "Star Wars Outlaws",
        priceCents: 5999,
        releaseDate: "2024-08-30"
    },
    {
        id: "4819",
        image: "../../images/supermariogalaxy.jpg",
        name: "Super Mario Galaxy/Galaxy 2",
        priceCents: 7499,
        releaseDate: "2025-10-02"
    },
    {
        id: "9731",
        image: "../../images/zeldabreathofwild.jpg",
        name: "Zelda: Breath of the Wild",
        priceCents: 7999,
        releaseDate: "2025-06-05"
    },
    {
        id: "9101",
        image: "../../images/zeldatearsofkingdom.jpg",
        name: "Zelda: Tears of The Kingdom",
        priceCents: 7999,
        releaseDate: "2025-06-05"
    }
]
renderGames(nintendoGames);
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
    let sortedGames = [...nintendoGames];
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