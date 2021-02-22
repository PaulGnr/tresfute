import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { connect } from 'react-redux';
import { dicePlusOneClicked, dontWantUsePlusOne } from '../../../store/actions/serverActions';
import Die from '../die/Die';

const useStyles = createUseStyles({
  UsePlusOneBonus: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: '0',
    backgroundColor: 'rgb(0,0,0,0.8)',
    zIndex: '2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  UsePlusOneBonusBand: {
    backgroundColor: 'black',
    width: '100%',
    color: 'white',
    fontSize: '5vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2vh',
    '@media screen and (max-aspect-ratio: 12/9)': {
      fontSize: '8vw'
    }
  },
  UsePlusOneBonusDice: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    '& div': {
      margin: '2vh'
    }
  },
  UsePlusOneBonusChoice: {
    borderRadius: '10px',
    border: '1px solid white',
    padding: '0.5vh 2vh',
    cursor: 'pointer',
    '@media screen and (max-aspect-ratio: 12/9)': {
      padding: '1vw 4vw'
    },
    '&:hover': {
      backgroundColor: 'rgb(120, 120, 120)'
    }
  }
})

const UsePlusOneBonus = ({serverId, dice, dontWantUsePlusOne, dicePlusOneClicked}) => {

  const classes = useStyles();

  const [wantToUse, setWantToUse] = useState(false);

  const handleClick = die => {
    dicePlusOneClicked(die, serverId);
    setWantToUse(false);
  }

  return (
    <div className={classes.UsePlusOneBonus}>
      <div className={classes.UsePlusOneBonusBand}>
        <span>{wantToUse ? 'Quel dé voulez-vous utiliser ?' : 'Voulez-vous utiliser un +1 ?'}</span>
        {
          wantToUse ? 
          <div className={classes.UsePlusOneBonusDice}>
            {dice.map((die, index) => {
              return <Die key={index} number={die.number} color={die.color} handleClick={() => handleClick(die)} />
            })}
          </div>
          :
          <div className={classes.UsePlusOneBonusDice}>
            <div className={classes.UsePlusOneBonusChoice} onClick={() => setWantToUse(true)}>Oui</div>
            <div className={classes.UsePlusOneBonusChoice} onClick={() => dontWantUsePlusOne(serverId)} >Non</div>
          </div>
        }
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    dontWantUsePlusOne: (serverId) => dispatch(dontWantUsePlusOne(serverId)),
    dicePlusOneClicked: (die, serverId) => dispatch(dicePlusOneClicked(die, serverId))
  }
}

export default connect(null, mapDispatchToProps)(UsePlusOneBonus)