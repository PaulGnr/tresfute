export const yellowNumberClicked = (indexClicked) => {
  if(indexClicked === 0 || indexClicked === 9) return 3;
  if(indexClicked === 1 || indexClicked === 11) return 6;
  if(indexClicked === 2 || indexClicked === 5) return 5;
  if(indexClicked === 3 || indexClicked === 7) return 2;
  if(indexClicked === 4 || indexClicked === 6) return 1;
  if(indexClicked === 8 || indexClicked === 10) return 4;
}

export const orangeMultiplier = indexClicked => {
  if(indexClicked === 3 || indexClicked === 6 || indexClicked === 8)
  {
    return 2
  }
  if(indexClicked === 10)
  {
    return 3
  }
  return 1
}

export const yellowBonus = (player, indexClicked) => {
  let i = 0;

  if(indexClicked === 0 || indexClicked === 1 || indexClicked === 2)
  {
    if(player.yellowGrid[0].crossed && player.yellowGrid[1].crossed && player.yellowGrid[2].crossed)
    {
      for(let i = 0; i < 11; i++)
      {
        player.blueGrid[i].disabled = player.blueGrid[i].crossed;
      }
      player.crossBonus = 'blue';
      player.squareFilled = false;
    }
  }
  if(indexClicked === 3 || indexClicked === 4 || indexClicked === 5)
  {
    if(player.yellowGrid[3].crossed && player.yellowGrid[4].crossed && player.yellowGrid[5].crossed && !player.orangeGrid.every(cell => cell.value !==null))
    {
      i = 0;
      while(player.orangeGrid[i].value){i++}
      player.orangeGrid[i].value = 4 * orangeMultiplier(i);
      player = orangeBonus(player, i);
    }
  }
  if(indexClicked === 6 || indexClicked === 7 || indexClicked === 8)
  {
    if(player.yellowGrid[6].crossed && player.yellowGrid[7].crossed && player.yellowGrid[8].crossed && !player.greenGrid.every(cell => cell.crossed))
    {
      i = 0;
      while(player.greenGrid[i].crossed){i++}
      player.greenGrid[i].crossed = true;
      player = greenBonus(player, i);
    }
  }
  if(indexClicked === 9 || indexClicked === 10 || indexClicked === 11)
  {
    if(player.yellowGrid[9].crossed && player.yellowGrid[10].crossed && player.yellowGrid[11].crossed)
    {
      player.fox++;
    }
  }
  if(indexClicked === 0 || indexClicked === 4 || indexClicked === 7 || indexClicked === 11)
  {
    if(player.yellowGrid[0].crossed && player.yellowGrid[4].crossed && player.yellowGrid[7].crossed && player.yellowGrid[11].crossed)
    {
      i = 0;
      while(player.plusOneBonus[i] !== 'no'){i++}
      player.plusOneBonus[i] = 'yes';
    }
  }

  return player
}

export const blueBonus = (player, indexClicked) => {
  let i = 0;

  if(indexClicked === 0 || indexClicked === 1 || indexClicked === 2)
  {
    if(player.blueGrid[0].crossed && player.blueGrid[1].crossed && player.blueGrid[2].crossed && !player.orangeGrid.every(cell => cell.value !==null))
    {
      i = 0;
      while(player.orangeGrid[i].value){i++}
      player.orangeGrid[i].value = 5 * orangeMultiplier(i);
      player = orangeBonus(player, i);
    }
  }
  if(indexClicked === 3 || indexClicked === 4 || indexClicked === 5 || indexClicked === 6)
  {
    if(player.blueGrid[3].crossed && player.blueGrid[4].crossed && player.blueGrid[5].crossed && player.blueGrid[6].crossed)
    {
      for(i = 0; i < 12; i++)
      {
        player.yellowGrid[i].disabled = player.yellowGrid[i].crossed;
      }
      player.crossBonus = 'yellow';
      player.squareFilled = false;
    }
  }
  if(indexClicked === 7 || indexClicked === 8 || indexClicked === 9 || indexClicked === 10)
  {
    if(player.blueGrid[7].crossed && player.blueGrid[8].crossed && player.blueGrid[9].crossed && player.blueGrid[10].crossed)
    {
      player.fox++;
    }
  }
  if(indexClicked === 3 || indexClicked === 7)
  {
    if(player.blueGrid[3].crossed && player.blueGrid[7].crossed)
    {
      i = 0;
      while(player.repeatBonus[i] !== 'no'){i++}
      player.repeatBonus[i] = 'yes';
    }
  }
  if(indexClicked === 0 || indexClicked === 4 || indexClicked === 8)
  {
    if(player.blueGrid[0].crossed && player.blueGrid[4].crossed && player.blueGrid[8].crossed && !player.greenGrid.every(cell => cell.crossed))
    {
      i = 0;
      while(player.greenGrid[i].crossed){i++}
      player.greenGrid[i].crossed = true;
      player = greenBonus(player, i);
    }
  }
  if(indexClicked === 1 || indexClicked === 5 || indexClicked === 9)
  {
    if(player.blueGrid[1].crossed && player.blueGrid[5].crossed && player.blueGrid[9].crossed && !player.violetGrid.every(cell => cell.value !==null))
    {
      i = 0;
      while(player.violetGrid[i].value){i++}
      player.violetGrid[i].value = 6;
      player = violetBonus(player, i);
    }
  }
  if(indexClicked === 2 || indexClicked === 6 || indexClicked === 10)
  {
    if(player.blueGrid[2].crossed && player.blueGrid[6].crossed && player.blueGrid[10].crossed)
    {
      i = 0;
      while(player.plusOneBonus[i] !== 'no'){i++}
      player.plusOneBonus[i] = 'yes';
    }
  }

  return player
}

export const greenBonus = (player, indexClicked) => {
  let i = 0
  switch(indexClicked)
  {
    case 3:
      while(player.plusOneBonus[i] !== 'no'){i++}
      player.plusOneBonus[i] = 'yes';
      break;
    case 5:
      for(i = 0; i < 11; i++)
      {
        player.blueGrid[i].disabled = player.blueGrid[i].crossed;
      }
      player.crossBonus = 'blue';
      player.squareFilled = false;
      break;
    case 6:
      player.fox++;
      break;
    case 8:
      if(!player.violetGrid.every(cell => cell.value !==null))
      {
        while(player.violetGrid[i].value){i++}
        player.violetGrid[i].value = 6;
        player = violetBonus(player, i);
      }
      break;
    case 9:
      while(player.repeatBonus[i] !== 'no'){i++}
      player.repeatBonus[i] = 'yes';
      break;
    default:
      break;
  }

  return player
}

export const orangeBonus = (player, indexClicked) => {
  let i = 0
  switch(indexClicked)
  {
    case 2:
      while(player.repeatBonus[i] !== 'no'){i++}
      player.repeatBonus[i] = 'yes';
      break;
    case 4:
      for(i = 0; i < 12; i++)
      {
        player.yellowGrid[i].disabled = player.yellowGrid[i].crossed
      }
      player.crossBonus = 'yellow';
      player.squareFilled = false;
      break;
    case 5:
      while(player.plusOneBonus[i] !== 'no'){i++}
      player.plusOneBonus[i] = 'yes';
      break;
    case 7:
      player.fox++;
      break;
    case 9:
      if(!player.violetGrid.every(cell => cell.value !==null))
      {
        while(player.violetGrid[i].value){i++}
        player.violetGrid[i].value = 6;
        player = violetBonus(player, i);
      }
      break;
    default:
      break;
  }

  return player
}

export const violetBonus = (player, indexClicked) => {
  let i = 0
  switch(indexClicked)
  {
    case 2:
      while(player.repeatBonus[i] !== 'no'){i++}
      player.repeatBonus[i] = 'yes';
      break;
    case 3:
      for(i = 0; i < 11; i++)
      {
        player.blueGrid[i].disabled = player.blueGrid[i].crossed
      }
      player.crossBonus = 'blue';
      player.squareFilled = false;
      break;
    case 4:
      while(player.plusOneBonus[i] !== 'no'){i++}
      player.plusOneBonus[i] = 'yes';
      break;
    case 5:
      for(i = 0; i < 12; i++)
      {
        player.yellowGrid[i].disabled = player.yellowGrid[i].crossed
      }
      player.crossBonus = 'yellow';
      player.squareFilled = false;
      break;
    case 6:
      player.fox++;
      break;
    case 7:
      while(player.repeatBonus[i] !== 'no'){i++}
      player.repeatBonus[i] = 'yes';
      break;
    case 8:
      if(!player.greenGrid.every(cell => cell.crossed))
      {
        while(player.greenGrid[i].crossed){i++}
        player.greenGrid[i].crossed = true;
        player = greenBonus(player, i);
      }
      break;
    case 9:
      if(!player.orangeGrid.every(cell => cell.value !==null))
      {
        while(player.orangeGrid[i].value){i++}
        player.orangeGrid[i].value = 6 * orangeMultiplier(i);
        player = orangeBonus(player, i);
      }
      break;
    case 10:
      while(player.plusOneBonus[i] !== 'no'){i++}
      player.plusOneBonus[i] = 'yes';
      break;
    default:
      break;
  }
  
  return player;
}