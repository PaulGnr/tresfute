import React from 'react'
import BlackSpace from './black/BlackSpace'
import YellowSpace from './yellow/YellowSpace'
import BlueSpace from './blue/BlueSpace'
import GreenSpace from './green/GreenSpace'
import OrangeSpace from './orange/OrangeSpace'
import VioletSpace from './violet/VioletSpace'
import { starterDataForPlayer } from '../../../../store/helper/gameFunctions'
import './Spaces.css'

const Spaces = ({ server, serverId, userId }) => {
  return (
    <div className="Spaces">
      <BlackSpace server={server} serverId={serverId} userId={userId} />
      <YellowSpace serverId={serverId} yellowGrid={server.hasStarted ? server.players.find(player => player.id === userId).yellowGrid : starterDataForPlayer.yellowGrid} />
      <BlueSpace serverId={serverId} blueGrid={server.hasStarted ? server.players.find(player => player.id === userId).blueGrid : starterDataForPlayer.blueGrid} />
      <GreenSpace serverId={serverId} greenGrid={server.hasStarted ? server.players.find(player => player.id === userId).greenGrid : starterDataForPlayer.greenGrid} />
      <OrangeSpace serverId={serverId} orangeGrid={server.hasStarted ? server.players.find(player => player.id === userId).orangeGrid : starterDataForPlayer.orangeGrid} />
      <VioletSpace serverId={serverId} violetGrid={server.hasStarted ? server.players.find(player => player.id === userId).violetGrid : starterDataForPlayer.violetGrid} />
    </div>
  );
}

export default Spaces