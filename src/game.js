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
