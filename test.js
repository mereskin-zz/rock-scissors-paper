var assert = require('assert');

function sum(a,b) {
  return a + b;
}

describe('Rock Scissors Paper', function(){
  it('sum must correctly sum', function(){
    var x = sum(1, 2);
    assert.equal(x, 3);
  });
});
