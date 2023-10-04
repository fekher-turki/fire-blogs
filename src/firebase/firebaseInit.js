import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC0wJU7DQhKnun0JUBMIwVn5G_Bo83zqIE",
  authDomain: "fireblogs-1fa70.firebaseapp.com",
  projectId: "fireblogs-1fa70",
  storageBucket: "fireblogs-1fa70.appspot.com",
  messagingSenderId: "900589097002",
  appId: "1:900589097002:web:2ff69c185959c83b317353"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export { timestamp };
export default firebaseApp.firestore();