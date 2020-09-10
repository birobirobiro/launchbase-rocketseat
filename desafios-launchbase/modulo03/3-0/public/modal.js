const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const cards = document.querySelectorAll('.recipes-item')

const closeModal = document.querySelector('.close-modal').addEventListener("click", function() {
  modal.classList.remove('active');
  modalOverlay.classList.remove('active');
})

for (let card of cards) {
    card.querySelector('img').addEventListener("click", function(){
    modal.classList.add('active');
    modalOverlay.classList.add('active');
    modal.querySelector('.name-recipes p').innerHTML=card.
    querySelector('h3').innerHTML;
    modal.querySelector('.author-recipes p').innerHTML=card.
    querySelector('h5').innerHTML;
    modal.querySelector('img').src=card.querySelector('img').src;
    console.log(card);
  })
}