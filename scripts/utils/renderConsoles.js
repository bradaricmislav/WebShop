export function renderConsoles(consoles)
{
    let consolesHTML = '';
    consoles.forEach((console) => {
        consolesHTML += `
        <div class="card">
            <a href=""><img src="${console.image}" alt="">${console.name}</a>
                <p class="console-price">${(console.priceCents/100).toFixed(2)}€</p>
                <button>U košaricu</button>
        </div>
        `;
    })
    document.querySelector(".console-cards").innerHTML = consolesHTML;
}
