import { createUseStyles } from 'react-jss'
import Die from '../../../die/Die';

const useStyles = createUseStyles({
  DiceArea: {
    backgroundColor: 'rgb(50,50,50)',
    borderRadius: '20%',
    border: '3px solid white',
    padding: '6%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const DiceArea = ({ die }) => {
  
  const classes = useStyles();

  return (
    <div className={classes.DiceArea}>
      {die ?
        <Die 
          number={die.number}
          color={die.color}
          disabled={true}
        />
        :
        <Die />
      }
    </div>
  )
}

export default DiceArea