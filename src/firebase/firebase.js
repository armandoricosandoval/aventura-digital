import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import withFirebaseAuth from "react-with-firebase-auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZhn30jjmtNuHlmlivqDqT3yI-qWsI3SY",
  authDomain: "una-aventura-digital.firebaseapp.com",
  projectId: "una-aventura-digital",
  storageBucket: "una-aventura-digital.appspot.com",
  messagingSenderId: "189349190209",
  appId: "1:189349190209:web:879f147cdffc208a5644c0"
};
const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAppAuth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp)

export default withFirebaseAuth({
  provider,
  firebaseAppAuth,
  db,
  storage 
});