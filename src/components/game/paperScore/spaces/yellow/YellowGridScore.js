import React from 'react'
import { createUseStyles } from 'react-jss'
import BulletScore from '../bulletScore/BulletScore';

const useStyles = createUseStyles({
  YellowGridScore: {
    gridArea: '5 / 1 / span 1 / span 4',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 25%)',
    justifyItems: 'center',
    alignItems: 'center',
  }
})

const YellowGridScore = () => {

  const classes = useStyles();

  return (
    <div className={classes.YellowGridScore}>
      <BulletScore size={12} backgroundColor='yellow' number='10' relative />
      <BulletScore size={12} backgroundColor='yellow' number='14' relative />
      <BulletScore size={12} backgroundColor='yellow' number='16' relative />
      <BulletScore size={12} backgroundColor='yellow' number='20' relative />

    </div>
  )
}

export default YellowGridScore