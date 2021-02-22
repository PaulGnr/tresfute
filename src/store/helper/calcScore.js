export const calcScore = player => {
  console.log('coucou')
  const yellow = yellowScore(player.yellowGrid);
  const blue = blueScore(player.blueGrid);
  const green = greenScore(player.greenGrid);
  const orange = numberScore(player.orangeGrid);
  const violet = numberScore(player.violetGrid);
  const fox = foxScore(player.fox, yellow, blue, green, orange, violet);
  
  const totalScore = yellow + blue + green + orange + violet + fox;
  
  player.score = {
    yellowScore: yellow,
    blueScore: blue,
    greenScore: green,
    orangeScore: orange,
    violetScore: violet,
    foxScore: fox,
    totalScore: totalScore
  }
  
  console.log('coucou')
  return player
}

const yellowScore = yellowGrid => {
  let score = 0;
  if(yellowGrid[0].crossed && yellowGrid[3].crossed && yellowGrid[6].crossed)
  {
    score += 10;
  }
  if(yellowGrid[1].crossed && yellowGrid[4].crossed && yellowGrid[9].crossed)
  {
    score += 14;
  }
  if(yellowGrid[2].crossed && yellowGrid[7].crossed && yellowGrid[10].crossed)
  {
    score += 16;
  }
  if(yellowGrid[5].crossed && yellowGrid[8].crossed && yellowGrid[11].crossed)
  {
    score += 20;
  }

  return score
}

const blueScore = blueGrid => {
  let score = 0;
  let crossed = 0;
  for(let i = 0; i < 11; i++)
  {
    if(blueGrid[i].crossed)
    {
      if(crossed === 0)
      {
        score++;
      } else {
        score += crossed
      }
      crossed++;
    }
  }

  return score
}
const greenScore = greenGrid => {
  let score = 0;
  let crossed = 0;
  for(let i = 0; i < 11; i++)
  {
    if(greenGrid[i].crossed)
    {
      crossed++;
      score += crossed
    }
  }

  return score
}

const numberScore = grid => {
  let score = 0;
  let i = 0;
  while(grid[i].value)
  {
    score += grid[i].value;
    i++;
  }

  return score
}

const foxScore = (fox, yellowScore, blueScore, greenScore, orangeScore, violetScore) => {
  let min = yellowScore;
  if(blueScore < min){min = blueScore}
  if(greenScore < min){min = greenScore}
  if(orangeScore < min){min = orangeScore}
  if(violetScore < min){min = violetScore}

  const score = min * fox;

  return score
}