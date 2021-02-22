import React from 'react'
import YellowGridArrow from './YellowGridArrow'
import YellowGridBonus from './YellowGridBonus'
import YellowGridNumber from './YellowGridNumber'
import YellowGridScore from './YellowGridScore'
import './YellowSpace.css'

const YellowSpace = ({ serverId, yellowGrid }) => {
  return (
    <div className="YellowSpace">
      <YellowGridNumber serverId={serverId} yellowGrid={yellowGrid} />
      <YellowGridScore />
      <YellowGridBonus />
      <YellowGridArrow />
    </div>
  );
}

export default YellowSpace