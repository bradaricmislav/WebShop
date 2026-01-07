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
        else if(currentPath.includes("console-comparison.html") || currentPath.includes("all.html") || currentPath.includes("ps5.html") || currentPath.includes("xbox.html") || currentPath.includes("nintendo.html"))
        {
            window.location.href = "../searchResults.html";
        }
        else if (currentPath.includes("all-games.html") || currentPath.includes("ps5-games.html") || currentPath.includes("nintendo-games.html") || currentPath.includes("xbox-games.html"))
        {
            window.location.href = "../searchResults.html"
        }
        else
        {
            window.location.href = "searchResults.html";
        }
    }
});
