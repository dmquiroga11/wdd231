const lastModified = document.querySelector("#lastModified");
lastModified.textContent = document.lastModified;

const currentTime = document.querySelector("#currentTime");

function updateTime() {
    const now = new Date();
    currentTime.textContent = now.toLocaleTimeString();
}

const nav = document.querySelector("#nav");
const open = document.querySelector("#openmenu");
const close = document.querySelector("#closemenu");

open.addEventListener("click", () => {
    nav.classList.add("visible");
});

close.addEventListener("click", () => {
    nav.classList.remove("visible");
});

/*--------JSON WORK--------*/
/* 2–3 members with gold or silver membership*/

  async function fetchMembers() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/dmquiroga11/wdd231/main/chamber/data/members.json');
        const companies = await response.json();
        
        const membersContainer = document.getElementById('display');
        membersContainer.innerHTML = '';      
        const membershipLevels = {
            1: "Member",
            2: "Silver",
            3: "Gold"
        };       
        const filteredCompanies = companies.filter(company => company.membershipLevel === 2 || company.membershipLevel === 3).slice(0, 3);        
        filteredCompanies.forEach(company => {
            const section = document.createElement('section');
            section.classList.add('boxbusiness');
            
            section.innerHTML = `
                <div class="busihead">
                    <h3>${company.name}</h3>
                    <p>${company.otherInfo}</p>
                </div>
                <hr>
                <div class="data">
                    <div>
                        <img src="images/business1.webp" alt="business1" class="busiimg">
                    </div>            
                    <div>
                        <p><strong>EMAIL:</strong> ${company.email}</p>
                        <p><strong>PHONE:</strong> ${company.phone}</p>
                        <p><strong>URL:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
                        <p><strong>MEMBERSHIP LEVEL:</strong> ${membershipLevels[company.membershipLevel]}</p>
                    </div>
                </div>
            `;            
            membersContainer.appendChild(section);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchMembers();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#display");

gridbutton.addEventListener("click", () => {  
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}
/*Forecast*/
const apiKey = '5b320e33136604a278795d3bc7fc1682';
const lat = 2.4382;
const lon = -76.6132;

async function fetchWeatherData() {
    try {
        
        const currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
        const currentWeatherData = await currentWeatherResponse.json();
        
        
        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
        const forecastData = await forecastResponse.json();
        
        displayCurrentWeather(currentWeatherData);
        displayForecast(forecastData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayCurrentWeather(data) {
    const tempElement = document.getElementById('currentTemp');
    const descriptionElement = document.getElementById('currentDescription');
    const highTempElement = document.getElementById('highTemp');
    const lowTempElement = document.getElementById('lowTemp');
    const humidityElement = document.getElementById('humidity');
    const sunriseElement = document.getElementById('sunrise');
    const sunsetElement = document.getElementById('sunset');
    
    tempElement.textContent = `Temperature: ${data.main.temp} °C`;
    descriptionElement.textContent = `Weather: ${data.weather[0].description}`;
    highTempElement.textContent = `High: ${data.main.temp_max} °C`;
    lowTempElement.textContent = `Low: ${data.main.temp_min} °C`;
    humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
    sunriseElement.textContent = `Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`;
    sunsetElement.textContent = `Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;
}

function displayForecast(data) {
    const day1Element = document.getElementById('day1');
    const day2Element = document.getElementById('day2');
    const day3Element = document.getElementById('day3');
    
    // Mostrar pronóstico para 3 días
    const forecastList = data.list;
    
    day1Element.textContent = `Today: ${forecastList[0].main.temp} °C - ${forecastList[0].weather[0].description}`;
    day2Element.textContent = `Tomorrow: ${forecastList[8].main.temp} °C - ${forecastList[8].weather[0].description}`;
    day3Element.textContent = `Day After tomorrow: ${forecastList[16].main.temp} °C - ${forecastList[16].weather[0].description}`;
}

fetchWeatherData();



