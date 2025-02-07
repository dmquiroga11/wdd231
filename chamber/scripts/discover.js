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
/*-----------------------CARDS----------------*/
const container = document.getElementById("cards")

async function fetchData() {
    const url = 'https://raw.githubusercontent.com/dmquiroga11/wdd231/refs/heads/main/chamber/data/items.json';
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      createCards(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  function createCards(data) {
    const container = document.getElementById('cards');
    
    Object.keys(data).forEach(key => {
      const item = data[key];
      
      const card = document.createElement('div');
      card.className = 'card';
  
      const h2 = document.createElement('h2');
      h2.textContent = item.Name;
  
      const figure = document.createElement('figure');
      const img = document.createElement('img');
      img.src = item.Image;
      img.alt = item.Name;
      figure.appendChild(img);
  
      const address = document.createElement('address');
      address.textContent = item.Address;
  
      const description = document.createElement('p');
      description.textContent = item.Description;
  
      const button = document.createElement('button');
      button.textContent = 'learn more';
  
      card.appendChild(h2);
      card.appendChild(figure);
      card.appendChild(address);
      card.appendChild(description);
      card.appendChild(button);
      container.appendChild(card);
    });
  }  
 
  fetchData();
  
  