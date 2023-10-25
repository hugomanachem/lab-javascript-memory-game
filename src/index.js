const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = document.getElementById('memory-board');
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      
      if (memoryGame.pickedCards.length < 2) {
        memoryGame.pickedCards.push(card);
        card.setAttribute('class', 'card turned');
      } 

      if (memoryGame.pickedCards.length === 2) {
        console.log(memoryGame.pickedCards[0])
        let card1 = memoryGame.pickedCards[0].getAttribute("data-card-name")
        let card2 = memoryGame.pickedCards[1].getAttribute('data-card-name')

        let result = memoryGame.checkIfPair(card1, card2);
        console.log(result)
        if (result) {
          memoryGame.pickedCards[0].setAttribute('class', 'card turned');
          memoryGame.pickedCards[1].setAttribute('class', 'card turned');
          memoryGame.checkIfFinished()
          memoryGame.pickedCards = [];
        } else {
          memoryGame.pickedCards[0].classList.remove("turned")
          memoryGame.pickedCards[1].classList.remove("turned")
          memoryGame.checkIfFinished()
          memoryGame.pickedCards = [];
          
        }
      } 
      console.log(`Card clicked: ${card}`);
      console.log(memoryGame.pickedCards.length);

    });
  });
});
