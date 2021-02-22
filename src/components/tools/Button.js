import React from 'react'
import { createUseStyles } from 'react-jss'
import { getColor } from '../../functions/getColor';
import { isDark } from '../../functions/isDark';

const useStyles = createUseStyles({
  Button: {
    border: '0.2vw solid black',
    borderRadius: '1vw',
    backgroundColor: props => getColor(props.color),
    color: props => isDark(props.color) ? 'white' : 'black',
    padding: '1vw 7vw',
    fontSize: '3vw',
    boxShadow: '1px 2px 0px black',
    marginTop: '3vh',
    cursor: props => props.isRolling ? 'not-allowed' : 'pointer',
    '@media screen and (max-aspect-ratio: 12/9)': {
      border: '0.3vw solid black',
      borderRadius: '1.5vw',
      padding: '3vw 20vw',
      fontSize: '9vw',
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

const Button = props => {

  const classes = useStyles(props);

  return (
    <div className={classes.Button} onClick={props.handleClick} disabled={props.isRolling}>
      {props.children}
    </div>
  )
}

Button.defaultProps = {
  isRolling: false,
  color: 'black',
  handleClick: null
}

export default Button