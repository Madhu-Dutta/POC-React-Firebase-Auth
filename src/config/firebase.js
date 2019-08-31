import firebase from 'firebase';
import 'firebase/firebase-firestore';

  // Your web app's Firebase configuration
  export var firebaseConfig = {
    apiKey: "AIzaSyBSa2inwr4Aei-_nK98leysjMcTPyK5R74",
    authDomain: "auth-app-bba76.firebaseapp.com",
    databaseURL: "https://auth-app-bba76.firebaseio.com",
    projectId: "auth-app-bba76",
    storageBucket: "",
    messagingSenderId: "249969616095",
    appId: "1:249969616095:web:956de655873157f8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
