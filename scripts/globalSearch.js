const searchInput = document.querySelector(".search-bar");
searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        const query = searchInput.value.trim();
        if (!query) return;
        sessionStorage.setItem("searchQuery", query);
        searchInput.classList.remove("active");

        const currentPath = window.location.pathname;
        if(currentPath.includes("index.html"))
        {
            window.location.href = "pages/searchResults.html";
        }
        else
        {
            window.location.href = "searchResults.html";
        }
    }
});
