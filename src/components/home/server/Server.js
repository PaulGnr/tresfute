import React from 'react'
import { createUseStyles } from 'react-jss'
import { connect } from 'react-redux';
import { truncate } from '../../../functions/truncate'
import { addPlayerToServer, deleteServer } from '../../../store/actions/serverActions';

const useStyles = createUseStyles({
  Server: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    cursor: props => props.complete ? 'not-allowed' : 'pointer',
    height: '24vh',
    width: '16vh',
    borderRadius: '3vh',
    border: '0.8vh solid white',
    backgroundColor: 'rgb(255, 255, 255, 0.3)',
    margin: '4vh 2vh',
    '@media screen and (max-aspect-ratio: 12/9)': {
      height: '24vw',
      width: '16vw',
      borderRadius: '3vw',
      border: '0.8vw solid white',
      margin: '4vw 2vw'
    }
  },
  ServerAdd: {
    color: 'white',
    fontSize: '20vh',
    marginBottom: '4vh',
    '@media screen and (max-aspect-ratio: 12/9)': {
      fontSize: '20vw',
      marginBottom: '4vw'
    }
  },
  ServerContainer: {
    height: '100%',
    width: '95%',
    display: 'grid',
    gridTemplateRows: 'repeat(6, 16%)'
  },
  ServerName: {
    color: 'black',
    fontSize: '3.5vh',
    '@media screen and (max-aspect-ratio: 12/9)': {
      fontSize: '3.5vw',
    }
  },
  ServerDivider: {
    height: '3px',
    width: '90%',
    backgroundColor: 'white',
    marginTop: '10%'
  },
  ServerPlayer: {
    fontSize: '3vh',
    '@media screen and (max-aspect-ratio: 12/9)': {
      fontSize: '3vw',
    }
  },
  RedCross: {
    position: 'absolute',
    margin: '-10.5vh -6.5vh 10.5vh 6.5vh',
    color: 'red',
    fontSize: '2.5vh',
    '@media screen and (max-aspect-ratio: 12/9)': {
      margin: '-10.5vw -6.5vw 10.5vw 6.5vw',
      fontSize: '2.5vw',
    }
  }
});

const Server = (props) => {
  
  const classes = useStyles(props);

  const redirectToServer = e => {
    if(!props.complete)
    {
      props.addPlayerToServer(props.serverId, props.userId)
      props.history.push(`/${props.serverId}`);
    }
  }

  const handleCrossClick = e => {
    e.stopPropagation();
    props.deleteServer(props.serverId)
  }

  return (
    props.createServer ?
      <div className={classes.Server} onClick={props.addServer}>
        <span className={classes.ServerAdd} >+</span>
      </div>
      :
      <div className={classes.Server} onClick={redirectToServer}>
        {(props.createdBy === props.userId) && <span className={classes.RedCross} onClick={handleCrossClick}>X</span>}
        {props.name && 
        <div className={classes.ServerContainer}>
          <span className={classes.ServerName} >{truncate(props.name, 7)}</span>
          <div className={classes.ServerDivider}></div>
          {props.players && props.players.map((player,index) => {
            return (
              <div key={index} className={classes.ServerPlayer}>{truncate(player.name, 11)}</div>
            )
          })}
        </div>}
    </div>
  )
}

Server.defaultProps = {
  createServer: false
}

const mapStateToProps = state => {
  return {
    userId: state.firebase.auth.uid
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteServer: serverId => dispatch(deleteServer(serverId)),
    addPlayerToServer: (serverId, newPlayerId) => dispatch(addPlayerToServer(serverId, newPlayerId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Server)