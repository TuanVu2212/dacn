import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
import { getDatabase } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyCMWSkZH9lmRn9KyUusUrYEFyQCPyFN1zo",
    authDomain: "dacn1-c94d6.firebaseapp.com",
    projectId: "dacn1-c94d6",
    storageBucket: "dacn1-c94d6.appspot.com",
    messagingSenderId: "75806026615",
    appId: "1:75806026615:web:1e11a788b9bdc1b5528f72",
    measurementId: "G-3MZXNE1YCY",
    databaseURL: "https://dacn1-c94d6-default-rtdb.firebaseio.com",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const database = getDatabase(app);

// if (appfirebase.apps.leght == 0) {
// app = initializeApp(firebaseConfig);
// } else {
// app = appfirebase.app()
// }

export {
    db,
    auth,
    database
}