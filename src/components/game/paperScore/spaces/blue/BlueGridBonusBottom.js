import React from 'react'
import { createUseStyles } from 'react-jss'
import Cross from '../../bonus/cross/Cross';
import NumberBonus from '../../bonus/number/NumberBonus';
import PlusOne from '../../bonus/plusone/PlusOne';
import Repeat from '../../bonus/repeat/Repeat';

const useStyles = createUseStyles({
  BlueGridBonusBottom: {
    gridArea: 'BonusBottom',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 25%)',
    justifyItems: 'center',
    alignItems: 'end'
  }
});

const BlueGridBonusBottom = () => {

  const classes = useStyles()

  return (
    <div className={classes.BlueGridBonusBottom}>
      <Repeat size={10} relative />
      <Cross size={10} backgroundColor='green' relative />
      <NumberBonus size={10} backgroundColor='violet' number='6' relative />
      <PlusOne size={10} relative />
    </div>
  )
}

export default BlueGridBonusBottom