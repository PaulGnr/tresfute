const initState = {}

const serverReducer = (state = initState, action) => {
  switch(action.type)
  {
    case 'SERVER_CREATED':
      return state;
    case 'SERVER_CREATED_ERROR':
      console.log(action.err);
      return state;
    case 'SERVER_DELETED_ERROR':
      console.log(action.err);
      return state;
    case 'DICE_LAUNCH_ERROR':
      console.log(action.err);
      return state;
    case 'DICE_IN_GAME_CHOSE_ERROR':
      console.log(action.err);
      return state;
    default:
      return state;
  }
}

export default serverReducer