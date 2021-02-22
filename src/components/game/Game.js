import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { createUseStyles } from 'react-jss'
import PaperScore from './paperScore/PaperScore';
import Playground from './playground/Playground';
import WaitingRoom from './waitingroom/WaitingRoom'
import WhichOneToChoose from './whichonetochoose/WhichOneToChoose'
import { starterDataForPlayer } from '../../store/helper/gameFunctions'
import UsePlusOneBonus from './useplusonebonus/UsePlusOneBonus'
import EndGame from './endgame/EndGame'

const useStyles = createUseStyles({
  Game: {
    display: 'grid',
    gridTemplateColumns: 'auto 71vh',
    gridTemplateRows: '100%',
    justifyItems: 'center',
    alignItems: 'center',
    '@media screen and (max-aspect-ratio: 12/9)': {
      gridTemplateRows: 'auto 141vw',
      gridTemplateColumns: '100%'
    }
  }
});

const Game = ({ server, serverId, userId }) => {
  console.log(server);
  
  const classes = useStyles();

  let player = starterDataForPlayer;

  if(server)
  {
    player = server.players.some(player => player.id === userId) ? server.players.find(player => player.id === userId) : starterDataForPlayer;
  }

  return (
    <>
      {server &&
        <>
          {
            server.endGame ?
            <EndGame players={server.players} />
            :
            <div className={classes.Game}>
            {
              server.hasStarted ? 
              <Playground server={server} serverId={serverId} />
              :
              <WaitingRoom 
                serverId={serverId} 
                userId={userId} 
                players={server.players}
                player={player} 
              />
            }
            <PaperScore server={server} serverId={serverId} userId={userId} />
            </div>
          }
        </>
      }
      {!!player.whichOneToChoose.length && <WhichOneToChoose dice={player.whichOneToChoose} serverId={serverId} diceOnPlate={player.diceOnPlateChose} />}
      {!!player.wantToUsePlusOneBonus && <UsePlusOneBonus dice={player.diceForPlusOne} serverId={serverId} />}
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  const serverId = ownProps.match.params.id;
  const servers = state.firestore.data.servers
  const server = servers ? servers[serverId] : null
  return {
    server,
    serverId,
    userId: state.firebase.auth.uid
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => [{collection: 'servers'}])
)
(Game)