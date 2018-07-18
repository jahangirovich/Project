import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './javascriptConfig'
import { initializeApp } from 'firebase'
const firebaseApp = firebase.initializeApp
(firebaseConfig);
export default firebaseApp.firestore()
