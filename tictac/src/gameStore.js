const gameStore = {
  turn: "O",
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ],
  gameOver: false,
  isGameOver: function(x, y) {
    let board = this.board;
    let lastTurn = board[y][x]
    return (
      // 3 in a row horizontally
      board[y].every((s) => s === lastTurn) ||
      // 3 in a row vertically
      board.reduce((colRun, row) => colRun && row[x] === lastTurn, true) ||
      // 3 in a row diagonally ltor
      (board[0][0] === lastTurn && board[0][0] === board[1][1] && board[0][0] === board[2][2]) ||
      // 3 in a row diagonally rtol
      (board[0][2] === lastTurn && board[0][2] === board[1][1] && board[0][2] === board[2][0])
    );
  },
  move: function(x, y) {
    this.board[y][x] = this.turn;
    if (this.isGameOver(x, y)) {
      this.gameOver = true;
    }
    this.turn = this.turn === "O" ? "X" : "O";
  }
}
export default gameStore;
