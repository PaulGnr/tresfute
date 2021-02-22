export const getColor = colorName => {
  switch(colorName)
  {
    case 'black':
      return 'rgb(0,0,0)'
    case 'blue':
      return 'rgb(46,119,183)'
    case 'green':
      return 'rgb(78,163,52)'
    case 'lightyellow':
      return 'rgb(220,210,0)'
    case 'lightblue':
      return 'rgb(115,220,255)'
    case 'orange':
      return 'rgb(223,116,35)'
    case 'violet':
      return 'rgb(94,63,122)'
    case 'yellow':
      return 'rgb(247,214,66)'
    default:
      return 'rgb(255,255,255)'
  }
}