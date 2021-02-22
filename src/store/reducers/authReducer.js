const initState = {}

const authReducer = (state = initState, action) => {
  switch(action.type)
  {
    case 'LOGIN_SUCCESS':
      return state
    case 'LOGIN_ERROR':
      console.log(action.err);
      return state;
    case 'SIGNOUT_SUCCESS':
      return state;
    default:
      return state;
  }
}

export default authReducer