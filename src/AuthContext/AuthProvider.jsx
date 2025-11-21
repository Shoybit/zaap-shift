import React from 'react';
import { AuthContext } from './AuthContext';
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';
import { auth } from '../Firebase/Firebase.int';

const AuthProvider = ({ children }) => {

    // Register user with email/password
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login user with email/password
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Login with Google
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    const authInfo = {
        registerUser,
        signInUser,
        signInWithGoogle, // ✅ added Google login
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
