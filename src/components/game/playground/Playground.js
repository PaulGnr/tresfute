import React from 'react'
import { createUseStyles } from 'react-jss'
import { connect } from 'react-redux';
import DiceChose from './dicechose/DiceChose';
import DiceInGame from './diceingame/DiceInGame';
import SilverPlate from './silverplate/SilverPlate';

const useStyles = createUseStyles({
  Playground: {
    background: 'radial-gradient(circle, rgba(255,227,232,1) 0%, pink 100%);',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    '@media screen and (max-aspect-ratio: 12/9)': {
      height: '100%',
      minHeight: '120vw',
      width: '100vw'
    }
  }
});

const Playground = ({ server, serverId, userId }) => {

  const classes = useStyles();

  let allBonusUsed = false;
  if(server.players)
  {
    allBonusUsed = server.players.every(player => !player.crossBonus) && server.players.every(player => !player.numberBonus)
  }

  let whosTurnId = '';
  if(server.whosTurn)
  {
    whosTurnId = server.whosTurn.id
  }

  return (
    <div className={classes.Playground}>
      <SilverPlate 
        dice={server.diceOnPlate} 
        serverId={serverId} 
        diceOnPlateChose={server.players.find(p => p.id === userId).diceOnPlateChose}
        canTakeDiceChose={server.players.find(p => p.id === userId).canTakeDiceChose}
      />
      <DiceInGame 
        whosTurn={server.whosTurn} 
        diceChose={server.players.find(p => p.id === userId).diceChose} 
        dice={server.diceInGame}
        launchRemaining={server.players.find(p => p.id === userId).launchRemaining}
        serverId={serverId} userId={userId} 
        allBonusUsed={allBonusUsed}
        squareFilled={server.players.find(p => p.id === userId).squareFilled}
      />
      {whosTurnId !== userId && 
      <DiceChose 
        dice={server.diceChose} 
        canTakeDiceChose={server.players.find(p => p.id === whosTurnId).canTakeDiceChose} 
        serverId={serverId} 
      />}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userId: state.firebase.auth.uid
  }
}

export default connect(mapStateToProps)(Playground)