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

  async function fetchMembers() {
    try {
      const response = await fetch('https://raw.githubusercontent.com/dmquiroga11/wdd231/main/chamber/data/members.json');
      const companies = await response.json();
      
      const membersContainer = document.getElementById('display');
      membersContainer.innerHTML = ''; // Limpiar contenido existente
      
      companies.forEach(company => {
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

  




  