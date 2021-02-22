import { combineReducers } from 'redux'
import authReducer from './authReducer'
import serverReducer from './serverReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  auth: authReducer,
  server: serverReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer