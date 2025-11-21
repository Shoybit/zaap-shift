import React, { Profiler, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
    updateProfile
} from 'firebase/auth';
import { auth } from '../Firebase/Firebase.int';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Register user with email/password
    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login user with email/password
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Login with Google
    const signInWithGoogle = () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };


    // log out

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    //Update profile

    const updateUserProfile = (Profile)  => {
        return updateProfile(auth.currentUser, Profile)
    }
    
    // Track currently logged-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        registerUser,
        signInUser,
        signInWithGoogle,
        logOut,
        updateUserProfile
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
