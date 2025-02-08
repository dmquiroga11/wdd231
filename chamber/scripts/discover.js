

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
/*document.addEventListener("DOMContentLoaded", async () => {
    const url = "https://raw.githubusercontent.com/dmquiroga11/wdd231/refs/heads/main/chamber/data/items.json";
    const cards = document.querySelector("#cards");
    
    if (cards) {
        console.log("Element #cards found:", cards); 
    } else {
        console.error("Element #cards not found");
        return; 
    }

    async function getItems() {
        try {
            console.log("Sending request to URL:", url); 
            let response = await fetch(url);
            console.log("Fetch response received:", response); 
            if (!response.ok) {
                throw new Error(`Error fetching JSON: ${response.status}`);
            }
            let data = await response.json();
            
            displayItems(data);
        } catch (error) {
            console.error("Error loading JSON:", error); 
        }
    }

    getItems();

    const displayItems = (data) => {
        
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                let item = data[key];
                console.log("Item:", item); 

                /* Card creation 
                const card = document.createElement("section");
                card.classList.add("card");

                /* Title creation 
                const title = document.createElement("h2");
                title.classList.add("itemName");
                title.textContent = item.Name;

                /* Figure creation for Image 
                const figure = document.createElement("figure");

                const image = document.createElement("img");
                image.setAttribute("src", item.Image);
                image.setAttribute("alt", `Image of ${item.Name}`);
                image.setAttribute("loading", "lazy");

                figure.appendChild(image);

                /* Address creation 
                const address = document.createElement("address");
                address.classList.add("itemAddress");
                address.textContent = item.Address;

                /* Description creation 
                const description = document.createElement("p");
                description.classList.add("itemDescription");
                description.textContent = item.Description;

                /* Learn More Button creation 
                const button = document.createElement("button");
                button.textContent = "Learn More";
                button.addEventListener("click", () => {
                    alert(`More information about ${item.Name}`);
                });

                /* Append elements to card 
                card.appendChild(title);
                card.appendChild(figure);
                card.appendChild(address);
                card.appendChild(description);
                card.appendChild(button);

                console.log("Card created:", card); 

                cards.appendChild(card); 
                console.log("Card added to the #cards container"); 
            }
        }
    }
});*/

import { places } from "../data/items.mjs";
console.log(places)


document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.querySelector("#cards");

    if (cardsContainer) {
        console.log("Element #cards found:", cardsContainer); 
    } else {
        console.error("Element #cards not found");
        return; 
    }

   
    function createCard(place) {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = place.Image;
        img.alt = place.Name;
        card.appendChild(img);

        const name = document.createElement("h3");
        name.textContent = place.Name;
        card.appendChild(name);

        const address = document.createElement("p");
        address.textContent = place.Address;
        card.appendChild(address);

        const description = document.createElement("p");
        description.textContent = place.Description;
        card.appendChild(description);

        return card;
    }

   
    function displayItems(places) {
        places.forEach(place => {
            const card = createCard(place);
            cardsContainer.appendChild(card);
        });
    }

    
    displayItems(places);
});
