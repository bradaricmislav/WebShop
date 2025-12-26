import { ps5Periphery  } from "./ps5.js";
import { xboxPeriphery } from "./xbox.js";
import { nintendoPeriphery } from "./nintendo.js";

const allPeriphery = [...ps5Periphery, ...xboxPeriphery, ...nintendoPeriphery];

renderPeriphery(allPeriphery);
function renderPeriphery(peripheries)
{
    let peripheriesHTML = "";
    peripheries.forEach((periphery) => {
        peripheriesHTML += `
            <div class="card">
                <a href=""><img src="${periphery.image}" alt="">${periphery.name}</a>
                <p class="periphery-price">${(periphery.priceCents/100).toFixed(2)}€</p>
                <button>U košaricu</button>
            </div>
        `;
    });
    document.querySelector(".periphery-cards").innerHTML = peripheriesHTML;
}
const sortSelect = document.querySelector('.sort-select');
sortSelect.addEventListener('change', () => {
    const selectedOption = sortSelect.value;
    let sortedPeripheries = [...allPeriphery];
    if(selectedOption === 'price-asc')
    {
        sortedPeripheries.sort((a,b) => a.priceCents - b.priceCents);
    }
    if(selectedOption === 'price-desc')
    {
        sortedPeripheries.sort((a,b) => b.priceCents - a.priceCents);
    }
    if(selectedOption === 'a-z')
    {
        sortedPeripheries.sort((a,b) => a.name.localeCompare(b.name))
    }
    if(selectedOption === 'z-a')
    {
        sortedPeripheries.sort((a,b) => b.name.localeCompare(a.name))
    }
    if(selectedOption === 'date-desc')
    {
        sortedPeripheries.sort((a,b) => new Date(b.releaseDate) - new Date(a.releaseDate))
    }
    renderPeriphery(sortedPeripheries);
});