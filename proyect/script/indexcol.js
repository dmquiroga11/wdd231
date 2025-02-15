/*-----------------IMG CHANGE-----------------*/
const images = [
    { src: 'https://raw.githubusercontent.com/dmquiroga11/wdd231/refs/heads/main/proyect/images/images1.webp', srcsetLarge: 'https://raw.githubusercontent.com/dmquiroga11/wdd231/refs/heads/main/proyect/images/images1.webp', alt: 'Imagen 1' },
    { src: 'https://raw.githubusercontent.com/dmquiroga11/wdd231/refs/heads/main/proyect/images/images3.webp', srcsetLarge: 'https://raw.githubusercontent.com/dmquiroga11/wdd231/refs/heads/main/proyect/images/images3.webp', alt: 'Imagen 3' }
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

document.addEventListener('DOMContentLoaded', changeImage);




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

/*----------EXPLORE PAGE----------------*/
document.querySelectorAll('.modal-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const modalId = this.getAttribute('href');
      document.querySelector(modalId).showModal();
    });
  });

  document.querySelectorAll('dialog button').forEach(button => {
    button.addEventListener('click', function () {
      this.parentElement.close();
    });
  });
