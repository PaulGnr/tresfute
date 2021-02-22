import React from 'react'
import './BlackSpace.css'
import Bonus from './Bonus'
import ChoosenDice from './ChoosenDice'
import Rounds from './Rounds'


const BlackSpace = ({ server, serverId, userId }) => {

  let repeatBonus = [];
  let plusOneBonus = [];
  let diceChose = true;
  let crossBonus = false;
  let numberBonus = false;

  if(server.players.some(player => player.id === userId))
  {
    repeatBonus = server.players.find(player => player.id === userId).repeatBonus;
    plusOneBonus = server.players.find(player => player.id === userId).plusOneBonus;
    diceChose = server.players.find(player => player.id === userId).diceChose;
    crossBonus = server.players.find(player => player.id === userId).crossBonus;
    numberBonus = server.players.find(player => player.id === userId).numberBonus;
  }

  let dice = [];

  if(server.whosTurn)
  {
    dice = server.whosTurn.id === userId ? server.diceChose : [];
  }

  return (
    <div className="BlackSpace" >
      <ChoosenDice dice={dice} />
      <Rounds round={server.round} crossBonus={crossBonus === true} numberBonus={numberBonus} />
      <Bonus serverId={serverId} bonus='Repeat' state={repeatBonus} diceChose={diceChose} />
      <Bonus bonus='PlusOne' state={plusOneBonus} />
    </div>
  )
}

export default BlackSpace