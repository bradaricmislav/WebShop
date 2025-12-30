export function renderConsoles(consoles)
{
    let consolesHTML = '';
    consoles.forEach((console) => {
        consolesHTML += `
        <div class="card">
            <a href=""><img src="${console.image}" alt="">${console.name}</a>
                <p class="console-price">${(console.priceCents/100).toFixed(2)}€</p>
                <button class="add-to-cart" data-product-id="${console.id}">U košaricu</button>
                <p class="added-to-cart">&#x2713 dodano</p>
        </div>
        `;
    })
    document.querySelector(".console-cards").innerHTML = consolesHTML;
}
