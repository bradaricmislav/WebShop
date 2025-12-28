const searchToggle = document.querySelector('.search-toggle');
const searchBar = document.querySelector('.search-bar');
searchToggle.addEventListener("click", (event) => {
    event.preventDefault;
    searchBar.classList.toggle('active');
    if(searchBar.classList.contains('active'))
    {
        searchBar.focus();
    }
});

searchBar.addEventListener("keydown", (event) => {
    if(event.key === "Enter")
    {
        event.preventDefault();
        searchBar.classList.remove("active");
    }
})