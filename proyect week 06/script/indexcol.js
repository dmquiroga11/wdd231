/*-----------------IMG CHANGE-----------------*/

 const images = [
        { src: 'C:/Users/Walter Quiroga/OneDrive/Desktop/wdd231/proyect week 06/images/images1.webp', srcsetLarge: 'C:/Users/Walter Quiroga/OneDrive/Desktop/wdd231/proyect week 06/images/images1-large.webp', alt: 'Imagen 1' },        
        { src: 'C:/Users/Walter Quiroga/OneDrive/Desktop/wdd231/proyect week 06/images/images3.webp', srcsetLarge: 'C:/Users/Walter Quiroga/OneDrive/Desktop/wdd231/proyect week 06/images/images3-large.webp', alt: 'Imagen 3' }
];
    
const imageChanger = document.getElementById('imageChanger');
let currentImageIndex = 0;

function changeImage() {
    currentImageIndex = Math.floor(Math.random() * images.length);
    imageChanger.querySelector('source[media="(min-width: 800px)"]').srcset = images[currentImageIndex].srcsetLarge;
    imageChanger.querySelector('source[media="(min-width: 500px)"]').srcset = images[currentImageIndex].src;
    imageChanger.querySelector('img').src = images[currentImageIndex].src;
    imageChanger.querySelector('img').alt = images[currentImageIndex].alt;
}


changeImage();
/*--------------------------MENU-------------------------------*/
const nav = document.querySelector("#nav");
const open = document.querySelector("#openmenu");
const close = document.querySelector("#closemenu");

open.addEventListener("click", () => {
    nav.classList.add("visible");
});

close.addEventListener("click", () => {
    nav.classList.remove("visible");
});
/*--------------------LAST MODIFICATION-------------------------*/
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = document.lastModified;

const currentTime = document.querySelector("#currentTime");

function updateTime() {
    const now = new Date();
    currentTime.textContent = now.toLocaleTimeString();
}