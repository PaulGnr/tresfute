import React from 'react'
import { createUseStyles } from 'react-jss'
import { getColor } from '../../../functions/getColor';
import EndGameCell from './EndGameCell';

const useStyles = createUseStyles({
  EndGameColumn: {
    height: '100%',
    width: '100%',
    display: 'grid',
    gridTemplateRows: 'repeat(8, minmax(50px, 12.5%))'
  }
})

const EndGameColumn = ({ player }) => {

  const classes = useStyles();

  return (
    <div className={classes.EndGameColumn}>
      <EndGameCell backgroundColor='rgb(209,216,211)' placeHolder={player.name} name />
      <EndGameCell borderColor={getColor('yellow')} placeHolder={player.score.yellowScore} />
      <EndGameCell borderColor={getColor('blue')} placeHolder={player.score.blueScore} />
      <EndGameCell borderColor={getColor('green')} placeHolder={player.score.greenScore} />
      <EndGameCell borderColor={getColor('orange')} placeHolder={player.score.orangeScore} />
      <EndGameCell borderColor={getColor('violet')} placeHolder={player.score.violetScore} />
      <EndGameCell borderColor='red' placeHolder={player.score.foxScore} />
      <EndGameCell backgroundColor='rgb(209,216,211)' placeHolder={player.score.totalScore} />
    </div>
  )
}

export default EndGameColumn