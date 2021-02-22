import React from 'react'
import { createUseStyles } from 'react-jss'
import { getImage } from '../../../../../functions/getImage';

const useStyles = createUseStyles({
  Repeat: {
    width: props => `${props.size/4}vh`,
    height: props => `${props.size/4}vh`,
    backgroundColor: 'black',
    border: props => `${props.size/50}vh solid white`,
    borderRadius: '25%',
    position: props => props.relative ? 'relative' : 'absolute',
    marginTop: props =>  props.relative ? '0' :`${props.size/3}vh`,
    marginBottom: props =>  props.relative ? '0' :`-${props.size/3}vh`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media screen and (max-aspect-ratio: 12/9)': {
      width: props => `${props.size/2.5}vw`,
      height: props => `${props.size/2.5}vw`,
      marginTop: props => props.relative ? '0' : `${props.size/2.6}vw`,
      marginBottom: props => props.relative ? '0' : `-${props.size/2.6}vw`,
      border: props => `${props.size/30}vw solid white`,
    }
  },
  RepeatIcon: {
    width: '80%'
  }
});

const Repeat = props => {

  const classes = useStyles(props);

  return (
    <div className={classes.Repeat}>
      <img className={classes.RepeatIcon} src={getImage('repeat')} alt='repeat' />
    </div>
  )
}

Repeat.defaultProps = {
  relative: false
}

export default Repeat