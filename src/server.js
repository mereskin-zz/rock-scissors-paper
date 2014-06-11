var express = require('express');
var bodyParser = require('body-parser');
var game = require('../src/game');

var app = express();

app.use(bodyParser());

app.get('/', function(req, res){
  res.send('hello world');
});

app.all('/play', function(req, res){
  var userChoice = req.param('choice');
  var computerChoice = game.getComputerChoice();
  var result = game.getWinner(userChoice, computerChoice);

  res.json({

    userChoice: userChoice,
    computerChoice: computerChoice,
    result: result,

    computerChoiceName: game.CHOICES[computerChoice],
    winnerName: game.WINNERS[result]

  });
});

app.listen(8080);
