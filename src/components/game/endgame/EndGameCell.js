import React from 'react'
import { getImage } from '../../../functions/getImage'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  EndGameCell: {
    margin: '3% 6%',
    border: props => `5px solid ${props.borderColor}`,
    borderRadius: '10px',
    backgroundColor: props => props.backgroundColor,
    color: props => props.borderColor === 'transparent' ? 'black' : props.borderColor,
    fontSize: props => props.name ? '110%' : '160%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'default'
  },
  Icon: {
    fontSize: '200%'
  },
  Bullet: {
    width: '40%'
  },
  Fox: {
    width: '40%'
  },
  Sum: {
    fontFamily: 'sans-serif',
    fontSize: '200%',
    fontWeight: '800'
  }
})

const EndGameCell = ({ backgroundColor, borderColor, placeHolder, name}) => {

  const classes = useStyles({backgroundColor, borderColor, name});

  if(placeHolder === 'icon')
  {
    placeHolder = <i className={`${classes.Icon} fas fa-user`} ></i>;
  }
  if(placeHolder === 'bullet')
  {
    placeHolder = <img className ={classes.Bullet} src={getImage('bullet')} alt='bullet' />
  }
  if(placeHolder === 'fox')
  {
    placeHolder = <img className ={classes.Fox} src={getImage('fox')} alt='fox' />
  }
  if(placeHolder === '∑')
  {
    placeHolder = <span className={classes.Sum}>∑</span>
  }

  return (
    <div className={classes.EndGameCell}>
      {placeHolder}
    </div>
  )
}

EndGameCell.defaultProps = {
  backgroundColor: 'transparent',
  borderColor: 'transparent',
  name: false
}

export default EndGameCell