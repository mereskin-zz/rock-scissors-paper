var server = require('../src/server');
var assert = require('assert');
var request = require('request');

describe('Rock scissors paper server', function(){

  it('GET / should return 200', function(done){

    request.get('http://localhost:8080', function(err, res, body){
      assert.equal(res.statusCode, 200);
      done();
    });

  });
});
