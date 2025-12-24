const hamburgerToggle = document.querySelector('.hamburger-toggle');
const hamburgerMenu = document.querySelector('.hamburger-menu');
hamburgerToggle.addEventListener("click", (event) => {
    event.preventDefault;
    hamburgerMenu.classList.toggle('active');
    if(hamburgerMenu.classList.contains('active'))
    {
        hamburgerMenu.focus();
    }
});
