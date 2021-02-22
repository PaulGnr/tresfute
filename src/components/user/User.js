import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { signOut } from '../../store/actions/authActions';
import { createUseStyles } from 'react-jss'
import { truncate } from '../../functions/truncate'

const useStyles = createUseStyles({
  User: {
    backgroundColor: 'rgb(255, 255, 255, 0.6)',
    borderRadius: '1vh',
    border: '0.2vh solid white',
    position: 'absolute',
    top: '0',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  UserName: {
    marginBottom: '1vh',
    fontSize: '3vh',
    '@media screen and (max-aspect-ratio: 12/9)': {
      fontSize: '5vw'
    }
  },
  UserButton: {
    backgroundColor: 'transparent',
    outline: 'none',
    border: 'none',
    borderRadius: '1vh',
    fontFamily: 'inherit',
    fontSize: '2vh',
    '@media screen and (max-aspect-ratio: 12/9)': {
      fontSize: '4vw'
    },
    "&:hover": {
      backgroundColor: 'rgb(0,0,0,0.4)',
    }
  }
});

const User = ({ user, signOut }) => {
  
  const classes = useStyles();

  const handleClick = () => {
    signOut()
  }

  return (
    <div className={classes.User}>
      <span className={classes.UserName}>{user ? truncate(user.name, 12) : ''}</span>
      <button className={classes.UserButton} onClick={handleClick}>Quitter</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.firestore.data.users ? state.firestore.data.users[state.firebase.auth.uid] : null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(() => [{collection: 'users'}])
)(User)