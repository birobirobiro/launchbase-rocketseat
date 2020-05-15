const modalOverlay = document.querySelector('.modal-overlay');
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
  modalOverlay.querySelector('iframe').src="";
});

