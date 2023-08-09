// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const { firestore } = require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0wJU7DQhKnun0JUBMIwVn5G_Bo83zqIE",
  authDomain: "fireblogs-1fa70.firebaseapp.com",
  projectId: "fireblogs-1fa70",
  storageBucket: "fireblogs-1fa70.appspot.com",
  messagingSenderId: "900589097002",
  appId: "1:900589097002:web:2ff69c185959c83b317353"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const timestamp = firestore.FieldValue.serverTimestamp()

export { timestamp };
export default app.firestore();