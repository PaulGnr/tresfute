import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createUseStyles } from 'react-jss'
import DiceList from './DiceList';
import DiceLauncher from './DiceLauncher';
import { diceLaunch } from '../../../../store/actions/serverActions';

const useStyles = createUseStyles({
  DiceInGame: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const DiceInGame = ({ whosTurn, diceChose, dice, launchRemaining, serverId, allBonusUsed, squareFilled, userId, diceLaunch }) => {

  const classes = useStyles();

  const [isRolling, setIsRolling] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      isRolling && setIsRolling(false)
    }, 1000)
  }, [isRolling])

  const handleLaunchClick = () => {
    setIsRolling(true);
    diceLaunch(serverId)
  }

  return (
    <div className={classes.DiceInGame} >
      <DiceList dice={dice} isRolling={isRolling} serverId={serverId} diceChose={diceChose} />
      {
        whosTurn.id === userId &&
        <DiceLauncher 
          handleClick={handleLaunchClick} 
          disabled={isRolling || !diceChose || dice.length === 0 || launchRemaining === 0 || !allBonusUsed || !squareFilled} 
        />
      }
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    diceLaunch: serverId => dispatch(diceLaunch(serverId))
  }
}

export default connect(null, mapDispatchToProps)(DiceInGame)