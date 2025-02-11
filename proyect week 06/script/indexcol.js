/*-----------------IMG CHANGE-----------------*/
const images = [
    { src: 'images/image1.webp', srcsetLarge: 'images/image1-large.webp', alt: 'Imagen 1' },
    { src: 'images/image2.webp', srcsetLarge: 'images/image2-large.webp', alt: 'Imagen 2' },
    { src: 'images/image3.webp', srcsetLarge: 'images/image3-large.webp', alt: 'Imagen 3' }
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