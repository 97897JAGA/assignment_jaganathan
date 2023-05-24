import React, { Component } from 'react';

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null), // Represents the game board
      currentPlayer: 'X', // Tracks the current player
      winner: null, // Tracks the winner ('X', 'O', or null)
    };
  }

  handleClick(index) {
    if (this.state.board[index] === null && !this.state.winner) {
      const newBoard = [...this.state.board];
      newBoard[index] = this.state.currentPlayer;

      this.setState({
        board: newBoard,
        currentPlayer: this.state.currentPlayer === 'X' ? 'O' : 'X',
      });

      this.checkWinner(newBoard);
    }
  }

  checkWinner(board) {
    const lines = [
      [0, 1, 2], // Rows
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // Columns
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // Diagonals
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        this.setState({ winner: board[a] });
        break;
      }
    }
  }

  resetGame() {
    this.setState({
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null,
    });
  }

  render() {
    const { board, currentPlayer, winner } = this.state;

    return (
      <div>
        <div className="board">
          {board.map((cell, index) => (
            <div
              key={index}
              className={`cell ${cell}`}
              onClick={() => this.handleClick(index)}
            >
              {cell}
            </div>
          ))}
        </div>
        <div className="status">
          {winner ? `Winner: ${winner}` : `Current Player: ${currentPlayer}`}
        </div>
        <button onClick={() => this.resetGame()}>Reset</button>
      </div>
    );
  }
}
export default TicTacToe;
