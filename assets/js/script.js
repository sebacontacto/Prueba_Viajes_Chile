// inicializacion de popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
//

// modal para cada load de url
const myModal = bootstrap.Modal.getOrCreateInstance('#welcomeModal');

window.addEventListener('DOMContentLoaded', () => {
  myModal.show();
})
//
