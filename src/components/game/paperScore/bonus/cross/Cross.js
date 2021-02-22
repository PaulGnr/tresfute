import React from 'react'
import { createUseStyles } from 'react-jss'
import { getColor } from '../../../../../functions/getColor';

const useStyles = createUseStyles({
  '@keyframes pulse': {
    from: {transform: 'scale(1)'},
    to: {transform: 'scale(1.5)'}
  },
  Cross: {
    width: props => `${props.size/4}vh`,
    height: props => `${props.size/4}vh`,
    marginTop: props => props.relative ? '0' : `${props.size/3}vh`,
    marginBottom: props => props.relative ? '0' : `-${props.size/3}vh`,
    backgroundColor: props => getColor(props.backgroundColor),
    color: props => props.backgroundColor === 'yellow' ? 'black' : 'white',
    fontSize: props => `${props.size/4}vh`,
    border: 'thin solid white',
    borderRadius: '25%',
    position: props => props.relative ? 'relative' : 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    animationName: props => props.pulse ? '$pulse' : '',
    animationTimingFunction: 'ease-in-out',
    animationDuration: '1s',
    animationDirection: 'alternate',
    animationIterationCount: 'infinite',
    animationPlayState: 'running',
    '@media screen and (max-aspect-ratio: 12/9)': {
      width: props => `${props.size/2.5}vw`,
      height: props => `${props.size/2.5}vw`,
      marginTop: props => props.relative ? '0' : `${props.size/2.6}vw`,
      marginBottom: props => props.relative ? '0' : `-${props.size/2.6}vw`,
      fontSize: props => `${props.size/2.5}vw`,
    }
  }
});

const Cross = props => {

  const classes = useStyles(props);

  return (
    <div className={classes.Cross}>
      X
    </div>
  )
}

Cross.defaultProps = {
  backgroundColor: 'black',
  relative: false,
  pulse: false
}

export default Cross