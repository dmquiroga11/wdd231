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

    async function getitems() {
        let response = await fetch(url);
        let data = await response.json();
        displayItems(data);
    }

    getitems();

    const displayItems = (data) => {
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                let item = data[key];

                /* Card creation */
                const card = document.createElement("section");
                card.setAttribute("id", "card");

                /* Name creation */
                const name = document.createElement("h2");
                name.setAttribute("id", "itemName");
                name.textContent = item.Name;

                /* Address creation */
                const address = document.createElement("p");
                address.setAttribute("id", "itemAddress");
                address.textContent = item.Address;

                /* Description creation */
                const description = document.createElement("p");
                description.setAttribute("id", "itemDescription");
                description.textContent = item.Description;

                /* Image creation */
                const image = document.createElement("img");
                image.setAttribute("src", item.Image);
                image.setAttribute("alt", `image of ${item.Name}`);
                image.setAttribute("loading", "lazy");

                /* Append elements to card */
                card.appendChild(name);
                card.appendChild(address);
                card.appendChild(description);
                card.appendChild(image);
                cards.appendChild(card); // Agregar la tarjeta al contenedor correcto
            }
        }
    }
});
