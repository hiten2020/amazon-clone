import firebase from "firebase"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4GbS6xg041K8EqT_cUeBX8WF3qiJEDDo",
    authDomain: "clone-929ae.firebaseapp.com",
    databaseURL: "https://clone-929ae.firebaseio.com",
    projectId: "clone-929ae",
    storageBucket: "clone-929ae.appspot.com",
    messagingSenderId: "317781564823",
    appId: "1:317781564823:web:e5d7b2a14bff6e9b6738d2",
    measurementId: "G-RMTN0YLQRY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};