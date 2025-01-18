
const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData() {
    let response = await fetch(url);
    let data = await response.json();
    //console.table(data);
    displayProphets(data.prophets);
    //return data;
}
getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        /* Card creation */
        const card = document.createElement("section");
        card.setAttribute("id", "card");

        /* Full name creation */
        const full = document.createElement("h2");
        full.setAttribute("id", "fullName");
        full.textContent = `${prophet.name} ${prophet.lastname}`;       

        /* Image creation */
        const portrait = document.createElement("img");
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `image of the prophet ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        /* Append elements to card */
        card.appendChild(full);
        card.appendChild(portrait);
        cards.appendChild(card); // Agregar la tarjeta al contenedor correcto

    });
}



