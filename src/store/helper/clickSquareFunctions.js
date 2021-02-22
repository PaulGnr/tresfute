import { checkEndingState } from "./gameFunctions";
import { yellowNumberClicked, orangeMultiplier, yellowBonus, blueBonus, greenBonus, orangeBonus, violetBonus } from './bonus'

export const disableEverything = player => {
  for(let i = 0; i < 11; i++)
  {
    player.yellowGrid[i].disabled = true;
    player.blueGrid[i].disabled = true;
    player.greenGrid[i].disabled = true;
    player.orangeGrid[i].disabled = true;
    player.violetGrid[i].disabled = true;
  }
  player.yellowGrid[11].disabled = true;

  return player
}

const actualizeServer = (server, player, userId) => {
  let players = [
    ...server.players.filter(player => player.id !== userId),
    player
  ]
  
  return {...server, players};
}

const checkNumberBonus = player => {
  if(player.numberBonus)
  {
    let j = 0;
    while(player.orangeGrid[j].value){j++}
    player.orangeGrid[j].disabled = false;
    j = 0;
    while(player.violetGrid[j].value){j++}
    player.violetGrid[j].disabled = false;
  }

  return player
}

const checkCrossBonus = player => {
  if(player.numberBonus)
  {
    for(let j = 0; j < 11; j++)
    {
      player.yellowGrid[j].disabled = player.yellowGrid[j].crossed;
      player.blueGrid[j].disabled = player.blueGrid[j].crossed;
    }
    player.yellowGrid[11].disabled = player.yellowGrid[11].crossed;
    let j = 0;
    while(player.greenGrid[j].crossed){j++}
    player.greenGrid[j].disabled = false;
  }

  return player
}

const crossBonusUsed = player => {
  console.log('crossBonusUsed');

  player.crossBonus = false;
  for(let i = 0; i < 11; i++)
  {
    player.yellowGrid[i].disabled = true;
    player.blueGrid[i].disabled = true;
    player.greenGrid[i].disabled = true;
  }
  player.yellowGrid[11].disabled = true;

  return player
}

const numberBonusUsed = player => {
  console.log('numberBonusUsed')

  player.numberBonus = false;
  for(let i = 0; i < 11; i++)
  {
    player.orangeGrid[i].disabled = true;
    player.violetGrid[i].disabled = true;
  }

  return player
}

export const handleYellowClick = (server, userId, indexClicked) => {
  console.log('handleYellowClick')

  let player = server.players.find(player => player.id === userId);
  
  player.yellowGrid[indexClicked].crossed = true;
  player.squareFilled = true;
  player.whiteDie = null;
  
  player = disableEverything(player);
  
  server = actualizeServer(server, player, userId);

  if(player.crossBonus === 'yellow' || player.crossBonus === true)
  {
    player = crossBonusUsed(player);
  } else if(!player.diceChose)
  {
    server = handleYellowClickWhenNoDieIsChose(server, player, userId, indexClicked);
  } else if(!player.diceOnPlateChose)
  {
    server = diceOnPlateHasBeenChose(server, userId);
  }
  
  player = yellowBonus(player, indexClicked);

  player = checkNumberBonus(player);

  server = actualizeServer(server, player, userId);

  server = checkEndingState(server, userId);

  return server
}

const handleYellowClickWhenNoDieIsChose = (server, player, userId, indexClicked) => {
  console.log('handleYellowClickWhenNoDieIsChose')

  const yellowDice = server.diceInGame.find(die => die.color === 'yellow');
  const whiteDice = server.diceInGame.find(die => die.color === 'white');
  
  if(!yellowDice)
  {
    server = diceInGameHasBeenChose(server, whiteDice, userId);
  } else {
    if(!whiteDice)
    {
      server = diceInGameHasBeenChose(server, yellowDice, userId);
    } else {
      if(yellowDice.number !== yellowNumberClicked(indexClicked))
      {
        server = diceInGameHasBeenChose(server, whiteDice, userId);
      } else if(whiteDice.number !== yellowNumberClicked(indexClicked))
      {
        server = diceInGameHasBeenChose(server, yellowDice, userId);
      } else {
        player.whichOneToChoose = [yellowDice, whiteDice];
      }
    }
  }

  return server;
}

export const handleBlueClick = (server, userId, indexClicked) => {
  console.log('handleBlueClick')

  let player = server.players.find(player => player.id === userId);
  player.blueGrid[indexClicked].crossed = true;
  player.squareFilled = true;
  player.whiteDie = null;

  player = disableEverything(player);
  
  server = actualizeServer(server, player, userId);

  if(player.crossBonus === 'blue' || player.crossBonus === true)
  {
    player = crossBonusUsed(player)
  } else if(!player.diceChose)
  {
    server = handleBlueClickWhenNoDieIsChose(server, player, userId)
  } else if(!player.diceOnPlateChose)
  {
    server = diceOnPlateHasBeenChose(server, userId);
  }

  player = blueBonus(player, indexClicked);

  player = checkNumberBonus(player);

  server = actualizeServer(server, player, userId);

  server = checkEndingState(server, userId);

  return server
}

const handleBlueClickWhenNoDieIsChose = (server, player, userId) => {
  console.log('handleBlueClickWhenNoDieIsChose')

  const blueDice = server.diceInGame.find(die => die.color === 'blue');
  const whiteDice = server.diceInGame.find(die => die.color === 'white');

  if(!blueDice)
  {
    server = diceInGameHasBeenChose(server, whiteDice, userId);
  } else {
    if(!whiteDice)
    {
      server = diceInGameHasBeenChose(server, blueDice, userId);
    } else {
      player.whichOneToChoose = [blueDice, whiteDice];
    }
  }

  server = actualizeServer(server, player, userId);

  return server
}

export const handleGreenClick = (server, userId, indexClicked) => {
  console.log('handleGreenClick')

  let player = server.players.find(player => player.id === userId);
  player.greenGrid[indexClicked].crossed = true;
  player.squareFilled = true;
  player.whiteDie = null;
  
  player = disableEverything(player);

  server = actualizeServer(server, player, userId);

  if(player.crossBonus === true)
  {
    player = crossBonusUsed(player);
  } else if(!player.diceChose)
  {
    server = handleGreenClickWhenNoDieIsChose(server, player, userId, indexClicked);
  } else if(!player.diceOnPlateChose)
  {
    server = diceOnPlateHasBeenChose(server, userId);
  }

  player = greenBonus(player, indexClicked);

  player = checkNumberBonus(player);

  server = actualizeServer(server, player, userId);

  server = checkEndingState(server, userId);

  return server
}

const handleGreenClickWhenNoDieIsChose = (server, player, userId, indexClicked) => {
  console.log('handleGreenClickWhenNoDieIsChose')

  const greenDice = server.diceInGame.find(die => die.color === 'green');
  const whiteDice = server.diceInGame.find(die => die.color === 'white');

  if(!greenDice)
  {
    server = diceInGameHasBeenChose(server, whiteDice, userId);
  } else {
    if(!whiteDice)
    {
      server = diceInGameHasBeenChose(server, greenDice, userId);
    } else {
      if((greenDice.number < (indexClicked % 5) + 1 && indexClicked < 10) || (whiteDice.number === 6 && greenDice.number < 6 && indexClicked === 10))
      {
        server = diceInGameHasBeenChose(server, whiteDice, userId);
      } else if((whiteDice.number < (indexClicked % 5) + 1 && indexClicked < 10) || (greenDice.number === 6 && whiteDice.number < 6 && indexClicked === 10))
      {
        server = diceInGameHasBeenChose(server, greenDice, userId);
      }
      else {
        player.whichOneToChoose = [greenDice, whiteDice];
      }
    }
  }

  server = actualizeServer(server, player, userId);

  return server
}

export const handleOrangeClick = (server, userId, indexClicked) => {
  console.log('handleOrangeClick')

  let player = server.players.find(player => player.id === userId);
  
  player = disableEverything(player);
  
  const multiplier = orangeMultiplier(indexClicked);

  server = actualizeServer(server, player, userId);

  if(player.numberBonus)
  {
    player.orangeGrid[indexClicked].value = 6 * multiplier;
    player = numberBonusUsed(player);
  } else if(player.usedDieForPlusOneBonus)
  {
    player.orangeGrid[indexClicked].value = player.usedDieForPlusOneBonus.number * multiplier;
    player.usedDieForPlusOneBonus = null;
    player.squareFilled = true;
  } else if(!player.diceChose)
  {
    server = handleOrangeClickWhenNoDieIsChose(server, player, userId, indexClicked);
  } else if(!player.diceOnPlateChose)
  {
    if(player.canTakeDiceChose)
    {
      server = handleOrangeClickWhenCanTakeDiceChose(server, player, userId, indexClicked);
    } else {
      server = handleOrangeClickWhenDieOnPlatIsChose(server, player, userId, indexClicked);
    }
  } else if(player.whiteDie !== null)
  {
    player.orangeGrid[indexClicked].value = player.whiteDie.number * multiplier;
    player.squareFilled = true;
    player.whiteDie = null;
  }

  player = orangeBonus(player, indexClicked);

  player = checkCrossBonus(player);

  server = actualizeServer(server, player, userId);

  server = checkEndingState(server, userId);

  return server
}

const handleOrangeClickWhenNoDieIsChose = (server, player, userId, indexClicked) => {
  console.log('handleOrangeClickWhenNoDieIsChose')

  const multiplier = orangeMultiplier(indexClicked);
  const orangeDice = server.diceInGame.find(die => die.color === 'orange');
  const whiteDice = server.diceInGame.find(die => die.color === 'white');
  
  if(!orangeDice)
  {
    server = diceInGameHasBeenChose(server, whiteDice, userId);
    player.orangeGrid[indexClicked].value = whiteDice.number * multiplier;
    player.squareFilled = true;
  } else {
    if(!whiteDice)
    {
      server = diceInGameHasBeenChose(server, orangeDice, userId);
      player.orangeGrid[indexClicked].value = orangeDice.number * multiplier;
      player.squareFilled = true;
    } else {
      player.whichOneToChoose = [orangeDice, whiteDice];
      player.whichGridToChange = 'orange';
    }
  }

  server = actualizeServer(server, player, userId);

  return server
}

const handleOrangeClickWhenDieOnPlatIsChose = (server, player, userId, indexClicked) => {
  console.log('handleOrangeClickWhenDieOnPlatIsChose')

  const multiplier = orangeMultiplier(indexClicked);
  const orangeDice = server.diceOnPlate.find(die => die.color === 'orange');
  const whiteDice = server.diceOnPlate.find(die => die.color === 'white');

  player.diceOnPlateChose = true;

  if(!orangeDice)
  {
    server = diceOnPlateHasBeenChose(server, userId, whiteDice);
    player.orangeGrid[indexClicked].value = whiteDice.number * multiplier;
    player.squareFilled = true;
  } else {
    if(!whiteDice)
    {
      server = diceOnPlateHasBeenChose(server, userId, orangeDice);
      player.orangeGrid[indexClicked].value = orangeDice.number * multiplier;
      player.squareFilled = true;
    } else {
      player.whichOneToChoose = [orangeDice, whiteDice];
      player.whichGridToChange = 'orange';
    }
  }

  server = actualizeServer(server, player, userId);

  return server
}

const handleOrangeClickWhenCanTakeDiceChose = (server, player, userId, indexClicked) => {
  const multiplier = orangeMultiplier(indexClicked);
  const orangeDice = server.diceChose.find(die => die.color === 'orange');
  const whiteDice = server.diceChose.find(die => die.color === 'white');

  player.diceOnPlateChose = true;

  if(!orangeDice)
  {
    server = diceOnPlateHasBeenChose(server, userId, whiteDice);
    player.orangeGrid[indexClicked].value = whiteDice.number * multiplier;
    player.squareFilled = true;
  } else {
    if(!whiteDice)
    {
      server = diceOnPlateHasBeenChose(server, userId, orangeDice);
      player.orangeGrid[indexClicked].value = orangeDice.number * multiplier;
      player.squareFilled = true;
    } else {
      player.whichOneToChoose = [orangeDice, whiteDice];
      player.whichGridToChange = 'orange';
    }
  }

  server = actualizeServer(server, player, userId);

  return server
}

export const handleVioletClick = (server, userId, indexClicked) => {
  console.log('handleVioletClick')

  let player = server.players.find(player => player.id === userId);
  
  if(!player.numberBonus)
  {
    player = disableEverything(player);
  }

  server = actualizeServer(server, player, userId);

  if(player.numberBonus)
  {
    player.violetGrid[indexClicked].value = 6;
    player = numberBonusUsed(player);
  } else if(player.usedDieForPlusOneBonus)
  {
    player.violetGrid[indexClicked].value = player.usedDieForPlusOneBonus.number;
    player.usedDieForPlusOneBonus = null;
    player.squareFilled = true;
  } else if(!player.diceChose)
  {
    server = handleVioletClickWhenNoDieIsChose(server, player, userId, indexClicked);
    
  } else if(!player.diceOnPlateChose)
  {
    if(player.canTakeDiceChose)
    {
      server = handleVioletClickWhenCanTakeDiceChose(server, player, userId, indexClicked)
    } else {
      server = handleVioletClickWhenDieOnPlatIsChose(server, player, userId, indexClicked)
    }
  } else if(player.whiteDie !== null)
  {
    player.violetGrid[indexClicked].value = player.whiteDie.number;
    player.squareFilled = true;
    player.whiteDie = null;
  }

  player = violetBonus(player, indexClicked);

  player = checkCrossBonus(player);

  server = actualizeServer(server, player, userId);

  server = checkEndingState(server, userId);

  return server
}

const handleVioletClickWhenNoDieIsChose = (server, player, userId, indexClicked) => {
  console.log('handleVioletClickWhenNoDieIsChose')

  const violetDice = server.diceInGame.find(die => die.color === 'violet');
  const whiteDice = server.diceInGame.find(die => die.color === 'white');
  
  if(!violetDice)
  {
    server = diceInGameHasBeenChose(server, whiteDice, userId);
    player.violetGrid[indexClicked].value = whiteDice.number;
    player.squareFilled = true;
  } else {
    if(!whiteDice)
    {
      server = diceInGameHasBeenChose(server, violetDice, userId);
      player.violetGrid[indexClicked].value = violetDice.number;
      player.squareFilled = true;
    } else {
      if(indexClicked === 0)
      {
        player.whichOneToChoose = [violetDice, whiteDice];
        player.whichGridToChange = 'violet';
      } else {
        if(player.violetGrid[indexClicked-1].value === 6)
        {
          player.whichOneToChoose = [violetDice, whiteDice];
          player.whichGridToChange = 'violet';
        } else {
          if(violetDice.number <= player.violetGrid[indexClicked-1].value)
          {
            server = diceInGameHasBeenChose(server, whiteDice, userId);
            player.violetGrid[indexClicked].value = whiteDice.number;
            player.squareFilled = true;
          } else if(whiteDice.number <= player.violetGrid[indexClicked-1].value)
          {
            server = diceInGameHasBeenChose(server, violetDice, userId);
            player.violetGrid[indexClicked].value = violetDice.number;
            player.squareFilled = true;
          } else {
            player.whichOneToChoose = [violetDice, whiteDice];
            player.whichGridToChange = 'violet';
          }
        }
      }
    }
  }

  server = actualizeServer(server, player, userId);

  return server
}

const handleVioletClickWhenDieOnPlatIsChose = (server, player, userId, indexClicked) => {
  console.log('handleVioletClickWhenDieOnPlatIsChose')

  const violetDice = server.diceOnPlate.find(die => die.color === 'violet');
  const whiteDice = server.diceOnPlate.find(die => die.color === 'white');

  player.diceOnPlateChose = true;

  server = violetDiceLogic(server, player, userId, indexClicked, violetDice, whiteDice);

  return server
}

const handleVioletClickWhenCanTakeDiceChose = (server, player, userId, indexClicked) => {
  const violetDice = server.diceChose.find(die => die.color === 'violet');
  const whiteDice = server.diceChose.find(die => die.color === 'white');

  player.diceOnPlateChose = true;

  server = violetDiceLogic(server, player, userId, indexClicked, violetDice, whiteDice);

  return server
}

const violetDiceLogic = (server, player, userId, indexClicked, violetDice, whiteDice) => {
  if(!violetDice)
  {
    server = diceOnPlateHasBeenChose(server, userId, whiteDice);
    player.violetGrid[indexClicked].value = whiteDice.number;
    player.squareFilled = true;
  } else {
    if(!whiteDice)
    {
      server = diceOnPlateHasBeenChose(server, userId, violetDice);
      player.violetGrid[indexClicked].value = violetDice.number;
      player.squareFilled = true;
    } else {
      if(indexClicked === 0)
      {
        player.whichOneToChoose = [violetDice, whiteDice];
        player.whichGridToChange = 'violet';
      } else {
        if(player.violetGrid[indexClicked-1].value === 6)
        {
          player.whichOneToChoose = [violetDice, whiteDice];
          player.whichGridToChange = 'violet';
        } else {
          if(violetDice.number <= player.violetGrid[indexClicked-1].value)
          {
            server = diceOnPlateHasBeenChose(server, userId, whiteDice);
            player.violetGrid[indexClicked].value = whiteDice.number;
            player.squareFilled = true;
          } else if(whiteDice.number <= player.violetGrid[indexClicked-1].value)
          {
            server = diceOnPlateHasBeenChose(server, userId, violetDice);
            player.violetGrid[indexClicked].value = violetDice.number;
            player.squareFilled = true;
          } else {
            player.whichOneToChoose = [violetDice, whiteDice];
            player.whichGridToChange = 'violet';
          }
        }
      }
    }
  }

  server = actualizeServer(server, player, userId);

  return server
}

export const diceInGameHasBeenChose = (server, dieChose, userId) => {
  console.log('diceInGameHasBeenChose')

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

  if(currentPlayer.whichGridToChange === 'orange')
  {
    currentPlayer = orangeGridToChange(dieChose, currentPlayer);
  }
  if(currentPlayer.whichGridToChange === 'violet')
  {
    currentPlayer = violetGridToChange(dieChose, currentPlayer);
  }

  server = {
    players: [...newStatePlayers.filter(player => player.id !== userId), currentPlayer],
    ...server,
    diceInGame: newDiceInGame,
    diceOnPlate: newDiceOnPlate,
    diceChose: newDiceChose
  }

  if(currentPlayer.whichOneToChoose.length > 0)
  {
    currentPlayer.whichOneToChoose = [];
    server = checkEndingState(server, userId);
    server = actualizeServer(server, currentPlayer, userId)
  }


  return server
}

export const diceOnPlateHasBeenChose = (server, userId, dieChose = {color: ''}) => {
  console.log('diceOnPlateHasBeenChose')

  let players = server.players;
  let currentPlayer = players.find(player => player.id === userId)
  currentPlayer.diceOnPlateChose = true;
  currentPlayer.canTakeDiceChose = false;

  if(currentPlayer.whichGridToChange === 'orange')
  {
    currentPlayer = orangeGridToChange(dieChose, currentPlayer);
  }
  if(currentPlayer.whichGridToChange === 'violet')
  {
    currentPlayer = violetGridToChange(dieChose, currentPlayer);
  }

  if(currentPlayer.whichOneToChoose.length > 0)
  {
    currentPlayer.whichOneToChoose = [];
    server = checkEndingState(server, userId)
  }

  server = actualizeServer(server, currentPlayer, userId)

  return server
}

export const orangeGridToChange = (dieChose, player) => {

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
  player.squareFilled = true;

  player.whichGridToChange = '';

  return player;
}

export const violetGridToChange = (dieChose, player) => {

  let firstEmptySquare = 0;
  while(player.violetGrid[firstEmptySquare].value){firstEmptySquare++}

  if(firstEmptySquare > 0)
  {
    if(player.violetGrid[firstEmptySquare-1].value < dieChose.number || player.violetGrid[firstEmptySquare-1].value === 6)
    {
      player.violetGrid[firstEmptySquare].value = dieChose.number;
    }
  } else {
    player.violetGrid[firstEmptySquare].value = dieChose.number;
  }

  player.squareFilled = true;
  
  player.whichGridToChange = '';

  return player;
}