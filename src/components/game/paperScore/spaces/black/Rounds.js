import React from 'react'
import { createUseStyles } from 'react-jss'
import Round from './Round';

const useStyles = createUseStyles({
  Rounds: {
    gridArea: 'Rounds',
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 12.5%)',
    gap: '5%'
  }
});

const Rounds = ({ round, crossBonus, numberBonus }) => {

  const classes = useStyles();

  return (
    <div className={classes.Rounds} >
      <Round itsRound={round >= 1} number='1' />
      <Round itsRound={round >= 2} number='2' />
      <Round itsRound={round >= 3} number='3' />
      <Round itsRound={round >= 4} number='4' crossBonus={crossBonus} numberBonus={numberBonus} />
      <Round itsRound={round >= 5} number='5' />
      <Round itsRound={round >= 6} number='6' />
    </div>
  )
}

export default Rounds