const assert = require('assert');
const Game = require('../src/game.js')
let test = {};

test["getCurrentPlayer should return first player Object if no moves are made"] = function() {
  let newGame = new Game();
  assert.deepEqual(newGame.getCurrentPlayer(),newGame.players[0]);
}



exports.test = test;
