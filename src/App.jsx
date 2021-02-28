import React, { Component } from 'react'

export class App extends Component {
  state = {
    board: [
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ],
  }

  render() {
    const boardGame = this.state.board.map((row, rowIndex) => {
      return row.map((cell, colIndex) => {
        return <li key={colIndex}></li>
      })
    })

    return (
      <div className="gameboard">
        <main>
          <h2>Minesweeper Game</h2>
          <ul>{boardGame} </ul>
          <footer></footer>
        </main>
      </div>
    )
  }
}
