import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { firebaseAppAuth } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState();

  const [loading, setLoading] = useState(true);
  const auth = getAuth();  
  const storage = getStorage();
  const firestore = getFirestore();
  const imagenesCollectionRef = collection(firestore, 'usuarios');
  const isLogged  = ()=> !!currentUser;
  const loginwithGoogle = ()=>{
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth,googleProvider)
  }
  

  function signup(email, password) {  
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth,email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth,email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  function updateFileApp(file) {
    if (!currentUser) {
      return Promise.reject(new Error("User not logged in"));
    }  
    const userFilesRef = ref(storage, `users`);
    const fileName = `${file.name}`; 
  
    return uploadBytes(ref(userFilesRef, fileName), file)
      .then((snapshot) => {       
        return getDownloadURL(ref(storage, `users/${fileName}`));
      })
      .catch((error) => {
        throw error; 
      });
  }

  function saveImageFirestore(fileDownloadUrl) {
    if (!currentUser) {
      console.error("Usuario no autenticado");
      return;
    }  
    const userDocRef = doc(firestore, "usuarios", currentUser.uid);
    return getDoc(userDocRef)
      .then((docSnap) => {
        const userData = docSnap.data();
        let images = userData?.images || []; 
        images.push(fileDownloadUrl);  
        return setDoc(userDocRef, { images }, { merge: true });
      }).catch(e=>console.log(e))

    }

  function getImagesUser(){
    const userDocRef = doc(firestore, "usuarios", currentUser.uid);
    return getDoc(userDocRef).then((docSnap) => {
      const userData = docSnap.data();
      return userData
    }).catch(e=>console.log(e))
  }

  function getAllImages() {
    return getDocs(imagenesCollectionRef)
      .then((querySnapshot) => {
        const imagenes = [];
        querySnapshot.forEach((doc) => {
          const imagenData = doc.data();
          imagenes.push(imagenData); 
        });
        return imagenes;
      })
      .catch((error) => {
        console.error("Error al obtener las imágenes:", error);
      });
  }

  useEffect(() => {
    const unsubscribe = firebaseAppAuth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    isLogged,
    loginwithGoogle,
    updateFileApp,
    saveImageFirestore,
    getImagesUser,
    getAllImages
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
