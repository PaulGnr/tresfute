import arrow from '../images/arrow.svg'
import bullet from '../images/bullet.svg'
import cross from '../images/cross.svg'
import fox from '../images/fox.png'
import repeat from '../images/repeat.svg'

export const getImage = icon => {
  switch(icon)
  {
    case 'arrow':
      return arrow;
    case 'bullet':
      return bullet;
    case 'cross':
      return cross;
    case 'fox':
      return fox;
    case 'repeat':
      return repeat;
    default:
      return '';
  }
}