export function renderPeriphery(peripheries)
{
    let peripheryHTML = '';
    peripheries.forEach((periphery) => {
        peripheryHTML += `
        <div class="card">
            <a href=""><img src="${periphery.image}" alt="">${periphery.name}</a>
                <p class="periphery-price">${(periphery.priceCents/100).toFixed(2)}€</p>
                <button>U košaricu</button>
        </div>
        `;
    })
    document.querySelector(".periphery-cards").innerHTML = peripheryHTML;
}
