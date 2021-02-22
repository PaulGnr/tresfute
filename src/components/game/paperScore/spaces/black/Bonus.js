import React from 'react'
import { createUseStyles } from 'react-jss'
import { connect } from 'react-redux';
import { repeatClick } from '../../../../../store/actions/serverActions';
import PlusOne from '../../bonus/plusone/PlusOne';
import Repeat from '../../bonus/repeat/Repeat';
import CircleBonus from './CircleBonus';

const useStyles = createUseStyles({
  Bonus: {
    gridArea: props => `Bonus${props.bonus}`,
    border: '3px solid white',
    borderRadius: '12px',
    backgroundColor: 'rgb(100, 100, 100)',
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 12.5%)',
    justifyItems: 'center',
    alignItems: 'center',
    padding: '0 1vh'
  }
});

const Bonus = (props) => {

  const classes = useStyles(props);

  const handleBonusClick = index => {
    if(props.bonus === 'Repeat')
    {
      props.repeatClick(props.serverId, index);
    }
  }

  return (
    <div className={classes.Bonus} >
      {props.bonus === 'Repeat' ? <Repeat size={20} relative/> : <PlusOne size={20} relative />}
      {props.state.map((bonus, index) => {
        return <CircleBonus 
          key={index} 
          bonusType={props.bonus} 
          bonus={bonus} 
          canBeUsed={!props.diceChose} 
          handleClick={() => handleBonusClick(index)}
        />
      })}
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    repeatClick: (serverId, indexClicked) => dispatch(repeatClick(serverId, indexClicked))
  }
}

export default connect(null, mapDispatchToProps)(Bonus)