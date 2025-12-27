export function applySort(products, sortType)
{
    let sortedProducts = [...products];
    if(sortType === 'price-asc')
    {
        sortedProducts.sort((a,b) => a.priceCents - b.priceCents);
    }
    if(sortType === 'price-desc')
    {
        sortedProducts.sort((a,b) => b.priceCents - a.priceCents);
    }
    if(sortType === 'a-z')
    {
        sortedProducts.sort((a,b) => a.name.localeCompare(b.name))
    }
    if(sortType === 'z-a')
    {
        sortedProducts.sort((a,b) => b.name.localeCompare(a.name))
    }
    if(sortType === 'date-desc')
    {
        sortedProducts.sort((a,b) => new Date(b.releaseDate) - new Date(a.releaseDate))
    }
    return sortedProducts;
}