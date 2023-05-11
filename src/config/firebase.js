import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyA8NZj3uf3Fklumu-PxEcXPfxdjU3WwXd8",
    authDomain: "auction-fc684.firebaseapp.com",
    projectId: "auction-fc684",
    storageBucket: "auction-fc684.appspot.com",
    messagingSenderId: "534363189940",
    appId: "1:534363189940:web:57cbf88f95b7d341291de1"
})

export const timestamp = firebase.firestore.FieldValue.serverTimestamp
export const firestoreApp = app.firestore()
export const storageApp = app.storage()
export const authApp = app.auth()
