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
      <Arrow color='yellow' x={-27.9} y={2.8} size={20.8} horizontal />
      <Arrow color='yellow' x={-22.5} y={2.8} size={20.8} horizontal />
      <Arrow color='yellow' x={-16.8} y={2.8} size={20.8} horizontal />
      <Arrow color='yellow' x={-11.1} y={2.8} size={20.8} horizontal />

      <Arrow color='yellow' x={-18.7} y={-7.6} size={21.1} vertical />
      <Arrow color='yellow' x={-18.9} y={-1.8} size={21.1} vertical />
      <Arrow color='yellow' x={-19.2} y={4} size={21.1} vertical />
      <Arrow color='yellow' x={-19.5} y={9.8} size={21.1} vertical />

      <Arrow color='yellow' x={-19.7} y={-1.7} size={30} diagonal />
    </div>
  )
}

export default GridArrow