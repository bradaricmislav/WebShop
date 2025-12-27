export function filter(products, minPrice, maxPrice) {
    return products.filter(product => {
        const price = product.priceCents / 100;
        return price >= minPrice && price <= maxPrice;
    });
}
