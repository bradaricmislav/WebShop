export const ps5Consoles = [
    {
        id: "3844",
        image: "../../images/ps5konzole/ps5pro.webp",
        name: "PlayStation 5 Pro",
        priceCents: 79900,
        releaseDate: "2024-11-07"
    },
    {
        id: "9764",
        image: "../../images/ps5konzole/ps5pro2tb.webp",
        name: "PlayStation 5 Pro 2 TB",
        priceCents: 83999,
        releaseDate: "2025-10-09"
    },
    {
        id: "2597",
        image: "../../images/ps5konzole/ps5slim.webp",
        name: "PlayStation 5 Slim",
        priceCents: 57299,
        releaseDate: "2023-11-24"
    },
    {
        id: "9220",
        image: "../../images/ps5konzole/ps5slim1kontroler.webp",
        name: "PlayStation 5 Slim 1 TB",
        priceCents: 66499,
        releaseDate: "2025-11-18"
    },
    {
        id: "7926",
        image: "../../images/ps5konzole/ps5slim1tb.webp",
        name: "PlayStation 5 Slim 1 TB",
        priceCents: 63999,
        releaseDate: "2025-11-13"
    },
    {
        id: "5505",
        image: "../../images/ps5konzole/ps5slimdigital.webp",
        name: "PlayStation 5 Slim Digital",
        priceCents: 58999,
        releaseDate: "2025-11-13"
    },
]
renderConsoles(ps5Consoles);
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
    let sortedConsoles = [...ps5Consoles];
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