import React from 'react'
import EndGameFirstColumn from './EndGameFirstColumn'
import EndGameColumn from './EndGameColumn'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  EndGame: {
    height: '100vh',
    width: '100vw',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, minmax(150px,20%))',
    backgroundColor: 'white'
  }
})

const EndGame = ({ players }) => {

  const classes = useStyles();

  let emptyPlayer = {name: '', score: {yellowScore: '', blueScore: '', greenScore: '', orangeScore: '', violetScore: '', foxScore: '', totalScore: ''}}

  return (
    <div className={classes.EndGame}>
      <EndGameFirstColumn />
      <EndGameColumn player={players[0]} />
      <EndGameColumn player={players[1] ? players[1] : emptyPlayer} />
      <EndGameColumn player={players[2] ? players[2] : emptyPlayer} />
      <EndGameColumn player={players[3] ? players[3] : emptyPlayer} />
    </div>
  )
}

export default EndGame