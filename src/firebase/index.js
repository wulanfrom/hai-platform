import firebase from 'firebase/app';
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDiefgZsnOARI8Pby5prhdal4xpdRYcZWg",
    authDomain: "xaiplatform-79165.firebaseapp.com",
    projectId: "xaiplatform-79165",
    storageBucket: "xaiplatform-79165.appspot.com",
    messagingSenderId: "469538496416",
    appId: "1:469538496416:web:caacee456f48d75fc04ec5",
    measurementId: "G-GV2YT708HG"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export { storage, firebase as default };