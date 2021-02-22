import React from 'react'
import { createUseStyles } from 'react-jss'
import DiceArea from './DiceArea';

const useStyles = createUseStyles({
  ChoosenDice: {
    gridArea: 'ChoosenDice',
    display: 'grid',
    gridTemplateRows : 'repeat(3, 32%)',
    gap: '2%'
  }
});

const ChoosenDice = ({ dice }) => {

  const classes = useStyles();

  return (
    <div className={classes.ChoosenDice} >
      <DiceArea die={dice[0] ? dice[0] : undefined} />
      <DiceArea die={dice[1] ? dice[1] : undefined} />
      <DiceArea die={dice[2] ? dice[2] : undefined} />
    </div>
  )
}

export default ChoosenDice