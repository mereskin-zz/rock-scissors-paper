var assert = require('assert');
var logic = require('../src/game');
var fixtures = require('./fixtures.json')

describe('Rock Scissors Paper', function(){

  it('should return number between 0 and 2 as computer choice', function(){
    for(var i=0;i<10;i++) {
      var choice = logic.getComputerChoice();
      assert(0 <= choice <= 2);
    }
  });

  fixtures.forEach(function(turn){

    it(stepName(turn), function(){
      var winner = logic.getWinner(turn[0], turn[1]);
      assert.equal(winner, turn[2]);
    });

  });
});

function stepName(turn) {
  return logic.CHOICES[turn[0]] + ' vs ' + logic.CHOICES[turn[1]] + ' == ' + logic.WINNERS[turn[2]];
};
