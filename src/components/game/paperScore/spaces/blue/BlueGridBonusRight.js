import React from 'react'
import { createUseStyles } from 'react-jss'
import Cross from '../../bonus/cross/Cross';
import Fox from '../../bonus/fox/Fox';
import NumberBonus from '../../bonus/number/NumberBonus';

const useStyles = createUseStyles({
  BlueGridBonusRight: {
    gridArea: 'BonusRight',
    display: 'grid',
    gridTemplateRows: 'repeat(3, 25%)',
    justifyItems: 'center',
    alignItems: 'center'
  }
});

const BlueGridBonusRight = () => {

  const classes = useStyles()

  return (
    <div className={classes.BlueGridBonusRight}>
      <NumberBonus size={10} backgroundColor='orange' number='5' relative />
      <Cross size={10} backgroundColor='yellow' relative />
      <Fox size={10} relative />
    </div>
  )
}

export default BlueGridBonusRight