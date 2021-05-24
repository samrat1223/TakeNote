import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBvO0rQXbztbU2YtRhI0ld7R3reV8vyb5w",
  authDomain: "takenote-b6731.firebaseapp.com",
  //databaseURL: "https://takenote-b6731.firebaseio.com",
  projectId: "takenote-b6731",
  storageBucket: "takenote-b6731.appspot.com",
  messagingSenderId: "1067990029135",
  appId: "1:1067990029135:web:86a261592d0b6cb29d6b3a"
};


  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export { db };