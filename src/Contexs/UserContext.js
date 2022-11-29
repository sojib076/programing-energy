import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, FacebookAuthProvider, updateProfile } from "firebase/auth";
import { createContext } from 'react';
import app from '../firebaseinfo/firebase.init';
import { useEffect } from 'react';

const auth = getAuth(app)

const provider = new GoogleAuthProvider()
const facebookPro = new FacebookAuthProvider()
export const authContex = createContext()
// this is a context for user data
const UserContext = ({ children }) => {
    const [user, setUser] = useState([])
        const [loading,setLoading] = useState(true)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // user create with email and password
    const login = (email, password) => { 
                    setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
       
    }
    // this for user profile update
    const userproflie = (name,img) => {
        setLoading(false)
        return updateProfile( auth.currentUser, {
            displayName: name,
            photoURL: img,
        })
        
     }

    //  this for google login
    const googlepop = () => {
        return signInWithPopup(auth,provider)
    }
    // this for facebook login
        const facebookPop = () => { 
            return signInWithPopup(auth, facebookPro)
        }

//  this observer for checking user is logged in or not
    useEffect(()=>{ 
        const unsubscribed = onAuthStateChanged(auth,user => {
                setUser(user)
                setLoading(false)
       
        })
        return () => unsubscribed()
    },[])

  // this for logout
    const logout = () => { 
        setLoading(true)
        return signOut(auth)
    }
    

    const authinfo = { user, createUser, login, googlepop ,logout,facebookPop,loading,userproflie }
    console.log(user);
    return (

        <authContex.Provider value={authinfo}>
            {children}
        </authContex.Provider>

    );
};

export default UserContext;