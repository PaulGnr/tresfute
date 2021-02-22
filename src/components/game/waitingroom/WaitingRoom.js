import React from 'react'
import { createUseStyles } from 'react-jss'
import { connect } from 'react-redux';
import { playerIsReady } from '../../../store/actions/serverActions';
import Button from '../../tools/Button';
import Card from './Card';

const useStyles = createUseStyles({
  WaitingRoom: {
    background: 'radial-gradient(circle, rgba(255,227,232,1) 0%, pink 100%);',
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    '@media screen and (max-aspect-ratio: 12/9)': {
      minHeight: '100vw'
    }
  },
  WaitingRoomPlayerList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

const WaitingRoom = ({ serverId, userId, players, player, playerIsReady }) => {
  
  const classes = useStyles();

  const handleClick = isReady => {
    playerIsReady(serverId, userId, isReady);
  }

  return (
    <div className={classes.WaitingRoom}>
      {player && player.isReady ?
      <Button
        color='orange'
        handleClick={() => handleClick(false)}
      >
        En fait non...
      </Button>
      :
      <Button
        color='green'
        handleClick={() => handleClick(true)}
      >
        Prêt
      </Button>
      }
      <div className={classes.WaitingRoomPlayerList}>
        {players.map(player => {
          return (
            <Card key={player.id} isReady={player.isReady} >
              {player.name}
            </Card>
          )
        })}
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    playerIsReady: (serverId, playerId, isReady) => dispatch(playerIsReady(serverId, playerId, isReady))
  }
}

export default connect(null, mapDispatchToProps)(WaitingRoom)