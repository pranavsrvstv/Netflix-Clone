import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
// In firebase v9 , we need to import like firebase functionalities like this

const firebaseConfig = {
    apiKey: "AIzaSyAadtxzH6tTrqgGVj6MBk-ktqn1-zA__14",
    authDomain: "pranav-cloudfunctions.firebaseapp.com",
    projectId: "pranav-cloudfunctions",
    storageBucket: "pranav-cloudfunctions.appspot.com",
    messagingSenderId: "1037615127993",
    appId: "1:1037615127993:web:6c3870e969bb8e8f26ea68"
  };
  

  const firebaseapp=firebase.initializeApp(firebaseConfig);
  const db= firebase.firestore();
  const auth =firebase.auth();

  export {auth,db}