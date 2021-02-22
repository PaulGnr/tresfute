import React from 'react'
import { createUseStyles } from 'react-jss'
import { connect } from 'react-redux';
import { diceInGameClicked } from '../../../../store/actions/serverActions';
import Die from '../../die/Die';

const useStyles = createUseStyles({
  DiceList: {
    width: '30vw',
    height: '15vw',
    display: 'flex',
    justifyContent: 'space-around',
    alignContent: 'center',
    flexWrap: 'wrap',
    '@media screen and (max-aspect-ratio: 12/9)': {
      width: '50vw',
      height: '25vw'
    },
    '& div': {
      margin: '1vw'
    }
  }
});

const DiceList = ({ dice, isRolling, serverId, diceChose, diceInGameClicked }) => {

  const classes = useStyles();

  const handleClick = die => {
    diceInGameClicked(die, serverId);
  }

  return (
    <div className={classes.DiceList}>
      {dice && dice.map((die, index) => {
        return <Die 
                  key={index} 
                  number={die.number} 
                  color={die.color} 
                  isRolling={isRolling} 
                  disabled={diceChose}
                  handleClick={diceChose ? () => {} : () => handleClick(die)}
               />
      })}
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    diceInGameClicked: (die, serverId) => dispatch(diceInGameClicked(die, serverId))
  }
}

export default connect(null, mapDispatchToProps)(DiceList)