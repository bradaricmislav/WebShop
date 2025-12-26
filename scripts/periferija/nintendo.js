export const nintendoPeriphery = [
    {
        id: "5642",
        image: "../../images/nintendoperiferija/prokontroler.webp",
        name: "NS2 Pro kontroler",
        priceCents: "8499",
        releaseDate: "2025-06-05"
    },
    {
        id: "8152",
        image: "../../images/nintendoperiferija/joycon2.webp",
        name: "NS2 Joy-Con 2 par kontrolera",
        priceCents: "8529",
        releaseDate: "2025-06-05"
    },
    {
        id: "3236",
        image: "../../images/nintendoperiferija/joycon2.webp",
        name: "NS2 Joy-Con 2 Wheel Pair",
        priceCents: "1999",
        releaseDate: "2025-06-05"
    },
    {
        id: "7467",
        image: "../../images/nintendoperiferija/slusalice.webp",
        name: "NS2 Gaming slušalice",
        priceCents: "1699",
        releaseDate: "2025-07-21"
    }
];
renderPeriphery(nintendoPeriphery);
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
    let sortedPeripheries = [...nintendoPeriphery];
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