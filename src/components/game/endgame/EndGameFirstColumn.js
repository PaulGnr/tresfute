import React from 'react'
import { createUseStyles } from 'react-jss'
import { getColor } from '../../../functions/getColor';
import EndGameCell from './EndGameCell';

const useStyles = createUseStyles({
  EndGameFirstColumn: {
    height: '100%',
    width: '100%',
    display: 'grid',
    gridTemplateRows: 'repeat(8, minmax(50px, 12.5%))'
  }
})

const EndGameFirstColumn = () => {

  const classes = useStyles();

  return (
    <div className={classes.EndGameFirstColumn}>
      <EndGameCell placeHolder='icon' />
      <EndGameCell backgroundColor={getColor('yellow')} placeHolder='bullet' />
      <EndGameCell backgroundColor={getColor('blue')} placeHolder='bullet' />
      <EndGameCell backgroundColor={getColor('green')} placeHolder='bullet' />
      <EndGameCell backgroundColor={getColor('orange')} placeHolder='bullet' />
      <EndGameCell backgroundColor={getColor('violet')} placeHolder='bullet' />
      <EndGameCell borderColor='red' placeHolder='fox' />
      <EndGameCell placeHolder='∑' />
    </div>
  )
}

export default EndGameFirstColumn