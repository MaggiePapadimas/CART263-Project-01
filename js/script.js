const cards = document.querySelectorAll('.deck');
cards.forEach(card => card.addEventListener('click', flip));

let cardFlipped = false;
let card01, card02;

function flip (){
  this.classList.toggle('flipped');

  if (cardFlipped) {
    cardFlipped = true;
    card01 = this;
  }
}
