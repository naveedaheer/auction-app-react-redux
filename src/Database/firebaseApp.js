import * as firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA1zoh2oj4RYSBWdwknB3x5i7Jzi__FNGA",
    authDomain: "aheer-auction.firebaseapp.com",
    databaseURL: "https://aheer-auction.firebaseio.com",
    projectId: "aheer-auction",
    storageBucket: "aheer-auction.appspot.com",
    messagingSenderId: "24928449956"
};
export const firebaseApp = firebase.initializeApp(config);
export const ref = firebase.database().ref();