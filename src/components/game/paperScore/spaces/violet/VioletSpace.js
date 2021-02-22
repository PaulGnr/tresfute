import React from 'react'
import { connect } from 'react-redux';
import { violetClick } from '../../../../../store/actions/serverActions';
import Squares from '../../squares/Squares'
import './VioletSpace.css'

const VioletSpace = ({ serverId, violetGrid, violetClick }) => {
  return (
    <div className="VioletSpace">
      <Squares backgroundColor='violet' icon='arrow' disabled />
      <Squares 
        disabled={violetGrid[0].disabled} 
        placeholder={violetGrid[0].value}
        violetSquare 
        handleSquareClick={violetGrid[0].disabled ? () => {} : () => violetClick(serverId, 0)}
      />
      <Squares 
        disabled={violetGrid[1].disabled} 
        placeholder={violetGrid[1].value}
        violetSquare 
        handleSquareClick={violetGrid[1].disabled ? () => {} : () => violetClick(serverId, 1)}
      />
      <Squares 
        disabled={violetGrid[2].disabled} 
        placeholder={violetGrid[2].value}
        violetSquare 
        repeatBonus 
        handleSquareClick={violetGrid[2].disabled ? () => {} : () => violetClick(serverId, 2)}
      />
      <Squares 
        disabled={violetGrid[3].disabled} 
        placeholder={violetGrid[3].value}
        violetSquare 
        crossBonus='blue' 
        handleSquareClick={violetGrid[3].disabled ? () => {} : () => violetClick(serverId, 3)}
      />
      <Squares 
        disabled={violetGrid[4].disabled} 
        placeholder={violetGrid[4].value}
        violetSquare 
        plusOneBonus 
        handleSquareClick={violetGrid[4].disabled ? () => {} : () => violetClick(serverId, 4)}
      />
      <Squares 
        disabled={violetGrid[5].disabled} 
        placeholder={violetGrid[5].value}
        violetSquare 
        crossBonus='yellow' 
        handleSquareClick={violetGrid[5].disabled ? () => {} : () => violetClick(serverId, 5)}
      />
      <Squares 
        disabled={violetGrid[6].disabled} 
        placeholder={violetGrid[6].value}
        violetSquare 
        foxBonus 
        handleSquareClick={violetGrid[6].disabled ? () => {} : () => violetClick(serverId, 6)}
      />
      <Squares 
        disabled={violetGrid[7].disabled} 
        placeholder={violetGrid[7].value}
        violetSquare 
        repeatBonus 
        handleSquareClick={violetGrid[7].disabled ? () => {} : () => violetClick(serverId, 7)}
      />
      <Squares 
        disabled={violetGrid[8].disabled} 
        placeholder={violetGrid[8].value}
        violetSquare 
        crossBonus='green' 
        handleSquareClick={violetGrid[8].disabled ? () => {} : () => violetClick(serverId, 8)}
      />
      <Squares 
        disabled={violetGrid[9].disabled} 
        placeholder={violetGrid[9].value}
        violetSquare 
        numberBonus={{color:'orange', number:'6'}} 
        handleSquareClick={violetGrid[9].disabled ? () => {} : () => violetClick(serverId, 9)}
      />
      <Squares 
        disabled={violetGrid[10].disabled} 
        placeholder={violetGrid[10].value}
        plusOneBonus 
        handleSquareClick={violetGrid[10].disabled ? () => {} : () => violetClick(serverId, 10)}
      />
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    violetClick: (serverId, indexClicked) => dispatch(violetClick(serverId, indexClicked))
  }
}

export default connect(null, mapDispatchToProps)(VioletSpace)