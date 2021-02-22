import React from 'react'
import { createUseStyles } from 'react-jss'
import { getImage } from '../../../../../functions/getImage';

const useStyles = createUseStyles({
  CircleBonus: {
    borderRadius: '50%',
    border: props => props.bonus === 'no' ? '3px solid white' : '3px solid black',
    backgroundColor: 'rgb(190, 190, 190)',
    width: '4vh',
    height: '4vh',
    cursor: props => props.canBeUsed && props.bonus === 'yes' ? 'pointer' : 'default',
    '@media screen and (max-aspect-ratio: 12/9)': {
      width: '6vw',
      height: '6vw'
    }
  },
  BonusCross: {
    width: '4vh',
    position: 'absolute',
    '@media screen and (max-aspect-ratio: 12/9)': {
      width: '6vw'
    }
  }
});

const CircleBonus = (props) => {

  const classes = useStyles(props);

  const isCrossed = props.bonus === 'used';

  const handleClick = () => {
    if (props.bonus === 'yes' && props.canBeUsed)
    {
      props.handleClick();
    }
  }

  return (
    <div className={classes.CircleBonus} onClick={handleClick}>
      {isCrossed && <img className={classes.BonusCross} src={getImage('cross')} alt='cross' />}
    </div>
  )
}

export default CircleBonus