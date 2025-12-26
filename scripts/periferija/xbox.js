export const xboxPeriphery = [
    {
        id: "2371",
        image: "../../images/xboxperiferija/pulsecipher.webp",
        name: "Xbox Pulse Cipher kontroler",
        priceCents: "6999",
        releaseDate: "2025-03-24"
    },
    {
        id: "2655",
        image: "../../images/xboxperiferija/heartbreaker.webp",
        name: "Xbox Heart Breaker kontroler",
        priceCents: "7499",
        releaseDate: "2025-09-09"
    },
    {
        id: "2181",
        image: "../../images/xboxperiferija/icebreaker.webp",
        name: "Xbox Ice Breaker kontroler",
        priceCents: "7499",
        releaseDate: "2025-09-09"
    },
    {
        id: "3554",
        image: "../../images/xboxperiferija/eliteseries2.webp",
        name: "Xbox Elite kontroler",
        priceCents: "18289",
        releaseDate: "2020-01-01"
    },
    {
        id: "4822",
        image: "../../images/xboxperiferija/slusalice.webp",
        name: "RIG 300 PRO XHW",
        priceCents: "2529",
        releaseDate: "2023-08-02"
    },
    {
        id: "8892",
        image: "../../images/xboxperiferija/slusalice2.webp",
        name: "Xbox Wired Stereo Headset",
        priceCents: "5799",
        releaseDate: "2024-03-17"
    }
];
renderPeriphery(xboxPeriphery);
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
    let sortedPeripheries = [...xboxPeriphery];
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