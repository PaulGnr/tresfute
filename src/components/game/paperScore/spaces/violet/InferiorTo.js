import React from 'react'
import { createUseStyles } from 'react-jss'
import { getColor } from '../../../../../functions/getColor';

const useStyles = createUseStyles({
  InferiorTo: {
    textShadow: `1px 0px 0px ${getColor('violet')}, 
                 0px 1px 0px ${getColor('violet')},
                 0px -1px 0px ${getColor('violet')},
                 -1px 0px 0px ${getColor('violet')},
                 1px 1px 0px ${getColor('violet')}, 
                 -1px 1px 0px ${getColor('violet')},
                 1px -1px 0px ${getColor('violet')},
                 -1px -1px 0px ${getColor('violet')}`,
    color: 'white',
    position: 'absolute',
    fontSize: props => `${props.size/1.8}vh`,
    marginLeft: props => `${props.size/3.8}vh`,
    marginRight: props => `-${props.size/3.8}vh`,
    marginBottom: props => `${props.size/20}vh`,
    marginTop: props => `-${props.size/20}vh`,
    '@media screen and (max-aspect-ratio: 12/9)': {
      fontSize: props => `${props.size}vw`,
      marginLeft: props => `${props.size/2.6}vw`,
      marginRight: props => `-${props.size/2.6}vw`,
      marginBottom: props => `${props.size/10}vw`,
      marginTop: props => `-${props.size/10}vw`
    }
  }
})

const InferiorTo = (props) => {

  const classes = useStyles(props);

  return (
    <div className={classes.InferiorTo}>
      {"<"}
    </div>
  )
}

export default InferiorTo