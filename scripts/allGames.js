import { ps5Games } from "./ps5Games.js";
import { xboxGames } from "./xboxGames.js";
import { nintendoGames } from "./nintendoGames.js";

const allGames = [...ps5Games, ...xboxGames, ...nintendoGames];

renderGames(allGames);

function renderGames(games)
{
    let gamesHTML = '';
    games.forEach((game) => {
        gamesHTML += `
        <div class="card">
            <a href=""><img src="${game.image}" alt="">${game.name}</a>
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
    let sortedGames = [...allGames];
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