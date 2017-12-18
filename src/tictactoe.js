// let Game = require('./game.js');

let newGame = new Game();

let reset = function(){
  location.reload();
}

let display = function(elementId,text){
  document.getElementById(elementId).innerText = text;
}

let displayTurn = function(player){
  elementId = "display";
  display(elementId,player.symbol+"'s turn");
}

let stopGame = function(){
  document.getElementById('board').onclick = null;
}

let updateCell = function(pos){
  currentPlayer = newGame.getCurrentPlayer();
  nextPlayer = newGame.getNextPlayer();
  newGame.makeMove(pos);
  display(pos,currentPlayer.symbol);
  if(currentPlayer.isWon()){
      display('display',currentPlayer.symbol+" won");
      stopGame();
    }else if(!newGame.isDraw()){
      displayTurn(nextPlayer);
    }else{
    display('display',"Game drawn");
  }
}

let selectedPosition = function(event){
  let cell = event.target;
  let position = cell.id;
  if(newGame.doesPositionOccupied(position)){
    return;
  }
  updateCell(position);
}

let insertListeners = function(){
  document.getElementById('board').onclick = selectedPosition;
}

let init = function(){
  currentPlayer = newGame.getCurrentPlayer();
  displayTurn(currentPlayer);
  insertListeners();
}

window.onload = init;
