import React from 'react'
import { connect } from 'react-redux';
import { greenClick } from '../../../../../store/actions/serverActions';
import Squares from '../../squares/Squares'
import './GreenSpace.css'

const GreenSpace = ({ serverId, greenGrid, greenClick }) => {

  return (
    <div className="GreenSpace">
      <Squares backgroundColor='green' icon='arrow' disabled />
      <Squares 
        canBeCrossed
        crossed={greenGrid[0].crossed} 
        placeholder='≥1' 
        placeholderColor='green' 
        topScore={{backgroundColor: 'green', number:'1'}} 
        disabled={greenGrid[0].disabled}
        handleSquareClick={greenGrid[0].disabled ? () => {} : () => greenClick(serverId, 0)}
      />
      <Squares 
        canBeCrossed
        crossed={greenGrid[1].crossed} 
        placeholder='≥2' 
        placeholderColor='green' 
        topScore={{backgroundColor: 'green', number:'3'}} 
        disabled={greenGrid[1].disabled}
        handleSquareClick={greenGrid[1].disabled ? () => {} : () => greenClick(serverId, 1)}
      />
      <Squares 
        canBeCrossed
        crossed={greenGrid[2].crossed} 
        placeholder='≥3' 
        placeholderColor='green' 
        topScore={{backgroundColor: 'green', number:'6'}} 
        disabled={greenGrid[2].disabled}
        handleSquareClick={greenGrid[2].disabled ? () => {} : () => greenClick(serverId, 2)}
      />
      <Squares 
        canBeCrossed
        crossed={greenGrid[3].crossed} 
        placeholder='≥4' 
        placeholderColor='green' 
        topScore={{backgroundColor: 'green', number:'10'}} 
        plusOneBonus 
        disabled={greenGrid[3].disabled}
        handleSquareClick={greenGrid[3].disabled ? () => {} : () => greenClick(serverId, 3)}
      />
      <Squares 
        canBeCrossed
        crossed={greenGrid[4].crossed} 
        placeholder='≥5' 
        placeholderColor='green' 
        topScore={{backgroundColor: 'green', number:'15'}} 
        disabled={greenGrid[4].disabled}
        handleSquareClick={greenGrid[4].disabled ? () => {} : () => greenClick(serverId, 4)}
      />
      <Squares 
        canBeCrossed
        crossed={greenGrid[5].crossed} 
        placeholder='≥1' 
        placeholderColor='green' 
        topScore={{backgroundColor: 'green', number:'21'}} 
        crossBonus='blue' 
        disabled={greenGrid[5].disabled}
        handleSquareClick={greenGrid[5].disabled ? () => {} : () => greenClick(serverId, 5)}
      />
      <Squares 
        canBeCrossed
        crossed={greenGrid[6].crossed} 
        placeholder='≥2' 
        placeholderColor='green' 
        topScore={{backgroundColor: 'green', number:'28'}} 
        foxBonus 
        disabled={greenGrid[6].disabled}
        handleSquareClick={greenGrid[6].disabled ? () => {} : () => greenClick(serverId, 6)}
      />
      <Squares 
        canBeCrossed
        crossed={greenGrid[7].crossed} 
        placeholder='≥3' 
        placeholderColor='green' 
        topScore={{backgroundColor: 'green', number:'36'}} 
        disabled={greenGrid[7].disabled}
        handleSquareClick={greenGrid[7].disabled ? () => {} : () => greenClick(serverId, 7)}
      />
      <Squares 
        canBeCrossed
        crossed={greenGrid[8].crossed} 
        placeholder='≥4' 
        placeholderColor='green' 
        topScore={{backgroundColor: 'green', number:'45'}} 
        numberBonus={{color: 'violet', number:'6'}} 
        disabled={greenGrid[8].disabled}
        handleSquareClick={greenGrid[8].disabled ? () => {} : () => greenClick(serverId, 8)}
      />
      <Squares 
        canBeCrossed
        crossed={greenGrid[9].crossed} 
        placeholder='≥5' 
        placeholderColor='green' 
        topScore={{backgroundColor: 'green', number:'55'}} 
        repeatBonus 
        disabled={greenGrid[9].disabled}
        handleSquareClick={greenGrid[9].disabled ? () => {} : () => greenClick(serverId, 9)}
      />
      <Squares 
        canBeCrossed
        crossed={greenGrid[10].crossed} 
        placeholder='≥6' 
        placeholderColor='green' 
        topScore={{backgroundColor: 'green', number:'66'}} 
        disabled={greenGrid[10].disabled}
        handleSquareClick={greenGrid[10].disabled ? () => {} : () => greenClick(serverId, 10)}
      />
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    greenClick: (serverId, indexClicked) => dispatch(greenClick(serverId, indexClicked))
  }
}

export default connect(null, mapDispatchToProps)(GreenSpace)