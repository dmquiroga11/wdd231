

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
document.addEventListener("DOMContentLoaded", async () => {
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

                const card = document.createElement("section");
                card.classList.add("card");

                const title = document.createElement("h2");
                title.classList.add("itemName");
                title.textContent = item.Name;

                const figure = document.createElement("figure");
                figure.classList.add("itemFigure");
                const image = document.createElement("img");
                image.setAttribute("src", item.Image);
                image.setAttribute("alt", `Image of ${item.Name}`);
                image.setAttribute("loading", "lazy");
                image.setAttribute("width", "300"); 
                image.setAttribute("height", "200"); 
                figure.appendChild(image);

                const address = document.createElement("address");
                address.classList.add("itemAddress");
                address.textContent = item.Address;

                const description = document.createElement("p");
                description.classList.add("itemDescription");
                description.textContent = item.Description;

                const button = document.createElement("button");
                button.textContent = "Learn More";
                button.addEventListener("click", () => {
                    alert(`More information about ${item.Name}`);
                });

                card.appendChild(title);
                card.appendChild(figure);
                card.appendChild(description);
                card.appendChild(address);
                card.appendChild(button);

                console.log("Card created:", card); 

                cards.appendChild(card); 
                console.log("Card added to the #cards container"); 
            }
        }
    }
});

/*--------------WELCOME MESSAGE---------------------------*/
const now = Date.now();
const lastVisit = localStorage.getItem('lastVisit');
const welcomeMessageElement = document.getElementById('welcomeMessage');

    if (!lastVisit) {
        welcomeMessageElement.innerHTML = "Welcome! Let us know if you have any questions.";
    } else {
        
        const millisecondsInOneDay = 24 * 60 * 60 * 1000;
        const daysBetweenVisits = Math.floor((now - lastVisit) / millisecondsInOneDay);

        if (daysBetweenVisits < 1) {
            
            welcomeMessageElement.innerHTML = "Back so soon! Awesome!";
        } else {
            
            const dayText = daysBetweenVisits === 1 ? 'day' : 'days';
            welcomeMessageElement.innerHTML = `You last visited n days ago. ${daysBetweenVisits} ${dayText}.`;
        }
    }    
    localStorage.setItem('lastVisit', now);



