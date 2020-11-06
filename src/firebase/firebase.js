// Firebase
import firebase from 'firebase/app'
import "firebase/auth" // want to use this service

const firebaseConfig = {
    apiKey: "AIzaSyAPNiqNcodFrzfAHDOlQOmIQ3sl8z1rwWA",
    authDomain: "olx-clone-a6867.firebaseapp.com",
    databaseURL: "https://olx-clone-a6867.firebaseio.com",
    projectId: "olx-clone-a6867",
    storageBucket: "olx-clone-a6867.appspot.com",
    messagingSenderId: "721352537922",
    appId: "1:721352537922:web:b6548e53f77468badf3adb"
}
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);