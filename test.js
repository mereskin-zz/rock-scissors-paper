var assert = require('assert');
var logic = require('./logic');
var fixtures = require('./fixtures.json')

// rock - 0
// scissors - 1
// paper - 2

// draw - 0
// user - 1
// computer - 2

var CHOICES = ['rock', 'scissors', 'paper'];
var WINNERS = ['draw', 'you', 'computer'];

function stepName(turn) {
  return CHOICES[turn[0]] + ' vs ' + CHOICES[turn[1]] + ' == ' + WINNERS[turn[2]];
};

describe('Rock Scissors Paper', function(){

  fixtures.forEach(function(turn){
    it(stepName(turn), function(){
      var winner = logic.getWinner(turn[0], turn[1]);
      assert.equal(winner, turn[2]);
    });
  });
});
