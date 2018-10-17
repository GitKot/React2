import firebase from 'firebase'

export const appName = "reactadvance-526d2"

export const firebaseConfig = {
    apiKey: "AIzaSyD5VjgIChiqDTRp3FpZXWtsupT3b89bvfw",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: `${appName}`,
    storageBucket: `${appName}.appspot.com`,
    messagingSenderId: "188639497068"
  }

  firebase.initializeApp(firebaseConfig)