import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBmgredDdIZlVRm2txDXPn8iYqQ-1V2aLk",
  authDomain: "react-blog-b2828.firebaseapp.com",
  projectId: "react-blog-b2828",
  storageBucket: "react-blog-b2828.appspot.com",
  messagingSenderId: "690648067023",
  appId: "1:690648067023:web:728863903c876bb99700ba",
});

const fb = firebase;

export default fb;