import React from 'react';
import ReactDom from 'react-dom';
import gameStore from './gameStore.js';
import Square from './square.jsx';

let update = function(x, y) {
  gameStore.move(x, y);
  render();
}

let render = function(){
  ReactDom.render(<Square player={gameStore.board[0][0]} x={0} y={0} onClick={update}/>, document.getElementById('app'));
};
render();
