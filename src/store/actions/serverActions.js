import { getDataFromDoc, getSpecificDataFromDoc } from "../helper/serverFunctions";
import { diceLauncherAction, playerIsReadyAction, starterDataForPlayer, starterDataForServer, changingTurn } from '../helper/gameFunctions'
import { disableEverything, handleBlueClick, handleGreenClick, handleOrangeClick, handleVioletClick, handleYellowClick, diceInGameHasBeenChose, diceOnPlateHasBeenChose } from "../helper/clickSquareFunctions";
import { diceChoseHasBeenClicked, diceInGameHasBeenClicked, diceOnPlateHasBeenClicked, dicePlusOneHasBeenClicked } from '../helper/clickDieFunctions'

export const createServer = newServer => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const creator = getState().firebase.auth

    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(json => newServer.name === '' ? json.results[0].location.city : newServer.name)
      .catch(err => {
        return 'Woodstock'
      })
      .then(serverName => {
        getSpecificDataFromDoc(firestore, 'users', creator.uid, 'name')
          .then(creatorName => {
            firestore.collection('servers').add({
              ...newServer,
              name: serverName,
              createdBy: creator.uid,
              creatorName,
              ...starterDataForServer
            })
              .then(() => {
                dispatch({ type: 'SERVER_CREATED' });
              }).catch(err => {
                dispatch({ type: 'SERVER_CREATED_ERROR', err });
              })
          })
      })
  }
}

export const deleteServer = serverId => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection('servers').doc(serverId).delete()
      .then(() => {
        dispatch({ type: 'SERVER_DELETED' });
      })
      .catch(err => {
        dispatch({ type: 'SERVER_DELETED_ERROR', err })
      })
  }
}

export const addPlayerToServer = (serverId, newPlayerId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    getDataFromDoc(firestore, 'users', newPlayerId)
      .then(newPlayer => {
        getSpecificDataFromDoc(firestore, 'servers', serverId, 'players')
          .then(players => {
            const isAlreadyIn = players.some(player => player.id === newPlayerId)
            if(isAlreadyIn) return players
            const newPlayers = [...players, 
            {
              ...newPlayer,
              id: newPlayerId,
              ...starterDataForPlayer
            }]
            let complete = false
            if(newPlayers.length >= 4)
            {
              complete = true
            }
            return {players: newPlayers, complete}
          })
          .then(newData => {
            firestore.collection('servers').doc(serverId).update(newData)
          })
          .then(() => {
            dispatch({ type: 'PLAYER_ADDED' })
          })
          .catch(err => {
            dispatch({ type: 'PLAYER_ADDED_ERROR', err })
          })
      })
  }
}

export const playerIsReady = (serverId, playerId, isReady) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    getDataFromDoc(firestore, 'servers', serverId)
      .then(data => {
        return playerIsReadyAction(data, playerId, isReady)
      })
      .then(newData => {
        firestore.collection('servers').doc(serverId).update({...newData});
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export const diceLaunch = serverId => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    getDataFromDoc(firestore, 'servers', serverId)
      .then(data => {
        return diceLauncherAction(data, userId);
      })
      .then(newData => {
        firestore.collection('servers').doc(serverId).update(newData)
      })
      .then(() => {
        dispatch({ type: 'DICE_LAUNCH' })
      }).catch(err => {
        dispatch({ type: 'DICE_LAUNCH_ERROR', err })
      })
  }
}

export const diceInGameClicked = (die, serverId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    getDataFromDoc(firestore, 'servers', serverId)
      .then(data => {
        return diceInGameHasBeenClicked(data, die, userId);
      })
      .then(newData => {
        firestore.collection('servers').doc(serverId).update(newData)
      })
      .then(() => {
        dispatch({ type: 'DICE_IN_GAME_CHOSE' })
      })
      .catch(err => {
        dispatch({ type: 'DICE_IN_GAME_CHOSE_ERROR', err })
      })
  }
}

export const diceOnPlateClicked = (die, serverId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    getDataFromDoc(firestore, 'servers', serverId)
      .then(data => {
        return diceOnPlateHasBeenClicked(data, die, userId);
      })
      .then(newData => {
        firestore.collection('servers').doc(serverId).update(newData)
      })
      .then(() => {
        dispatch({ type: 'DICE_ON_PLATE_CHOSE' })
      })
      .catch(err => {
        dispatch({ type: 'DICE_ON_PLATE_CHOSE_ERROR', err })
      })
  }
}

export const diceChoseClicked = (die, serverId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    getDataFromDoc(firestore, 'servers', serverId)
      .then(data => {
        return diceChoseHasBeenClicked(data, die, userId);
      })
      .then(newData => {
        firestore.collection('servers').doc(serverId).update(newData)
      })
      .then(() => {
        dispatch({ type: 'DICE_ALREADY_CHOSE_CHOSE' })
      })
      .catch(err => {
        dispatch({ type: 'DICE_ALREADY_CHOSE_CHOSE_ERROR', err })
      })
  }
}

export const diceChose = (die, serverId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    getDataFromDoc(firestore, 'servers', serverId)
      .then(data => {
        return diceInGameHasBeenChose(data, die, userId);
      })
      .then(newData => {
        firestore.collection('servers').doc(serverId).update(newData)
      })
      .then(() => {
        dispatch({ type: 'DICE_IN_GAME_CHOSE' })
      })
      .catch(err => {
        dispatch({ type: 'DICE_IN_GAME_CHOSE_ERROR', err })
      })
  }
}

export const diceOnPlateChose = (die, serverId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    getDataFromDoc(firestore, 'servers', serverId)
      .then(data => {
        return diceOnPlateHasBeenChose(data, die, userId);
      })
      .then(newData => {
        firestore.collection('servers').doc(serverId).update(newData)
      })
      .then(() => {
        dispatch({ type: 'DICE_IN_GAME_CHOSE' })
      })
      .catch(err => {
        dispatch({ type: 'DICE_IN_GAME_CHOSE_ERROR', err })
      })
  }
}

export const dicePlusOneClicked = (die, serverId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    getDataFromDoc(firestore, 'servers', serverId)
      .then(data => {
        return dicePlusOneHasBeenClicked(data, die, userId);
      })
      .then(newData => {
        firestore.collection('servers').doc(serverId).update(newData)
      })
      .then(() => {
        dispatch({ type: 'DICE_IN_GAME_CHOSE' })
      })
      .catch(err => {
        dispatch({ type: 'DICE_IN_GAME_CHOSE_ERROR', err })
      })
  }
}

export const greenClick = (serverId, indexClicked) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    getDataFromDoc(firestore, 'servers', serverId)
      .then(data => {
        return handleGreenClick(data, userId, indexClicked);
      })
      .then(newData => {
        firestore.collection('servers').doc(serverId).update(newData)
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export const orangeClick = (serverId, indexClicked) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    getDataFromDoc(firestore, 'servers', serverId)
      .then(data => {
        return handleOrangeClick(data, userId, indexClicked);
      })
      .then(newData => {
        firestore.collection('servers').doc(serverId).update(newData)
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export const violetClick = (serverId, indexClicked) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    getDataFromDoc(firestore, 'servers', serverId)
      .then(data => {
        return handleVioletClick(data, userId, indexClicked);
      })
      .then(newData => {
        firestore.collection('servers').doc(serverId).update(newData)
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export const blueClick = (serverId, indexClicked) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    getDataFromDoc(firestore, 'servers', serverId)
      .then(data => {
        return handleBlueClick(data, userId, indexClicked);
      })
      .then(newData => {
        firestore.collection('servers').doc(serverId).update(newData)
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export const yellowClick = (serverId, indexClicked) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    getDataFromDoc(firestore, 'servers', serverId)
      .then(data => {
        return handleYellowClick(data, userId, indexClicked);
      })
      .then(newData => {
        firestore.collection('servers').doc(serverId).update(newData)
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export const repeatClick = (serverId, indexClicked) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    getDataFromDoc(firestore, 'servers', serverId)
      .then(data => {
        let player = data.players.find(player => player.id === userId)
        player.repeatBonus[indexClicked] = 'used';
        player.diceChose = true;
        player.squareFilled = true;
        player.launchRemaining++;
        player = disableEverything(player);
        return [...data.players.filter(player => player.id !== userId), player]
      })
      .then(newData => {
        firestore.collection('servers').doc(serverId).update({players: newData})
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export const dontWantUsePlusOne = (serverId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    getDataFromDoc(firestore, 'servers', serverId)
      .then(data => {
        let server = data;
        
        server.players.find(player => player.id === userId).wantToUsePlusOneBonus = false;
        server.players.find(player => player.id === userId).saidNoToPlusOne = true;

        if(!server.players.some(player => player.wantToUsePlusOneBonus))
        {
          server = changingTurn(server);
        }
                
        return server
      })
      .then(newData => {
        firestore.collection('servers').doc(serverId).update(newData)
      })
      .catch(err => {
        console.log(err);
      })
  }
}