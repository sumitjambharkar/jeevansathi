import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../../firebase";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  
  console.log(user);

  const signUp = (email,password,number,displayName,gender,profile,birth) => {
    return createUserWithEmailAndPassword(auth, email, password)
          .then((result)=>{
            console.log(result.user.uid);
            db.doc(`users/${result.user.uid}`).set({
                email:result.user.email,
                uid:result.user.uid,
                number:number,
                displayName:displayName,
                isOnline:true,
                profile:profile,
                gender:gender,
                birth:birth,
                createdAt :new Date(),

            })
           
          }).catch((error)=>{
            console.log(error);
          })
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
    .then((result)=>{
        db.collection("users").doc(result.user.uid).update({
            isOnline:true
        })
      }).catch((error)=>{
        console.log(error);
      })
  };
  const logout = () => {
    return signOut(auth).then(() => {
      db.collection("users").doc(user.uid).update({
        isOnline: false,
      });
    });
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth,email)
    .then(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signUp,
        login,
        logout,
        resetPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
