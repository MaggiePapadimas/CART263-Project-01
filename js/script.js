const cards = document.querySelectorAll('.deck');

let cardFlipped = false;
let cardsChosen = false;
let card01, card02;

for(let i = 0; i < cards.length; i+=1 ){
    cards[i].style.order = Math.ceil(Math.random() * 12);
    cards[i].addEventListener('click', game);
}

function newGame() {
  cardFlipped = false;
  cardsChosen = false;
  card01 = null;
  card02 = null;
}

function flipCards() {
  card01.removeEventListener('click', game);
  card02.removeEventListener('click', game);

  newGame();
}

function game() {
  if (cardsChosen || this === card01) return;

  this.classList.add('flip');

  if (!cardFlipped) {
    cardFlipped = true;
    card01 = this;
    return;
  }

  card02 = this;
  cardsChosen = true;

  if(card01.dataset.name === card02.dataset.name){
    flipCards();
  }
  else {
    unflipCards();
  }
}

function unflipCards() {
  setTimeout(unflipTimer, 1000);
}

function unflipTimer() {

    card01.classList.remove('flip');
    card02.classList.remove('flip');

    newGame();
}
