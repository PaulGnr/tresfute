import React from 'react'
import BlueGridScore from './BlueGridScore'
import BlueGridNumber from './BlueGridNumber'
import BlueGridBonusRight from './BlueGridBonusRight'
import BlueGridBonusBottom from './BlueGridBonusBottom'
import BlueGridArrow from './BlueGridArrow'
import './BlueSpace.css'

const BlueSpace = ({ serverId, blueGrid }) => {
  return (
    <div className="BlueSpace">
      <BlueGridScore />
      <BlueGridNumber serverId={serverId} blueGrid={blueGrid} />
      <BlueGridBonusRight />
      <BlueGridBonusBottom />
      <BlueGridArrow />
    </div>
  );
}

export default BlueSpace