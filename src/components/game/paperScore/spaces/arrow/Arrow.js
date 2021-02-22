import React from 'react'
import { createUseStyles } from 'react-jss'
import { getColor } from '../../../../../functions/getColor';

const useStyles = createUseStyles({
  
  ArrowTail: {
    position: 'relative',
    top: props => `${props.x}vh`,
    left: props => `${props.y}vh`,
    width: props => `${props.size}vh`,
    display: 'block',
    height: '2px',
    backgroundColor: props => getColor(`light${props.color}`),
    transform: props => {
      if(props.horizontal) return 'rotate(0deg)'
      if(props.diagonal) return 'rotate(45.5deg)'
      if(props.vertical) return 'rotate(90deg)'
    },
    '@media screen and (max-aspect-ratio: 12/9)': {
      top: props => `${props.x*1.43}vw`,
      left: props => `${props.y*1.45}vw`,
      width: props => `${props.size*1.4}vw`,
    },
    zIndex: '-1'
  },
  ArrowHead: {
    position: 'absolute',
    top: '-5px',
    right: '-6px',
    height: '0px',
    width: '0px',
    border: '6px solid',
    borderColor: props => `${getColor(`light${props.color}`)} ${getColor(`light${props.color}`)} transparent transparent`,
    transform: 'rotate(45deg)'
  }
});

const Arrow = props => {

  const classes = useStyles(props);

  return (
    <>
      <div className={classes.ArrowTail}>
        <div className={classes.ArrowHead}></div>
      </div>
    </>
  )
}

Arrow.defaultProps = {
  color: 'black',
  horizontal: false,
  vertical: false,
  diagonal: false,
  x: 0,
  y: 0,
  size: 10
}

export default Arrow