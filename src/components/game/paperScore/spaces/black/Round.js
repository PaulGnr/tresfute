import React from 'react'
import { createUseStyles } from 'react-jss'
import Cross from '../../bonus/cross/Cross';
import NumberBonus from '../../bonus/number/NumberBonus';
import PlusOne from '../../bonus/plusone/PlusOne';
import Repeat from '../../bonus/repeat/Repeat';
import Squares from '../../squares/Squares';

const useStyles = createUseStyles({
  Round: {
    border: '3px solid white',
    borderRadius: '1.5vh',
    backgroundColor: props => props.number === '5' || props.number === '6' ? 'rgb(0, 0, 0)' : 'rgb(100, 100, 100)',
    display: 'grid',
    gridTemplateRows: '50% 50%',
    justifyItems: 'center',
    alignItems: 'center',
    paddingTop: '5px',
    color: 'white',
    '@media screen and (max-aspect-ratio: 12/9)': {
      borderRadius: '2vw',
    }
  },
  TwoBonus: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    justifyItems: 'center',
    alignItems: 'center'
  },
  Icon: {
    fontSize: '2.5vh',
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    '@media screen and (max-aspect-ratio: 12/9)': {
      fontSize: '4vw'
    }
  },
  IconUser: {
    fontSize: '2.2vh',
    marginTop: '0.1vw',
    marginRight: '0.1rem',
    borderRight: '1px solid white',
    '@media screen and (max-aspect-ratio: 12/9)': {
      fontSize: '3.3vw'
    }
  }
});

const Round = (props) => {

  const classes = useStyles(props);

  const bonus = number => {
    switch(number)
    {
      case '2':
        return <PlusOne size={10} relative />
      case '4':
        return (
          <div className={classes.TwoBonus}>
            <Cross size={9} color='black' relative pulse={props.crossBonus} />
            <NumberBonus size={9} number='6' color='black' relative pulse={props.numberBonus} />
          </div>
        )
      case '5':
        return <i className={`${classes.Icon} fas fa-users`} ></i>
      case '6':
        return (
          <div className={classes.Icon}>
            <i className={`${classes.IconUser} fas fa-user`} ></i>
            <i className='fas fa-user-friends' ></i>
          </div>
        )
      default:
        return <Repeat size={10} relative />
    }
  }

  return (
    <div className={classes.Round} >
      <Squares disabled itsRound={props.itsRound} placeholder={props.number} />
      {bonus(props.number)}
    </div>
  )
}

Round.defaultProps = {
  crossBonus: false,
  numberBonus: false
}

export default Round