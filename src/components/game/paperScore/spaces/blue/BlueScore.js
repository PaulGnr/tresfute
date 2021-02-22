import React from 'react'
import BulletScore from '../bulletScore/BulletScore'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  BlueScore: {
    color: 'rgb(74, 209, 243)',
    fontSize: '2vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '@media screen and (max-aspect-ratio: 12/9)': {
      fontSize: '3vw'
    }
  }
});

const BlueScore = props => {

  const classes = useStyles()

  return (
    <div className={classes.BlueScore}>
      <BulletScore size={9} backgroundColor='blue' number={props.score} relative />
      {props.number}
    </div>
  )
}

export default BlueScore