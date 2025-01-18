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
      const response = await fetch('members.json'); 
      const companies = await response.json();
      
      const membersContainer = document.getElementById('members');
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
              <img src="path/to/images/${company.image}" alt="${company.name}" class="busiimg">
            </div>
            <div>
              <p><strong>EMAIL:</strong> ${company.phone}</p>
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
  