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
          <h1 id="fire">Minesweeper</h1>
          <h2>Good Luck! {this.state.state}</h2>
          <button className="pulse" onClick={this.newGameHandler}>
            START GAME
          </button>

          <h3>
            Mines:{this.state.mines} Game#:{this.state.id}
          </h3>
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
        <main>
          <div className="leaf">
            <div>
              {' '}
              <img
                src="https://openclipart.org/image/2400px/svg_to_png/183653/cherrybomb.png"
                height="75px"
                width="75px"
              />
            </div>
            <div>
              <img
                src="http://pngimg.com/uploads/bomb/bomb_PNG26.png"
                height="75px"
                width="75px"
              />
            </div>
            <div>
              {' '}
              <img
                src="http://cliparts.co/cliparts/gie/qBd/gieqBd8id.png"
                height="75px"
                width="75px"
              />
            </div>
            <div>
              <img src />
            </div>
            <div>
              {' '}
              <img
                src="http://cliparts.co/cliparts/gie/qBd/gieqBd8id.png"
                height="75px"
                width="75px"
              />
            </div>
            <div>
              {' '}
              <img
                src="https://webstockreview.net/images/clipart-explosion-gas-bomb-1.png"
                height="75px"
                width="75px"
              />
            </div>
            <div>
              <img
                src="https://openclipart.org/image/2400px/svg_to_png/183653/cherrybomb.png"
                height="75px"
                width="75px"
              />
            </div>
          </div>
          <div className="leaf leaf1">
            <div>
              {' '}
              <img
                src="https://openclipart.org/image/2400px/svg_to_png/183653/cherrybomb.png"
                height="75px"
                width="75px"
              />
            </div>
            <div>
              <img
                src="http://pngimg.com/uploads/bomb/bomb_PNG26.png"
                height="75px"
                width="75px"
              />
            </div>
            <div>
              {' '}
              <img
                src="http://pngimg.com/uploads/bomb/bomb_PNG26.png"
                height="75px"
                width="75px"
              />
            </div>
            <div>
              <img src />
            </div>
            <div>
              {' '}
              <img
                src="http://cliparts.co/cliparts/gie/qBd/gieqBd8id.png"
                height="75px"
                width="75px"
              />
            </div>
            <div>
              {' '}
              <img
                src="http://cliparts.co/cliparts/gie/qBd/gieqBd8id.png"
                height="75px"
                width="75px"
              />
            </div>
            <div>
              <img
                src="http://pngimg.com/uploads/bomb/bomb_PNG26.png"
                height="75px"
                width="75px"
              />
            </div>
          </div>

          <div className="leaf leaf2">
            <div>
              {' '}
              <img
                src="https://openclipart.org/image/2400px/svg_to_png/183653/cherrybomb.png"
                height="75px"
                width="75px"
              />
            </div>
            <div>
              <img
                src="http://pngimg.com/uploads/bomb/bomb_PNG26.png"
                height="75px"
                width="75px"
              />
            </div>
            <div>
              {' '}
              <img
                src="http://cliparts.co/cliparts/gie/qBd/gieqBd8id.png"
                height="75px"
                width="75px"
              />
            </div>
            <div>
              <img
                src="https://openclipart.org/image/2400px/svg_to_png/183653/cherrybomb.png"
                height="75px"
                width="75px"
              />
            </div>
            <div>
              {' '}
              <img
                src="https://webstockreview.net/images/clipart-explosion-gas-bomb-1.png"
                height="80px"
                width="80px"
              />
            </div>
            <div>
              {' '}
              <img
                src="https://webstockreview.net/images/clipart-explosion-gas-bomb-1.png"
                height="75px"
                width="75px"
              />
            </div>
            <div>
              <img
                src="https://openclipart.org/image/2400px/svg_to_png/183653/cherrybomb.png"
                height="75px"
                width="75px"
              />
            </div>
          </div>
        </main>
      </div>
    )
  }
}
