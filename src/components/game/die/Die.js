import React from 'react'
import { createUseStyles } from 'react-jss'
import { getColor } from '../../../functions/getColor';
import { isDark } from '../../../functions/isDark';

const useStyles = createUseStyles({
  '@keyframes spin': {
    from: {transform: 'rotate(0deg)'},
    to: {transform: 'rotate(360deg)'},
  },
  Die: {
    borderRadius: '15%',
    backgroundColor: props => isDark(props.color) || props.color === '' ? 'white' : 'black',
    width: props => `${props.size*7.5}vh`,
    height: props => `${props.size*7.5}vh`,
    color: 'black',
    cursor: props => props.disabled ? 'default' : 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1',
    '@media screen and (max-aspect-ratio: 12/9)': {
      width: props => `${props.size*10.6}vw`,
      height: props => `${props.size*10.6}vw`
    },
    animation: props => props.isRolling && '$spin 1s ease-out'
  },
  DieIcon: {
    fontSize: props => `${props.size * 9.3}vh`,
    color: props => getColor(props.color),
    '@media screen and (max-aspect-ratio: 12/9)': {
      fontSize: props => `${props.size * 13}vw`
    }
  }
})

const Die = ({ number, color, isRolling, handleClick, disabled, size }) => {

  const numberWords = ["one", "two", "three", "four", "five", "six"];
  
  const classes = useStyles({color, isRolling, disabled, size});

  return (
    <div className={classes.Die}>
      {isRolling ?
      <i className={`${classes.DieIcon} fas fa-dice-one`}></i>
      :
      <i className={`${classes.DieIcon} fas fa-dice-${numberWords[number-1]}`} 
         onClick={() => handleClick({number: number, color: color})}
      ></i>
      }
    </div>
  )
}

Die.defaultProps = {
  number: 1,
  color: '',
  isRolling: false,
  handleClick: () => {},
  disabled: false,
  size: 1
}

export default Die