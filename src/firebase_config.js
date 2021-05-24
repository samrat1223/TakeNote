import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBdLARNsaMEf1WLHxLD3oTUL1N0FxJhQKM",
    authDomain: "takenote-b3707.firebaseapp.com",
    projectId: "takenote-b3707",
    storageBucket: "takenote-b3707.appspot.com",
    messagingSenderId: "273843954287",
    appId: "1:273843954287:web:652e2a690be606a806639a"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export { db };