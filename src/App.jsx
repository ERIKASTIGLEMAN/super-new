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

  clickCellHandler = async (event, rowIndex, colIndex) => {
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
          <h2 id="fire">Minesweeper</h2>
          <h3>Mines: {this.state.mines} </h3> <h3>Game #: {this.state.id}</h3>
          <button onClick={this.newGameHandler}>START GAME</button>
          <h2>Good Luck! {this.state.state}</h2>
          <section>
            <ul>
              {this.state.board.map((row, rowIndex) => {
                return row.map((cell, colIndex) => {
                  return (
                    <li
                      key={colIndex}
                      className={
                        cell === '_'
                          ? 'shown'
                          : cell === 'F'
                          ? 'flag'
                          : cell === '*'
                          ? 'bomb'
                          : cell === '@'
                          ? 'bombflag'
                          : null
                      }
                      onClick={(event) =>
                        this.clickCellHandler(event, rowIndex, colIndex)
                      }
                      // onContextMenu = Rt Click
                      onContextMenu={(event) =>
                        this.rtClickHandler(event, rowIndex, colIndex)
                      }
                    >
                      {cell}
                    </li>
                  )
                })
              })}
            </ul>
          </section>
          <footer></footer>
        </main>
      </div>
    )
  }
}
