# SuperNew Minesweeper

{this.state.board.map((row, rowIndex) => {
return row.map((cell, colIndex) =>
{ return <li key={colIndex}>{cell}

</li>})
// key={colIndex}
// className={
// cell === ''
// ? 'flag'
// : cell === 'F'
// ? 'shown'
// : cell === '\_'
// ? 'flagbomb'
// : cell === '@'
// ? 'bomb'
// : cell === '_'
// }
// onClick={() => this.cellClickHandler(rowIndex, colIndex)}
// onContextMenu={(event) =>
// this.rtClickHandler(event, rowIndex, colIndex)
// } _/}
// ></>
// )
// })
// })}
