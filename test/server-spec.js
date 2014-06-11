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

  it('POST /play should return 200', function(done){
    request.post('http://localhost:8080/play', {form:{choice:2}}, function(err, res, body){
      assert.equal(res.statusCode, 200);
      done();
    });
  });

  it('POST /play should return json with result', function(done){
    request.post('http://localhost:8080/play', { form:{ choice: 2 } }, function(err, res, body){
      var result = JSON.parse(body);

      assert(result.computerChoice >= 0);
      assert(result.result >= 0);

      done();
    });
  });
});
