const coverImages = [
    {
        name: "007 First Light",
        image: "../images/main/007cover.jpg"
    },
    {
        name: "Battlefield 6",
        image: "../images/main/bf6cover.jpeg"
    },
    {
        name: "Call of Duty Black Ops 7",
        image: "../images/main/codbo7cover.jpg"
    },
    {
        name: "Ghost of Yotei",
        image: "../images/main/goycover.jpg"
    }
];
let coverImagesHTML = "";
coverImages.forEach((coverImage) => {
    coverImagesHTML += `
        <div class="slide"><a href=""><img src="images/${coverImage.image}" alt="${coverImage.name}"></a></div>
    ` 
})
coverImagesHTML += `<div onclick="changeSlide(-1)" class="previousSlide">&#10094;</div>
        <div onclick="changeSlide(1)" class="nextSlide">&#10095;</div>`
document.querySelector(".image-slider").innerHTML = coverImagesHTML;