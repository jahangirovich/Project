import { initializeApp } from 'firebase'

const app =initializeApp({
  apiKey: "AIzaSyDyLF2c_TOH6a4if3esyXfqmZgcKG0uEr4",
    authDomain: "firstweek-86141.firebaseapp.com",
    databaseURL: "https://firstweek-86141.firebaseio.com",
    projectId: "firstweek-86141",
    storageBucket: "firstweek-86141.appspot.com",
    messagingSenderId: "224923692316"
})
export const db = app.database();
export const namesRef = db.ref('name');
