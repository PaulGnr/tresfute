import React from 'react'
import { createUseStyles } from 'react-jss'
import { getColor } from '../../../../functions/getColor';

const useStyles = createUseStyles({
  DiceLauncher: {
    outline: 'none',
    border: '0.2vw solid black',
    borderRadius: '1vw',
    backgroundColor: props => props.disabled ? 'grey' : getColor('blue'),
    color: 'black',
    padding: '1vw 7vw',
    fontSize: '3vw',
    fontFamily: 'inherit',
    boxShadow: '1px 2px 0px black',
    marginTop: '3vh',
    cursor: props => props.disabled ? 'not-allowed' : 'pointer',
    '@media screen and (max-aspect-ratio: 12/9)': {
      border: '0.3vw solid black',
      borderRadius: '1.5vw',
      padding: '1.5vw 10vw',
      fontSize: '4.5vw',
      marginTop: '5vw'
    },
    '&:hover': {
      '@media screen and (min-aspect-ratio: 12/9)': {
        boxShadow: '0.5px 1px 0px black',
        transform: 'translateY(1px)'
      },
    },
    '&:active, :focus': {
      boxShadow: '0px 0px 0px black',
      transform: 'translateY(2px)'
    }
  }
});

const DiceLauncher = props => {

  const classes = useStyles(props);
  
  return (
    <button className={classes.DiceLauncher} onClick={props.handleClick} disabled={props.disabled}>
      Lancer
    </button>
  )
}

DiceLauncher.defaultProps = {
  disables: false
}

export default DiceLauncher