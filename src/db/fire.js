import firebase from 'firebase/app'
import 'firebase/firestore'

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  projectId: 'zombies-not-included',
  apiKey: 'AIzaSyBADO7iSBIk6z7lIQF24J2GQ5WBDUN43t8',
  authDomain: 'zombies-not-included.firebaseapp.com',
  databaseURL: 'https://zombies-not-included.firebaseio.com'
}

const fire = firebase.initializeApp(config)

export const db = fire.firestore()
db.settings({
  timestampsInSnapshots: true
})

export default fire
