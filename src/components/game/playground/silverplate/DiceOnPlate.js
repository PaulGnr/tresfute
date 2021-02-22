import React from 'react'
import { createUseStyles } from 'react-jss'
import { connect } from 'react-redux';
import { diceOnPlateClicked } from '../../../../store/actions/serverActions';
import Die from '../../die/Die';

const useStyles = createUseStyles({
  DiceOnPlate: {
    height: '100%',
    padding: '0 5vw',
    marginTop: '-2vw',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

const DiceOnPlate = props => {

  const classes = useStyles(props);

  const handleClick = die => {
    props.diceOnPlateClicked(die, props.serverId)
  }

  return (
    <div className={classes.DiceOnPlate}>
      {props.dice && props.dice.map((die, index) => {
        return <Die 
                  key={index} 
                  number={die.number} 
                  color={die.color} 
                  handleClick={props.diceOnPlateChose ? () => {} : () => handleClick(die)}
                  disabled={props.diceOnPlateChose && !props.canTakeDiceChose}
              />
      })}
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    diceOnPlateClicked: (die, serverId) => dispatch(diceOnPlateClicked(die, serverId))
  }
}

export default connect(null, mapDispatchToProps)(DiceOnPlate)