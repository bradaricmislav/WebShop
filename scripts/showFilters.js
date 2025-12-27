const filterToggle = document.querySelector('.filter-toggle');
const filterContainer = document.querySelector('.filter-container');
filterToggle.addEventListener("click", (event) => {
    event.preventDefault();
    filterContainer.classList.toggle('active');
    if(filterContainer.classList.contains('active'))
    {
        filterContainer.focus();
    }
});
