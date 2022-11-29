import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
const firebaseConfig = {
    apiKey: "AIzaSyCMWSkZH9lmRn9KyUusUrYEFyQCPyFN1zo",
    authDomain: "dacn1-c94d6.firebaseapp.com",
    projectId: "dacn1-c94d6",
    storageBucket: "dacn1-c94d6.appspot.com",
    messagingSenderId: "75806026615",
    appId: "1:75806026615:web:1e11a788b9bdc1b5528f72",
    measurementId: "G-3MZXNE1YCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);