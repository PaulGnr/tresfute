import React from 'react'
import Squares from '../../squares/Squares'
import Die from '../../../die/Die'
import { createUseStyles } from 'react-jss'
import { connect } from 'react-redux';
import { blueClick } from '../../../../../store/actions/serverActions';

const useStyles = createUseStyles({
  BlueGridNumber: {
    gridArea: 'Number',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 25%)',
    justifyItems: 'center',
    alignItems: 'center'
  },
  diceIcon: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

const BlueGridNumber = ({ serverId, blueGrid, blueClick }) => {

  const classes = useStyles()

  return (
    <div className={classes.BlueGridNumber}>
      <div className={classes.diceIcon}><Die size={0.3} color='blue' /> + <Die size={0.3} color='white' /></div>
      {blueGrid.map((blueCell, index) => {
        return <Squares 
                key={index} 
                canBeCrossed 
                crossed={blueCell.crossed}
                disabled={blueCell.disabled} 
                placeholder={`${index+2}`} 
                placeholderColor='blue' 
                handleSquareClick={blueCell.disabled ? () => {} : () => blueClick(serverId, index)}
              />
      })}
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    blueClick: (serverId, indexClicked) => dispatch(blueClick(serverId, indexClicked))
  }
}

export default connect(null, mapDispatchToProps)(BlueGridNumber)