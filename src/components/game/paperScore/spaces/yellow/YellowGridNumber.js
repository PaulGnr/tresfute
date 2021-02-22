import React from 'react'
import Squares from '../../squares/Squares'
import { createUseStyles } from 'react-jss'
import { connect } from 'react-redux'
import { yellowClick } from '../../../../../store/actions/serverActions'

const useStyles = createUseStyles({
  YellowGridNumber: {
    gridArea: '1 / 1 / span 4 / span 4',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 25%)',
    gridTemplateRows: 'repeat(4, 25%)',
    justifyItems: 'center'
  }
})

const YellowGridNumber = ({ serverId, yellowGrid, yellowClick }) => {

  const classes = useStyles();

  return (
    <div className={classes.YellowGridNumber}>
      <Squares 
        disabled={yellowGrid[0].disabled} 
        canBeCrossed 
        crossed={yellowGrid[0].crossed}
        placeholder='3' 
        handleSquareClick={yellowGrid[0].disabled ? () => {} : () => yellowClick(serverId, 0)}
      />
      <Squares 
        disabled={yellowGrid[1].disabled} 
        canBeCrossed 
        crossed={yellowGrid[1].crossed}
        placeholder='6' 
        handleSquareClick={yellowGrid[1].disabled ? () => {} : () => yellowClick(serverId, 1)}
      />
      <Squares 
        disabled={yellowGrid[2].disabled} 
        canBeCrossed 
        crossed={yellowGrid[2].crossed}
        placeholder='5' 
        handleSquareClick={yellowGrid[2].disabled ? () => {} : () => yellowClick(serverId, 2)}
      />
      <Squares disabled icon='cross' />
      <Squares 
        disabled={yellowGrid[3].disabled} 
        canBeCrossed 
        crossed={yellowGrid[3].crossed}
        placeholder='2' 
        handleSquareClick={yellowGrid[3].disabled ? () => {} : () => yellowClick(serverId, 3)}
      />
      <Squares 
        disabled={yellowGrid[4].disabled} 
        canBeCrossed 
        crossed={yellowGrid[4].crossed}
        placeholder='1' 
        handleSquareClick={yellowGrid[4].disabled ? () => {} : () => yellowClick(serverId, 4)}
      />
      <Squares disabled icon='cross' />
      <Squares 
        disabled={yellowGrid[5].disabled} 
        canBeCrossed 
        crossed={yellowGrid[5].crossed}
        placeholder='5' 
        handleSquareClick={yellowGrid[5].disabled ? () => {} : () => yellowClick(serverId, 5)}
      />
      <Squares 
        disabled={yellowGrid[6].disabled} 
        canBeCrossed 
        crossed={yellowGrid[6].crossed}
        placeholder='1' 
        handleSquareClick={yellowGrid[6].disabled ? () => {} : () => yellowClick(serverId, 6)}
      />
      <Squares disabled icon='cross' />
      <Squares 
        disabled={yellowGrid[7].disabled} 
        canBeCrossed 
        crossed={yellowGrid[7].crossed}
        placeholder='2' 
        handleSquareClick={yellowGrid[7].disabled ? () => {} : () => yellowClick(serverId, 7)}
      />
      <Squares 
        disabled={yellowGrid[8].disabled} 
        canBeCrossed 
        crossed={yellowGrid[8].crossed}
        placeholder='4' 
        handleSquareClick={yellowGrid[8].disabled ? () => {} : () => yellowClick(serverId, 8)}
      />
      <Squares disabled icon='cross' />
      <Squares 
        disabled={yellowGrid[9].disabled} 
        canBeCrossed 
        crossed={yellowGrid[9].crossed}
        placeholder='3' 
        handleSquareClick={yellowGrid[9].disabled ? () => {} : () => yellowClick(serverId, 9)}
      />
      <Squares 
        disabled={yellowGrid[10].disabled} 
        canBeCrossed 
        crossed={yellowGrid[10].crossed}
        placeholder='4' 
        handleSquareClick={yellowGrid[10].disabled ? () => {} : () => yellowClick(serverId, 10)}
      />
      <Squares 
        disabled={yellowGrid[11].disabled} 
        canBeCrossed 
        crossed={yellowGrid[11].crossed}
        placeholder='6' 
        handleSquareClick={yellowGrid[11].disabled ? () => {} : () => yellowClick(serverId, 11)}
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    yellowClick: (serverId, indexClicked) => dispatch(yellowClick(serverId, indexClicked))
  }
}

export default connect(null, mapDispatchToProps)(YellowGridNumber)