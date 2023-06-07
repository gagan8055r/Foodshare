import {initializeApp} from 'firebase/app'

import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyADdOVuiff16-9FZmrrOFl2qpX2lZGdWyI",
  authDomain: "foodconnect-a8083.firebaseapp.com",
  databaseURL: "https://foodconnect-a8083-default-rtdb.firebaseio.com",
  projectId: "foodconnect-a8083",
  storageBucket: "foodconnect-a8083.appspot.com",
  messagingSenderId: "175024711675",
  appId: "1:175024711675:web:df466722e555bfc0a34d5e"
};


 const app=initializeApp(firebaseConfig);
const db=getFirestore(app);
 export default db;
