import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyDP_zuaaytmAqjDyoV2SYora8oWCqY_Lzs",
  authDomain: "tres-fute-76b9d.firebaseapp.com",
  databaseURL: "https://tres-fute-76b9d.firebaseio.com",
  projectId: "tres-fute-76b9d",
  storageBucket: "tres-fute-76b9d.appspot.com",
  messagingSenderId: "388261362758",
  appId: "1:388261362758:web:1f60d7dbf6b8294dfd5e47",
  measurementId: "G-R2DNZQJFM3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export default firebase