import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCZIqfswejFFJhGod34Zr02wXGHjdOdm8I",
    authDomain: "twitter-clone-d035b.firebaseapp.com",
    projectId: "twitter-clone-d035b",
    storageBucket: "twitter-clone-d035b.appspot.com",
    messagingSenderId: "857197533746",
    appId: "1:857197533746:web:d05c3fc609c46fbbb77a2b",
    measurementId: "G-E1VRHMP2LZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(firebaseApp);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;