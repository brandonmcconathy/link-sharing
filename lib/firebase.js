import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBfXtrklURVW8rFWhvAkavMwTrtLnSE_zg",
  authDomain: "link-sharing-8a7ce.firebaseapp.com",
  projectId: "link-sharing-8a7ce",
  storageBucket: "link-sharing-8a7ce.appspot.com",
  messagingSenderId: "866126372580",
  appId: "1:866126372580:web:c8799b1da046b92367d6f1"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { app, db }