import React from 'react'
import { connect } from 'react-redux';
import { orangeClick } from '../../../../../store/actions/serverActions';
import Squares from '../../squares/Squares'
import './OrangeSpace.css'

const OrangeSpace = ({ serverId, orangeGrid, orangeClick }) => {
  return (
    <div className="OrangeSpace">
      <Squares backgroundColor='orange' icon='arrow' disabled />
      <Squares 
        disabled={orangeGrid[0].disabled} 
        placeholder={orangeGrid[0].value} 
        handleSquareClick={orangeGrid[0].disabled ? () => {} : ()  => orangeClick(serverId, 0)}
      />
      <Squares 
        disabled={orangeGrid[1].disabled} 
        placeholder={orangeGrid[1].value} 
        handleSquareClick={orangeGrid[1].disabled ? () => {} : ()  => orangeClick(serverId, 1)}
      />
      <Squares 
        disabled={orangeGrid[2].disabled} 
        placeholder={orangeGrid[2].value} 
        handleSquareClick={orangeGrid[2].disabled ? () => {} : ()  => orangeClick(serverId, 2)}
        repeatBonus 
        />
      <Squares 
        disabled={orangeGrid[3].disabled} 
        placeholder={orangeGrid[3].value ? orangeGrid[3].value : 'x2'} 
        placeholderColor={orangeGrid[3].value ? 'black' : 'orange'} 
        handleSquareClick={orangeGrid[3].disabled ? () => {} : ()  => orangeClick(serverId, 3)}
      />
      <Squares 
        disabled={orangeGrid[4].disabled} 
        placeholder={orangeGrid[4].value} 
        handleSquareClick={orangeGrid[4].disabled ? () => {} : ()  => orangeClick(serverId, 4)}
        crossBonus='yellow' 
      />
      <Squares 
        disabled={orangeGrid[5].disabled} 
        placeholder={orangeGrid[5].value} 
        handleSquareClick={orangeGrid[5].disabled ? () => {} : ()  => orangeClick(serverId, 5)}
        plusOneBonus 
      />
      <Squares 
        disabled={orangeGrid[6].disabled} 
        placeholder={orangeGrid[6].value ? orangeGrid[6].value : 'x2'} 
        placeholderColor={orangeGrid[6].value ? 'black' : 'orange'} 
        handleSquareClick={orangeGrid[6].disabled ? () => {} : ()  => orangeClick(serverId, 6)}
      />
      <Squares 
        disabled={orangeGrid[7].disabled} 
        placeholder={orangeGrid[7].value} 
        handleSquareClick={orangeGrid[7].disabled ? () => {} : ()  => orangeClick(serverId, 7)}
        foxBonus 
      />
      <Squares 
        disabled={orangeGrid[8].disabled} 
        placeholder={orangeGrid[8].value ? orangeGrid[8].value : 'x2'} 
        placeholderColor={orangeGrid[8].value ? 'black' : 'orange'} 
        handleSquareClick={orangeGrid[8].disabled ? () => {} : ()  => orangeClick(serverId, 8)}
      />
      <Squares 
        disabled={orangeGrid[9].disabled} 
        placeholder={orangeGrid[9].value} 
        handleSquareClick={orangeGrid[9].disabled ? () => {} : ()  => orangeClick(serverId, 9)}
        numberBonus={{color: 'violet', number: '6'}} 
      />
      <Squares 
        disabled={orangeGrid[10].disabled} 
        placeholder={orangeGrid[10].value ? orangeGrid[10].value : 'x3'} 
        placeholderColor={orangeGrid[10].value ? 'black' : 'orange'} 
        handleSquareClick={orangeGrid[10].disabled ? () => {} : ()  => orangeClick(serverId, 10)}
      />
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    orangeClick: (serverId, indexClicked) => dispatch(orangeClick(serverId, indexClicked))
  }
}

export default connect(null, mapDispatchToProps)(OrangeSpace)