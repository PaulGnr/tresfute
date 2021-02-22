import React from 'react'
import { createUseStyles } from 'react-jss'
import BlueScore from './BlueScore';

const useStyles = createUseStyles({
  BlueGridScore: {
    gridArea: 'Score',
    borderBottom: `2px solid rgb(74, 209, 243)`,
    display: 'grid',
    gridTemplateColumns: 'repeat(11, 9.09%)',
    justifyItems: 'center',
    alignItems: 'center',
    '@media screen and (max-aspect-ratio: 12/9)': {
      marginTop: '-5%'
    }
  }
});

const BlueGridScore = () => {

  const classes = useStyles()

  return (
    <div className={classes.BlueGridScore}>
      <BlueScore number='1' score='1' />
      <BlueScore number='2' score='2' />
      <BlueScore number='3' score='4' />
      <BlueScore number='4' score='7' />
      <BlueScore number='5' score='11' />
      <BlueScore number='6' score='16' />
      <BlueScore number='7' score='22' />
      <BlueScore number='8' score='29' />
      <BlueScore number='9' score='37' />
      <BlueScore number='10' score='46' />
      <BlueScore number='11' score='56' />
    </div>
  )
}

export default BlueGridScore