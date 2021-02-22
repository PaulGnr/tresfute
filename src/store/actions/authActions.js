export const signIn = name => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(json => name === '' ? json.results[0].login.username : name)
      .catch(err => {
        return 'Jesus'
      })
      .then(userName => {
        firebase.auth().signInAnonymously()
          .then(res => {
            firestore.collection('users').doc(res.user.uid).set({name: userName});
            dispatch({ type: 'LOGIN_SUCCESS' });
          }).catch(err => {
            dispatch({ type: 'LOGIN_ERROR', err })
          })
      })
  }
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const state = getState();

    firestore.collection('users').doc(state.firebase.auth.uid).delete()
    .then(() => {
      firebase.auth().signOut()
      .then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' });
      })
    })
  }
}