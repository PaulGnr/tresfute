import React from 'react'
import { createUseStyles } from 'react-jss'
import { getColor } from '../../../../functions/getColor'
import { getImage } from '../../../../functions/getImage'
import Cross from '../bonus/cross/Cross'
import Fox from '../bonus/fox/Fox'
import NumberBonus from '../bonus/number/NumberBonus'
import PlusOne from '../bonus/plusone/PlusOne'
import Repeat from '../bonus/repeat/Repeat'
import BulletScore from '../spaces/bulletScore/BulletScore'
import InferiorTo from '../spaces/violet/InferiorTo'

const useStyles = createUseStyles({
  Squares: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: props => getColor(props.backgroundColor),
    border: 'thin solid white',
    fontSize: '3.5vh',
    color: props => getColor(props.placeholderColor),
    height: '4.5vh',
    width: '4.5vh',
    borderRadius: '25%',
    cursor: props => props.disabled ? 'default' : 'pointer',
    '@media screen and (max-aspect-ratio: 12/9)': {
      height: '6vw',
      width: '6vw',
      fontSize: '5vw'
    }
  },
  SquareImage: {
    width: props => props.icon === 'cross' ? '4vh' : '6vh',
    '@media screen and (max-aspect-ratio: 12/9)': {
      width: props => props.icon === 'cross' ? '6vw' : '8vw',
    }
  },
  SquareCross: {
    width: '4vh',
    position: 'absolute',
    '@media screen and (max-aspect-ratio: 12/9)': {
      width: '6vw'
    }
  }
})

const Squares = (props) => {

  const classes = useStyles(props);

  const handleClick = () => {
    if(props.handleSquareClick)
    {
      props.handleSquareClick()
    }
  }

  return (
    <div className={classes.Squares} onClick={handleClick}>
      {props.placeholder && <span>{props.placeholder}</span>}
      {props.topScore && <BulletScore size={10} backgroundColor={props.topScore.backgroundColor} number={props.topScore.number} />}
      {props.icon && <img className={classes.SquareImage} src={getImage(props.icon)} alt={props.icon} />}
      {props.repeatBonus && <Repeat size={10} />}
      {props.plusOneBonus && <PlusOne size={10} />}
      {props.crossBonus && <Cross size={10} backgroundColor={props.crossBonus} />}
      {props.foxBonus && <Fox size={10} />}
      {props.numberBonus && <NumberBonus size={10} backgroundColor={props.numberBonus.color} number={props.numberBonus.number} />}
      {props.violetSquare && <InferiorTo size={10} />}
      {(props.crossed || props.itsRound) && <img className={classes.SquareCross} src={getImage('cross')} alt={props.icon} />}
    </div>
  )
}

Squares.defaultProps = {
  backgroundColor: 'white',
  icon: '',
  placeholder: '',
  placeholderColor: 'black',
  repeatBonus: false,
  plusOneBonus: false,
  crossBonus: '',
  foxBonus: false,
  numberBonus: false,
  violetSquare: false,
  topScore: false,
  disabled: false,
  canBeCrossed: false,
  itsRound: false,
  handleSquareClick: null
}

export default Squares