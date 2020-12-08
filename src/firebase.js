import firebase from 'firebase'

const firebaseConfig = {
	apiKey: 'AIzaSyBw7frFBvBZVmsfTQ7XMidzjq1yZEBiXRU',
	authDomain: 'imessage-rp.firebaseapp.com',
	projectId: 'imessage-rp',
	storageBucket: 'imessage-rp.appspot.com',
	messagingSenderId: '238692972719',
	appId: '1:238692972719:web:0173923506b3f051abfc5a',
	measurementId: 'G-44XL6MXM9D',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const firestore = firebase.firestore

export { auth, provider, firestore }
export default db
