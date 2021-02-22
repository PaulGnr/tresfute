import React from 'react'
import { connect } from 'react-redux'
import ServerList from './server/ServerList';
import Title from './Title';
import User from '../user/User'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
  Home: {
    background: 'radial-gradient(circle, rgba(255,227,232,1) 0%, pink 100%)',
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

const Home = ({ signOut, history }) => {
  
  const classes = useStyles();

  return (
    <div className={classes.Home}>
      <User />
      <Title />
      <ServerList history={history} />
    </div>
  )
}

export default connect(null)(Home)