import React from 'react'
import Arrow from '../arrow/Arrow'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  GridArrow: {
    '@media screen and (max-aspect-ratio: 12/9)': {
      display: 'none'
    }
    
  }
})

const GridArrow = () => {

  const classes = useStyles();

  return (
    <div className={classes.GridArrow}>
      <Arrow color='blue' x={-19.8} y={9.2} size={15.3} horizontal />
      <Arrow color='blue' x={-14.5} y={3} size={21.4} horizontal />
      <Arrow color='blue' x={-9.1} y={3} size={21.4} horizontal />

      <Arrow color='blue' x={-10.5} y={-1.7} size={9.4} vertical />
      <Arrow color='blue' x={-13.5} y={1.7} size={15} vertical />
      <Arrow color='blue' x={-13.8} y={7.8} size={15} vertical />
      <Arrow color='blue' x={-14.1} y={13.8} size={15} vertical />
    </div>
  )
}

export default GridArrow