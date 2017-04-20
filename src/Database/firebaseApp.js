import * as firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDd6Rt8INnhP-jXxiL7Z7JAlHOIEKavRkU",
    authDomain: "signup-in-react.firebaseapp.com",
    databaseURL: "https://signup-in-react.firebaseio.com",
    projectId: "signup-in-react",
    storageBucket: "signup-in-react.appspot.com",
    messagingSenderId: "98996124308"
};
export const firebaseApp = firebase.initializeApp(config);
export const ref = firebase.database().ref();