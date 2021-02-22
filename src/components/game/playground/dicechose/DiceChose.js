import React from 'react'
import { createUseStyles } from 'react-jss'
import { connect } from 'react-redux';
import { diceChoseClicked } from '../../../../store/actions/serverActions';
import Die from '../../die/Die';

const useStyles = createUseStyles({
  DiceChose: {
    position: 'absolute',
    top: '-1vh',
    right: '70vh',
    display: 'flex',
    flexDirection: 'column',
    '@media screen and (max-aspect-ratio: 12/9)': {
      top: '-1vw',
      right: '-1vw'
    },
    '& div': {
      transform: 'scale(0.6)',
      marginBottom: '-10px'
    }
  }
})

const DiceChose = ({ dice, canTakeDiceChose, serverId, diceChoseClicked }) => {

  const classes = useStyles();

  const handleClick = die => {
    if(canTakeDiceChose)
    {
      diceChoseClicked(die, serverId);
    }
  }

  return (
    <div className={classes.DiceChose}>
      {dice && dice.map((die, index) => <Die key={index} 
                                            number={die.number} 
                                            color={die.color} 
                                            disabled={!canTakeDiceChose}
                                            handleClick={() => handleClick(die)} />)}
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    diceChoseClicked: (die, serverId) => dispatch(diceChoseClicked(die, serverId))
  }
}

export default connect(null, mapDispatchToProps)(DiceChose)