import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBlfk0GaBAMh25tYg5dwHsy8icoOzS-jqY",
    authDomain: "crud-firebase-30c49.firebaseapp.com",
    projectId: "crud-firebase-30c49",
    storageBucket: "crud-firebase-30c49.appspot.com",
    messagingSenderId: "341501424183",
    appId: "1:341501424183:web:e83b8a6f6aa3561d1485b2"
};

firebase.initializeApp(firebaseConfig);

export {firebase};