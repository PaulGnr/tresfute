import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { createUseStyles } from 'react-jss'
import Server from './Server';

const useStyles = createUseStyles({
  ServerList: {
    width: '80vw',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'start',
    alignItems: 'center',
    alignContent: 'space-around',
    '@media screen and (max-aspect-ratio: 12/9)': {
      width: '64.8vw'
    }
  }
});

const ServerList = ({ servers, userId, history }) => {
  
  const classes = useStyles();

  const addServer = () => {
    history.push('/create')
  }

  let serversToShow = [];

  if(servers)
  {
    serversToShow = servers.filter(server => !server.hasStarted);
  }

  return (
    <div className={classes.ServerList}>
      {servers && serversToShow.map((server, index) => {
        return <Server key={index} 
                       name={server.name} 
                       players={server.players} 
                       serverId={server.id} 
                       history={history}
                       createdBy={server.createdBy}
                       complete={server.complete && !server.players.some(player => player.id === userId)}
                />
      })}
      <Server createServer addServer={addServer} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    servers: state.firestore.ordered.servers,
    userId: state.firebase.auth.uid
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => [{collection: 'servers', orderBy: ['createdAt', 'desc']}])
)(ServerList)