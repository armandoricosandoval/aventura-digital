// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firesbase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZhn30jjmtNuHlmlivqDqT3yI-qWsI3SY",
  authDomain: "una-aventura-digital.firebaseapp.com",
  projectId: "una-aventura-digital",
  storageBucket: "una-aventura-digital.appspot.com",
  messagingSenderId: "189349190209",
  appId: "1:189349190209:web:879f147cdffc208a5644c0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);