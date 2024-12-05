import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState();
    const [loading,setLoading] = useState(true);
    const auth = getAuth(app);


    const googleSignIn = () =>{
        const googleProvider = new GoogleAuthProvider();
        setLoading(true);
        return signInWithPopup(auth, googleProvider)


    }

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
  
    }
    
    const updateUserProfile = (name,photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL
          })
          
    }

    const userLogin = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const userLogOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('current user',currentUser)
            setLoading(false)
          });
        return () =>{
            return unsubscribe()
        }
    },[])
    const authInfo = {
        user,loading,setLoading,createUser,userLogin,userLogOut,setUser,googleSignIn, updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;