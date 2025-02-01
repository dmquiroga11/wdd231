/*----------------------MODALS---------------------------*/
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

/*--------------HIDDEN INFORMATION------------------*/
document.addEventListener('DOMContentLoaded', function() {
  var timestampInput = document.getElementById('timestamp');
  var currentDate = new Date();
  var formattedDate = currentDate.toISOString(); // Formatear la fecha y hora en formato ISO
  timestampInput.value = formattedDate;
});

/*-------------THANKS PAGE------------------------*/
document.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  document.getElementById('display-name').textContent = params.get('name');
  document.getElementById('display-lastname').textContent = params.get('lastname');
  document.getElementById('display-email').textContent = params.get('email');
  document.getElementById('display-phone').textContent = params.get('phone');
  document.getElementById('display-organization').textContent = params.get('organization');
  document.getElementById('display-level').textContent = params.get('level');
  document.getElementById('display-timestamp').textContent = params.get('timestamp');
});

