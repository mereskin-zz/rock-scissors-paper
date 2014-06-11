document.querySelector('#user-choice').addEventListener('click', function(e){
  var userChoice = parseInt(e.target.getAttribute('data-choice'), 10);
  var request = new XMLHttpRequest();

  request.onload = function(){
    var result = JSON.parse(this.responseText);

    document.querySelector('#computer-choice').textContent = result.computerChoiceName;
    document.querySelector('#winner').textContent = result.winnerName;
  };

  request.open('get', '/play', true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify({ choice: userChoice }));
});
