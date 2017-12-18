let Game = function(){
  this.players = [];
  this.allMoves = [];
  let firstPlayer = new Player('X');
  let secondPlayer = new Player('O');
  this.players.push(firstPlayer);
  this.players.push(secondPlayer);
  this.currentPlayer = {};
  this.nextPlayer = {};
  this.updatePlayers();
}

Game.prototype = {
  updatePlayers : function(){
    let currentPlayerIndex = this.allMoves.length % 2;
    let nextPlayerIndex = (this.allMoves.length + 1) % 2;
    this.currentPlayer = this.players[ currentPlayerIndex ];
    this.nextPlayer = this.players[ nextPlayerIndex ];
  },
  getCurrentPlayer : function(){
    return this.currentPlayer;
  },
  getNextPlayer : function(){
    return this.nextPlayer;
  },
  makeMove : function(pos){
    let currentPlayer = this.getCurrentPlayer();
    this.allMoves.push(pos);
    currentPlayer.makeMove(pos);
    this.updatePlayers();
  },
  isDraw : function(){
    return this.allMoves.length == 9;
  },
  doesPositionOccupied : function(position){
    return this.allMoves.includes(position);
  }
}
