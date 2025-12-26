export const xboxConsoles = [
    {
        id: "1037",
        image: "../../images/xboxkonzole/xboxseriess.webp",
        name: "Xbox Series S 512GB",
        priceCents: 45999,
        releaseDate: "2020-11-10"
    },
    {
        id: "4084",
        image: "../../images/xboxkonzole/xboxseriesx1tb.webp",
        name: "Xbox Series X 1 TB",
        priceCents: 83999,
        releaseDate: "2023-11-10"
    },
    {
        id: "3242",
        image: "../../images/xboxkonzole/xboxseriesxdigital.webp",
        name: "Xbox Series X 1TB Digital",
        priceCents: 69499,
        releaseDate: "2025-12-10"
    }
]
renderConsoles(xboxConsoles);
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
    let sortedConsoles = [...xboxConsoles];
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