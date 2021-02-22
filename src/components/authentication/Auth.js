import React from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { createUseStyles } from 'react-jss'
import { getColor } from '../../functions/getColor'
import { useState } from 'react'

const useStyles = createUseStyles({
  Auth: {
    background: 'radial-gradient(circle, rgba(255,227,232,1) 0%, pink 100%);',
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  AuthForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '4vw',
    '@media screen and (max-aspect-ratio: 12/9)': {
      fontSize: '6svw'
    },
    '&>*': {
      margin: '2vw'
    }
  },
  AuthInput: {
    backgroundColor: 'rgb(255, 255, 255, 0)',
    padding: '1vw',
    width: '100%',
    fontSize: '3vw',
    fontFamily: 'inherit',
    border: 'none',
    outline: 'none',
    borderBottom: '0.3vw solid black',
    borderRadius: '3px',
    boxSizing: 'border-box',
    '&:focus, :active': {
      padding: '1vw',
      borderBottom: `0.3vw solid ${getColor('violet')}`
    }
  },
  AuthButton: {
    border: '0.2vw solid black',
    borderRadius: '1vw',
    outline: 'none',
    backgroundColor: getColor('violet'),
    color: 'white',
    padding: '1vw 7vw',
    fontSize: '3vw',
    fontFamily: 'inherit',
    boxShadow: '1px 2px 0px black',
    cursor: 'pointer',
    '@media screen and (max-aspect-ratio: 12/9)': {
      border: '0.3vw solid black',
      borderRadius: '1.5vw',
      padding: '1.5vw 10vw',
      fontSize: '4.5vw'
    },
    '@media screen and (min-aspect-ratio: 12/9)': {
      '&:hover': {
        boxShadow: '0.5px 1px 0px black',
        transform: 'translateY(1px)'
      },
    },
    '&:active, :focus': {
      boxShadow: '0px 0px 0px black',
      transform: 'translateY(2px)'
    }
  },

});

const Auth = ({ signIn }) => {
  
  const classes = useStyles();
  
  const [name, setName] = useState('');

  const handleChange = e => {
    setName(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    signIn(name);
  }

  return (
    <div className={classes.Auth} onSubmit={handleSubmit}>
      <form className={classes.AuthForm} >
        <div>Nom :</div>
        <input className={classes.AuthInput} type="text" onChange={handleChange} />
        <button className={classes.AuthButton} >Commencer</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: name => dispatch(signIn(name))
  }
}

export default connect(null, mapDispatchToProps)(Auth)