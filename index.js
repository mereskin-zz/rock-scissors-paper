var CHOICES = ['rock', 'scissors', 'paper'];
var WINNERS = ['draw', 'you', 'computer'];

document.querySelector('#user-choice').addEventListener('click', function(e){
  var userChoice = parseInt(e.target.getAttribute('data-choice'), 10);
  var computerChoice = getComputerChoice();
  var winner = getWinner(userChoice, computerChoice);

  document.querySelector('#computer-choice').textContent = CHOICES[computerChoice];
  document.querySelector('#winner').textContent = WINNERS[winner];
});

function getComputerChoice(){
  return parseInt(Math.random() * 3, 10);
};

function getWinner(x, y) {
  if(x==y) return 0;
  if(x-y == -1 || x-y == 2) return 1;
  return 2;
};
