const games = 
[
    {
        id: "8245",
        image: "../images/007.jpg",
        name: "007 - First Light",
        priceCents: 7999
    },
    {
        id: "1936",
        image: "../images/codbo7.jpg",
        name: "Call of Duty Black Ops 7",
        priceCents: 7999
    },
    {
        id: "2792",
        image: "../images/bf6.jpg",
        name: "Battlefield 6",
        priceCents: 7000
    },
    {
        id: "8698",
        image: "../images/fc26.jpg",
        name: "FC 26",
        priceCents: 5000
    },
    {
        id: "4994",
        image: "../images/ghostofyotei.jpg",
        name: "Ghost of Yotei",
        priceCents: 6500
    },
    {
        id: "1921",
        image: "../images/nba2k26.jpg",
        name: "NBA 2K26",
        priceCents: 3500
    }
];
let gamesHTML = '';
games.forEach((game) => {
    gamesHTML += `
    <div class="card">
        <a href=""><img src="images/${game.image}" alt="">${game.name}</a>
            <p>${(game.priceCents/100).toFixed(2)}€</p>
            <button>U košaricu</button>
    </div>
    `;
})
document.querySelector(".game-cards").innerHTML = gamesHTML;