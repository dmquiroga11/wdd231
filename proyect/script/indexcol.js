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


  /*------------MAIN CITIES OF COLOMBIA------------*/
  const cities = [
    { name: "Bogotá", lat: 4.5709, lon: -74.2973 },
    { name: "Medellín", lat: 6.2444, lon: -75.5811 },
    { name: "Cali", lat: 3.4572, lon: -76.5289 },
    { name: "Barranquilla", lat: 10.9866, lon: -74.7965 },
    { name: "Cartagena", lat: 10.4115, lon: -75.5410 },
    { name: "Santa Marta", lat: 11.2500, lon: -74.2000 },
    { name: "Bucaramanga", lat: 7.1186, lon: -73.1162 },
    { name: "Pereira", lat: 4.8047, lon: -75.6872 },
    { name: "Manizales", lat: 5.0671, lon: -75.5159 },
    { name: "Cúcuta", lat: 7.8942, lon: -72.5030 },
    { name: "Villavicencio", lat: 4.1464, lon: -73.5877 },
    { name: "Popayán", lat: 2.4378, lon: -76.6113 },
];

async function fetchWeatherData(city) {
    const apiKey = '5b320e33136604a278795d3bc7fc1682';

    try {
        const currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${apiKey}&units=metric`);
        const currentWeatherData = await currentWeatherResponse.json();

        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=${apiKey}&units=metric`);
        const forecastData = await forecastResponse.json();

        displayWeatherData(city.name, currentWeatherData, forecastData);
    } catch (error) {
        console.error(`Error fetching weather data for ${city.name}:`, error);
    }
}

function displayWeatherData(cityName, currentWeather, forecast) {
    const citiesWeatherElement = document.getElementById('citiesWeather');
    
    const cityWeatherHtml = `

      <div class="foremain">
        <div class="city-weather">
            <div class="box1weather">
               <h2>${cityName}</h2>
               <div class="forecast">
                  <h3>weather forecast</h3>
                  <p>Hoy: ${forecast.list[0].main.temp} °C - ${forecast.list[0].weather[0].description}</p>
                  <p>Mañana: ${forecast.list[8].main.temp} °C - ${forecast.list[8].weather[0].description}</p>
                  <p>Pasado Mañana: ${forecast.list[16].main.temp} °C - ${forecast.list[16].weather[0].description}</p>
                </div>
              </div>
            <div class="current-weather">
                <img class="icon" src="images/sunny_icon.webp" alt="Ícono de sol con nubes">
                <div class="weather">
                    <p>Temperatura: ${currentWeather.main.temp} °C</p>
                    <p>Clima: ${currentWeather.weather[0].description}</p>
                    <p>Máxima: ${currentWeather.main.temp_max} °C</p>
                    <p>Mínima: ${currentWeather.main.temp_min} °C</p>
                    <p>Humedad: ${currentWeather.main.humidity}%</p>
                    <p>Amanecer: ${new Date(currentWeather.sys.sunrise * 1000).toLocaleTimeString()}</p>
                    <p>Atardecer: ${new Date(currentWeather.sys.sunset * 1000).toLocaleTimeString()}</p>
                </div>
            </div>
            
        </div>
      </div>
    `;

    citiesWeatherElement.insertAdjacentHTML('beforeend', cityWeatherHtml);
}

cities.forEach(city => {
    fetchWeatherData(city);
});

/*---------------------------Gastronomy and Festivities----------------------------------*/
async function fetchData() {
   const datacol = "https://raw.githubusercontent.com/dmquiroga11/wdd231/refs/heads/main/proyect/data.json"
  try {
      const response = await fetch(datacol);
      const data = await response.json();
      window.data = data;
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

function showGastronomy() {
  const contentElement = document.getElementById('content');
  contentElement.innerHTML = '<h3 class="gastroh3">Typical gastronomy</h3>';
  
  window.data.foods.forEach(food => {
      const foodHtml = `
          <div class="divfoodfest">
            <img src="${food.image}" alt="${food.name}">
            <div>
             <h3>${food.name}</h3>              
             <p>${food.description}</p>
            </div>
          </div>
      `;
      contentElement.insertAdjacentHTML('beforeend', foodHtml);
  });
}

function showFestivities() {
  const contentElement = document.getElementById('content');
  contentElement.innerHTML = '<h3 class="gastroh3">Main Festivities</h3>';
  
  window.data.festivities.forEach(festivity => {
      const festivityHtml = `
          <div class="divfoodfest">              
              <img src="${festivity.image}" alt="${festivity.name}">
              <div>
                <h3>${festivity.name}</h3>
                <p>${festivity.description}</p>
              </div>
          </div>
      `;
      contentElement.insertAdjacentHTML('beforeend', festivityHtml);
  });
}

fetchData();
/*-------------THANKS PAGE----------------*/
function handleSubmit(event) {
  event.preventDefault();

  const form = document.getElementById('tripForm');
  const formData = new FormData(form);

  
  const timestamp = new Date().toLocaleString();

  localStorage.setItem('name', formData.get('name'));
  localStorage.setItem('email', formData.get('email'));
  localStorage.setItem('phone', formData.get('phone'));
  localStorage.setItem('tripType', formData.get('tripType'));
  localStorage.setItem('duration', formData.get('duration'));
  localStorage.setItem('budget', formData.get('budget'));
  localStorage.setItem('accommodation', formData.get('accommodation'));
  localStorage.setItem('timestamp', timestamp);

 
  window.location.href = 'thank-you.html';
}


if (window.location.pathname.includes('thank-you.html')) {
  document.getElementById('display-name').textContent = localStorage.getItem('name');
  document.getElementById('display-email').textContent = localStorage.getItem('email');
  document.getElementById('display-phone').textContent = localStorage.getItem('phone');
  document.getElementById('display-tripType').textContent = localStorage.getItem('tripType');
  document.getElementById('display-duration').textContent = localStorage.getItem('duration');
  document.getElementById('display-budget').textContent = localStorage.getItem('budget');
  document.getElementById('display-accommodation').textContent = localStorage.getItem('accommodation');
  document.getElementById('display-timestamp').textContent = localStorage.getItem('timestamp');
}






 
