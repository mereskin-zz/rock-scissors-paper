var game = require('./game');

document.querySelector('#user-choice').addEventListener('click', function(e){
  var userChoice = parseInt(e.target.getAttribute('data-choice'), 10);
  var computerChoice = game.getComputerChoice();
  var winner = game.getWinner(userChoice, computerChoice);

  document.querySelector('#computer-choice').textContent = game.CHOICES[computerChoice];
  document.querySelector('#winner').textContent = game.WINNERS[winner];
});
