// inicializacion de popovers

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const myModal = bootstrap.Modal.getOrCreateInstance('#welcomeModal');

window.addEventListener('DOMContentLoaded', () => {
  myModal.show();
})