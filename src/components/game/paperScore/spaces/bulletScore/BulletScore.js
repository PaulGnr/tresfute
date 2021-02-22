import React from 'react'
import { createUseStyles } from 'react-jss'
import { getColor } from '../../../../../functions/getColor';

const useStyles = createUseStyles({
  BulletScore: {
    backgroundColor: props => getColor(props.backgroundColor),
    color: props => props.backgroundColor === 'yellow' ? 'black' : 'white',
    fontSize: '2vh',
    borderRadius: '50%',
    border: '1px solid white',
    position: props => props.relative ? 'relative' : 'absolute',
    width: props => `${props.size/4}vh`,
    height: props => `${props.size/4}vh`,
    marginBottom: props => props.relative ? `0` : `${props.size*0.4}vh`,
    marginTop: props => props.relative ? `0` : `-${props.size*0.4}vh`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: '1px',
    '@media screen and (max-aspect-ratio: 12/9)': {
      width: props => `${props.size/2.5}vw`,
      height: props => `${props.size/2.5}vw`,
      marginBottom: props => props.relative ? `0` : `${props.size*0.6}vw`,
      marginTop: props => props.relative ? `0` : `-${props.size*0.6}vw`,
      fontSize: '3.5vw'
    }
  }
})

const BulletScore = props => {

  const classes = useStyles(props);

  return (
    <div className={classes.BulletScore}>
      {props.number}
    </div>
  )
}

BulletScore.defaultProps = {
  backgroundColor: 'black',
  number: '',
  relative: false
}

export default BulletScore