// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJOHP3XtNLleAly_c3rRPlxgkDpraowxQ",
    authDomain: "ema-john-shoping-ebc44.firebaseapp.com",
    projectId: "ema-john-shoping-ebc44",
    storageBucket: "ema-john-shoping-ebc44.appspot.com",
    messagingSenderId: "89157890994",
    appId: "1:89157890994:web:63a0ab74b91148bb23aaab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;