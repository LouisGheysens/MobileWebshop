// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firestore from '@react-native-firebase/firestore'
import firebase from 'react-native-firebase'
import RNFirebase from 'react-native-firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhSRzvQEltceU6BSjnNOYca9O8k2xB26Y",
  authDomain: "pizzaapp-3d2a2.firebaseapp.com",
  databaseURL: "https://pizzaapp-3d2a2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pizzaapp-3d2a2",
  storageBucket: "pizzaapp-3d2a2.appspot.com",
  messagingSenderId: "481671748136",
  appId: "1:481671748136:web:f76dfcb2cb722615a8b31d",
  measurementId: "G-EG21RQ5K1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = firebase.firestore();



export { auth, db };