import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  PlusOne: {
    width: props => `${props.size/4}vh`,
    height: props => `${props.size/4}vh`,
    fontSize: props => `${props.size/5}vh`,
    color: 'white',
    backgroundColor: 'black',
    border: props => `${props.size/50}vh solid white`,
    borderRadius: '25%',
    position: props => props.relative ? 'relative' : 'absolute',
    marginTop: props => props.relative ? '0' : `${props.size/3}vh`,
    marginBottom: props => props.relative ? '0' : `-${props.size/3}vh`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media screen and (max-aspect-ratio: 12/9)': {
      width: props => `${props.size/2.5}vw`,
      height: props => `${props.size/2.5}vw`,
      marginTop: props => props.relative ? '0' : `${props.size/2.6}vw`,
      marginBottom: props => props.relative ? '0' : `-${props.size/2.6}vw`,
      fontSize: props => `${props.size/3}vw`,
      border: props => `${props.size/30}vw solid white`,
    }
  }
});

const PlusOne = props => {

  const classes = useStyles(props);

  return (
    <div className={classes.PlusOne}>
      +1
    </div>
  )
}

PlusOne.defaultProps = {
  relative: false
}

export default PlusOne