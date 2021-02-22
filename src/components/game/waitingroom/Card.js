import React from 'react'
import { createUseStyles } from 'react-jss'
import { getColor } from '../../../functions/getColor';
import { truncate } from '../../../functions/truncate';

const useStyles = createUseStyles({
  Card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    height: '18vh',
    width: '12vh',
    borderRadius: '2.5vh',
    border: isReady => isReady ? `0.8vh solid ${getColor('green')}` : `0.8vh solid ${getColor('orange')}`,
    backgroundColor: isReady => isReady ? 'rgb(78,163,52, 0.3)' : 'rgb(223,116,35, 0.3)',
    margin: '4vh 2vh',
    fontSize: '3vh',
    '@media screen and (max-aspect-ratio: 12/9)': {
      height: '24vw',
      width: '16vw',
      borderRadius: '3vw',
      border: isReady => isReady ? `0.8vw solid ${getColor('green')}` : `0.8vw solid ${getColor('orange')}`,
      margin: '4vw 2vw',
      fontSize: '4vw',
    }
  },
})

const Card = ({ children, isReady }) => {

  const classes = useStyles(isReady);

  return (
    <div className={classes.Card}>
      {truncate(children, 8)}
    </div>
  )
}

export default Card