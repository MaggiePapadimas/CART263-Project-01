const cards = document.querySelectorAll('.deck');

//if card is flipped
let cardFlipped = false;
//for when a card is chosen
let cardsChosen = false;
//for matching the pairs
let card01, card02;

//setting random poistion. and adds listener for clicks
for(let i = 0; i < cards.length; i+=1 ){
    cards[i].style.order = Math.ceil(Math.random() * 12);
    cards[i].addEventListener('click', check);
}

//reflips cards
function reset() {
  cardFlipped = false;
  cardsChosen = false;
  card01 = null;
  card02 = null;
}

//flips the cards
function flipCards() {
  card01.removeEventListener('click', check);
  card02.removeEventListener('click', check);

  reset();
}

//checks for match
function check() {
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
    setTimeout(unflipTimer, 1000);
  }
}

//flips unmatched cards
function unflipTimer() {

    card01.classList.remove('flip');
    card02.classList.remove('flip');

    reset();
}
