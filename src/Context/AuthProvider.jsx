import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const googleProvider = new GoogleAuthProvider;

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
     const [user, setUser] = useState(null)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

     const logOutUser = () => {
        setLoading(true)
        return signOut(auth);
     }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser)
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])

      const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo ={
     loading,
     user,
     createUser,
     signInUser,
     googleLogIn,
      logOutUser
    }

    return (
       <AuthContext value={authInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;