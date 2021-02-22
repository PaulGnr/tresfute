import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  Title: {
    fontSize: '10vh',
    display: 'flex',
    flexDirection: 'column',
    '@media screen and (max-aspect-ratio: 12/9)': {
      fontSize: '10vw'
    },
    '& h1': {
      textShadow: '0px 0px 9px #0097e8, 0px 0px 25px rgb(46,119,183), 0px 0px 10px rgb(46,119,183)'
    }
  },
  TitleTres: {
    color: 'white',
    margin: '0 18vh 0 0',
    '@media screen and (max-aspect-ratio: 12/9)': {
      margin: '0 18vw 0 0'
    }
  },
  TitleFute: {
    color: 'black',
    margin: '-10vh 0 0 18vh',
    '@media screen and (max-aspect-ratio: 12/9)': {
      margin: '-10vw 0 0 18vw'
    }
  }
});

const Title = () => {
  
  const classes = useStyles();

  return (
      <div className={classes.Title}>
        <h1 className={classes.TitleTres}>TRÈS</h1>
        <h1 className={classes.TitleFute}>FUTÉ!</h1>
      </div>
  )
}

export default Title