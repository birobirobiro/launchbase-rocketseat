const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal')
const courses = document.querySelectorAll('.card')

for (let card of courses) {
  card.addEventListener("click", function(){
    const bootcamp = card.getAttribute("id");
    modalOverlay.classList.add('active');
    modalOverlay.querySelector('iframe').src = `https://www.rocketseat.com.br/${bootcamp}`;
  })
}

const closeModal = document.querySelector('.close-modal').addEventListener("click", function() {
  modalOverlay.classList.remove('active');
  modalOverlay.classList.remove('check_box_outline_blank')
  modalOverlay.querySelector('iframe').src="";
});

const maxModal = document.querySelector('.maximize-modal').addEventListener("click", function() {
  modal.classList.toggle('maximize');
});