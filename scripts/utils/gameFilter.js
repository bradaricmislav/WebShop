export function filter(games, minPrice, maxPrice, genres = []) {
    return games.filter(game => {
        const price = game.priceCents / 100;
        const matchesPrice = (!minPrice && !maxPrice) || (price >= minPrice && price <= maxPrice);
        const matchesGenre = genres.length === 0 || genres.some(genre => game.genres.includes(genre));

        return matchesPrice && matchesGenre;
    });
}
