(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {

  CHOICES: ['rock', 'scissors', 'paper'],
  WINNERS: ['draw', 'you', 'computer'],

  getComputerChoice: function(){
    return parseInt(Math.random() * 3, 10);
  },

  getWinner: function(a, b){
    if(a == b) {
      return 0;
    } else if(a - b == -1 || a - b == 2) {
      return 1;
    } else {
      return 2;
    }
  }
};

},{}],2:[function(require,module,exports){
var game = require('./game');

document.querySelector('#user-choice').addEventListener('click', function(e){
  var userChoice = parseInt(e.target.getAttribute('data-choice'), 10);
  var computerChoice = game.getComputerChoice();
  var winner = game.getWinner(userChoice, computerChoice);

  document.querySelector('#computer-choice').textContent = game.CHOICES[computerChoice];
  document.querySelector('#winner').textContent = game.WINNERS[winner];
});

},{"./game":1}]},{},[2])