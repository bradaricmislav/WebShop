export function renderGames(games)
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
