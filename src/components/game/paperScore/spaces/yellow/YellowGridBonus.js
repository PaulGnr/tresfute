import React from 'react'
import { createUseStyles } from 'react-jss'
import Cross from '../../bonus/cross/Cross'
import NumberBonus from '../../bonus/number/NumberBonus'
import Fox from '../../bonus/fox/Fox'
import PlusOne from '../../bonus/plusone/PlusOne'

const useStyles = createUseStyles({
  YellowGridBonus: {
    gridArea: '1 / 5 / span 5 / span 1',
    display: 'grid',
    gridTemplateRows: '19% 19% 19% 19% 24%',
    justifyItems: 'center',
    alignItems: 'center'
  }
})

const YellowGridBonus = () => {

  const classes = useStyles();

  return (
    <div className={classes.YellowGridBonus}>
      <Cross size={10} backgroundColor='blue' relative />
      <NumberBonus size={10} backgroundColor='orange' number='4' relative />
      <Cross size={10} backgroundColor='green' relative />
      <Fox size={10} relative />
      <PlusOne size={10} relative />
    </div>
  )
}

export default YellowGridBonus