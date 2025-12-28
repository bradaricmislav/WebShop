const searchInput = document.querySelector(".search-bar");

if (searchInput) {
    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            const query = searchInput.value.trim();
            if (!query) return;
            sessionStorage.setItem("searchQuery", query);
            searchInput.classList.remove("active");
            window.location.href = "pages/searchResults.html";
        }
    });
}
