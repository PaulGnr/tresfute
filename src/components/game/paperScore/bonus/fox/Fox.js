import React from 'react'
import { createUseStyles } from 'react-jss'
import { getImage } from '../../../../../functions/getImage';

const useStyles = createUseStyles({
  Fox: {
    width: props => `${props.size/2.5}vh`,
    height: props => `${props.size/2.5}vh`,
    position: props => props.relative ? 'relative' : 'absolute',
    marginTop: props => props.relative ? '0' : `${props.size/3}vh`,
    marginBottom: props => props.relative ? '0' : `-${props.size/3}vh`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media screen and (max-aspect-ratio: 12/9)': {
      width: props => `${props.size/1.7}vw`,
      height: props => `${props.size/1.7}vw`,
      marginTop: props => props.relative ? '0' : `${props.size/2.6}vw`,
      marginBottom: props => props.relative ? '0' : `-${props.size/2.6}vw`,
    }
  },
  FoxIcon: {
    width: '100%'
  }
});

const Fox = props => {

  const classes = useStyles(props);

  return (
    <div className={classes.Fox}>
      <img className={classes.FoxIcon} src={getImage('fox')} alt='fox' />
    </div>
  )
}

export default Fox