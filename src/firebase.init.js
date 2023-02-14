// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDShAI3edrMJaDBM_PpsmMtpjXMc6CDEBg",
    authDomain: "e-healthcare-e9289.firebaseapp.com",
    projectId: "e-healthcare-e9289",
    storageBucket: "e-healthcare-e9289.appspot.com",
    messagingSenderId: "1088204876143",
    appId: "1:1088204876143:web:648b3a5188ae6a5fd0a09a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;