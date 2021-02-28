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

  newGameHandler = async () => {
    const body = { difficulty: 0 }

    const apiResponse = await fetch(
      `https://minesweeper-api.herokuapp.com/games`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body),
      }
    )

    const game = await apiResponse.json()

    this.setState(game)
  }

  cellClickHandler = async (event, rowIndex, colIndex) => {
    event.preventDefault()

    const body = { row: rowIndex, col: colIndex }

    const response = await fetch(
      `https://minesweeper-api.herokuapp.com/games/${this.state.id}/check`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body),
      }
    )

    const game = await response.json()

    this.setState(game)
  }

  rtClickHandler = async (event, rowIndex, colIndex) => {
    event.preventDefault()

    const body = { row: rowIndex, col: colIndex }

    const response = await fetch(
      `https://minesweeper-api.herokuapp.com/games/${this.state.id}/flag`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body),
      }
    )

    const game = await response.json()

    this.setState(game)
  }

  render() {
    return (
      <div className="gameboard">
        <main>
          <h2>Minesweeper Game</h2>
          <h3>Mines: {this.state.mines}</h3>
          <h3>Game #: {this.state.id}</h3>
          {/* <h3>{this.state.state}</h3> */}
          <section>
            <ul>
              {this.state.board.map((row, rowIndex) => {
                return row.map((cell, colIndex) => {
                  return (
                    <li
                      key={colIndex}
                      className={
                        cell === ''
                          ? 'flag'
                          : cell === 'F'
                          ? 'revealed'
                          : cell === '_'
                          ? 'flagbomb'
                          : cell === '@'
                          ? 'bomb'
                          : cell === '*'
                      }
                      onClick={() => this.cellClickHandler(rowIndex, colIndex)}
                      onContextMenu={(event) =>
                        this.rtClickHandler(event, rowIndex, colIndex)
                      }
                    ></li>
                  )
                })
              })}
            </ul>
          </section>
          <footer>
            <button onClick={this.newGameHandler}>NEW GAME</button>
          </footer>
        </main>
      </div>
    )
  }
}
