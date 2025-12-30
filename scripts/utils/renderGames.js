export function renderGames(games)
{
    let gamesHTML = '';
    games.forEach((game) => {
        gamesHTML += `
        <div class="card">
            <a href=""><img src="${game.image}" alt="">${game.name}</a>
                <p class="game-price">${(game.priceCents/100).toFixed(2)}€</p>
                <button class="add-to-cart" data-product-id="${game.id}">U košaricu</button>
                <p class="added-to-cart">&#x2713 dodano</p>
        </div>
        `;
    })
    document.querySelector(".game-cards").innerHTML = gamesHTML;
}
