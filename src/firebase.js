import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBE7F20DCkOFXzhCrv6s1j2puFT3PAao7k",
    authDomain: "twitter-clone-6a533.firebaseapp.com",
    projectId: "twitter-clone-6a533",
    storageBucket: "twitter-clone-6a533.appspot.com",
    messagingSenderId: "218120210810",
    appId: "1:218120210810:web:fac3525e6005032b4faec3"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
export {db,auth};