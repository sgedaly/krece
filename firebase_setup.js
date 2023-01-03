import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA5xMOAwUS33arJJQD84eccftlOOfYLJQs",
    authDomain: "krece-fa736.firebaseapp.com",
    projectId: "krece-fa736",
    storageBucket: "krece-fa736.appspot.com",
    messagingSenderId: "1093703094477",
    appId: "1:1093703094477:web:ed7a2ef47f21684b331984",
    measurementId: "G-KX54V86F2S"
};

const firebase = firebase.initializeApp(firebaseConfig);
export default firebase;