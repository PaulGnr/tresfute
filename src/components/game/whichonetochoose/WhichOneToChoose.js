import React from 'react'
import { createUseStyles } from 'react-jss'
import { connect } from 'react-redux';
import { diceChose, diceOnPlateChose } from '../../../store/actions/serverActions';
import Die from '../die/Die';

const useStyles = createUseStyles({
  WhichOneToChoose: {
    position: 'fixed',
    top: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(0,0,0,0.8)',
    zIndex: '2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  WhichOneToChooseBand: {
    backgroundColor: 'black',
    width: '100%',
    color: 'white',
    fontSize: '5vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2vh',
    '@media screen and (max-aspect-ratio: 12/9)': {
      fontSize: '8vw'
    }
  },
  WhichOneToChooseDice: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    '& div': {
      margin: '2vh'
    }
  }
})

const WhichOneToChoose = ({dice, serverId, diceOnPlate, diceChose, diceOnPlateChose}) => {

  const classes = useStyles();

  const handleClick = die => {
    diceOnPlate ? 
    diceChose(die, serverId)
    :
    diceOnPlateChose(die, serverId)
  }

  return (
    <div className={classes.WhichOneToChoose}>
      <div className={classes.WhichOneToChooseBand}>
        <span>Quel dé choisir ?</span>
        <div className={classes.WhichOneToChooseDice}>
          {dice.map((die, index) => {
            return <Die key={index} number={die.number} color={die.color} handleClick={handleClick} />
          })}
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    diceChose: (die, serverId) => dispatch(diceChose(die, serverId)),
    diceOnPlateChose: (die, serverId) => dispatch(diceOnPlateChose(die, serverId))
  }
}

export default connect(null, mapDispatchToProps)(WhichOneToChoose)