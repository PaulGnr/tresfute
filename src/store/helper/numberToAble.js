export const yellowNumberToAble = (yellowGrid, diceInGame) => {
  for(let i = 0; i < 12; i++)
  {
    yellowGrid[i].disabled = true;
  }

  if(diceInGame.some(die => die.color === 'yellow'))
  {
    switch(diceInGame.find(die => die.color === 'yellow').number)
    {
      case 1:
        yellowGrid[4].disabled = yellowGrid[4].crossed;
        yellowGrid[6].disabled = yellowGrid[6].crossed;
        break;
      case 2:
        yellowGrid[3].disabled = yellowGrid[3].crossed;
        yellowGrid[7].disabled = yellowGrid[7].crossed;
        break;
      case 3:
        yellowGrid[0].disabled = yellowGrid[0].crossed;
        yellowGrid[9].disabled = yellowGrid[9].crossed;
        break;
      case 4:
        yellowGrid[8].disabled = yellowGrid[8].crossed;
        yellowGrid[10].disabled = yellowGrid[10].crossed;
        break;
      case 5:
        yellowGrid[2].disabled = yellowGrid[2].crossed;
        yellowGrid[5].disabled = yellowGrid[5].crossed;
        break;
      case 6:
        yellowGrid[1].disabled = yellowGrid[1].crossed;
        yellowGrid[11].disabled = yellowGrid[11].crossed;
        
        break;
      default:
        return yellowGrid;
    }
  }

  if(diceInGame.some(die => die.color === 'white'))
  {
    switch(diceInGame.find(die => die.color === 'white').number)
    {
      case 1:
        yellowGrid[4].disabled = yellowGrid[4].crossed;
        yellowGrid[6].disabled = yellowGrid[6].crossed;
        break;
      case 2:
        yellowGrid[3].disabled = yellowGrid[3].crossed;
        yellowGrid[7].disabled = yellowGrid[7].crossed;
        break;
      case 3:
        yellowGrid[0].disabled = yellowGrid[0].crossed;
        yellowGrid[9].disabled = yellowGrid[9].crossed;
        break;
      case 4:
        yellowGrid[8].disabled = yellowGrid[8].crossed;
        yellowGrid[10].disabled = yellowGrid[10].crossed;
        break;
      case 5:
        yellowGrid[2].disabled = yellowGrid[2].crossed;
        yellowGrid[5].disabled = yellowGrid[5].crossed;
        break;
      case 6:
        yellowGrid[1].disabled = yellowGrid[1].crossed;
        yellowGrid[11].disabled = yellowGrid[11].crossed;
        
        break;
      default:
        return yellowGrid;
    }
  }

  return yellowGrid;
}

export const blueNumberToAble = (blueGrid, diceInGame, allDice) => {
  for(let i = 0; i < 11; i++)
  {
    blueGrid[i].disabled = true;
  }

  const sumBlueAndWhite = sumDiceBlueAndWhite(allDice);
  blueGrid[sumBlueAndWhite - 2].disabled = blueNumberIsDisabled(sumBlueAndWhite, diceInGame, blueGrid);

  return blueGrid
}

const sumDiceBlueAndWhite = dice => {
  const diceBlue = dice.find(die => die.color === 'blue').number;
  const diceWhite = dice.find(die => die.color === 'white').number;
  const sum = diceBlue + diceWhite;
  return sum;
}

const blueNumberIsDisabled = (sum, diceInGame, blueGrid) => {
  if(diceInGame.some(die => die.color === 'blue' || die.color === 'white'))
  {
    return blueGrid[sum - 2].crossed;
  }
  return true
}

export const greenNumberToAble = (greenGrid, diceInGame) => {
  for(let i = 0; i < 11; i++)
  {
    greenGrid[i].disabled = true;
  }

  if(!greenGrid.every(cell => cell.crossed))
  {
    let indexToAble = 0;
    while(greenGrid[indexToAble].crossed){indexToAble++}
  
    if(diceInGame.some(die => die.color === 'green'))
    {
      let whiteDice = 0;
      if(diceInGame.some(die => die.color === 'white'))
      {
        whiteDice = diceInGame.find(die => die.color === 'white').number;
      }
      const greenDice = diceInGame.find(die => die.color === 'green').number;
      
      if(indexToAble === 0 || indexToAble === 5)
      {
        greenGrid[indexToAble].disabled = false;
      } else 
      if(indexToAble === 1 || indexToAble === 6)
      {
        greenGrid[indexToAble].disabled = greenDice < 2 && whiteDice < 2;
      } else 
      if(indexToAble === 2 || indexToAble === 7)
      {
        greenGrid[indexToAble].disabled = greenDice < 3 && whiteDice < 3;
      } else 
      if(indexToAble === 3 || indexToAble === 8)
      {
        greenGrid[indexToAble].disabled = greenDice < 4 && whiteDice < 4;
      } else 
      if(indexToAble === 4 || indexToAble === 9)
      {
        greenGrid[indexToAble].disabled = greenDice < 5 && whiteDice < 5;
      } else if(indexToAble === 10)
      {
        greenGrid[indexToAble].disabled = greenDice < 6 && whiteDice < 6;
      }
    }
  
    if(diceInGame.some(die => die.color === 'white') && !diceInGame.some(die => die.color === 'green'))
    {
      const whiteDice = diceInGame.find(die => die.color === 'white').number;
  
      if(indexToAble === 0 || indexToAble === 5)
      {
        greenGrid[indexToAble].disabled = false;
      } else 
      if(indexToAble === 1 || indexToAble === 6)
      {
        greenGrid[indexToAble].disabled = whiteDice < 2 ;
      } else 
      if(indexToAble === 2 || indexToAble === 7)
      {
        greenGrid[indexToAble].disabled = whiteDice < 3;
      } else 
      if(indexToAble === 3 || indexToAble === 8)
      {
        greenGrid[indexToAble].disabled = whiteDice < 4;
      } else 
      if(indexToAble === 4 || indexToAble === 9)
      {
        greenGrid[indexToAble].disabled = whiteDice < 5;
      } else if(indexToAble === 10)
      {
        greenGrid[indexToAble].disabled = whiteDice < 6;
      }
    }
  }

  return greenGrid
}

export const orangeNumberToAble = (orangeGrid, diceInGame) => {
  for(let i = 0; i < 11; i++)
  {
    orangeGrid[i].disabled = true;
  }

  if(diceInGame.some(die => die.color === 'orange' || die.color === 'white') && !orangeGrid.every(cell => cell.value !== null))
  {
    let indexToAble = 0;
    while(orangeGrid[indexToAble].value){indexToAble++}
    orangeGrid[indexToAble].disabled = false;
  }

  return orangeGrid;
}

export const violetNumberToAble = (violetGrid, diceInGame) => {
  for(let i = 0; i < 11; i++)
  {
    violetGrid[i].disabled = true;
  }

  if(!violetGrid.every(cell => cell.value !== null))
  {
    if(diceInGame.some(die => die.color === 'violet'))
    {
      const violetDice = diceInGame.find(die => die.color === 'violet').number;
      let indexToAble = 0;
      while(violetGrid[indexToAble].value){indexToAble++}
      if(indexToAble !== 0)
      {
        if(violetGrid[indexToAble-1].value === 6 || violetDice > violetGrid[indexToAble-1].value)
        {
          violetGrid[indexToAble].disabled = false;
        }
      } else {
        violetGrid[0].disabled = false;
      }
    }
  
    if(diceInGame.some(die => die.color === 'white'))
    {
      const whiteDice = diceInGame.find(die => die.color === 'white').number;
      let indexToAble = 0;
      while(violetGrid[indexToAble].value){indexToAble++}
      if(indexToAble !== 0)
      {
        if(violetGrid[indexToAble-1].value === 6 || whiteDice > violetGrid[indexToAble-1].value)
        {
          violetGrid[indexToAble].disabled = false;
        }
      } else {
        violetGrid[0].disabled = false;
      }
    }
  }

  return violetGrid;
}