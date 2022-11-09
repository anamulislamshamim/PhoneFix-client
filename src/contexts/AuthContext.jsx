/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext } from 'react';
import app from '../Firebase/FirebaseConfig';
import { useEffect } from 'react';

const auth = getAuth(app);
export const authContext = createContext();
const AuthContext = ({ children }) => {
    const [user, setUser] = useState(undefined);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    // register with email and password and if login successfull set the displayName and image:
    const registerWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // sign in or login with email and password:
    const loginWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    // signin with google
    const signInWithGoogle = () => {
        setLoading(true);
        console.log("clicked");
        return signInWithPopup(auth, googleProvider);
    };
    // logOut 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };




    const authInfo = { user, registerWithEmailAndPassword, logOut, loginWithEmailAndPassword, signInWithGoogle, loading, auth};


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    },[]);
    return (
        <authContext.Provider value={authInfo}>
            { children }
        </authContext.Provider>
    );
};

export default AuthContext;