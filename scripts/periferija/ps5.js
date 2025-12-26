export const ps5Periphery = [
    {
        id: "8442",
        image: "../../images/ps5periferija/bijelikontroler.webp",
        name: "PS5 bijeli kontroler",
        priceCents: "6999",
        releaseDate: "2025-11-27"
    },
    {
        id: "7930",
        image: "../../images/ps5periferija/crnikontroler.webp",
        name: "PS5 crni kontroler",
        priceCents: "6999",
        releaseDate: "2025-11-27"
    },
    {
        id: "3727",
        image: "../../images/ps5periferija/camocontroler.webp",
        name: "PS5 camo kontroler",
        priceCents: "6999",
        releaseDate: "2025-11-27"
    },
    {
        id: "4084",
        image: "../../images/ps5periferija/blue.webp",
        name: "PS5 svijetlo plavi kontroler",
        priceCents: "6999",
        releaseDate: "2025-11-27"
    },
    {
        id: "0317",
        image: "../../images/ps5periferija/slusalice.webp",
        name: "Nacon RIG 600 PRO HS",
        priceCents: "7499",
        releaseDate: "2024-10-17"
    },
    {
        id: "7210",
        image: "../../images/ps5periferija/slusalice2.webp",
        name: "HyperX CloudX Stinger 2",
        priceCents: "6299",
        releaseDate: "2024-06-11"
    }
];
renderPeriphery(ps5Periphery);
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
    let sortedPeripheries = [...ps5Periphery];
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