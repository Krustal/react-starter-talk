import React, { Component } from 'react';
import Square from './square.jsx';

export default class Game extends Component {
  render() {
    let gameClasses = this.props.gameOver ? "game game-over" : "game";
    return (
      <div className={gameClasses}>
        {this.props.board.map((row, rowI) => {
          return (
            <div key={`row${rowI}`} className="game-row">
            {row.map((square, colI) => (
              <Square key={`square${colI}${rowI}`} player={square} x={colI} y={rowI} onClick={this.props.moveCB} />
            ))}
            </div>
          )
        })}
      </div>
    );
  }
}
