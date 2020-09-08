const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal')
const courses = document.querySelectorAll('.card')

for (let card of courses) {
  card.addEventListener("click", function(){
    const moduloId = card.getAttribute("id")
    window.location.href = `/courses/${moduloId}`;
  })
}

const closeModal = document.querySelector('.close-modal').addEventListener("click", function() {
  modalOverlay.classList.remove('active');
  modal.classList.remove('maximize');
  modalOverlay.querySelector('iframe').src="";
});

const maxModal = document.querySelector('.maximize-modal').addEventListener("click", function() {
  modal.classList.toggle('maximize');
});