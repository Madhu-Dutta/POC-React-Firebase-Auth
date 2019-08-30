import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBSa2inwr4Aei-_nK98leysjMcTPyK5R74",
    authDomain: "auth-app-bba76.firebaseapp.com",
    databaseURL: "https://auth-app-bba76.firebaseio.com",
    projectId: "auth-app-bba76",
    storageBucket: "",
    messagingSenderId: "249969616095",
    appId: "1:249969616095:web:956de655873157f8"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;