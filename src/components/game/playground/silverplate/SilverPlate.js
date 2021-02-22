import React from 'react'
import { createUseStyles } from 'react-jss'
import silverPlate from '../../../../images/silverPlate.png'
import DiceOnPlate from './DiceOnPlate';

const useStyles = createUseStyles({
  SilverPlate: {
    width: '70vw',
    height: '35vw',
    maxWidth: '60vh',
    maxHeight: '30vh'
  },
  SilverPlateImage: {
    width: '70vw',
    height: '35vw',
    maxWidth: '60vh',
    maxHeight: '30vh',
    position: 'absolute'
  }
});

const SilverPlate = ({ dice, serverId, diceOnPlateChose, canTakeDiceChose }) => {
  
  const classes = useStyles();

  return (
    <div className={classes.SilverPlate}>
      <img className={classes.SilverPlateImage} src={silverPlate} alt="silverPlate"/>
      <DiceOnPlate dice={dice} serverId={serverId} diceOnPlateChose={diceOnPlateChose} canTakeDiceChose={canTakeDiceChose} />
    </div>
  )
}

export default SilverPlate