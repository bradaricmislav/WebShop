import { ps5Consoles } from "./ps5Consoles.js";
import { xboxConsoles } from "./xboxConsoles.js";
import { nintendoConsoles } from "./nintendoConsoles.js";

const allConsoles = [...ps5Consoles, ...xboxConsoles, ...nintendoConsoles];
renderConsoles(allConsoles);
function renderConsoles(consoles)
{
    let consolesHTML = "";
    consoles.forEach((console) => {
        consolesHTML += `
            <div class="card">
                <a href=""><img src="${console.image}" alt="">${console.name}</a>
                <p class="console-price">${(console.priceCents/100).toFixed(2)}€</p>
                <button>U košaricu</button>
            </div>
        `
    })
    document.querySelector(".console-cards").innerHTML = consolesHTML;
}
const sortSelect = document.querySelector('.sort-select');
sortSelect.addEventListener('change', () => {
    const selectedOption = sortSelect.value;
    let sortedConsoles = [...allConsoles];
    if(selectedOption === 'price-asc')
    {
        sortedConsoles.sort((a,b) => a.priceCents - b.priceCents);
    }
    if(selectedOption === 'price-desc')
    {
        sortedConsoles.sort((a,b) => b.priceCents - a.priceCents);
    }
    if(selectedOption === 'a-z')
    {
        sortedConsoles.sort((a,b) => a.name.localeCompare(b.name))
    }
    if(selectedOption === 'z-a')
    {
        sortedConsoles.sort((a,b) => b.name.localeCompare(a.name))
    }
    if(selectedOption === 'date-desc')
    {
        sortedConsoles.sort((a,b) => new Date(b.releaseDate) - new Date(a.releaseDate))
    }
    renderConsoles(sortedConsoles);
});