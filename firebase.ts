// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSrV1JB_wPJSfhLhiu82qIF0hhATlppbk",
  authDomain: "netflix-clone-bda3e.firebaseapp.com",
  projectId: "netflix-clone-bda3e",
  storageBucket: "netflix-clone-bda3e.appspot.com",
  messagingSenderId: "312263761775",
  appId: "1:312263761775:web:57b991f92e297ced4a529a"
};

// Initialize Firebase
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }