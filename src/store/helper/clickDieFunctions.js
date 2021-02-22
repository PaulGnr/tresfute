import { checkEndingState } from "./gameFunctions";
import { disableEverything } from './clickSquareFunctions'
import { yellowNumberClicked, blueBonus, greenBonus, orangeBonus, violetBonus } from "./bonus";
import { yellowNumberToAble, blueNumberToAble, greenNumberToAble, orangeNumberToAble, violetNumberToAble } from './numberToAble'

export const diceInGameHasBeenClicked = (server, dieChose, userId) => {
  console.log('diceInGameHasBeenClicked')

  let newDiceInGame = server.diceInGame.filter(dieInGame => {
    return dieInGame.number >= dieChose.number && dieInGame.color !== dieChose.color
  });
  let newDiceOnPlate = [...server.diceOnPlate, ...server.diceInGame.filter(dieInGame => dieInGame.number < dieChose.number)];
  let newDiceChose = [...server.diceChose, dieChose];

  let newStatePlayers = server.players;
  let currentPlayer = newStatePlayers.find(player => player.id === userId)
  if(currentPlayer.launchRemaining === 0)
  {
    newDiceOnPlate = [...newDiceOnPlate, ...newDiceInGame];
    newDiceInGame = []
  }
  currentPlayer.diceChose = true;
  currentPlayer = disableEverything(currentPlayer);

  const allDice = [...newDiceChose, ...newDiceInGame, ...newDiceOnPlate];

  if(dieChose.color === 'yellow')
  {
    currentPlayer = yellowDiceHasBeenClicked(dieChose, currentPlayer);
  }
  if(dieChose.color === 'blue')
  {
    currentPlayer = blueDiceHasBeenClicked(dieChose, currentPlayer, allDice);
  }
  if(dieChose.color === 'green')
  {
    currentPlayer = greenDiceHasBeenClicked(dieChose, currentPlayer);
  }
  if(dieChose.color === 'orange')
  {
    currentPlayer = orangeDiceHasBeenClicked(dieChose, currentPlayer);
  }
  if(dieChose.color === 'violet')
  {
    currentPlayer = violetDiceHasBeenClicked(dieChose, currentPlayer);
  }
  if(dieChose.color === 'white')
  {
    currentPlayer = whiteDiceHasBeenClicked(dieChose, currentPlayer, allDice);
  }

  newStatePlayers = [
    ...newStatePlayers.filter(player => player.id !== userId),
    currentPlayer
  ]

  server = {
    ...server,
    diceInGame: newDiceInGame,
    diceOnPlate: newDiceOnPlate,
    diceChose: newDiceChose,
    players: newStatePlayers
  }

  server = checkEndingState(server, userId);

  return server 
}

export const diceOnPlateHasBeenClicked = (server, dieChose, userId) => {
  console.log('diceOnPlateHasBeenClicked')

  let players = server.players;
  let currentPlayer = players.find(player => player.id === userId)
  currentPlayer.whichOneToChoose = [];
  currentPlayer.diceOnPlateChose = true;

  currentPlayer = disableEverything(currentPlayer);

  const allDice = [...server.diceChose, ...server.diceOnPlate];

  if(dieChose.color === 'yellow')
  {
    currentPlayer = yellowDiceHasBeenClicked(dieChose, currentPlayer);
  }
  if(dieChose.color === 'blue')
  {
    currentPlayer = blueDiceHasBeenClicked(dieChose, currentPlayer, allDice);
  }
  if(dieChose.color === 'green')
  {
    currentPlayer = greenDiceHasBeenClicked(dieChose, currentPlayer);
  }
  if(dieChose.color === 'orange')
  {
    currentPlayer = orangeDiceHasBeenClicked(dieChose, currentPlayer);
  }
  if(dieChose.color === 'violet')
  {
    currentPlayer = violetDiceHasBeenClicked(dieChose, currentPlayer);
  }
  if(dieChose.color === 'white')
  {
    currentPlayer = whiteDiceHasBeenClicked(dieChose, currentPlayer, allDice);
  }

  players = [...players.filter(player => player.id !== userId), currentPlayer];

  server = {
    players,
    ...server
  }

  server = checkEndingState(server, userId);

  return server
}

export const diceChoseHasBeenClicked = (server, dieChose, userId) => {
  console.log('diceOnPlateHasBeenClicked')

  let players = server.players;
  let currentPlayer = players.find(player => player.id === userId)
  currentPlayer.whichOneToChoose = [];
  currentPlayer.diceOnPlateChose = true;
  currentPlayer.canTakeDiceChose = false;

  currentPlayer = disableEverything(currentPlayer);

  const allDice = [...server.diceChose, ...server.diceOnPlate];

  if(dieChose.color === 'yellow')
  {
    currentPlayer = yellowDiceHasBeenClicked(dieChose, currentPlayer);
  }
  if(dieChose.color === 'blue')
  {
    currentPlayer = blueDiceHasBeenClicked(dieChose, currentPlayer, allDice);
  }
  if(dieChose.color === 'green')
  {
    currentPlayer = greenDiceHasBeenClicked(dieChose, currentPlayer);
  }
  if(dieChose.color === 'orange')
  {
    currentPlayer = orangeDiceHasBeenClicked(dieChose, currentPlayer);
  }
  if(dieChose.color === 'violet')
  {
    currentPlayer = violetDiceHasBeenClicked(dieChose, currentPlayer);
  }
  if(dieChose.color === 'white')
  {
    currentPlayer = whiteDiceHasBeenClicked(dieChose, currentPlayer, allDice);
  }

  players = [...players.filter(player => player.id !== userId), currentPlayer];

  server = {
    players,
    ...server
  }

  server = checkEndingState(server, userId);

  return server
}

const yellowDiceHasBeenClicked = (dieChose, player) => {
  for(let i = 0; i < 12; i++)
  {
    if(dieChose.number === yellowNumberClicked(i))
    {
      player.yellowGrid[i].disabled = player.yellowGrid[i].crossed;
    }
  }

  const yellowAbled = player.yellowGrid.filter(grid => !grid.disabled);

  if(yellowAbled.length === 0)
  {
    player.squareFilled = true;
  }

  return player
}

const blueDiceHasBeenClicked = (dieChose, player, allDice) => {
  const whiteDie = allDice.find(die => die.color === 'white');

  if(!player.blueGrid[whiteDie.number + dieChose.number - 2].crossed)
  {
    player.blueGrid[whiteDie.number + dieChose.number - 2].crossed = true;
    player = blueBonus(player, whiteDie.number + dieChose.number - 2);
  }

  player.squareFilled = true;

  return player
}

const greenDiceHasBeenClicked = (dieChose, player) => {
  let firstEmptySquare = 0;
  while(player.greenGrid[firstEmptySquare].crossed){firstEmptySquare++}
  if((dieChose.number >= (firstEmptySquare % 5) + 1 && firstEmptySquare < 10) || dieChose.number === 6)
  {
    player.greenGrid[firstEmptySquare].crossed = true;
    player = greenBonus(player, firstEmptySquare);
  }

  player.squareFilled = true;
  
  return player
}

const orangeDiceHasBeenClicked = (dieChose, player) => {

  let firstEmptySquare = 0;
  while(player.orangeGrid[firstEmptySquare].value){firstEmptySquare++}

  player.orangeGrid[firstEmptySquare].disabled = true;

  let multiplier = 1;
  if(firstEmptySquare === 3 || firstEmptySquare === 6 || firstEmptySquare === 8)
  {
    multiplier = 2;
  } else if(firstEmptySquare === 10)
  {
    multiplier = 3;
  }
  player.orangeGrid[firstEmptySquare].value = dieChose.number * multiplier;
  player = orangeBonus(player, firstEmptySquare);

  player.squareFilled = true;

  player.whichGridToChange = '';

  return player;
}

const violetDiceHasBeenClicked = (dieChose, player) => {

  let firstEmptySquare = 0;
  while(player.violetGrid[firstEmptySquare].value){firstEmptySquare++}

  if(firstEmptySquare > 0)
  {
    if(player.violetGrid[firstEmptySquare-1].value < dieChose.number || player.violetGrid[firstEmptySquare-1].value === 6)
    {
      player.violetGrid[firstEmptySquare].value = dieChose.number;
      player = violetBonus(player, firstEmptySquare);
    }
  } else {
    player.violetGrid[firstEmptySquare].value = dieChose.number;
    player = violetBonus(player, firstEmptySquare);
  }

  player.squareFilled = true;
  
  player.whichGridToChange = '';

  return player;
}

const whiteDiceHasBeenClicked = (dieChose, player, allDice) => {
  player.blueGrid = blueNumberToAble(player.blueGrid, [dieChose], allDice);
  player.yellowGrid = yellowNumberToAble(player.yellowGrid, [dieChose]);
  player.greenGrid = greenNumberToAble(player.greenGrid, [dieChose]);
  player.orangeGrid = orangeNumberToAble(player.orangeGrid, [dieChose]);
  player.violetGrid = violetNumberToAble(player.violetGrid, [dieChose]);

  player.whiteDie = dieChose;

  return player
}

export const dicePlusOneHasBeenClicked = (server, dieChose, userId) => {

  let players = server.players;
  let currentPlayer = players.find(player => player.id === userId);

  currentPlayer.diceForPlusOne = currentPlayer.diceForPlusOne.filter(die => die.color !== dieChose.color);

  let i = 0;
  while(currentPlayer.plusOneBonus[i] !== 'yes'){i++}
  currentPlayer.plusOneBonus[i] = 'used';

  currentPlayer.wantToUsePlusOneBonus = false;
  currentPlayer.squareFilled = false;

  currentPlayer = disableEverything(currentPlayer);

  const allDice = [...server.diceChose, ...server.diceOnPlate];

  if(dieChose.color === 'yellow')
  {
    currentPlayer = yellowDiceHasBeenClicked(dieChose, currentPlayer);
  }
  if(dieChose.color === 'blue')
  {
    currentPlayer = blueDiceHasBeenClicked(dieChose, currentPlayer, allDice);
  }
  if(dieChose.color === 'green')
  {
    currentPlayer = greenDiceHasBeenClicked(dieChose, currentPlayer);
  }
  if(dieChose.color === 'orange')
  {
    currentPlayer = orangeDiceHasBeenClicked(dieChose, currentPlayer);
  }
  if(dieChose.color === 'violet')
  {
    currentPlayer = violetDiceHasBeenClicked(dieChose, currentPlayer);
  }
  if(dieChose.color === 'white')
  {
    currentPlayer = whiteDiceHasBeenClicked(dieChose, currentPlayer, allDice);
  }

  players = [...players.filter(player => player.id !== userId), currentPlayer];

  server = {
    players,
    ...server
  }

  server = checkEndingState(server, userId);

  return server
}