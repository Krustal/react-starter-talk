import React from 'react';
import ReactDom from 'react-dom';
import gameStore from './gameStore.js';
import Square from './square.jsx';
import Game from './game.jsx';

let update = function(x, y) {
  gameStore.move(x, y);
  render();
}

let render = function(){
  ReactDom.render(<Game gameOver={gameStore.gameOver} board={gameStore.board} moveCB={update} />, document.getElementById('app'));
};

// let render = function(){
//   ReactDom.render(<Square player={gameStore.board[0][0]} x={0} y={0} onClick={move}/>, document.getElementById('app'));
// };
render();
