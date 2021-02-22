import { blueNumberToAble, greenNumberToAble, orangeNumberToAble, violetNumberToAble, yellowNumberToAble } from "./numberToAble";
import { calcScore } from './calcScore'

export const starterDataForServer = {
  diceInGame: [{number: 1, color: 'yellow'}, 
              {number: 1, color: 'blue'}, 
              {number: 1, color: 'white'}, 
              {number: 1, color: 'green'}, 
              {number: 1, color: 'orange'}, 
              {number: 1, color: 'violet'}],
  diceOnPlate: [],
  diceChose: [],
  round: null,
  whosTurn: null,
  turnEnded: false,
  players: [],
  orderedPlayers: [],
  complete: false,
  hasStarted: false,
  endGame: false,
  createdAt: new Date()
}

export const starterDataForPlayer = {
  isReady: false,
  score: {},
  launchRemaining: 0,
  diceChose: true,
  squareFilled: true,
  diceOnPlateChose: true,
  repeatBonus: ['no', 'no', 'no', 'no','no','no','no'],
  plusOneBonus: ['no', 'no', 'no', 'no','no','no','no'],
  crossBonus: false,
  numberBonus: false,
  fox: 0,
  whiteDie: null,
  whichOneToChoose: [],
  whichGridToChange: '',
  canTakeDiceChose: false,
  wantToUsePlusOneBonus: false,
  saidNoToPlusOne: true,
  diceForPlusOne: [],
  yellowGrid: [{crossed: false, disabled: true}, 
              {crossed: false, disabled: true}, 
              {crossed: false, disabled: true},  
              {crossed: false, disabled: true}, 
              {crossed: false, disabled: true},  
              {crossed: false, disabled: true}, 
              {crossed: false, disabled: true},  
              {crossed: false, disabled: true}, 
              {crossed: false, disabled: true},  
              {crossed: false, disabled: true}, 
              {crossed: false, disabled: true}, 
              {crossed: false, disabled: true}],
  blueGrid: [{crossed: false, disabled: true}, 
            {crossed: false, disabled: true}, 
            {crossed: false, disabled: true}, 
            {crossed: false, disabled: true}, 
            {crossed: false, disabled: true}, 
            {crossed: false, disabled: true}, 
            {crossed: false, disabled: true}, 
            {crossed: false, disabled: true}, 
            {crossed: false, disabled: true}, 
            {crossed: false, disabled: true}, 
            {crossed: false, disabled: true}],
  greenGrid: [{crossed: false, disabled: true}, 
              {crossed: false, disabled: true}, 
              {crossed: false, disabled: true}, 
              {crossed: false, disabled: true}, 
              {crossed: false, disabled: true}, 
              {crossed: false, disabled: true}, 
              {crossed: false, disabled: true}, 
              {crossed: false, disabled: true}, 
              {crossed: false, disabled: true}, 
              {crossed: false, disabled: true}, 
              {crossed: false, disabled: true}],
  orangeGrid: [{value: null, disabled: true}, 
              {value: null, disabled: true}, 
              {value: null, disabled: true}, 
              {value: null, disabled: true}, 
              {value: null, disabled: true}, 
              {value: null, disabled: true}, 
              {value: null, disabled: true}, 
              {value: null, disabled: true}, 
              {value: null, disabled: true}, 
              {value: null, disabled: true}, 
              {value: null, disabled: true}],
  violetGrid: [{value: null, disabled: true}, 
              {value: null, disabled: true}, 
              {value: null, disabled: true}, 
              {value: null, disabled: true}, 
              {value: null, disabled: true}, 
              {value: null, disabled: true}, 
              {value: null, disabled: true}, 
              {value: null, disabled: true}, 
              {value: null, disabled: true}, 
              {value: null, disabled: true}, 
              {value: null, disabled: true}],
}

export const playerIsReadyAction = (data, playerId, isReady) => {
  let players = data.players;
  let playerReady = players.find(player => player.id === playerId);
  playerReady.isReady = isReady;
  players = players.filter(player => player.id !== playerId);
  players = [...players, playerReady];

  let newData = {
    players,
    hasStarted: false
  }
  if(players.every(player => player.isReady))
  {
    newData = beginGame(newData.players)
  }

  return newData
}

export const beginGame = players => {
  let playersOrdered = [];
  let originalPlayers = players;
  const playersLength = players.length

  for(let i = 0; i < playersLength; i++)
  {
    const randomPlayer = Math.ceil(Math.random() * (players.length - 1));
    playersOrdered = [...playersOrdered, {name: players[randomPlayer].name, id: players[randomPlayer].id}]
    players = players.filter((player, index) => index !== randomPlayer)
  }

  originalPlayers.find(player => player.id === playersOrdered[0].id).launchRemaining = 3;

  let data = {
    hasStarted: true,
    round: 0,
    orderedPlayers: playersOrdered,
    players: originalPlayers,
    whosTurn: {name: playersOrdered[0].name, id: playersOrdered[0].id}
  }
  
  data = newRound(data);

  return data
}

export const newRound = server => {
  console.log('newRound')
  server.round += 1;

  for(let i = 0; i < server.players.length; i++)
  {
    if(server.round === 1)
    {
      server.players[i].repeatBonus[0] = 'yes';
    } else if(server.round === 2)
    {
      let j = 0;
      while(server.players[i].plusOneBonus[j] !== 'no'){j++}
      server.players[i].plusOneBonus[j] = 'yes'
    } else if(server.round === 3)
    {
      let j = 0;
      while(server.players[i].repeatBonus[j] !== 'no'){j++}
      server.players[i].repeatBonus[j] = 'yes'
    } else if(server.round === 4)
    {
      server.players[i].crossBonus = true;
      server.players[i].numberBonus = true;
      for(let j = 0; j < 11; j++)
      {
        server.players[i].yellowGrid[j].disabled = server.players[i].yellowGrid[j].crossed;
        server.players[i].blueGrid[j].disabled = server.players[i].blueGrid[j].crossed;
      }
      server.players[i].yellowGrid[11].disabled = server.players[i].yellowGrid[11].crossed;
      let j = 0;
      while(server.players[i].greenGrid[j].crossed){j++}
      server.players[i].greenGrid[j].disabled = false;
      j = 0;
      while(server.players[i].orangeGrid[j].value){j++}
      server.players[i].orangeGrid[j].disabled = false;
      j = 0;
      while(server.players[i].violetGrid[j].value){j++}
      server.players[i].violetGrid[j].disabled = false;
    } else if(server.round === 5 && server.players.length === 4)
    {
      server.endGame = true;
      server.players.map(player => {
        player = calcScore(player);
        return player
      });
    } else if(server.round === 6 && server.players.length === 3)
    {
      server.endGame = true;
      server.players.map(player => {
        player = calcScore(player);
        return player
      });
    } else if(server.round === 7 && server.players.length < 3)
    {
      server.endGame = true;
      server.players.map(player => {
        player = calcScore(player);
        console.log(player.score)
        return player
      });
    }
  }

  return server
}

export const diceLauncherAction = (data, userId) => {
  const newDiceInGame = data.diceInGame.map(die => {
    return {
      ...die,
      number: Math.ceil(Math.random() * 6)
    }
  })
  const allDice = [...newDiceInGame, ...data.diceOnPlate, ...data.diceChose]
  let newStatePlayer = data.players.find(player => player.id === userId);
  newStatePlayer.diceChose = false;
  newStatePlayer.squareFilled = false;
  newStatePlayer.launchRemaining--;
  
  newStatePlayer.blueGrid = blueNumberToAble(newStatePlayer.blueGrid, newDiceInGame, allDice);
  newStatePlayer.yellowGrid = yellowNumberToAble(newStatePlayer.yellowGrid, newDiceInGame);
  newStatePlayer.greenGrid = greenNumberToAble(newStatePlayer.greenGrid, newDiceInGame);
  newStatePlayer.orangeGrid = orangeNumberToAble(newStatePlayer.orangeGrid, newDiceInGame);
  newStatePlayer.violetGrid = violetNumberToAble(newStatePlayer.violetGrid, newDiceInGame);

  let newStatePlayers = data.players.filter(player => player.id !== userId);
  newStatePlayers = [...newStatePlayers, newStatePlayer]

  return {
    ...data,
    diceInGame: newDiceInGame,
    players: newStatePlayers
  }
}

export const checkEndingState = (server, userId) => {
  console.log('checkEndingState');

  if(ifEndOfTurn(server, userId))
  {
    server = endOfTurn(server, userId);
  }

  if(server.players.every(player => player.diceOnPlateChose) && 
    server.players.every(player => player.squareFilled) &&
    server.players.every(player => !player.crossBonus) &&
    server.turnEnded  
  )
  {
    server = activatePlusOne(server)
  }

  if(server.players.every(player => !player.wantToUsePlusOneBonus) && 
    server.players.every(player => player.diceOnPlateChose) && 
    server.players.every(player => player.squareFilled) && 
    server.players.every(player => !player.crossBonus) &&
    server.turnEnded)
  {
    server = changingTurn(server);
  }

  return server
}

const ifEndOfTurn = (server, userId) => {
  if(server.diceInGame.length === 0 && 
    server.players.every(player => player.squareFilled) && 
    server.players.every(player => !player.crossBonus) &&
    server.players.every(player => player.diceChose) &&
    userId === server.whosTurn.id &&
    !server.turnEnded
  ) 
  {
    return true
  }
  return false
}

export const endOfTurn = (server, userId) => {
  console.log('endOfTurn');

  server.turnEnded = true;
  let otherPlayers = server.players.filter(player => player.id !== userId);
  let currentPlayer = server.players.find(player => player.id === userId);

  if(otherPlayers.length > 0)
  {
    for(let i = 0; i < otherPlayers.length; i++)
    {
      otherPlayers[i].diceOnPlateChose = false;
      otherPlayers[i].squareFilled = false;
      otherPlayers[i].blueGrid = blueNumberToAble(otherPlayers[i].blueGrid, server.diceOnPlate, [...server.diceOnPlate, ...server.diceChose]);
      otherPlayers[i].yellowGrid = yellowNumberToAble(otherPlayers[i].yellowGrid, server.diceOnPlate);
      otherPlayers[i].greenGrid = greenNumberToAble(otherPlayers[i].greenGrid, server.diceOnPlate);
      otherPlayers[i].orangeGrid = orangeNumberToAble(otherPlayers[i].orangeGrid, server.diceOnPlate);
      otherPlayers[i].violetGrid = violetNumberToAble(otherPlayers[i].violetGrid, server.diceOnPlate);
      if(everythingIsDisabled(otherPlayers[i]))
      {
        otherPlayers[i].canTakeDiceChose = true;
        otherPlayers[i].blueGrid = blueNumberToAble(otherPlayers[i].blueGrid, server.diceChose, [...server.diceOnPlate, ...server.diceChose]);
        otherPlayers[i].yellowGrid = yellowNumberToAble(otherPlayers[i].yellowGrid, server.diceChose);
        otherPlayers[i].greenGrid = greenNumberToAble(otherPlayers[i].greenGrid, server.diceChose);
        otherPlayers[i].orangeGrid = orangeNumberToAble(otherPlayers[i].orangeGrid, server.diceChose);
        otherPlayers[i].violetGrid = violetNumberToAble(otherPlayers[i].violetGrid, server.diceChose);
      }
    }
  }

  let players = [...otherPlayers, currentPlayer];

  players.map(player => {
    player.diceForPlusOne = [...server.diceChose, ...server.diceOnPlate];
    player.saidNoToPlusOne = false;
    return player
  })

  return {
    ...server,
    players
  }
}

const everythingIsDisabled = player => {
  if(player.yellowGrid.some(cell => !cell.disabled))
  {
    return false
  }
  if(player.blueGrid.some(cell => !cell.disabled))
  {
    return false
  }
  if(player.greenGrid.some(cell => !cell.disabled))
  {
    return false
  }
  if(player.orangeGrid.some(cell => !cell.disabled))
  {
    return false
  }
  if(player.violetGrid.some(cell => !cell.disabled))
  {
    return false
  }
  return true
}

export const activatePlusOne = server => {
  console.log('activatePlusOne')

  server.players.map(player => {
    if(player.plusOneBonus.some(bonus => bonus === 'yes') && !player.saidNoToPlusOne)
    {
      player.wantToUsePlusOneBonus = true;
    }
    return player
  })

  return server
}

export const changingTurn = server => {
  console.log('changingTurn')

  const index = server.orderedPlayers.findIndex(player => player.id === server.whosTurn.id);

  if(index === server.orderedPlayers.length - 1)
  {
    server.whosTurn = server.orderedPlayers[0];
    server = newRound(server);
  } else {
    server.whosTurn = server.orderedPlayers[index+1];
  }
  server.diceChose = [];
  server.diceOnPlate = [];
  server.diceInGame = [{number: 1, color: 'yellow'}, 
                      {number: 1, color: 'blue'}, 
                      {number: 1, color: 'white'}, 
                      {number: 1, color: 'green'}, 
                      {number: 1, color: 'orange'}, 
                      {number: 1, color: 'violet'}]
  server.players.find(player => player.id === server.whosTurn.id).launchRemaining = 3;
  server.turnEnded = false;

  return server
}