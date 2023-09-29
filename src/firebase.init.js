// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBa4pE_4GdxibVHcXXdOYZmDoaYeD897Wc",
    authDomain: "simple-user-email-pass-auth.firebaseapp.com",
    projectId: "simple-user-email-pass-auth",
    storageBucket: "simple-user-email-pass-auth.appspot.com",
    messagingSenderId: "681111774670",
    appId: "1:681111774670:web:ca39bd5f0909ea9310f79f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;